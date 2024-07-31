

import React from "react";

const AboutSections = () => {
  return (
    // bg-gradient-to-r  from-white to-white-900
    <div className="font-jost relative bg-white  py-16 text-black">
      <div className="absolute inset-0"></div>
      {/* sm:py-16 */}
      <div className="relative container mx-auto px-4 ">
        <div className="flex flex-col items-center justify-center p-6">
          <div className="md:flex md:items-center md:justify-center md:space-x-8">
            {/* show small size device */}
            <div className="md:hidden mb-20 ">
              <h2 className="text-2xl sm:text-4xl  text-center font-bold animate-fadeIn">
                About Vowlink
              </h2>
            </div>
            <div className="relative mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-left">
              <div className="absolute inset-y-0 left-0 w-full transform -translate-x-10 md:w-2/3 dotted-background"></div>
              <div className="relative w-full z-10">
                <img
                  src="https://img.freepik.com/free-photo/business-marketing-strategy-plan-operations_53876-13784.jpg?t=st=1722250007~exp=1722253607~hmac=21cc9a327e788ef2b964ba1ab3219bcd1dfce190dcbef9a8bc3a4956fbc631d4&w=740"
                  alt="Vowlink Learning"
                  className="w-full max-w-lg rounded-lg transform transition-transform duration-700 hover:scale-105 animate-slideInLeft relative"
                />
              </div>
            </div>
            <div className=" md:text-left md:w-1/2 mt-6 md:mt-0 animate-slideInRight">
              <div className="md:flex hidden mb-6 lg:mb-10">
                <h2 className="md:text-4xl lg:text-5xl font-bold animate-fadeIn text-left">
                  About Vowlink
                </h2>
              </div>
              <p className="text-lg text-left md:text-xl mt-5">
                Welcome to Vowlink or VL Academy,
                 the premier offline learning
                platform for aspiring business 
                leaders and entrepreneurs. <br />
                <span className=" font-bold text-center block mt-5 mb-0">Our Learn, Earn, and  Build Your 
                  Business Empire!</span> <br />
                The approach empowers you with the
                 knowledge, skills, and tools to turn
                  your ambitions into successful ventures.
                   Join our franchise and start your transformative 
                   journey today.
              </p>
              

              {/* button */}
              <div className="flex justify-center ">
                <button className="bg-orange-500 text-white font-bold px-10 py-3 mt-10 rounded-lg">Starts Now</button>
              </div>
              
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
