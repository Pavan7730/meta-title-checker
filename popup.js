const input = document.getElementById("titleInput");
const charCount = document.getElementById("charCount");
const pixelCount = document.getElementById("pixelCount");
const status = document.getElementById("status");
const serpTitle = document.getElementById("serpTitle");

const MAX_PIXELS = 580;

// Canvas for accurate pixel calculation
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "18px Arial";

function truncateByPixels(text, maxPixels) {
  let truncated = "";
  for (let i = 0; i < text.length; i++) {
    const test = truncated + text[i];
    if (ctx.measureText(test + "...").width > maxPixels) {
      return truncated + "...";
    }
    truncated = test;
  }
  return truncated;
}

input.addEventListener("input", () => {
  const text = input.value;
  const chars = text.length;
  const pixels = Math.round(ctx.measureText(text).width);

  charCount.textContent = chars;
  pixelCount.textContent = pixels;

  serpTitle.textContent = text
    ? truncateByPixels(text, MAX_PIXELS)
    : "Your title preview will appear here";

  status.className = "status";

  if (!text) {
    status.textContent = "Start typing…";
  } else if (pixels <= 520) {
    status.textContent = "Good length ✓";
    status.classList.add("good");
  } else if (pixels <= MAX_PIXELS) {
    status.textContent = "Almost too long ⚠";
    status.classList.add("warn");
  } else {
    status.textContent = "Too long ✕";
    status.classList.add("bad");
  }
});
