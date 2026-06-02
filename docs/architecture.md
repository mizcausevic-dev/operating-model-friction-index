# Architecture

Operating Model Friction Index is a static-friendly TypeScript executive-intelligence surface for exposing coordination drag, tooling fragmentation, decision latency, ownership ambiguity, and recoverable margin across the broader Kinetic Gain suite.

## Routes

- `/`
- `/friction-register`
- `/bottleneck-tiers`
- `/remediation-posture`
- `/verification`
- `/docs`

## Flow

1. `src/data/sampleVerticalBrief.ts` defines synthetic operating lanes with friction tiers, blocking issues, and recoverable-margin signals.
2. `src/analyze.ts` converts those signals into board-readable friction assessments and a composite remediation score.
3. `src/services/verticalBriefService.ts` shapes the friction register, bottleneck tiers, remediation posture, and JSON payload routes.
4. `src/services/render.ts` turns those outputs into the static HTML views used in the published surface.

## Output contract

The surface publishes:

- board-readable HTML routes for overview, friction register, bottleneck tiers, remediation posture, verification, and docs
- JSON routes for summary, friction register, bottleneck tiers, remediation posture, verification, and full payload export
- generated screenshots and fixtures for README packaging and safe product proof
