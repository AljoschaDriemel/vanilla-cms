import React from "react";
import scoreData from "./clubscores.json";

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

      <h3 className="heading-margin">Bundesliga Table | Season 2021-2022</h3>
      <br />
      <br />
      <svg width="810" height={scoreData.length * 78} fill="whitesmoke">
        <rect width="810" height={scoreData.length * 78} fill="whitesmoke" stroke="lightgray" stroke-width="10" />
        {scoreData &&
          scoreData.map((club) => {
            return (
              <>
                <text x="25" y={40 + 75 * scoreData.indexOf(club)} fill="black" fontWeight="bold">
                  {`${club.id}. | ${club.title}`}
                </text>
                <rect
                  x="5"
                  y={55 + 75 * scoreData.indexOf(club)}
                  width={club.score * 4}
                  height="25"
                  fill={club.color}
                  stroke-width="1"
                  stroke="lightgray"
                />
                <text x="50" y={72 + 75 * scoreData.indexOf(club)} fill="black" fontSize="14" fontStyle="italic">
                  {`Score: ${club.score}`}
                </text>
                <rect
                  x="405"
                  y={55 + 75 * scoreData.indexOf(club)}
                  width={club.goals * 4}
                  height="25"
                  fill={club.color}
                  stroke-width="1"
                  stroke="lightgray"
                />
                <text x="450" y={72 + 75 * scoreData.indexOf(club)} fill="black" fontSize="14" fontStyle="italic">
                  {`Goals: ${club.goals}`}
                </text>
              </>
            );
          })}
      </svg>
    </div>
  );
}
