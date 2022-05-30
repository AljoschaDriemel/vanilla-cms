import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <h2>Navbar</h2>
        <Link to="/">Dashboard</Link>
        <Link to="/memberList">Member List</Link>
    </div>
  );
}