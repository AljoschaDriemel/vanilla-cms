import React from "react";




export default function Header() {
 
    return (
        
      
        <section className="w-full px-6 overflow-hidden bg-gray-50">
          <nav
            x-data="{ isOpen: false }"
            className="relative py-6 mx-auto max-w-7xl lg:flex lg:justify-between lg:items-center"
          >
            <div className="relative z-20 flex items-center justify-between ml-0 md:ml-1 lg:ml-2">
              <a
                href="#_"
                className="flex items-center relative -mt-0.5 order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center"
              >
                <span className="text-xl font-black leading-none text-purple-500 select-none logo">
                  Sport United.
                </span>
              </a>
              <div click="isOpen = !isOpen" className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="{ 'hidden': !isOpen }"
              classname="absolute left-0 z-10 items-center justify-between w-full h-full font-medium lg:justify-center lg:flex hidden"
            >
              <div className="flex flex-col p-5 mt-4 space-y-5 text-lg bg-white rounded-lg shadow-xl lg:text-base lg:space-y-0 lg:shadow-none lg:bg-transparent lg:rounded-none lg:p-0 lg:mt-0 lg:flex-row lg:space-x-10 xl:space-x-16">
                <a
                  href="#_"
                  className="text-gray-700 transition duration-150 ease-out hover:text-purple-500"
                >
                  Home
                </a>
                <a
                  href="#_"
                  className="text-gray-700 transition duration-150 ease-out hover:text-purple-500"
                >
                  Features{" "}
                </a>
                <a
                  href="#_"
                  className="text-gray-700 transition duration-150 ease-out hover:text-purple-500"
                >
                  Pricing
                </a>
                <a
                  href="#_"
                  className="text-gray-700 transition duration-150 ease-out hover:text-purple-500"
                >
                  About Us
                </a>
                <a
                  href="#_"
                  className="text-gray-700 transition duration-150 ease-out hover:text-purple-500"
                >
                  Contact{" "}
                </a>
              </div>
            </div>
            <div className="relative z-20 items-center justify-center hidden mt-4 space-x-5 font-medium lg:flex xl:space-x-6 lg:mt-0">
              <a
                href="./Login"
                className="text-purple-500 transition duration-150 ease-out hover:text-purple-500"
              >
                Login
              </a>
              <a
                href="./SignUp"
                className="px-5 py-3 font-medium leading-5 text-center text-white capitalize bg-purple-500 hover:bg-purple-600 lg:mx-0 lg:w-auto"
              >
                Sign Up
              </a>
            </div>
          </nav>
          <div className="pt-24 mx-auto text-center max-w-7xl">
            <div className="flex flex-col items-start max-w-3xl mx-auto space-y-8 sm:block">
              <h1 className="text-5xl font-bold text-left text-gray-800 sm:text-6xl sm:text-center lg:text-7xl xl:text-8xl">
                Organize your sport teams for better management
              </h1>
              <p className="max-w-lg mx-auto text-xl leading-relaxed text-left text-gray-500 sm:text-center">
                Start organizing and managing your teams easier and quicker than ever
                before.
              </p>
              <div className="relative">
                <button className="px-6 py-5 text-xl font-medium leading-5 text-center text-white capitalize bg-purple-500 hover:bg-purple-600 focus:outline-none lg:mx-0 lg:w-auto">
                  Start 14-Day Free Trial
                </button>
                <p className="mt-3 text-sm text-left text-gray-400 sm:text-center">
                  No credit card required
                </p>
              </div>
            </div>
            <div className="flex mt-10 lg:space-x-8 xl:space-x-10">
              <div className="flex justify-end hidden w-1/5 h-36 lg:block lg:-mt-20">
                <div className="w-full h-full p-6 pb-0 bg-white shadow-sm rounded-2xl">
                  <div className="grid grid-cols-12 gap-x-2 gap-y-4">
                    <div className="h-3 col-span-2 bg-purple-300 rounded-full" />
                    <div className="h-3 col-span-6 bg-purple-400 rounded-full" />
                    <div className="h-3 col-span-4 bg-purple-300 rounded-full" />
                    <div className="h-3 col-span-4 bg-gray-300 rounded-full" />
                    <div className="h-3 col-span-3 bg-gray-300 rounded-full" />
                    <div className="h-3 col-span-5 bg-gray-200 rounded-full" />
                    <div className="h-3 col-span-6 bg-purple-400 rounded-full" />
                    <div className="h-3 col-span-4 bg-purple-200 rounded-full" />
                    <div className="h-3 col-span-2 bg-purple-300 rounded-full" />
                    <div className="h-3 col-span-2 bg-gray-300 rounded-full" />
                    <div className="h-3 col-span-6 bg-gray-300 rounded-full" />
                    <div className="h-3 col-span-4 bg-gray-200 rounded-full" />
                  </div>
                </div>
                <div className="w-16 h-16 mt-2 ml-auto overflow-hidden border-8 border-white rounded-full shadow-sm">
                  <img
                    src="https://cdn.devdojo.com/tails/avatars/047.jpg"
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full h-96 lg:w-4/5">
                <div className="w-full h-full p-4 pb-0 bg-white rounded-b-none shadow-sm rounded-2xl">
                  <div className="flex w-full h-full p-4 space-x-4 rounded-b-none bg-gray-50 rounded-2xl">
                    <div className="relative flex flex-col justify-between w-32 h-full p-4 bg-white rounded-2xl">
                      <div className="relative flex justify-center w-full pt-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50">
                          <svg
                            className="w-5 h-5 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="relative space-y-4">
                        <div className="h-2 rounded-full bg-purple-50" />
                        <div className="h-2 rounded-full bg-purple-50" />
                        <div className="h-2 rounded-full bg-purple-50" />
                      </div>
                      <div className="relative flex items-center space-x-2">
                        <div className="flex-shrink-0 w-2 h-2 bg-gray-200 rounded-full" />
                        <div className="w-full h-2 bg-gray-100 rounded-full" />
                      </div>
                    </div>
                    <div className="w-full h-full p-5 bg-white rounded-2xl">
                      <div className="flex flex-col w-full h-full space-x-1">
                        <div className="w-full rounded-lg bg-gray-50 h-28" />
                        <div className="flex w-full mt-2 space-x-2">
                          <div className="w-12 h-12 bg-gray-100 rounded-full" />
                          <div className="flex flex-col space-y-3">
                            <div className="w-32 h-3 mt-2 rounded-full bg-gray-50" />
                            <div className="w-24 h-3 mt-2 rounded-full bg-gray-50" />
                          </div>
                        </div>
                        <div className="flex flex-grow w-full h-full mt-3 space-x-4">
                          <div className="w-full h-full bg-gray-50 rounded-xl" />
                          <div className="w-40 h-full bg-gray-50 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-1/5 h-40 lg:block md:-mt-20">
                <div className="flex flex-col items-center justify-center w-full h-full p-5 space-y-4 bg-white shadow-sm rounded-2xl">
                  <div className="flex items-center justify-center bg-purple-100 rounded-full w-14 h-14">
                    <svg
                      className="w-6 h-6 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div className="w-20 h-3 bg-gray-100 rounded-full" />
                  <div className="w-full h-3 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      
      
);
}