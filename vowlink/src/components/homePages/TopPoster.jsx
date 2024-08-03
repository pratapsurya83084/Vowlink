


import React from 'react';

const LandingPage = () => {
  return (
   

<section className="font-jost m-6 md:m-20 pb-10 md:pb-0   bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-xl body-font bg-transparent relative">
  <div className="container mx-auto flex md:flex-row flex-col lg:gap-24 md:px-1 lg:px-10 py-4  md:py-24  items-center">
  {/* left side text  ,lg:flex-grow*/}
  <div className=" md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-6">
      <div className="title-font text-3xl sm:text-4xl flex-wrap   xl:text-5xl  lg:whitespace-nowrap  mb-4 font-medium text-white animate-fadeIn drop-shadow-lg">
        {/* Learn, Grow and Thrive  with us! */}
        Learn, Earn, and Build Your  
        <br className='hidden md:flex' />
         <h2 className='md:mt-2'>Business Future with VL <br className='hidden md:flex'/> Academy</h2>
      </div>
      <p className="text-sm sm:text-lg mb-8 leading-relaxed text-white animate-fadeIn drop-shadow-lg">
        {/* Global platform providing quality vocational courses and education */}
        Transform Your Career and Business Prospects with Our World-Class Franchise Program

      </p>
      <div className="flex justify-center">
        <button className="bg-orange-500 px-6 py-3 rounded text-white font-bold hover:bg-orange-600 transition-all shadow-lg animate-bounce">
          ENQUIRE NOW
        </button>
      </div>
    </div>
    {/* img right side */}
    <div className="lg:max-w-lg  lg:w-full md:mr-5 md:w-1/2 w-5/6 relative">
      <div className="relative p-  border border-white bg-opacity-30 rounded-lg shadow-lg">
      {/* border-4 ,border-purple-500*/}
        <img className="object-cover object-center rounded   animate-slideIn" alt="hero"
          // src="/buisness_vowlinkpostter-removebg.png"
          src='\two-young-office-workers-offering-their-hands-handshake.png'
          />
      </div>
    </div>
  </div>
</section>


  );
};

export default LandingPage;




// 2nd poster
// import React from 'react';


// const ToPoster=()=> {
//   return (
//     <div className=" flex flex-col  bg-white text-black">
     
      
//      <main className="flex flex-col items-center mt- justify-center flex-grow py-0 px- relative">
//     <img 
//     // src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//    src="https://img.freepik.com/premium-photo/happy-young-asian-indian-college-students-reading-generative-ai_849906-11044.jpg?w=1480"
//     // src="/vowlink_bg_image.avif"
//          className="object-cover object-center h-full opacity-70 md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[600px] w-full"
//          alt="Learning Course Image" />
//     <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-70 backdrop-blur-xs" style={{ zIndex: 10 }}>
//         <h1 className="text-2xl sm:text-3xl mt-32 md:text-4xl lg:text-7xl font-bold 
//         text-center">
//          Learn, Grow, Thrive with us!
//           </h1>
//         <p className="text-center mt-4 mb-8 text-sm xs:text-xl sm:text-2xl text-black px-2 font-bold">
//         Global platform providing quality vocational courses and education
//         </p>
//         {/* <button className="border mt-5 border-blue-500 bg-yellow-400 text-black px-5 md:px-10 py-2 rounded">Get Started</button> */}
//     </div>
// </main>



//     </div>
//   );
// }

// export default ToPoster;




// left right section
// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div className="  py-32 px-4 lg:px-24">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
//         <div className="lg:w-1/2">
//           {/* <div className="mb-6">
//             <button className="bg-blue-800 text-blue-300 px-4 py-2 rounded-md">
//               Payroll Software
//             </button>
//           </div> */}
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//           Learn, Grow, Thrive with us!
//           </h1>
//           <p className="text-lg lg:text-xl mb-6">
//           Global platform providing quality vocational courses and education
//           </p>
//           <div className="flex space-x-4">
//             <button className="bg-yellow-500  px-6 py-3 rounded-md font-semibold">
//               START NOW
//             </button>
            
//           </div>
         
//         </div>
//         <div className="lg:w-1/2 mt-12 lg:mt-0">
//           <div className="">
//             <img
//               src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?t=st=1721931348~exp=1721934948~hmac=2ebb5765b5402a5fe6e998debef2e621dd325348ca8ee8d93c82d5e5eea7316d&w=740"
              
//               className="rounded-lg"
//             />
//             {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-purple-700 bg-opacity-70 rounded-lg">
//               <div className="text-center mb-4">
//                 <p className="text-xl font-semibold">Payable Amount</p>
//                 <p className="text-3xl font-bold">PF Provident Fund</p>
//                 <p className="text-3xl font-bold">TDS Tax Deducted At Source</p>
//                 <p className="text-xl">TOTAL</p>
//               </div>
//               <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
//                 Run Payroll in three clicks
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;