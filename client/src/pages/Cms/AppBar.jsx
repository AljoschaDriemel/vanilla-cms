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
  return (
    <div>
    <div className="appbar">
     
        <button onClick={function1}>Click me</button>
      </div>
    </div>
  );
}
