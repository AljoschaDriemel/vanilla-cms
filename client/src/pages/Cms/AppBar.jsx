import React, { useState } from "react";
import Navbar from "./Navbar";

export default function AppBar() {
  const function1 = function myFunction() {
    var x = document.getElementById("nav-container");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  return (
    <div>
      <div className="appbar">
        <div className="hamburger">
        <svg viewBox="0 0 100 80" width="40" height="40" onClick={function1}>
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        </div>
        <div className="test" style={{display:"block"}}>test</div>
      </div>
    </div>
  );
}
