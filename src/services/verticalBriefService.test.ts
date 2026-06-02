import { describe, expect, it } from "vitest";
import { bottleneckTiers, frictionRegister, payload, remediationPosture, summary, verification } from "./verticalBriefService.js";

describe("verticalBriefService", () => {
  it("returns the friction summary", () => {
    expect(summary().systemsTracked).toBeGreaterThan(0);
  });

  it("returns the friction register view", () => {
    expect(frictionRegister().length).toBeGreaterThan(0);
  });

  it("returns the bottleneck tiers view", () => {
    expect(bottleneckTiers().length).toBeGreaterThan(0);
  });

  it("returns the remediation posture view", () => {
    expect(remediationPosture().length).toBeGreaterThan(0);
  });

  it("returns verification notes", () => {
    expect(verification().length).toBeGreaterThan(0);
  });

  it("returns the payload", () => {
    expect(payload().report.summary.systemsTracked).toBeGreaterThan(0);
  });
});
