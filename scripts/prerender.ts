import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  renderBottleneckTiers,
  renderDocs,
  renderFrictionOverview,
  renderFrictionRegister,
  renderRemediationPosture,
  renderVerification
} from "../src/services/render.js";
import { bottleneckTiers, frictionRegister, payload, remediationPosture, riskMap, summary, verification } from "../src/services/verticalBriefService.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "dist-static");
rmSync(publicDir, { recursive: true, force: true });
mkdirSync(publicDir, { recursive: true });

const routes: Array<[string, [string, string]]> = [
  ["/", ["index.html", renderFrictionOverview()]],
  ["/friction-register", ["friction-register/index.html", renderFrictionRegister()]],
  ["/bottleneck-tiers", ["bottleneck-tiers/index.html", renderBottleneckTiers()]],
  ["/remediation-posture", ["remediation-posture/index.html", renderRemediationPosture()]],
  ["/verification", ["verification/index.html", renderVerification()]],
  ["/docs", ["docs/index.html", renderDocs()]]
];

for (const [, [filename, html]] of routes) {
  const target = path.join(publicDir, filename);
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, html);
}

writeFileSync(path.join(root, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: https://friction.kineticgain.com/sitemap.xml\n");
writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://friction.kineticgain.com/</loc></url><url><loc>https://friction.kineticgain.com/friction-register/</loc></url><url><loc>https://friction.kineticgain.com/bottleneck-tiers/</loc></url><url><loc>https://friction.kineticgain.com/remediation-posture/</loc></url><url><loc>https://friction.kineticgain.com/verification/</loc></url><url><loc>https://friction.kineticgain.com/docs/</loc></url></urlset>`
);

const apiDir = path.join(publicDir, "api");
mkdirSync(apiDir, { recursive: true });
const apiPayloads: Record<string, unknown> = {
  "dashboard-summary.json": summary(),
  "friction-register.json": frictionRegister(),
  "bottleneck-tiers.json": bottleneckTiers(),
  "remediation-posture.json": remediationPosture(),
  "risk-map.json": riskMap(),
  "verification.json": verification(),
  "sample.json": payload().sample,
  "payload.json": payload()
};

for (const [filename, value] of Object.entries(apiPayloads)) {
  writeFileSync(path.join(apiDir, filename), JSON.stringify(value, null, 2));
}
