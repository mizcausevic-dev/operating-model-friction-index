import { describe, expect, it } from "vitest";
import { analyze, toExport } from "../src/analyze.js";
import { sampleOperatingModelFrictionIndex } from "../src/data/sampleVerticalBrief.js";
import type { OperatingModelFrictionIndexItem } from "../src/types.js";

describe("analyze", () => {
  it("preserves the item count", () => {
    const report = analyze(sampleOperatingModelFrictionIndex, { now: "2026-06-02T00:00:00Z" });
    expect(report.items.length).toBe(sampleOperatingModelFrictionIndex.length);
  });

  it("counts high-friction lanes", () => {
    const report = analyze(sampleOperatingModelFrictionIndex, { now: "2026-06-02T00:00:00Z" });
    expect(report.summary.highFrictionLanes).toBeGreaterThan(0);
  });

  it("counts reset-required lanes", () => {
    const report = analyze(sampleOperatingModelFrictionIndex, { now: "2026-06-02T00:00:00Z" });
    expect(report.summary.resetRequiredLanes).toBeGreaterThan(0);
  });

  it("sums recoverable margin", () => {
    const report = analyze(sampleOperatingModelFrictionIndex, { now: "2026-06-02T00:00:00Z" });
    expect(report.summary.recoverableMarginMillions).toBe(73);
  });

  it("calculates a leading board message", () => {
    const report = analyze(sampleOperatingModelFrictionIndex, { now: "2026-06-02T00:00:00Z" });
    expect(report.summary.leadingMessage.length).toBeGreaterThan(20);
  });

  it("handles an empty estate", () => {
    const report = analyze([], { now: "2026-06-02T00:00:00Z" });
    expect(report.summary.systemsTracked).toBe(0);
    expect(report.summary.averageFrictionScore).toBe(0);
    expect(report.summary.leadingMessage).toContain("mostly controlled");
  });

  it("hits low and medium branches explicitly", () => {
    const fixtures: OperatingModelFrictionIndexItem[] = [
      {
        id: "low-branch",
        lane: "Stable lane",
        dimension: "DECISION_LATENCY",
        action: "SIMPLIFY",
        operatingCluster: "AI governance",
        frictionTier: "CONTROLLED",
        boardQuestion: "Is this lane stable enough to keep moving?",
        owner: "Chief AI Officer",
        audience: "Board technology committee",
        currentPosture: "Controlled.",
        frictionNarrative: "This lane is controlled.",
        operatingReality: "Healthy.",
        riskHeadline: "Low friction risk.",
        frictionSignal: "Minimal delay.",
        blockingIssue: "None",
        evidenceArtifacts: ["memo"],
        opportunityMoves: ["leave it alone"],
        relatedSurfaces: ["scorecard.kineticgain.com"],
        companyTags: ["Google"],
        frictionScore: 50,
        handoffLoadScore: 48,
        toolingSprawlScore: 30,
        decisionLatencyScore: 51,
        ownershipClarityScore: 88,
        recoverableMarginMillions: 4,
        headline: "Stable lane.",
        narrative: "Low branch test.",
        nextMove: "Keep the lane stable."
      },
      {
        id: "medium-branch",
        lane: "Pressured lane",
        dimension: "TOOLING_FRAGMENTATION",
        action: "STANDARDIZE",
        operatingCluster: "FinTech",
        frictionTier: "PRESSURED",
        boardQuestion: "Where is the drag visible but not yet broken?",
        owner: "Revenue owner",
        audience: "Finance committee",
        currentPosture: "Watch state.",
        frictionNarrative: "The lane is pressured.",
        operatingReality: "Some fragmentation.",
        riskHeadline: "Moderate friction risk.",
        frictionSignal: "A few tool switches.",
        blockingIssue: "Workflow duplication",
        evidenceArtifacts: ["tool audit"],
        opportunityMoves: ["collapse tools"],
        relatedSurfaces: ["merchant.kineticgain.com"],
        companyTags: ["Tableau"],
        frictionScore: 70,
        handoffLoadScore: 68,
        toolingSprawlScore: 50,
        decisionLatencyScore: 63,
        ownershipClarityScore: 70,
        recoverableMarginMillions: 7,
        headline: "Pressured lane.",
        narrative: "Medium branch test.",
        nextMove: "Collapse duplicate tools."
      }
    ];

    const report = analyze(fixtures, { now: "2026-06-02T00:00:00Z" });
    expect(report.items[0].frictionAssessment.severity).toBe("LOW");
    expect(report.items[0].handoffAssessment.severity).toBe("LOW");
    expect(report.items[1].frictionAssessment.severity).toBe("MEDIUM");
    expect(report.items[1].handoffAssessment.severity).toBe("MEDIUM");
    expect(report.items[1].toolingAssessment.severity).toBe("MEDIUM");
    expect(report.items[1].latencyAssessment.severity).toBe("MEDIUM");
    expect(report.items[1].ownershipAssessment.severity).toBe("MEDIUM");
    expect(report.summary.leadingMessage).toContain("mostly controlled");
  });

  it("exports through toExport", () => {
    const report = toExport(sampleOperatingModelFrictionIndex, { now: "2026-06-02T00:00:00Z" });
    expect(report.summary.systemsTracked).toBe(sampleOperatingModelFrictionIndex.length);
  });
});
