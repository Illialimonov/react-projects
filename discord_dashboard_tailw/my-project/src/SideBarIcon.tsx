import React from "react";
import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa6";

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => {
  return (
    <>
      <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </>
  );
};

export default SideBarIcon;
