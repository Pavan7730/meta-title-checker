const input = document.getElementById("titleInput");
const charCount = document.getElementById("charCount");
const pixelCount = document.getElementById("pixelCount");
const status = document.getElementById("status");
const preview = document.getElementById("previewText");

// Create a hidden canvas to calculate pixel width
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

// Google-like title font
context.font = "18px Arial";

input.addEventListener("input", () => {
  const text = input.value.trim();

  // Character count
  charCount.textContent = text.length;

  // Pixel width calculation
  const pixels = Math.round(context.measureText(text).width);
  pixelCount.textContent = pixels;

  // Preview text
  preview.textContent = text;

  // Reset status classes
  status.className = "status";

  if (text.length === 0) {
    status.textContent = "Start typing…";
  } else if (pixels <= 580) {
    status.textContent = "Good length ✔";
    status.classList.add("good");
  } else if (pixels <= 620) {
    status.textContent = "Slightly long ⚠";
    status.classList.add("warn");
  } else {
    status.textContent = "Too long ❌";
    status.classList.add("bad");
  }
});
