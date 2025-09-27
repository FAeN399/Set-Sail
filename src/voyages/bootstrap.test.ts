import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { join } from "path";

import {
  createVoyageDraft,
  ensureDate,
  toSlug
} from "./bootstrap";

describe("createVoyageDraft", () => {
  it("builds a voyage draft with resolved placeholders", () => {
    const draft = createVoyageDraft("default", "2025-09-27");

    assert.equal(draft.slug, "2025-09-27-default");
    assert.equal(draft.date, "2025-09-27");
    assert.equal(draft.directory, join("voyages", "2025-09-27-default"));
    assert.equal(draft.filePath, join("voyages", "2025-09-27-default", "README.md"));
    assert.equal(draft.contents.includes("{{"), false);
    assert.match(draft.contents, /# Voyage: 2025-09-27-default/);
    assert.match(draft.contents, /\*\*Date:\*\* 2025-09-27/);
  });

  it("falls back to the default template when the name is unknown", () => {
    const draft = createVoyageDraft("mystery", "2025-10-01");

    assert.equal(draft.slug, "2025-10-01-mystery");
    assert.match(draft.contents, /Voyage: 2025-10-01-mystery/);
  });

  it("rejects empty template names", () => {
    assert.throws(() => createVoyageDraft("   ", "2025-09-27"), {
      message: "Template name is required."
    });
  });
});

describe("ensureDate", () => {
  it("returns the provided ISO date when valid", () => {
    const result = ensureDate("2025-12-15");

    assert.equal(result, "2025-12-15");
  });

  it("rejects invalid date formats", () => {
    assert.throws(() => ensureDate("15-12-2025"), {
      message: "Date must be in YYYY-MM-DD format."
    });
  });

  it("rejects impossible calendar dates", () => {
    assert.throws(() => ensureDate("2025-02-30"), {
      message: "Date must be a valid calendar day."
    });
  });
});

describe("toSlug", () => {
  it("normalizes arbitrary template names", () => {
    const result = toSlug("  Calm Waters ! ");

    assert.equal(result, "calm-waters");
  });
});
