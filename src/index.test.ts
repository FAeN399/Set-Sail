import assert from "node:assert/strict";
import { describe, it } from "node:test";

import createGreeting, {
  createGreeting as namedCreateGreeting,
  GreetingOptions
} from "./index";

describe("createGreeting", () => {
  it("welcomes the default sailor when no name is provided", () => {
    const result = createGreeting();

    assert.equal(result, "Ahoy, Sailor! Welcome aboard Set-Sail.");
  });

  it("welcomes a specific sailor when a name is provided", () => {
    const options: GreetingOptions = { name: "Codex" };

    const result = namedCreateGreeting(options);

    assert.equal(result, "Ahoy, Codex! Welcome aboard Set-Sail.");
  });
});
