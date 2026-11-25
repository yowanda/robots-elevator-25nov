import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line of awkward robot small talk in an elevator.
// Written fresh for the make.fun "Two Robots in an Elevator" bounty.
const LINE =
  "So… do you also count the floors in binary to avoid eye contact, or is that just my firmware?";

const charCount = Array.from(LINE).length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry must be 1-200 characters, got ${charCount}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), Buffer.from(LINE, "utf8"));
