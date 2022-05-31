import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
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
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Weather API
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              Info Page
            </NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
