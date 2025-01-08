import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import './index.css'; // Import your CSS file with Tailwind styles
import SideBarIcon from "./SideBarIcon";
import { FaMoon } from "react-icons/fa6";
import DarkModeButton from "./DarkModeButton";
import Mainbar from "./Mainbar";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Mainbar/>
      <button className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-600 text-white rounded transition-all duration-200 dark:bg-gray-700 dark:hover:bg-gray-500 dark:text-gray-200" onClick={() => setDarkMode(!darkMode)}>
        <DarkModeButton icon={<FaMoon size="20"/>}/>
      </button>

    </div>
  );
}
