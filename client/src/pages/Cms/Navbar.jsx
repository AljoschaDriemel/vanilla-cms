import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="nav-container" className="noprint">
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? { color: "#53ba81", borderColor: "#53ba81" } : { color: "#f9fafb" })}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/memberList"
              style={({ isActive }) =>
                isActive ? { color: "#53ba81", borderColor: "#53ba81", borderColor: "#53ba81" } : { color: "#f9fafb" }
              }
            >
              Member List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calendar"
              style={({ isActive }) => (isActive ? { color: "#53ba81", borderColor: "#53ba81" } : { color: "#f9fafb" })}
            >
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              style={({ isActive }) => (isActive ? { color: "#53ba81", borderColor: "#53ba81" } : { color: "#f9fafb" })}
            >
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/infopage"
              style={({ isActive }) => (isActive ? { color: "#53ba81", borderColor: "#53ba81" } : { color: "#f9fafb" })}
            >
              Info Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/svgtestbed"
              style={({ isActive }) => (isActive ? { color: "#53ba81", borderColor: "#53ba81" } : { color: "#f9fafb" })}
            >
              League Table
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/attendance"
              style={({ isActive }) => (isActive ? { color: "#53ba81" } : { color: "#f9fafb" })}
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
