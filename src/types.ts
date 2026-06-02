export type FrictionDimension =
  | "DECISION_LATENCY"
  | "HANDOFF_COMPLEXITY"
  | "TOOLING_FRAGMENTATION"
  | "EVIDENCE_OVERHEAD"
  | "OWNERSHIP_AMBIGUITY"
  | "CHANGE_FRICTION";

export type FrictionAction = "SIMPLIFY" | "STANDARDIZE" | "AUTOMATE" | "ESCALATE" | "CONTAIN";

export type FrictionSeverity = "LOW" | "MEDIUM" | "HIGH";

export interface OperatingModelFrictionIndexItem {
  id: string;
  lane: string;
  dimension: FrictionDimension;
  action: FrictionAction;
  operatingCluster: string;
  frictionTier: "CONTROLLED" | "PRESSURED" | "CONSTRAINED" | "BROKEN";
  boardQuestion: string;
  owner: string;
  audience: string;
  currentPosture: string;
  frictionNarrative: string;
  operatingReality: string;
  riskHeadline: string;
  frictionSignal: string;
  blockingIssue: string;
  evidenceArtifacts: string[];
  opportunityMoves: string[];
  relatedSurfaces: string[];
  companyTags: string[];
  frictionScore: number;
  handoffLoadScore: number;
  toolingSprawlScore: number;
  decisionLatencyScore: number;
  ownershipClarityScore: number;
  recoverableMarginMillions: number;
  headline: string;
  narrative: string;
  nextMove: string;
}

export interface FrictionAssessment {
  severity: FrictionSeverity;
  ok: boolean;
  message: string;
}

export interface OperatingModelFrictionIndexReportItem extends OperatingModelFrictionIndexItem {
  frictionAssessment: FrictionAssessment;
  handoffAssessment: FrictionAssessment;
  toolingAssessment: FrictionAssessment;
  latencyAssessment: FrictionAssessment;
  ownershipAssessment: FrictionAssessment;
  compositeRemediationScore: number;
}

export interface OperatingModelFrictionIndexSummary {
  systemsTracked: number;
  highFrictionLanes: number;
  resetRequiredLanes: number;
  severeDragHotspots: number;
  averageFrictionScore: number;
  recoverableMarginMillions: number;
  leadingMessage: string;
}

export interface OperatingModelFrictionIndexExport {
  generatedAt: string;
  summary: OperatingModelFrictionIndexSummary;
  items: OperatingModelFrictionIndexReportItem[];
}

export interface OperatingModelFrictionIndexPayload {
  report: OperatingModelFrictionIndexExport;
  frictionRegister: ReturnType<typeof import("./services/verticalBriefService.js").frictionRegister>;
  bottleneckTiers: ReturnType<typeof import("./services/verticalBriefService.js").bottleneckTiers>;
  remediationPosture: ReturnType<typeof import("./services/verticalBriefService.js").remediationPosture>;
  riskMap: ReturnType<typeof import("./services/verticalBriefService.js").riskMap>;
  verification: string[];
  sample: OperatingModelFrictionIndexItem[];
}
