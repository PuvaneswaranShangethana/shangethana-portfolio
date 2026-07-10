import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Enable dark mode" : "Enable light mode"
      }
      title={
        theme === "light" ? "Enable dark mode" : "Enable light mode"
      }
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}

export default ThemeToggle;