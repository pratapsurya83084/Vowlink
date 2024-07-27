// import React from "react";
// const imgurl =
//   "https://img.freepik.com/premium-photo/skills-education-learning-personal-development-competency-business-concept_524876-490.jpg?w=1380";

// const AboutSections = () => {
//   return (
//     <div
//       className=" bg-cover bg-center py-16 opacity60 text-white"
//       style={{ backgroundImage: `url(${imgurl})` }}
//     >
//       {/* <div className=" inset-0 bg-black opacity-50"></div> */}
//       <div className=" container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold">About</h2>
//           <h3 className="text-4xl font-bold text-yellow-400">
//            Vowlink Learning
//           </h3>
//         </div>
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <p className="text-lg ">
//           Vowlink Learning is a skill-focused educational 
//           platform dedicated to transforming lives through high-quality,
//            comprehensive courses. Recognizing the dynamic nature of today's
//             job market, we offer expertly designed programs tailored to
//            meet the evolving demands of various career stages.
//           </p>
//           <p className="text-lg mt-4">
//           Whether you're aiming to enhance your existing skill set,
//            embark on a career change, or just starting your professional
//             journey, Vowlink Learning has a program designed specifically for you.
//              Our commitment lies in providing engaging and unique learning experiences
//               that equip individuals with the necessary 
//           skills to succeed in their chosen paths.

//           </p>
//         </div>

      

//         <div className="flex justify-center space-x-4">
        
//           <button className="bg-  border border-yellow-400 text-yellow-400 px-6 py-3 rounded-md">
//          Learn more about
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSections;



// import React from "react";

// const AboutSections = () => {
//   return (
//     <div className="bg-white  relative bg-gradient-to-r from-white-700 to-white-900 py-16 text-white">
//       <div className="absolute inset-0 "></div>
//       {/* mx-auto */}
//       <div className="relative container mx-auto px- py-16">
//         {/* <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold animate-fadeIn">About</h2>
//           <h3 className="text-4xl font-bold text-yellow-400 animate-fadeIn animation-delay-500">
//             Vowlink Learning
//           </h3>
//         </div> */}

//         <div className=" flex flex-col items-center justify-center p-6">
//           <div className="md:flex md:items-center md:justify-center md:space-x-8">
//             <div className="md:hidden  md:mb- mb- lg:mb-10">
//           <h2 className="text-4xl text-center text-black font-bold animate-fadeIn ">
//             About  Vowlink
//             </h2>
//           {/* <h3 className="text-4xl font-bold text-yellow-400 animate-fadeIn animation-delay-500">
//             Vowlink Learning
//           </h3> */}
//         </div>
//             <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-left">
//               <img
//                 src="https://img.freepik.com/free-photo/business-marketing-strategy-plan-operations_53876-13784.jpg?t=st=1722075354~exp=1722078954~hmac=f4f5dc20091a4b336cdc3ee5d699c3b4c25b000e969b21110fb1d25355897b0f&w=740"
//                 alt="Vowlink Learning"
//                 className="w-full max-w-lg rounded-lg transform transition-transform duration-700 hover:scale-105 animate-slideInLeft"
//               />
//             </div>
//             <div className="text-center md:text-left md:w-1/2 mt-6 md:mt-0 animate-slideInRight">
//             <div className="md:flex hidden md:mb- mb- lg:mb-10">
//           <h2 className="md:text-3xl lg:text-5xl text-black font-bold animate-fadeIn text-left">
//             About  Vowlink
//             </h2>
//           {/* <h3 className="text-4xl font-bold text-yellow-400 animate-fadeIn animation-delay-500">
//             Vowlink Learning
//           </h3> */}
//         </div>
//               <p className="text-lg md:text-xl mt-5 text-black">
//                 Welcome to Vowlink, an innovative e-learning platform tailored
//                 exclusively for aspiring business leaders and entrepreneurs. At
//                 Vowlink, we believe in empowering individuals with the
//                 knowledge, skills, and tools necessary to turn their ambitions
//                 into successful ventures. Our unique "Learn, Earn, and Build
//                 Your Business Empire!" approach is designed to guide you through
//                 the entire journey of becoming a business professional, from
//                 foundational learning to practical implementation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSections;








import React from "react";

const AboutSections = () => {
  return (
    <div className="font-type relative bg-gradient-to-r from-white to-white-900 py-16 text-black">
      <div className="absolute inset-0"></div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center p-6">
          <div className="md:flex md:items-center md:justify-center md:space-x-8">
            <div className="md:hidden mb-20 ">
              <h2 className="text-4xl text-center font-bold animate-fadeIn">
                About Vowlink
              </h2>
            </div>
            <div className="relative mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-left">
              <div className="absolute inset-y-0 left-0 w-full transform -translate-x-10 md:w-2/3 dotted-background"></div>
              <div className="relative w-full z-10">
                <img
                  src="https://img.freepik.com/free-photo/business-marketing-strategy-plan-operations_53876-13784.jpg?t=st=1722075354~exp=1722078954~hmac=f4f5dc20091a4b336cdc3ee5d699c3b4c25b000e969b21110fb1d25355897b0f&w=740"
                  alt="Vowlink Learning"
                  className="w-full max-w-lg rounded-lg transform transition-transform duration-700 hover:scale-105 animate-slideInLeft relative"
                />
              </div>
            </div>
            <div className="text-center md:text-left md:w-1/2 mt-6 md:mt-0 animate-slideInRight">
              <div className="md:flex hidden mb-6 lg:mb-10">
                <h2 className="md:text-3xl lg:text-5xl font-bold animate-fadeIn text-left">
                  About Vowlink
                </h2>
              </div>
              <p className="text-lg md:text-xl mt-5">
                Welcome to Vowlink, an innovative e-learning platform tailored
                exclusively for aspiring business leaders and entrepreneurs. At
                Vowlink, we believe in empowering individuals with the
                knowledge, skills, and tools necessary to turn their ambitions
                into successful ventures. Our unique "Learn, Earn, and Build
                Your Business Empire!" approach is designed to guide you through
                the entire journey of becoming a business professional, from
                foundational learning to practical implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;

