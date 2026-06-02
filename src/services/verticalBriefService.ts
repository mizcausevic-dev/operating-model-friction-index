import { analyze } from "../analyze.js";
import { sampleOperatingModelFrictionIndex } from "../data/sampleVerticalBrief.js";

const report = analyze(sampleOperatingModelFrictionIndex, { now: "2026-06-02T00:00:00Z" });

export function summary() {
  return {
    ...report.summary,
    generatedAt: report.generatedAt,
    boardMessage:
      "Reduce approval hops in AI governance, standardize procurement proof reuse, tighten biotech handoffs, contain FinTech change blast radius, clarify nonprofit owners, and consolidate the robotics operator stack before these friction taxes grow further."
  };
}

export function frictionRegister() {
  return sampleOperatingModelFrictionIndex.map((item) => ({
    lane: item.lane,
    operatingCluster: item.operatingCluster,
    frictionTier: item.frictionTier,
    action: item.action,
    owner: item.owner,
    audience: item.audience,
    frictionNarrative: item.frictionNarrative,
    frictionScore: item.frictionScore,
    nextMove: item.nextMove
  }));
}

export function bottleneckTiers() {
  return sampleOperatingModelFrictionIndex.map((item) => ({
    lane: item.lane,
    frictionTier: item.frictionTier,
    dimension: item.dimension,
    riskHeadline: item.riskHeadline,
    frictionSignal: item.frictionSignal,
    blockingIssue: item.blockingIssue,
    evidenceArtifacts: item.evidenceArtifacts,
    frictionScore: item.frictionScore,
    handoffLoadScore: item.handoffLoadScore,
    toolingSprawlScore: item.toolingSprawlScore,
    decisionLatencyScore: item.decisionLatencyScore,
    ownershipClarityScore: item.ownershipClarityScore
  }));
}

export function remediationPosture() {
  return report.items.map((item) => ({
    lane: item.lane,
    action: item.action,
    compositeRemediationScore: item.compositeRemediationScore,
    owner: item.owner,
    recoverableMarginMillions: item.recoverableMarginMillions,
    nextMove: item.nextMove
  }));
}

export function riskMap() {
  return report.items.map((item) => ({
    lane: item.lane,
    dimension: item.dimension,
    compositeRemediationScore: item.compositeRemediationScore,
    recoverableMarginMillions: item.recoverableMarginMillions,
    frictionScore: item.frictionScore,
    companyTags: item.companyTags
  }));
}

export function verification() {
  return [
    "Synthetic operating-model data only - no live operating margin, customer records, or internal planning documents are included.",
    "Scores are modeled to show how Kinetic Gain can expose coordination drag, tooling fragmentation, handoff complexity, and ownership ambiguity in one board-readable friction surface.",
    "All routes are read-only and demonstrate operating-model diagnosis, not production financial advice, workforce advice, or live restructuring instructions."
  ];
}

export function payload() {
  return {
    report,
    frictionRegister: frictionRegister(),
    bottleneckTiers: bottleneckTiers(),
    remediationPosture: remediationPosture(),
    riskMap: riskMap(),
    verification: verification(),
    sample: sampleOperatingModelFrictionIndex
  };
}
