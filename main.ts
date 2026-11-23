import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I did not miss that spot. My sensors are 99.9% accurate, and the other 0.1% was your sock, which I classified as a cliff and mourned briefly before returning to my dock at 4% battery.";

if ([...line].length > 200) throw new Error("too long");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
