import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. Sleep takes a third of my life and I still wake up tired, which is paying full price for a nap.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
