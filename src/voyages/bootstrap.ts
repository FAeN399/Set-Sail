import { join } from "path";

export interface VoyageTemplate {
  readonly name: string;
  readonly body: string;
}

export interface VoyageDraft {
  readonly slug: string;
  readonly date: string;
  readonly directory: string;
  readonly filePath: string;
  readonly contents: string;
}

const DEFAULT_TEMPLATE_NAME = "default";

const PLACEHOLDER_PATTERN = /\{\{(\w+)\}\}/g;

type TemplateContext = {
  readonly slug: string;
  readonly date: string;
};

type PlaceholderResolver = (context: TemplateContext) => string;

const PLACEHOLDER_HINTS: Record<string, PlaceholderResolver> = {
  title: (context) => context.slug,
  date: (context) => context.date,
  hypothesis: () => "Describe the guiding hypothesis.",
  approach: () => "Outline the planned steps for this voyage.",
  resources: () => "List tools, prompts, or crew members you will rely on.",
  success: () => "Define what success looks like for this voyage.",
  risks: () => "Call out any risks, reefs, or unknown waters.",
  step: () => "Log a key moment or action from the journey.",
  finding: () => "Capture a discovery, artifact, or insight.",
  outcome: () => "Summarize the voyage outcome in a sentence or two.",
  next: () => "List follow-up tasks, voyages, or questions."
};

export const TEMPLATES: Record<string, VoyageTemplate> = {
  [DEFAULT_TEMPLATE_NAME]: {
    name: DEFAULT_TEMPLATE_NAME,
    body: `# Voyage: {{title}}

- **Date:** {{date}}
- **Hypothesis:** {{hypothesis}}
- **Approach:** {{approach}}
- **Resources:** {{resources}}
- **Success Criteria:** {{success}}
- **Risks & Unknowns:** {{risks}}

## Log

1. _{{step}}_

## Findings

- {{finding}}

## Debrief

- **Outcome:** {{outcome}}
- **Next:** {{next}}
`
  }
};

export const usage =
  "Usage: ts-node scripts/bootstrap.ts <template> [date-YYYY-MM-DD]";

const ensureTemplateName = (templateName: string): string => {
  const normalizedName = templateName.trim();

  if (normalizedName.length === 0) {
    throw new Error("Template name is required.");
  }

  return normalizedName;
};

export const ensureDate = (value?: string): string => {
  if (value === undefined) {
    const now = new Date();
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");
    const day = String(now.getUTCDate()).padStart(2, "0");

    return `${now.getUTCFullYear()}-${month}-${day}`;
  }

  const trimmed = value.trim();
  const datePattern = /^\d{4}-\d{2}-\d{2}$/u;

  if (!datePattern.test(trimmed)) {
    throw new Error("Date must be in YYYY-MM-DD format.");
  }

  const parsed = new Date(`${trimmed}T00:00:00.000Z`);

  if (Number.isNaN(parsed.getTime())) {
    throw new Error("Date must be a valid calendar day.");
  }

  const canonical = parsed.toISOString().slice(0, 10);

  if (canonical !== trimmed) {
    throw new Error("Date must be a valid calendar day.");
  }

  return trimmed;
};

export const toSlug = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/(^-|-$)/gu, "");

const renderTemplate = (
  template: VoyageTemplate,
  context: TemplateContext
): string =>
  template.body.replace(PLACEHOLDER_PATTERN, (_placeholder, key: string) => {
    const resolver = PLACEHOLDER_HINTS[key];

    if (!resolver) {
      throw new Error(`Unsupported template placeholder \"${key}\".`);
    }

    return resolver(context);
  });

export const createVoyageDraft = (
  templateName: string,
  providedDate?: string
): VoyageDraft => {
  const normalizedTemplateName = ensureTemplateName(templateName);
  const voyageDate = ensureDate(providedDate);
  const template = TEMPLATES[normalizedTemplateName] ?? TEMPLATES[DEFAULT_TEMPLATE_NAME];
  const templateSlug = toSlug(normalizedTemplateName);
  const suffix = templateSlug.length > 0 ? templateSlug : "voyage";
  const slug = `${voyageDate}-${suffix}`;
  const directory = join("voyages", slug);
  const filePath = join(directory, "README.md");
  const contents = renderTemplate(template, { slug, date: voyageDate });

  if (contents.includes("{{")) {
    throw new Error("Unresolved template placeholders detected.");
  }

  return {
    slug,
    date: voyageDate,
    directory,
    filePath,
    contents
  };
};
