import React from "react";


export default function SignUp() {
    return (
      
      <section className="w-full bg-yellow-50 pt-20 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-yellow-50">
            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <p className="mb-2 font-medium text-green-500 uppercase">Sport United</p>
                  <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Create your team in a few clicks.</h2>
                </div>
                <p className="text-2xl text-gray-700">This account is personal and will enable you to manage your team.</p>
                <a href="#_" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-600 ease">Get Started Today</a>
              </div>
            </div>
          </div>
      
                  <div className="w-full mt-16 md:mt-0 md:w-2/5">
        <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
          <div className="overflow-hidden text-center bg-white rounded-md shadow-sm">
            <div className="px-6 py-8">
              <form onsubmit="event.preventDefault();" className>
                <div className="mb-6">
                  <span className="text-sm text-gray-300">Fill out your info below to</span>
                  <h4 className="text-2xl font-semibold text-gray-700">Create your account</h4>
                </div>
                <div className="flex flex-wrap mb-4 -mx-2">
                  <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                    <input className="py-2.5 px-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="text" placeholder="First Name" />
                  </div>
                  <div className="w-full px-2 lg:w-1/2">
                    <input className="py-2.5 px-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="text" placeholder="Last Name" />
                  </div>
                </div>
                <input className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="email" placeholder="Email address" />
                <input className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="password" placeholder="Enter your password" />
                <button className="w-full py-3 mb-4 font-bold text-white rounded hover:bg-green-600 bg-green-500">Sign Up</button>
              </form>
              <p className="text-xs text-gray-400">
                <span className>Already have an account?</span>
                <a className="text-indigo-500" href="#_">Sign In</a>
              </p>
            </div>
           
          </div>
              </div>
          </div>
          </div>
          </div>
           </section>
        
    
    )
}