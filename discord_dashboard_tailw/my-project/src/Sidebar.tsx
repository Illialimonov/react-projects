import React from "react";
import SideBarIcon from "./SideBarIcon";
import { FaFire, FaPoo, FaUserFriends } from "react-icons/fa";
import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg dark:bg-slate-800 transition-colors duration-300">
        <SideBarIcon
          icon={<FaDiscord size="30" />}
          text="this icon is used to"
        />
        <SideBarIcon icon={<FaUserFriends size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
      </div>
    </>
  );
};

export default Sidebar;