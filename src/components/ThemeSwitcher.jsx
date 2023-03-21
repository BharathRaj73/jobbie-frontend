import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme:dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={handleThemeSwitch} className="bg-gray-100 dark:bg-slate-600 p-3 rounded-lg text-yellow-500 dark:text-white">
      {theme === "dark" ? <FaMoon /> : <BsSunFill />}
    </button>
  );
};

export default ThemeSwitcher;
