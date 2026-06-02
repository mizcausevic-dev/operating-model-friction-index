import { describe, expect, it } from "vitest";
import {
  renderBottleneckTiers,
  renderDocs,
  renderFrictionOverview,
  renderFrictionRegister,
  renderRemediationPosture,
  renderVerification
} from "./render.js";

describe("render", () => {
  it("includes the product title in the overview", () => {
    expect(renderFrictionOverview()).toContain("Operating Model Friction Index");
  });

  it("renders the friction register route", () => {
    expect(renderFrictionRegister()).toContain("/friction-register");
  });

  it("renders the bottleneck tiers route", () => {
    expect(renderBottleneckTiers()).toContain("/bottleneck-tiers");
  });

  it("renders the remediation posture route", () => {
    expect(renderRemediationPosture()).toContain("/remediation-posture");
  });

  it("renders verification notes", () => {
    expect(renderVerification()).toContain("Synthetic operating-model data only");
  });

  it("renders docs payload guidance", () => {
    expect(renderDocs()).toContain("/api/payload");
  });
});
