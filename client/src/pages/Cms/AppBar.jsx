import React, { useState } from "react";

export default function AppBar() {
  const [navbarDisplay, setNavbarDisplay] = useState("block");

  const toggleNavbar = () => {
    const navbar = document.getElementById("nav-container");
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  };

  return (
    <div>
      <div className="appbar">
        <div className="hamburger">
          <svg viewBox="0 0 100 80" width="40" height="40" fill="#FFFFFF" onClick={toggleNavbar}>
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}
