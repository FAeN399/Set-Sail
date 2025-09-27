#!/usr/bin/env ts-node
import { existsSync, mkdirSync, writeFileSync } from "fs";

import {
  createVoyageDraft,
  usage
} from "../src/voyages/bootstrap";

const [templateName, providedDate] = process.argv.slice(2);

const main = (): void => {
  if (!templateName) {
    throw new Error(`Template name is required.\n${usage}`);
  }

  const draft = createVoyageDraft(templateName, providedDate);

  mkdirSync(draft.directory, { recursive: true });

  if (existsSync(draft.filePath)) {
    throw new Error(`Voyage already exists at ${draft.filePath}`);
  }

  writeFileSync(draft.filePath, draft.contents, { encoding: "utf8" });

  // eslint-disable-next-line no-console
  console.log(`Created voyage at ${draft.filePath}`);
};

try {
  main();
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : String(error);

  // eslint-disable-next-line no-console
  console.error(message);
  process.exitCode = 1;
}
