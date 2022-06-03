import React from "react";

export default function AppBar() {
  const toggleNavbar = () => {
    const navbar = document.getElementById("nav-container");
    return navbar.style.display === "block" ? (navbar.style.display = "none") : (navbar.style.display = "block");
  };

  return (
    <div>
      <div className="appbar">
        <div className="hamburger" onClick={toggleNavbar}>
          <svg className="hamburgerIcon" height="40" width="40">
            <g fill="#FFF" stroke="#FFF" stroke-width="4">
              <path stroke-linecap="round" d="M5 11 l30 0" />
              <path stroke-linecap="round" d="M5 21 l30 0" />
              <path stroke-linecap="round" d="M5 31 l30 0" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
