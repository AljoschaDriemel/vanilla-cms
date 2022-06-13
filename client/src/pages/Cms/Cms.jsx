import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import MemberList from "../../components/MemberList/MemberList";
import AppBar from "./AppBar";
import Navbar from "./Navbar";
import "./cms.css";
import Calendar from "../../components/Calendar/calendar";
import Weather from "../../components/Weather/Weather";
import InfoPage from "../../components/InfoPage/InfoPage";
import LoginForm from "../../components/LoginForm/LoginForm";
import SvgTestbed from "../../components/SvgTestbed/SvgTestbed";
import AttendanceList from "../../components/AttendanceList/AttendanceList";

export default function Cms() {
  const adminUser = {
    email: "a@a",
    password: "a",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not Match!");
      setError("Details do not Match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      {user.email !== "" ? (
        <div>
          {/* <h2>
            Welcome back, <span>{user.name}</span>
          </h2> */}
          <button
            className="noprint"
            onClick={Logout}
            style={{ position: "absolute", margin:"18px 830px", padding: "7px" }}
          >
            Logout
          </button>
          <AppBar />
          <Navbar />
          <Routes className="test">
            <Route path="/" element={<Dashboard />} />
            <Route path="memberList" element={<MemberList />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="weather" element={<Weather />} />
            <Route path="infopage" element={<InfoPage />} />
            <Route path="svgtestbed" element={<SvgTestbed />} />
            <Route path="attendance" element={<AttendanceList />} />
          </Routes>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
