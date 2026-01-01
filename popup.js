const input = document.getElementById("titleInput");
const charCount = document.getElementById("charCount");
const pixelCount = document.getElementById("pixelCount");
const status = document.getElementById("status");
const serpTitle = document.getElementById("serpTitle");

function calculatePixels(text) {
  return Math.round(text.length * 8.9); // average Google pixel width
}

input.addEventListener("input", () => {
  const text = input.value.trim();
  const chars = text.length;
  const pixels = calculatePixels(text);

  charCount.textContent = chars;
  pixelCount.textContent = pixels;
  serpTitle.textContent = text || "Your title preview will appear here";

  if (chars === 0) {
    status.textContent = "Start typing…";
    status.className = "status";
  } else if (chars <= 60 && pixels <= 580) {
    status.textContent = "Good length ✓";
    status.className = "status good";
  } else {
    status.textContent = "Too long ⚠";
    status.className = "status bad";
  }
});
