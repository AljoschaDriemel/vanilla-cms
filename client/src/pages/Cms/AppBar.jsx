import React, { useState } from "react";
import Navbar from "./Navbar";

export default function AppBar() {
  const [show, setShow] = useState(true);
  return (
    <div className="appbar">
      <div className="hamburger" onClick={() => setShow((prev) => !prev)}>
        <svg viewBox="0 0 100 80" width="40" height="40" fill="white">
          <rect width="100" height="15" ></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </div>
      {show && <Navbar />}
    </div>
  );
}
