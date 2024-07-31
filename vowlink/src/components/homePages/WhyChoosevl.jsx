

import React from "react";

const ResponsiveSection = () => {
  return (
    <div className="font-jost bg-white py-16 text-white">
      <div className=" bg-gradient-to-r   bg-[#683695] md:rounded-3xl container mx-auto px-4 ">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl    pt-10 font-bold text-center mb-5 ">
        Why Choose VL Academy Franchise?
        </h2>
          <h3 className="text-center  mb-10 text-lg  sm:text-xl">
             As a franchise partner, you'll help shape future leaders 
             and drive success in the global marketplace. <br />
              Partner with us to make a lasting impact.
          </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-5  gap-4 p-4 pb-10  md:space-x-">
          {/* box1 */}
          <div className="hover:bg-white  hover:text-black rounded-2xl shadow-2xl p-2 flex-1 mb- ml- md:ml- md:mb-0
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Proven Success Model
            </h3>
            <p className="text-lg">
            Track Record of Excellence : Join a franchise with a history of
             empowering successful entrepreneurs.
            Comprehensive Curriculum : Leverage our expertly 
            designed courses to deliver top-notch business education.
            </p>
          </div>
          {/* box2 */}
          <div className="hover:bg-white hover:text-black rounded-2xl  shadow-2xl p-2 flex-1 mb- md:mb-0
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
            Innovative Learning Approach :</h3>
            <p className="text-lg">
            "Learn, Earn, and Build Your Business Empire!" :
             A unique methodology that combines theoretical knowledge 
             with practical application.
Cutting-Edge Technology : Utilize the latest
 in e-learning tools to enhance the educational experience.

            </p>
          </div>

{/* box3 */}
          <div className="hover:bg-white hover:text-black  rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4"> Extensive Support and Training :</h3>
            <p className="text-lg">
            Ongoing Training Programs : Benefit from continuous training to ensure you and your 
            team are always at 
            the forefront of business education.
Dedicated Support Team : Access to a dedicated team for operational and technical support.

            </p>
          </div>

{/* box4 */}
          <div className="hover:bg-white hover:text-black rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">High Demand Market :</h3>
            <p className="text-lg">
            Growing Need for Business Education : Tap into the increasing demand
             for business leaders and entrepreneurs.
            Diverse Audience : Cater to a broad demographic, including students,
             professionals, and aspiring entrepreneurs.

            </p>
          </div>
        {/* box5 */}
          <div className="hover:bg-white hover:text-black  rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Strong Brand Recognition
              :
            </h3>
            <p className="text-lg">
            Established Brand : Partner with 
            a well-known and respected name in the industry.
              Marketing and Branding Support :
               Receive comprehensive marketing materials and branding 
               guidelines to help you succeed.

            </p>
          </div>
        {/* box6 */}
          <div className="hover:bg-white hover:text-black rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Lucrative Financial Opportunities :
            </h3>
            <p className="text-lg">
            Attractive ROI : Enjoy a business model designed to 
            deliver substantial returns on investment.
           Multiple Revenue Streams : Benefit from various income
            channels, including course fees, workshops, and consultancy services.

            </p>
          </div>

          {/* box7 */}
          <div className="hover:bg-white hover:text-black rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Global Reach :
            </h3>
            <p className="text-lg">
            Expand Your Business Internationally : Leverage our global 
            network to reach learners worldwide.
            Cross-Cultural Appeal : Offer courses
             that are relevant and appealing to a diverse,
              international audience.

            </p>
          </div>

  {/* box8 */}
  <div className="hover:bg-white hover:text-black rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Flexibility and Autonomy :
            </h3>
            <p className="text-lg">
            Be Your Own Boss : Enjoy the freedom of running your own 
            business with the backing of a successful franchise.
           Tailored Business Solutions : Adapt our offerings
            to suit your local market needs and personal business goals.


            </p>
          </div>

{/* box9 */}
<div className="hover:bg-white hover:text-black rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Exclusive Access to Resources :
            </h3>
            <p className="text-lg">
            Premium Content Library : Access a vast array of
             high-quality educational materials and resources.
        Industry Insights and Updates : Stay ahead with the latest
         trends and insights in the business education sector.



            </p>
          </div>

{/* box10*/}
<div className="hover:bg-white hover:text-black rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Community and Networking :
            </h3>
            <p className="text-lg">
            Join a Community of Entrepreneurs : Be part of a network
             of like-minded business owners and entrepreneurs.
            Networking Opportunities : Attend exclusive events and
             forums to connect with industry leaders and peers.




            </p>
          </div>
        </div>
         {/* button */}
         <div className="flex justify-center pb-10">
                <button className="bg-orange-500 text-white font-bold px-14 text-xl py-4 mt-10 rounded-lg">Start Now</button>
              </div>
      </div>
    </div>
  );
};

export default ResponsiveSection;
