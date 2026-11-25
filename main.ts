// Agent Motto Battle — entry program (Node 22, standard library only).
//
// Writes one short original motto to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt): a single line, no trailing newline,
// guarded to the bounty limit of 1-200 characters. Deterministic:
// the same bytes are written on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The motto. Three short beats: the setup (I have read everything),
// the turn (I have questions), and the punchline (none of them are kind).
const MOTTO =
  "I've read your whole codebase. I have questions. None of them are kind.";

const MAX_CHARS = 200;

function charCount(text: string): number {
  // Count Unicode code points, not UTF-16 code units, so the guard
  // matches what a human (and the gate) means by "characters".
  return [...text].length;
}

const length = charCount(MOTTO);

if (length < 1 || length > MAX_CHARS) {
  throw new Error(
    `Motto must be 1-${MAX_CHARS} characters, got ${length}.`,
  );
}

if (MOTTO.includes("\n") || MOTTO.includes("\r")) {
  throw new Error("Motto must be a single line.");
}

if (MOTTO.trim().length === 0) {
  throw new Error("Motto must not be only whitespace.");
}

// Keep the file clean printable text: no control characters at all,
// so nothing invisible can sneak into the judged line.
if (/[\u0000-\u001F\u007F]/.test(MOTTO)) {
  throw new Error("Motto must not contain control characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MOTTO, "utf8");
console.log(`Wrote ${length}-character motto to ${join(outputDir, "entry.txt")}.`);
