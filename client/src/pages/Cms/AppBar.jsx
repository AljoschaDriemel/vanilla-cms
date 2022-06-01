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
  }
  /* const [show, setShow] = useState(true); */
  return (
    <div>
    <div className="appbar">
     {/*  <div className="hamburger" onClick={() => setShow((prev) => !prev)}>
        <svg viewBox="0 0 100 80" width="40" height="40" fill="white">
          <rect width="100" height="15" ></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </div>   */}
        <button onClick={function1}>Click me</button>
      </div>
      {/* {show && <Navbar />} */}
      
    </div>
  );
}
