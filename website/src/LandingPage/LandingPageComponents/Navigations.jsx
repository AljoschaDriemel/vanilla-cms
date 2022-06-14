import React from "react";
import { Link } from "react-router-dom";




export default function Navigation() {
  
 
    return (
        
     
        <section className="w-full bg-gray-900 sticky top-0 z-50">
  <div className="mx-auto flex max-w-7xl items-center h-16 box-content py-1 justify-between">
    <div className="flex items-center space-x-2 p-4">
    <a href="/" class="flex items-center relative -mt-0.5 order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center">
                <span class="text-2xl font-black leading-none text-green-500 ">Sport United.</span>
            </a>
    </div>
    <nav className="md:relative md:w-auto w-full md:mt-0 mt-16 translate-y-2 md:translate-y-0 top-0 md:pb-0 pb-3 bg-gray-900 md:bg-transparent absolute items-center md:space-x-2 text-sm font-medium text-gray-300 md:flex hidden ">
      
    <div class="main" id="section1">
       <a href="/" className="md:rounded bg-gray-900 md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-800 md:inline block md:w-auto w-full">Home</a>
      </div>

      <div class="main" id="section3">
      <a href="#section4" className="md:rounded bg-gray-900 md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-800 md:inline block md:w-auto w-full" >Features</a>
      </div>

      <div class="main" id="section5">
       <a href="#section6" className="md:rounded bg-gray-900 md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-800 md:inline block md:w-auto w-full">Pricing</a>
      </div>
      
      <a href="#_" className="md:rounded bg-gray-900 md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-800 md:inline block md:w-auto w-full">About Us</a>

      <div class="main" id="section9">
      <a href="#section10" className="md:rounded bg-gray-900 md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-800 md:inline block md:w-auto w-full">Contact</a>
      </div>
    </nav>
    <div className="flex items-center space-x-2 text-sm pr-4 font-medium text-gray-800">
      <a href="./login" className="inline rounded bg-gray-900 px-3 py-2 text-gray-300 hover:text-gray-200 transition hover:bg-gray-800">Login</a>
      <a href="./signUp" className="rounded bg-green-500 px-3 py-2 text-white transition hover:bg-green-600">Sign Up</a>
     
    </div>
  </div>
</section>


    )
};