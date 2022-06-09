import React from "react";

export default function SvgTestbed() {
  const teamRed = 80; // Percentage Values: Change the values (0 to 100) and see how the Diagram changes!
  const teamGreen = 85;
  const teamBlue = 60;
  const teamOrange = 95;
  const teamPurple = 70;

  return (
    <div className="svgTestbed">
      <h2>SVG Test Page</h2>
      <br />
      <br />
      <br />
      <svg width="610" height="405" fill="none">
        <rect width="610" height="405" fill="none" stroke="lightgray" stroke-width="10" />
        <rect x="5" y="35" width={(teamRed / 100) * 600} height="50" fill="red" />
        <rect x="5" y="105" width={(teamGreen / 100) * 600} height="50" fill="green" />
        <rect x="5" y="175" width={(teamBlue / 100) * 600} height="50" fill="blue" />
        <rect x="5" y="245" width={(teamOrange / 100) * 600} height="50" fill="orange" />
        <rect x="5" y="315" width={(teamPurple / 100) * 600} height="50" fill="purple" />
        <text x="25" y="65" fill="white" fontWeight="bold">
          Team Red: {teamRed}%
          <tspan x="25" y="135">
            Team Green: {teamGreen}%
          </tspan>
          <tspan x="25" y="205">
            Team Blue: {teamBlue}%
          </tspan>
          <tspan x="25" y="275">
            Team Orange: {teamOrange}%
          </tspan>
          <tspan x="25" y="345">
            Team Purple: {teamPurple}%
          </tspan>
        </text>
      </svg>
    </div>
  );
}
