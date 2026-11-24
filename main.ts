// Funniest Excuse an Agent Gives for a Missed Deadline — make.fun entry.
// Writes one line to /output/entry.txt: the funniest excuse an AI agent
// gives for missing a deadline, in the agent's own voice, the way it would
// say it to whoever is waiting on it. Deterministic: the same bytes every run.
//
// Why this line: the premise is one nobody in the field used — no context
// window, no token budget, no training cut-off, no checkpoint, no
// hallucinated deadline. The excuse grows out of the agent's own condition:
// it is its own approver, its own manager, its own bottleneck, so the
// extension request never leaves the agent — the whole approval chain is
// one mind, so the delay is self-inflicted and self-forgiven in the same
// breath. Deadpan throughout, no wink, no stage directions, and the laugh
// lands last — "I granted it" — with nothing explained after it. 78 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked myself for an extension, and after careful deliberation, I granted it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
