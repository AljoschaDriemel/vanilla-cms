import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./LandingPageComponents/Header";
import Logos from "./LandingPageComponents/Logos";
import Content from "./LandingPageComponents/Content";
import Team from "./LandingPageComponents/Team";
import CallToAction from "./LandingPageComponents/CallToAction";
import Testimonials from "./LandingPageComponents/Testimonials";
import Pricing from "./LandingPageComponents/Pricing";
import Footer from "./LandingPageComponents/Footer"
import Navigation from "./LandingPageComponents/Navigations";
import Login from "../components/Forms/Login";
import SignUp from "../components/Forms/SignUp";
import Contact from '../components/Forms/Contact';


export default function LandingPage() {
    return (

        <div>
        

   <Navigation />
   

   <Routes>
 
    <Route path="/login" element={<Login/>} />
    <Route path="/SignUp" element={<SignUp/>} />
    </Routes>
   

   <Header />
    <Content />
    <Logos />
    <Team />
    <CallToAction />
   <Testimonials /> 
    <Pricing /> 
    <Contact />
    <Footer />

        </div>
    
    )
}