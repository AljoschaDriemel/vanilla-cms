import React from "react";
import Header from "./Header";
import Logos from "./Logos";
import Content from "./Content";
import Team from "./Team";
import CallToAction from "./CallToAction";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Footer from "./Footer"
import Contact from '../../components/Forms/Contact';


export default function LandingPageRoutes() {
    return (

        <div>
   

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