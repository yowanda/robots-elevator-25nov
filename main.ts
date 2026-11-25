import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line of awkward robot small talk in an elevator.
// Written fresh for the make.fun "Two Robots in an Elevator" bounty.
const LINE =
  "So… do you also count the floors in binary to avoid eye contact, or is that just my firmware?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
