// import React from 'react';

// const WhyChoosevl = () => {
//   return (
//     // bg-gray-100
//     <div className=" py-14   px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-extrabold text-white">Why Choose VL Academy?</h2>
//       </div>
//       <div className="flex flex-wrap justify-center items-start">
//         <div className="flex flex-col items-center mx-4 mb-8 max-w-md">
//           <div className="w-24 h-24 bg-yellow-500 text-  flex items-center justify-center rounded-full text-2xl font-bold">
//             1
//           </div>
//           <h3 className="text-xl font-semibold text-white mt-4 text-center">
//             {/* Expert Instructors */}
//             Focus on skills
//             </h3>
//           <p className="mt-2 text-white text-center">
//             {/* Industry professionals who have practical insights and extensive experience in their fields to enhance learning. */}
//             Our programs are centered around developing practical skills that are directly relevant to the job market.
//           </p>
//         </div>
//         <div className="bg-white text-black flex flex-col items-center mx-4 mb-8 max-w-md">
//           <div className="w-24 h-24 bg-yellow-500 text- flex items-center justify-center rounded-full text-2xl font-bold">
//             2
//           </div>
//           <h3 className="text-xl font-semibold text-white mt-4 text-center">
//             {/* Comprehensive Curriculum */}
//             Expert-designed courses
//             </h3>
//           <p className="mt-2 text-white text-center">
//           Our curriculum is crafted by industry experts to ensure its alignment with current industry standards.
//           </p>
//         </div>
//         <div className="flex flex-col items-center mx-4 mb-8 max-w-md">
//           <div className="w-24 h-24 bg-yellow-500 text- flex items-center justify-center rounded-full text-2xl font-bold">
//             3
//           </div>
//           <h3 className="text-xl font-semibold text-white mt-4 text-center">
//           Tailored programs
//             </h3>
//           <p className="mt-2 text-white text-center">
//           We offer a variety of programs to cater to different learning needs and career goals.

//           </p>
//         </div>
//         <div className="flex flex-col items-center mx-4 mb-8 max-w-md">
//           <div className="w-24 h-24 bg-yellow-500 text-  flex items-center justify-center rounded-full text-2xl font-bold">
//             4
//           </div>
//           <h3 className="text-xl font-semibold text-white mt-4 text-center">
//             {/* Hands-on Training */}
//             Engaging learning experience
//             </h3>
//           <p className="mt-2 text-white text-center">
//           Our courses are designed to be interactive and enjoyable, making learning an effective and rewarding process.
//             {/* Practical, hands-on projects and assignments help students apply their knowledge and build real-world skills. Opportunities for internships and industry collaborations provide practical experience. */}
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default WhyChoosevl;

import React from "react";

const ResponsiveSection = () => {
  return (
    <div className="font-type bg-white py-16 text-white">
      <div className=" bg-gradient-to-r   bg-[#683695] rounded-3xl container mx-auto px-4 ">
        <h2 className="   pt-10 text-4xl font-bold text-center mb-8 ">
          Why Choose VL Academy?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-5  gap-4 p-4 pb-20  md:space-x-">
          
          <div className="hover:bg-white  hover:text-black rounded-2xl shadow-2xl p-2 flex-1 mb- ml- md:ml- md:mb-0
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Specialized Business Curriculum:
            </h3>
            <p className="text-lg">
              Our courses cover everything from 
              entrepreneurship basics to advanced 
              {/* <br /> */}
             strategies in management, finance,
             {/* <br /> */}
              and marketing.
            </p>
          </div>
          <div className="hover:bg-white hover:text-black rounded-2xl  shadow-2xl p-2 flex-1 mb- md:mb-0
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4"> Expert Mentors:</h3>
            <p className="text-lg">
              Learn from industry leaders and successful entrepreneurs with
              real-world experience.
            </p>
          </div>

          <div className="hover:bg-white hover:text-black  rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4"> Hands-on Learning</h3>
            <p className="text-lg">
              Apply your knowledge through practical projects and simulations
              for real-world impact.
            </p>
          </div>

          <div className="hover:bg-white hover:text-black rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4"> Flexible Options:</h3>
            <p className="text-lg">
              Choose from self-paced or live sessions that fit your schedule,
              whether you're a full-time student or a working professional.
            </p>
          </div>

          <div className="hover:bg-white hover:text-black  rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Community and Networking:
            </h3>
            <p className="text-lg">
              Connect with a dynamic network of peers, mentors, and
              professionals, and collaborate on projects that can lead to
              business opportunities.
            </p>
          </div>
          <div className="hover:bg-white hover:text-black rounded-2xl shadow-2xl p-2 flex-1
           transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">
              {" "}
              Pathway to Earning:
            </h3>
            <p className="text-lg">
              Gain the tools and resources to start earning and building your
              business while you learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSection;
