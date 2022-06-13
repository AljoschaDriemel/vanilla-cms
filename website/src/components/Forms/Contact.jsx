import React from "react";


export default function Contact() {
    return (

      <div className="main" id="section10">
      <div className="py-10 bg-white md:py-16 bg-green-800">
        <div className="flex flex-col  lg:flex-row ">
          <div className="relative w-full bg-cover lg:w-6/12 sm:w-7/12 bg-green-800">
            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <p className="mb-2 font-medium text-gray-900 uppercase">Sport United</p>
                  <h2 className="text-5xl font-bold text-green-500 xl:text-6xl">Send us a message.</h2>
                </div>
                <p className="text-2xl text-gray-300">if you need assistance or have any questions, we are always ready to help.</p>
              </div>
            </div>
          </div>
  <div className="px-10 mx-auto max-w-3xl md:px-16 mt-16 mb-16 bg-yellow-50 border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
    <div className="max-w-3xl mx-auto mb-10 md:mb-10">
      <p className="text-xs font-bold uppercase text-green-500 pt-10">Contact Us</p>
      <h2 className="mt-1 text-2xl font-bold text-left text-gray-800 lg:text-3xl md:mt-2">Would you like to ask us a question?</h2>
      <p className="max-w-screen-md mx-auto mt-4 text-left text-gray-500 md:text-lg md:mt-6">
        Fill out the contact form below and we'll get back to you within 24-48 hours. 
      </p>
    </div>
    <form className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
      <div className>
        <label htmlFor="first-name" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">First name</label>
        <input name="first-name" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
      </div>
      <div className>
        <label htmlFor="last-name" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Last name</label>
        <input name="last-name" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Company</label>
        <input name="company" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Email</label>
        <input name="email" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="subject" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Subject</label>
        <input name="subject" className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base">Message</label>
        <textarea name="message" className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" style={{"height":"111px"}} defaultValue={""} />
      </div>
      <div className="flex items-center justify-between sm:col-span-2">
        <button className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 rounded-md outline-none active:bg-blue-700 ring-blue-300 md:text-base bg-green-500 hover:bg-green-600">Send Message</button>
      </div>
    </form>
    <p className="max-w-3xl mx-auto mt-5 text-xs text-gray-400 pb-10">We will respond within 48 Hours during weekdays. </p>
  </div>
</div>
</div>
</div>

    )
}