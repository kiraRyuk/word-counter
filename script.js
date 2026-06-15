const text = document.querySelector("#text");
const common = new Set(["the","a","an","and","or","but","of","to","in","is","it","that","for","on","with","as","this","be","are","was","your","you"]);

function updateStatistics() {
  const value = text.value;
  const words = value.trim() ? value.trim().split(/\s+/) : [];
  const sentences = value.trim() ? (value.match(/[.!?]+(?=\s|$)/g) || []).length || 1 : 0;
  const paragraphs = value.trim() ? value.trim().split(/\n\s*\n/).filter(Boolean).length : 0;
  const frequencies = {};

  words.map(word => word.toLowerCase().replace(/[^a-z0-9'-]/g, "")).filter(word => word.length > 2 && !common.has(word)).forEach(word => frequencies[word] = (frequencies[word] || 0) + 1);
  const top = Object.entries(frequencies).sort((a, b) => b[1] - a[1]).slice(0, 5);

  document.querySelector("#words").textContent = words.length;
  document.querySelector("#characters").textContent = value.length;
  document.querySelector("#sentences").textContent = sentences;
  document.querySelector("#paragraphs").textContent = paragraphs;
  document.querySelector("#reading").textContent = words.length ? `${Math.max(1, Math.ceil(words.length / 225))} min` : "0 min";
  document.querySelector("#keywords").textContent = top.length ? top.map(([word, count]) => `${word} (${((count / words.length) * 100).toFixed(1)}%)`).join(" · ") : "Your most-used words will appear here as you write.";
}

text.addEventListener("input", updateStatistics);
document.querySelector("#clear").addEventListener("click", () => {
  text.value = "";
  updateStatistics();
  text.focus();
});
