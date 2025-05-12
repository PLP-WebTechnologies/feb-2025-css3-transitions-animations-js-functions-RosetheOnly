const title = document.getElementById("title");
const animateBtn = document.getElementById("animate-btn");
const saveThemeBtn = document.getElementById("save-theme");
const loadThemeBtn = document.getElementById("load-theme");

// Add bounce animation
animateBtn.addEventListener("click", () => {
  title.classList.add("bounce");

  // Remove the class after animation ends
  setTimeout(() => {
    title.classList.remove("bounce");
  }, 600);
});

// Save theme preference
saveThemeBtn.addEventListener("click", () => {
  document.body.classList.add("dark-theme");
  localStorage.setItem("theme", "dark");
});

// Load theme preference
loadThemeBtn.addEventListener("click", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
