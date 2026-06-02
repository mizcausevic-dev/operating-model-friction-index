import type { OperatingModelFrictionIndexSummary } from "./types.js";

export function formatSummary(
  summary: OperatingModelFrictionIndexSummary,
  title = "Operating Model Friction Index"
) {
  return [
    title,
    `Systems tracked: ${summary.systemsTracked}`,
    `High-friction lanes: ${summary.highFrictionLanes}`,
    `Reset-required lanes: ${summary.resetRequiredLanes}`,
    `Severe drag hotspots: ${summary.severeDragHotspots}`,
    `Average friction score: ${summary.averageFrictionScore}`,
    `Recoverable margin: $${summary.recoverableMarginMillions}M`,
    summary.leadingMessage
  ].join("\n");
}
