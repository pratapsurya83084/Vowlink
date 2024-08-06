


// import React from 'react'

// const steps = [
//   { title: "Step 1:  Express Your Interest", description: "Discover the Vowlink opportunity. Submit an inquiry to learn more about our franchise model and how it aligns with your entrepreneurial goals.", color: "bg-orange-500" },
//   { title: "Step 2: Evaluate Your Fit", description: "We work closely with you to assess your qualifications and determine if you're a good fit for the Vowlink franchise system.", color: "bg-blue-600" },
//   { title: "Step 3:  Formalize Your Partnership", description: "Once we've mutually agreed on the partnership, we'll guide you through the franchise agreement process.", color: "bg-yellow-500" },
//   { title: "Step 4: Comprehensive Training", description: "Our in-depth training program equips you with the knowledge and skills needed to successfully operate your Vowlink franchise.", color: "bg-violet-500" },
//   { title: "Step 5: Launch and Grow", description: "With our ongoing support and marketing assistance, you'll be well-prepared to launch and grow your e-learning business.", color: "bg-purple-500" },
// ];
// const HowworkFranchise = () => {
//   return (
//     <div>
//       <section class="font-jost text-white ">
//   <h1 className='text-center text-2xl sm:text-4xl lg:text-5xl mt-10  font-bold'>How It Works with VL ACADEMY?</h1>
//   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//      {/* img not show after host on netlify ,because no file extension  */}
//       <img class=" border-4 rounded-lg object-cover object-center " alt="hero" 
//       // src="/franchiise_work_image.avif"
//       src='\howWorks_voling_logo.jpg'
//       />
//     </div>

//     <div class="lg:flex-grow md:w-1/2 lg:pl- md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//       <div className="w-full text-center lg:text-left">
//          <div className="flex flex-col items-center justify-center">
//            {steps.map((step, index) => (
//             <div className="flex items-start mb-12 max-w-md w-full" key={index}>
//               <div
//                 className={`w-16 h-16 flex items-center justify-center ${step.color} text-white rounded-full text-xl font-bold flex-shrink-0`}
//               >
//                 <span>{index + 1}</span>
//               </div>
//               <div className="ml-6 w-full">
//                 <h3 className="text-xl md:text-3xl  font-semibold mb-2 text-left">{step.title}</h3>
//                 <p className=" text-lg md:text-xl">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default HowworkFranchise

import React from 'react';

const steps = [
  { title: "Step 1 : Express Your Interest with VL",
    //  description: "Discover the Vowlink opportunity. Submit an inquiry to learn more about our franchise model and how it aligns with your entrepreneurial goals.",
     color: "bg-orange-500" },
  { title: "Step 2 : Evaluate Your Fit with VL", 
    // description: "We work closely with you to assess your qualifications and determine if you're a good fit for the Vowlink franchise system.",
     color: "bg-orange-500" },
  { title: "Step 3 : Formalize Your Partnership with Vowling",
    //  description: "Once we've mutually agreed on the partnership, we'll guide you through the franchise agreement process.",
     color: "bg-orange-500" },
  { title: "Step 4 : Comprehensive Training with best mentor",
    //  description: "Our in-depth training program equips you with the knowledge and skills needed to successfully operate your Vowlink franchise."
     color: "bg-orange-500" },
  { title: "Step 5 : Launch and Grow with VL", description: "With our ongoing support and marketing assistance, you'll be well-prepared to launch and grow your e-learning business.", color: "bg-orange-500" },
];

const HowworkFranchise = () => {
  return (
    <div className="text-white py-12 ">
      <section className="font-jost max-w-7xl mx-auto px-4">
        <h1 className="text-center pb-20 text-3xl sm:text-4xl lg:text-5xl mt-10 font-bold">
          How It Works with VL ACADEMY?
        </h1>
        <div className="flex flex-col lg:gap-20 lg:flex-row items-center justify-center px-5 py-2">
          {/* image section left */}
          <div className="lg:max-w-lg lg:w-1/2 w-5/6 mb-10 lg:mb-36 mx-auto">
            {/* Image */}
            <img className="border-4 rounded-lg object-cover object-center w-full h-auto" alt="hero"
              src="\howWorks_voling_logo.jpg"
          //  src='\24642.jpg'
           />
          </div>

{/* content section point */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-full">
              <div className="flex flex-col items-center lg:items-start justify-center">
                {steps.map((step, index) => (
                  <div className="flex mb-12 max-w-md w-full" key={index}>
                    <div
                      className={`w-16 h-16 flex items-center justify-center ${step.color} text-white rounded-full text-xl font-bold flex-shrink-0`}
                    >
                      <span>{index + 1}</span>
                    </div>
                    <div className="ml-6 w-full text-left">
                      <h3 className="text-xl md:text-3xl font-semibold mb-2">{step.title}</h3>
                      {/* <p className="text-lg md:text-xl">{step.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
         {/* buttons explore now */}
         <div className='mt-1 mb-10 flex justify-center '>
         <a href="https://vowlink.com/">
        <button className='bg-orange-500 rounded-lg px-10 md:px-14 py-3 text-white text-lg font-bold'>
             Build Now
          </button>
          </a>
      </div>
      </section>
    </div>
  );
}

export default HowworkFranchise;
