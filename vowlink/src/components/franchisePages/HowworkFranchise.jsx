// import React from 'react';

// const steps = [
//   { title: "Step 1: Inquiry", description: "Submit an inquiry to express your interest and receive initial information about the franchise opportunity.", color: "bg-yellow-500" },
//   { title: "Step 2: Evaluation", description: "Complete an evaluation to assess the fit between you and our franchise model.", color: "bg-blue-500" },
//   { title: "Step 3: Agreement", description: "Review and sign the franchise agreement to formalize your partnership with us.", color: "bg-green-500" },
//   { title: "Step 4: Training", description: "Participate in our comprehensive training program to prepare you for successful franchise operations.", color: "bg-red-500" },
//   { title: "Step 5: Launch", description: "Launch your franchise with our ongoing support and marketing assistance to ensure a successful start.", color: "bg-purple-500" },
// ];

// const Step = ({ step, index }) => (
//   <div className="flex items-start mb-12 max-w-md w-full">
//     {/* <div>
//       <img src="\franchiise_work_image.avif" alt="" />
//     </div> */}
//     <div className={`w-16 h-16 flex items-center justify-center ${step.color} text-white rounded-full text-xl font-bold flex-shrink-0`}>
//       <span>{index + 1}</span>
//     </div>
//     <div className="ml-6 w-full">
//       <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
//       <p className="text-gray-600 text-sm ">{step.description}</p>
//     </div>
//   </div>
// );

// const FranchiseProcess = () => (
//   <section className="md:flex justify-center  bg-white py-16">
//     <div className="md:w-1/3 mb-12 md:mb-0 md:mr-6">
//         <img src="\franchiise_work_image.avif" alt="Franchise Process"
//          className="w-full h-auto rounded-lg " />
//       </div>
//     <div className="container mx-auto px-6">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
//       <div className="flex flex-col items-center">
//         {steps.map((step, index) => (
//           <Step key={index} step={step} index={index} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default FranchiseProcess;

// import React from 'react';

// const steps = [
//   { title: "Step 1:  Express Your Interest", description: "Discover the Vowlink opportunity. Submit an inquiry to learn more about our franchise model and how it aligns with your entrepreneurial goals.", color: "bg-yellow-500" },
//   { title: "Step 2: Evaluate Your Fit", description: "We work closely with you to assess your qualifications and determine if you're a good fit for the Vowlink franchise system.", color: "bg-blue-500" },
//   { title: "Step 3:  Formalize Your Partnership", description: "Once we've mutually agreed on the partnership, we'll guide you through the franchise agreement process.", color: "bg-green-500" },
//   { title: "Step 4: Comprehensive Training", description: "Our in-depth training program equips you with the knowledge and skills needed to successfully operate your Vowlink franchise.", color: "bg-red-500" },
//   { title: "Step 5: Launch and Grow", description: "With our ongoing support and marketing assistance, you'll be well-prepared to launch and grow your e-learning business.", color: "bg-purple-500" },
// ];

// const FranchiseProcess = () => (
//   <section className="bg-white px-4 py-16 block justify-center ">
//     <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//     Your Path to Franchisee Success
//       </h2>
//     <div className="lg:flex justify-center items-center ">
//       <div className="w-full hidden lg:flex justify-center mb-12 lg:mb-0">
//         <img
//           src="/franchiise_work_image.avif"
//           alt="Franchise Process"
//           className="w-full h-[500px] lg:w-[600px] xl:h-[700px] rounded-lg"
//         />
//       </div>
//       <div className="w-full text-center lg:text-left">
//         <div className="flex flex-col items-center justify-center">
//           {steps.map((step, index) => (
//             <div className="flex items-start mb-12 max-w-md w-full" key={index}>
//               <div
//                 className={`w-16 h-16 flex items-center justify-center ${step.color} text-white rounded-full text-xl font-bold flex-shrink-0`}
//               >
//                 <span>{index + 1}</span>
//               </div>
//               <div className="ml-6 w-full">
//                 <h3 className="text-lg md:text-xl font-semibold mb-2 text-left">{step.title}</h3>
//                 <p className="text-gray-600 text-sm text-left">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default FranchiseProcess;




import React from 'react'

const steps = [
  { title: "Step 1:  Express Your Interest", description: "Discover the Vowlink opportunity. Submit an inquiry to learn more about our franchise model and how it aligns with your entrepreneurial goals.", color: "bg-orange-500" },
  { title: "Step 2: Evaluate Your Fit", description: "We work closely with you to assess your qualifications and determine if you're a good fit for the Vowlink franchise system.", color: "bg-blue-600" },
  { title: "Step 3:  Formalize Your Partnership", description: "Once we've mutually agreed on the partnership, we'll guide you through the franchise agreement process.", color: "bg-yellow-500" },
  { title: "Step 4: Comprehensive Training", description: "Our in-depth training program equips you with the knowledge and skills needed to successfully operate your Vowlink franchise.", color: "bg-violet-500" },
  { title: "Step 5: Launch and Grow", description: "With our ongoing support and marketing assistance, you'll be well-prepared to launch and grow your e-learning business.", color: "bg-purple-500" },
];
const HowworkFranchise = () => {
  return (
    <div>
      <section class="font-jost text-white ">
  <h1 className='text-center text-2xl sm:text-4xl lg:text-5xl mt-10  font-bold'>How It Works with VL ACADEMY?</h1>
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     {/* img not show after host on netlify ,because no file extension  */}
      <img class="object-cover object-center rounded" alt="hero" 
      src="/franchiise_work_image.avif"/>
    </div>

    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <div className="w-full text-center lg:text-left">
         <div className="flex flex-col items-center justify-center">
           {steps.map((step, index) => (
            <div className="flex items-start mb-12 max-w-md w-full" key={index}>
              <div
                className={`w-16 h-16 flex items-center justify-center ${step.color} text-white rounded-full text-xl font-bold flex-shrink-0`}
              >
                <span>{index + 1}</span>
              </div>
              <div className="ml-6 w-full">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-left">{step.title}</h3>
                <p className=" text-sm text-left">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HowworkFranchise
