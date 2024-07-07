"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const [present, setPresent] = useState(true);
  const [theme, setTheme] = useState("light");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const themes = useAppSelector((state) => state.themechanger.theme);
  const val = useAppSelector((state) => state.themechanger.value);

  const dispatch = useAppDispatch();

  const handleTheme = () => {
    setPresent(!present);
    if (present) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(present, theme);
  };

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
      {!darkMode ? (
        <FaMoon className="h-6 w-6 text-gray-800" />
      ) : (
        <FaSun className="h-6 w-6 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
