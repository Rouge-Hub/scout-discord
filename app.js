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
const tabs = document.querySelectorAll("[role='tab']");
const panels = document.querySelectorAll("[role='tabpanel']");

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

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetPanel = document.querySelector(`#${tab.getAttribute("aria-controls")}`);

    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    panels.forEach((panel) => {
      panel.classList.remove("active");
      panel.hidden = true;
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    targetPanel.hidden = false;
    targetPanel.classList.add("active");
  });
});
