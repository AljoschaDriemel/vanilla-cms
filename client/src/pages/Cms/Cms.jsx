import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import MemberList from "../../components/MemberList/MemberList";
import AppBar from "./AppBar";
import Navbar from "./Navbar";
import "./cms.css"

export default function Cms() {
  return (
    <>
      <AppBar />
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="memberList" element={<MemberList />} />
        </Routes>
    </>
  );
}
