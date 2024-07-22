
// import React from "react";

// const TopPoster = () => {
//   return (
//     <div className="">
//       <main className="container mx-auto px-6 mt-10 py-12">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 text-center lg:text-left">
//             <h1 className="text-4xl font-bold mb-4">
//               Let's Supercharge Your Career
//             </h1>
//             <p className="text-lg mb-6">
//               Empowering a new generation of professionals.
//             </p>
//             <div className="grid grid-cols-3 md:flex-row md:space-x-10 px-0 mx-0 space-x-0 space-y-4 md:space-y-0">
//               <div className="text-center">
//                 <p className="text-xl font-bold mt-5 sm:mt-0">75,000+</p>
//                 <p>Placements</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-xl font-bold">50,000+</p>
//                 <p>Career Transitions</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-xl font-bold">20+</p>
//                 <p>Courses and Programs</p>
//               </div>
//             </div>
//             <button className="mt-6 bg-yellow-500 text-black py-2 px-4 rounded">
//               Enquire Now
//             </button>
//           </div>

//           <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
//             <img
//               src="https://img.freepik.com/premium-vector/little-boy-is-holding-laptop-his-hands-concept-online-learning-stay-home-home-education_531064-12029.jpg?w=826"
//               alt="Career Image"
//               className="w-3/4 lg:w-full"
//             />
//           </div>
//         </div>
//       </main>

//       {/* Add logos or names of the partners here */}
//     </div>
//   );
// };

// export default TopPoster;


import React from 'react';


const ToPoster=()=> {
  return (
    <div className=" mt-10 md:mt-10 flex flex-col  bg-white text-black">
     
      
     <main className="flex flex-col items-center mt-5 justify-center flex-grow py-0 px- relative">
    <img 
    src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // src="/vowlink_bg_image.avif"
         className="object-cover object-center h-full opacity-70 md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[600px] w-full"
         alt="Learning Course Image" />
    <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-70 backdrop-blur-xs" style={{ zIndex: 10 }}>
        <h1 className=" xs:text-xl sm:text-3xl mt-32 md:text-4xl lg:text-7xl font-bold text-center">Harness your skill-set with us</h1>
        <p className="text-center mt-4 mb-8 text-sm xs:text-xl sm:text-2xl text-black px-2 font-bold">
            Global platform providing quality vocational courses and education
        </p>
        {/* <button className="border mt-5 border-blue-500 bg-yellow-400 text-black px-5 md:px-10 py-2 rounded">Get Started</button> */}
    </div>
</main>



    </div>
  );
}

export default ToPoster;
