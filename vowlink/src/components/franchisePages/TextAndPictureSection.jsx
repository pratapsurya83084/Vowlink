// import React from "react";

// const TextAndPictureSection = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center px-10 py-8">
//       {/* Image left */}
//       <div className="hidden md:flex  md:w-1/2  justify-center mb-8 md:mb-0">
//         <img
//           src="\employees-discussing-office.jpg"
//           alt="Educatus"
//           className="max-w-full h-auto"
//         />
//       </div>

//       {/* Text right */}
//       <div className="md:w-1/2 flex flex-col items-center md:items-start">
//         <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
//         Purpose and Goals :
//         </h1>
//         <p className="">
       
//         Vowlink's mission : Empower entrepreneurs, transform
//          education. We provide training, resources, and 
//          support to build successful e-learning franchises,
//           creating a positive impact on communities.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TextAndPictureSection;


import React from 'react'

const TextAndPictureSection = () => {
  return (
    <div>
      <section class="text-white body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="hidden md:flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" 
      src="\employees-discussing-office.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font md:text-xl text-lg mb-4 font-medium ">
      Purpose and Goals:
Vowlink's mission: Empower entrepreneurs, 
transform education. We provide training,
 resources, and support to build successful
  e-learning franchises, creating a positive 
  impact on communities.
        </h1>
     
      
     
    </div>
  </div>
</section>
    </div>
  )
}

export default TextAndPictureSection
