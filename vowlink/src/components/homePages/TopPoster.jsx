
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
     
      
      <main className="flex flex-col items-center justify-center flex-grow py-16 px-4">
      
        <h1 className="text-4xl lg:text-5xl font-bold text-center">Think Fast and Made Simple</h1>
        <p className="text-center mt-4 mb-8">Linguistic Educational Franchise - There is no substitute, Think globally act locally</p>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Get Started</button>
        
      </main>
      

      {/* text and right-side imag */}
<div className='bg-gray-50 px-4 py-10 gap-10 md:flex justify-center'>
  {/* left text */}
  <div className='text-center md:text-left md:mt-10'>
<h1 className='py-2 text-2xl font-bold '>Quality Education . . . By Any Means Necessary.</h1>
<p className='py-2 '>
   We teach, model, and encourage a love of learning ,collaboration 
    and compassion for <br /> others by overcoming
    linguistic barrier.

</p>
<button className='py-2  bg-yellow-400  rounded  px-6'>Sign Up</button>
  </div>
{/* right side image */}
<div className='flex justify-center mt-10 md:mt-0'>
  <img   
  className='h-60'
  src="https://franchising.bisjhintus.com/img/hero.svg" alt="" />

{/* https://img.freepik.com/premium-vector/little-boy-is-holding-laptop-his-hands-concept-online-learning-stay-home-home-education_531064-12029.jpg?w=826 */}
</div>
</div>
    </div>
  );
}

export default ToPoster;
