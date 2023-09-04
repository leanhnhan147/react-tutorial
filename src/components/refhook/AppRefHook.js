import React, { useEffect, useRef, useState } from "react";
import StopWatch from "./StopWatch";
import TextareaAutoResize from "./TextareaAutoResize ";

function AppRefHook() {
  return (
    <div>
      {/* <StopWatch></StopWatch> */}
      <TextareaAutoResize></TextareaAutoResize>
    </div>
  );
}

export default AppRefHook;
