const fs = require("fs");
const { PNG } = require("pngjs");

function readPng(path) {
  const data = fs.readFileSync(path);
  return PNG.sync.read(data);
}

function writePng(png, path) {
  const out = PNG.sync.write(png);
  fs.writeFileSync(path, out);
}

function sampleBackgroundColor(png) {
  const w = png.width;
  const h = png.height;
  const buf = png.data;
  const corners = [
    [0, 0],
    [w - 1, 0],
    [0, h - 1],
    [w - 1, h - 1],
  ];
  let r = 0,
    g = 0,
    b = 0;
  corners.forEach(([x, y]) => {
    const idx = (w * y + x) << 2;
    r += buf[idx];
    g += buf[idx + 1];
    b += buf[idx + 2];
  });
  return [Math.round(r / 4), Math.round(g / 4), Math.round(b / 4)];
}

function colorDistanceSquared(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return dr * dr + dg * dg + db * db;
}

function process(pathIn, pathOut, options = {}) {
  if (!fs.existsSync(pathIn)) {
    console.warn("Input not found:", pathIn);
    return;
  }
  const png = readPng(pathIn);
  const w = png.width;
  const h = png.height;
  const buf = png.data;

  const bg = sampleBackgroundColor(png);
  const bgThreshold = options.bgThreshold ?? 1600; // squared distance

  // make background-like pixels transparent
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (w * y + x) << 2;
      const px = [buf[idx], buf[idx + 1], buf[idx + 2]];
      const dist2 = colorDistanceSquared(px, bg);
      if (dist2 <= bgThreshold) {
        buf[idx + 3] = 0;
      }
    }
  }

  // circular crop centered
  const cx = w / 2;
  const cy = h / 2;
  const radius = (Math.min(w, h) / 2) * (options.radiusFactor ?? 0.9);
  const r2 = radius * radius;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = x + 0.5 - cx;
      const dy = y + 0.5 - cy;
      const idx = (w * y + x) << 2;
      if (dx * dx + dy * dy > r2) {
        buf[idx + 3] = 0;
      }
    }
  }

  writePng(png, pathOut);
  console.log("Wrote", pathOut);
}

const inputs = [
  { in: "public/logo.png", out: "public/logo-circle.png" },
  { in: "public/logo-hd.png", out: "public/logo-hd-circle.png" },
];

inputs.forEach(({ in: i, out }) => process(i, out, { bgThreshold: 1400, radiusFactor: 0.86 }));
