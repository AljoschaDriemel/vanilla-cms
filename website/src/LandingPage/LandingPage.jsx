import React from "react";
import {Routes, Route} from "react-router-dom";

import Navigation from "./LandingPageComponents/Navigations";
import Login from "../components/Forms/Login";
import SignUp from "../components/Forms/SignUp";

import LandingPageRoutes from "./LandingPageComponents/LandingPageRoutes";


export default function LandingPage() {
    return (

        <div>
        

   <Navigation />
   

   <Routes>
   <Route path="/" element={<LandingPageRoutes/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/SignUp" element={<SignUp/>} />

    
    </Routes>
   



        </div>
    
    )
}