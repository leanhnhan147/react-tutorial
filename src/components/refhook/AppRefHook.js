import React, { useEffect, useRef, useState } from "react";
import StopWatch from "./StopWatch";
import TextareaAutoResize from "./TextareaAutoResize ";
import Dropdown from "./Dropdown ";

function AppRefHook() {
  return (
    <div>
      {/* <StopWatch></StopWatch> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      <div className="p-5">
        <Dropdown></Dropdown>
      </div>
    </div>
  );
}

export default AppRefHook;
