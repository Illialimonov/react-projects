import React from "react";
import { FaSun } from "react-icons/fa6";

const DarkModeButton = ({ icon }) => {
  const root = document.documentElement;
  const darkMode = root.classList.contains("dark");

  return (
    <>
      {darkMode ? (
        <div>{icon}</div>
      ) : (
        <div>
          <FaSun size="20" />
        </div>
      )}
    </>
  );
};

export default DarkModeButton;
