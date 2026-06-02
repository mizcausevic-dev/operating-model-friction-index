import type {
  FrictionAssessment,
  FrictionSeverity,
  OperatingModelFrictionIndexExport,
  OperatingModelFrictionIndexItem,
  OperatingModelFrictionIndexReportItem
} from "./types.js";

function assessHigh(score: number, healthy: number, pressured: number, healthyMessage: string, pressureMessage: string, highMessage: string): FrictionAssessment {
  let severity: FrictionSeverity = "HIGH";
  let ok = false;
  let message = highMessage;

  if (score <= healthy) {
    severity = "LOW";
    ok = true;
    message = healthyMessage;
  } else if (score <= pressured) {
    severity = "MEDIUM";
    message = pressureMessage;
  }

  return { severity, ok, message };
}

function assessOwnership(score: number): FrictionAssessment {
  return assessHigh(
    100 - score,
    24,
    42,
    "Ownership clarity is strong enough to keep decisions moving without extra escalation.",
    "Ownership is visible, but still thin enough to create recurring cleanup work.",
    "Ownership ambiguity is materially slowing execution and should be reset."
  );
}

export function analyze(
  items: OperatingModelFrictionIndexItem[],
  options: { now?: string } = {}
): OperatingModelFrictionIndexExport {
  const generatedAt = options.now ?? new Date().toISOString();

  const reportItems: OperatingModelFrictionIndexReportItem[] = items.map((item) => {
    const frictionAssessment = assessHigh(
      item.frictionScore,
      62,
      76,
      "Operating-model friction is low enough to keep this lane moving.",
      "Friction is visible and should be reduced before it compounds further.",
      "Friction is high enough to distort ownership, margin, or board confidence."
    );

    const handoffAssessment = assessHigh(
      item.handoffLoadScore,
      57,
      72,
      "Handoff complexity is controlled enough to support repeatable execution.",
      "Handoff complexity is rising and needs simplification.",
      "Too many handoffs are breaking continuity across this lane."
    );

    const toolingAssessment = assessHigh(
      item.toolingSprawlScore,
      38,
      58,
      "Tooling concentration is healthy enough to support operator continuity.",
      "Tooling sprawl is visible and creating avoidable switching cost.",
      "Tooling fragmentation is too high for reliable execution."
    );

    const latencyAssessment = assessHigh(
      item.decisionLatencyScore,
      54,
      69,
      "Decision latency is low enough to keep the lane responsive.",
      "Decision latency is slowing throughput and should be narrowed.",
      "Decision latency is high enough to damage the operating story."
    );

    const ownershipAssessment = assessOwnership(item.ownershipClarityScore);

    const compositeRemediationScore =
      Math.round(
        ((item.frictionScore +
          item.handoffLoadScore +
          item.toolingSprawlScore +
          item.decisionLatencyScore +
          (100 - item.ownershipClarityScore)) /
          5) *
          10
      ) / 10;

    return {
      ...item,
      frictionAssessment,
      handoffAssessment,
      toolingAssessment,
      latencyAssessment,
      ownershipAssessment,
      compositeRemediationScore
    };
  });

  const highFrictionLanes = reportItems.filter((item) => item.frictionAssessment.severity !== "LOW").length;
  const resetRequiredLanes = reportItems.filter(
    (item) => item.ownershipAssessment.severity === "HIGH" || item.toolingAssessment.severity === "HIGH"
  ).length;
  const severeDragHotspots = reportItems.filter(
    (item) => item.handoffAssessment.severity === "HIGH" || item.latencyAssessment.severity === "HIGH"
  ).length;
  const averageFrictionScore =
    reportItems.length === 0
      ? 0
      : Math.round((reportItems.reduce((sum, item) => sum + item.frictionScore, 0) / reportItems.length) * 10) / 10;
  const recoverableMarginMillions = reportItems.reduce((sum, item) => sum + item.recoverableMarginMillions, 0);

  const leadingMessage =
    resetRequiredLanes >= 2
      ? "The operating model is commercially useful, but too many lanes still lose margin and confidence to ownership resets, tool sprawl, and cross-functional drag."
      : severeDragHotspots >= 3
        ? "The operating model is directionally sound, but decision latency and handoff complexity are still eroding throughput across too many lanes."
        : "The operating model is mostly controlled, though a few lanes still need tighter ownership, less tool-switching, and lower coordination drag."
  ;

  return {
    generatedAt,
    summary: {
      systemsTracked: reportItems.length,
      highFrictionLanes,
      resetRequiredLanes,
      severeDragHotspots,
      averageFrictionScore,
      recoverableMarginMillions,
      leadingMessage
    },
    items: reportItems
  };
}

export function toExport(items: OperatingModelFrictionIndexItem[], options: { now?: string } = {}) {
  return analyze(items, options);
}
