const THEME_KEY = "esmeralda-theme";

export function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch (_) {}

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  document.documentElement.style.colorScheme = next;

  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (_) {}

  return next;
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme || getInitialTheme();
  return applyTheme(current === "dark" ? "light" : "dark");
}
