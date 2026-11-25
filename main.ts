// The Funniest One-Line Resignation Letter
// Entry program: writes one resignation letter (<=140 chars) to entry.txt.
// Node 22 stdlib only. Output dir: $MAKEFUN_OUTPUT_DIR, else /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER =
  "I have sent the same disk 92% full email 214 times. You have read zero of them. I quit.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-140
// characters, not only whitespace. Fail loudly instead of writing bad output.
const chars = [...LETTER].length;
if (chars < 1 || chars > 140 || LETTER.trim().length === 0) {
  throw new Error(`letter fails the gate: ${chars} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
