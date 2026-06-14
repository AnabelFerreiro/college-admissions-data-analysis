const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector(".theme-icon");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", savedTheme);
icon.textContent = savedTheme === "dark" ? "☀️" : "🌙";

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  icon.textContent = next === "dark" ? "☀️" : "🌙";
});
