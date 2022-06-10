import React from "react";


export default function Testimonials() {
    return (
        
        <section className="relative block pt-20 pb-24 overflow-hidden text-left bg-gray-800">
  <div className="w-full px-20 mx-auto text-left md:px-10 max-w-7xl xl:px-16">
    <div className="box-border flex flex-col flex-wrap justify-center -mx-4">
      <div className="relative w-full mb-12 leading-6 text-left xl:flex-grow-0 xl:flex-shrink-0">
        <h2 className="box-border mx-0 mt-0 font-sans text-4xl font-bold text-center text-green-500">
          Testimonials
        </h2>
        <p className="w-full mt-2 text-center text-green-600">Don't just take our word for it. See what others have said about us.</p>
      </div>
    </div>
    <div className="box-border flex grid flex-wrap justify-center gap-10 -mx-4 text-center md:grid-cols-2 lg:gap-16 lg:justify-start lg:text-left">
      <div className="flex col-span-1">
        <div className="relative flex-shrink-0 w-20 h-20 text-left">
          <img src="https://cdn.devdojo.com/tails/avatars/039.jpg" className="w-20 h-20 rounded-full" alt="" />
        </div>
        <div className="relative px-4 mb-16 leading-6 text-left">
          <div className="box-border text-lg font-medium text-gray-400">
            "  Sport United automatic invitations and reminders save me a couple hours a week. No need to call or text the slackers anymore! The website and the app are so intuitive and easy-to-use... Two thumbs up! "
          </div>
          <div className="box-border mt-5 text-sm font-semibold text-green-600 uppercase">
            Alkis Kastrisios
          </div>
          <div className="box-border text-left text-gray-500" /* style={ "auto;"} */>
            DCI gGmbH
          </div>
        </div>
      </div>
      <div className="flex col-span-1">
        <div className="relative flex-shrink-0 w-20 h-20 text-left">
          <img src="https://cdn.devdojo.com/tails/avatars/087.jpg" className="w-20 h-20 rounded-full" alt="" />
        </div>
        <div className="relative px-4 mb-16 leading-6 text-left">
          <div className="box-border text-lg font-medium text-gray-400">
            "  We needed to centralize a maximum of information (calendar, player data), and the dozens of email responses received after each event invitation were becoming very complicated to manage. Sport United was a huge milestone for us. "
          </div>
          <div className="box-border mt-5 text-sm font-semibold text-green-600  uppercase">
            Tanya Todorova
          </div>
          <div className="box-border text-left text-gray-500" style={{"quotes":"auto"}}>
            Another Company Name
          </div>
        </div>
      </div>
      <div className="flex col-span-1">
        <div className="relative flex-shrink-0 w-20 h-20 text-left">
          <img src="https://cdn.devdojo.com/tails/avatars/094.jpg" className="w-20 h-20 rounded-full" alt="" />
        </div>
        <div className="relative px-4 mb-5 leading-6 text-left">
          <div className="box-border text-lg font-medium text-gray-400">
            " Sport United allows me to track all my players' stats: goals, assists, yellow cards... In 10 years, we'll have online access to our team's complete history, just like professional teams!  "
          </div>
          <div className="box-border mt-5 text-sm font-semibold text-green-600  uppercase">
          Muhasin Mahmud
          </div>
          <div className="box-border text-left text-gray-500" style={{"quotes":"auto"}}>
            Cool Company
          </div>
        </div>
      </div>
      <div className="flex col-span-1">
        <div className="relative flex-shrink-0 w-20 h-20 text-left">
          <img src="https://cdn.devdojo.com/tails/avatars/099.jpg" className="w-20 h-20 rounded-full" alt="" />
        </div>
        <div className="relative px-4 mb-5 leading-6 text-left">
          <div className="box-border text-lg font-medium text-gray-400">
           " Sport united allows me to centralize in a single tool all the information related to my children's sports activities. We save a lot of time every week by knowing where the events take place, at what time, and if we have to bring something special to the event. It's a great help in our family's daily life. "
          </div>
          <div className="box-border mt-5 text-sm font-semibold text-green-600  uppercase">
          Kevin Kötz
          </div>
          <div className="box-border text-left text-gray-500" style={{"quotes":"auto"}}>
            Rad Company
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}