import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sampleOperatingModelFrictionIndex } from "../src/data/sampleVerticalBrief.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fixturesDir = path.join(root, "fixtures");
mkdirSync(fixturesDir, { recursive: true });

rmSync(path.join(fixturesDir, "operating-model-friction-index.json"), { force: true });
rmSync(path.join(fixturesDir, "operating-model-friction-index-clean.json"), { force: true });

writeFileSync(
  path.join(fixturesDir, "operating-model-friction-index.json"),
  JSON.stringify(sampleOperatingModelFrictionIndex, null, 2)
);

writeFileSync(
  path.join(fixturesDir, "operating-model-friction-index-clean.json"),
  JSON.stringify(
    sampleOperatingModelFrictionIndex.map(({ narrative: _narrative, currentPosture: _currentPosture, ...item }) => item),
    null,
    2
  )
);
