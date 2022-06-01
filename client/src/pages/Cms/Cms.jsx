import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import MemberList from "../../components/MemberList/MemberList";
import AppBar from "./AppBar";
import Navbar from "./Navbar";
import "./cms.css"
import Calendar from "../../components/Calendar/calendar";
import Weather from "../../components/Weather/Weather";
import InfoPage from "../../components/InfoPage/InfoPage";

export default function Cms() {
  return (
    <>
      <AppBar />
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="memberList" element={<MemberList />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="weather" element={<Weather />} />
          <Route path="infopage" element={<InfoPage />} />
        </Routes> 
    </>
  );
}
