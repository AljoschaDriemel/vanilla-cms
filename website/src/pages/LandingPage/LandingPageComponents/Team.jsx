import React from "react";


export default function Team() {
    return (
    
<section className="relative py-20 overflow-hidden bg-white">
  <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
    <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
  </span>
  <span className="absolute bottom-0 left-0"> </span>
  <div className="relative px-16 mx-auto max-w-7xl">
    <p className="font-medium tracking-wide text-blue-500 uppercase">
      OUR TEAM
    </p>
    <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
      An incredible team of <br />
      amazing individuals
    </h2>
    <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col items-center justify-center col-span-1">
        <div className="relative p-5">
          <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
          <img
            className="relative z-20 w-full rounded-full"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGC9pJ8siDiIQ/profile-displayphoto-shrink_200_200/0/1649326959417?e=1659571200&v=beta&t=S5qNmnIQjinSfilFF1J1hHanA4G_ukf2IFnga2eU8V4"
            alt=""
          />
        </div>
        <div className="mt-3 space-y-2 text-center">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3>Antonio Schmidtgen</h3>
            <p className="text-blue-600">Co-Founder and Frontend Developer</p>
          </div>
          <div className="relative flex items-center justify-center space-x-3">
            <a href="#_" className="text-gray-300 hover:text-gray-400">
            </a>
            <a href="#_" className="text-gray-300 hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-1">
        <div className="relative p-5">
          <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50" />
          <img
            className="relative z-20 w-full rounded-full"
            src="https://media-exp1.licdn.com/dms/image/D4D03AQEEca7IXciYuA/profile-displayphoto-shrink_200_200/0/1646297634560?e=1657152000&v=beta&t=ZfcNspvF1Zw-GELlhzKRJYznst5Upa7yv-CEtFxyTJs"
            alt=""
          />
        </div>
        <div className="mt-3 space-y-2 text-center">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3 className="">Aljoscha Driemel</h3>
            <p className="text-blue-600">Co-Founder and Backend Developer</p>
          </div>
          <div className="relative flex items-center justify-center space-x-3">
            <a href="#_" className="text-gray-300 hover:text-gray-400">
         
            </a>
            <a href="#_" className="text-gray-300 hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-1">
        <div className="relative p-5">
          <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50" />
          <img
            className="relative z-20 w-full rounded-full"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQE9N2_sZjBIcg/profile-displayphoto-shrink_800_800/0/1647555777978?e=1659571200&v=beta&t=bGT0mKHxs7eAcrDIOYhe25c4kZYNNPSqVENOtfPzvgw"
            alt=""
          />
        </div>
        <div className="mt-3 space-y-2 text-center">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3>Dave Rudschewski</h3>
            <p className="text-blue-600">Co-Founder and Backend Developer</p>
          </div>
          <div className="relative flex items-center justify-center space-x-3">
            <a href="#_" className="text-gray-300 hover:text-gray-400">
          
            </a>
            <a href="#_" className="text-gray-300 hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}