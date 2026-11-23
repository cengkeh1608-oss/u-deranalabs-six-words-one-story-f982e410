import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

// Winner D6 of 10 drafts (23/25): a complete story in six words —
// someone is gone, and her last letter arrives after she does.
// The twist lands on the final two words ("after her"), and what the
// letter says is left unsaid for the reader to fill in.
const STORY = "Her last letter arrived after her.";

const outDir = process.argv[2] ?? "/output/entry.txt";
const outPath = outDir.endsWith(".txt") ? outDir : join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, STORY, "utf8");
