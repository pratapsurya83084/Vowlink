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



import React from "react";

const imgurl =
  "https://img.freepik.com/premium-photo/skills-education-learning-personal-development-competency-business-concept_524876-490.jpg?w=1380";

const AboutSections = () => {
  return (
    <div
      className="bg-cover bg-center py-16 text-white relative"
      style={{ backgroundImage: `url(${imgurl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black animate-gradient-x opacity-70"></div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About</h2>
          <h3 className="text-4xl font-bold text-yellow-400">Vowlink Learning</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="transform transition duration-500 hover:scale-105">
            <div className="bg-white text-black p-8 rounded-xl shadow-lg bg-opacity-70 hover:bg-opacity-90 transition duration-500 h-72 flex items-center justify-center">
              {/* <h4 className="text-2xl font-semibold mb-4">Our Mission</h4> */}
              <p className="text-lg text-center">
                Vowlink Learning is a skill-focused educational platform
                dedicated to transforming lives through high-quality,
                comprehensive courses. Recognizing the dynamic nature of
                today's job market, we offer expertly designed programs
                tailored to meet the evolving demands of various career
                stages.
                Whether you're aiming to enhance your existing skill set,
                embark on a career change, or just starting your professional
                journey, Vowlink Learning has a program designed specifically
                for you. Our commitment lies in providing engaging and unique
                learning experiences that equip individuals with the necessary
                skills to succeed in their chosen paths.
              </p>
            </div>
          </div>
         
                {/* Whether you're aiming to enhance your existing skill set,
                embark on a career change, or just starting your professional
                journey, Vowlink Learning has a program designed specifically
                for you. Our commitment lies in providing engaging and unique
                learning experiences that equip individuals with the necessary
                skills to succeed in their chosen paths. */}
            
          <div className="flex justify-center items-center">
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
         Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;











// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div
//       className="py-12 px-8 text-white font-sans"
//       style={{
//         backgroundImage: `url(https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Mask_groupaa.webp)`,
//         backgroundPosition: 'inherit',
//         backgroundSize: '100% 100%',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <div className="mb-3">
//         <h4 className="text-2xl">Imarticus Infinity Edge</h4>
//       </div>
//       <div className="mb-8">
//         <p>
//           Become limitless with infinite possibilities.
//           <br />
//           Our leading-edge training programs enable individual and organizational growth through a consistent and holistic approach.
//         </p>
//       </div>
//       <div className="mb-8">
//         <h2 className="text-3xl">Mentorship</h2>
//         <p>
//           Education is most effective when learners and trainers share a common goal. Our accomplished faculty is dedicated to your success and will guide you along the way.
//         </p>
//       </div>
//       <div className="flex justify-center space-x-8">
//         <div className="text-center">
//           <img
//             src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group 2760.svg"
//             alt="Academic Mentors"
//             className="mx-auto"
//           />
//           <p className="text-3xl font-bold">150+</p>
//           <p>Academic Mentors</p>
//         </div>
//         <div className="text-center">
//           <img
//             src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Vector(1).svg"
//             alt="Industry Mentors"
//             className="mx-auto"
//           />
//           <p className="text-3xl font-bold">350+</p>
//           <p>Industry Mentors</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
