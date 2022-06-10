import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="nav-container">
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/memberList"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Member List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calendar"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/infopage"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Info Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/svgtestbed"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              SVG Testbed
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/attendance"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Attendance
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

/* className={({ isActive }) => (isActive ? "link-active" : "link")} */
