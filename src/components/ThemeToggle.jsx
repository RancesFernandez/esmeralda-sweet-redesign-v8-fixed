import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme } from "../theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="es-theme-toggle"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="es-theme-icon" aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
      <span className="es-theme-label">
        {isDark ? "Modo claro" : "Modo oscuro"}
      </span>
    </button>
  );
}
