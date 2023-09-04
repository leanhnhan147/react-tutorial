import React from "react";
import Dropdown from "./Dropdown ";
import SidebarMenu from "./SideBarMenu";
import useClickOutSide from "./useClickOutSide";

function AppCustomHook() {
  const { show, setShow, nodeRef } = useClickOutSide("span");
  return (
    <div>
      <span
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
      >
        Show menu
      </span>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
      <Dropdown></Dropdown>
    </div>
  );
}

export default AppCustomHook;
