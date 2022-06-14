import React from "react";


export default function Login() {
    return (
      
        <section className="w-full px-8 py-96 pb-96 pt-20 bg-yellow-50 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p className="font-medium text-green-500 uppercase">SPORT UNITED</p>
              <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Changing The Way You Organize Your Club.
              </h2>
              <p className="text-xl text-gray-600 md:pr-16">
                Log in to join your teams and clubs.
              </p>
            </div>
            <div className="w-full mt-16 md:mt-0 md:w-2/5" >
              <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">
                  Sign in to your Account
                </h3>
                <input className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="email" placeholder="Email address" />
                <input className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="password" placeholder="Enter your password" />
                <div className="block">
                  <button className="w-full px-3 py-4 font-medium text-white bg-green-500 rounded-lg transition hover:bg-green-600">
                    Log Me In
                  </button>
                </div>
                <p className="w-full mt-4 text-sm text-center text-gray-500">
                  Don't have an account?{" "}
                  <a href="#_" className="text-blue-500 underline">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      
    
    )
}