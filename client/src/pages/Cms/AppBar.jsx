import React from "react";

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
          <svg viewBox="0 0 100 80" width="40" height="40" fill="#FFFFFF" onClick={function1}>
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}
