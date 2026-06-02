import { describe, expect, it } from "vitest";
import { formatSummary } from "./format.js";

describe("formatSummary", () => {
  it("formats the friction summary", () => {
    const output = formatSummary({
      systemsTracked: 6,
      highFrictionLanes: 4,
      resetRequiredLanes: 2,
      severeDragHotspots: 3,
      averageFrictionScore: 72,
      recoverableMarginMillions: 73,
      leadingMessage: "The operating model is directionally sound."
    });

    expect(output).toContain("Operating Model Friction Index");
    expect(output).toContain("High-friction lanes: 4");
    expect(output).toContain("Recoverable margin: $73M");
  });
});
