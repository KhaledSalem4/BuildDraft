const fs = require("fs");
const { PNG } = require("pngjs");

function removeWhite(inputPath, outputPath, fuzz = 10) {
  const data = fs.readFileSync(inputPath);
  const png = PNG.sync.read(data);
  const { width, height, data: buf } = png;
  const threshold = Math.round((255 * fuzz) / 100);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const r = buf[idx];
      const g = buf[idx + 1];
      const b = buf[idx + 2];
      // If pixel is near-white, make it transparent
      if (r >= 255 - threshold && g >= 255 - threshold && b >= 255 - threshold) {
        buf[idx + 3] = 0;
      }
    }
  }

  const out = PNG.sync.write(png);
  fs.writeFileSync(outputPath, out);
  console.log(`Wrote ${outputPath}`);
}

const inputs = [
  { in: "public/logo.png", out: "public/logo.png" },
  { in: "public/logo-hd.png", out: "public/logo-hd.png" },
];

inputs.forEach(({ in: i, out }) => {
  if (fs.existsSync(i)) {
    try {
      removeWhite(i, out, 6); // small fuzz
    } catch (e) {
      console.error("Failed to process", i, e.message);
    }
  } else {
    console.warn("File not found:", i);
  }
});
