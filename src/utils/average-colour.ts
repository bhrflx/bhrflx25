import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export async function getAverageColor(src: string) {
  const backgroundImage = await fs.readFile(path.resolve(process.cwd() + src));

  const { channels } = await sharp(backgroundImage).stats();
  const [r, g, b] = channels.map((c) => c.mean);

  return { r, g, b };
}
