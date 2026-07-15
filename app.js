const featureModes = [
  "Slash commands",
  "Server tools",
  "User lookups",
  "Temporary reminders",
  "Dice and choices",
  "Optional AI chat",
];

const moodLabel = document.querySelector("#moodLabel");
const shuffleMood = document.querySelector("#shuffleMood");
const toast = document.querySelector("#toast");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

shuffleMood?.addEventListener("click", () => {
  const current = moodLabel.textContent;
  const next = featureModes.filter((mode) => mode !== current);
  moodLabel.textContent = next[Math.floor(Math.random() * next.length)];
});
