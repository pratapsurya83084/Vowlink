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

import React from 'react';

const steps = [
  { title: "Step 1: Inquiry", description: "Submit an inquiry to express your interest and receive initial information about the franchise opportunity.", color: "bg-yellow-500" },
  { title: "Step 2: Evaluation", description: "Complete an evaluation to assess the fit between you and our franchise model.", color: "bg-blue-500" },
  { title: "Step 3: Agreement", description: "Review and sign the franchise agreement to formalize your partnership with us.", color: "bg-green-500" },
  { title: "Step 4: Training", description: "Participate in our comprehensive training program to prepare you for successful franchise operations.", color: "bg-red-500" },
  { title: "Step 5: Launch", description: "Launch your franchise with our ongoing support and marketing assistance to ensure a successful start.", color: "bg-purple-500" },
];

const Step = ({ step, index }) => (
  <div className="flex items-start mb-12 max-w-md w-full">
    <div className={`w-16 h-16 flex items-center justify-center ${step.color} text-white rounded-full text-xl font-bold flex-shrink-0`}>
      <span>{index + 1}</span>
    </div>
    <div className="ml-6 w-full">
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-left">{step.title}</h3>
      <p className="text-gray-600 text-sm text-left">{step.description}</p>
    </div>
  </div>
);

const FranchiseProcess = () => (
  <section className="bg-white py-16 block justify-center ">
     <h2 className="text-3xl md:text-4xl font-bold mb- text-center">How It Works</h2>
    <div className="lg:flex justify-center items-center ">
    
      <div className="w-full  hidden lg:flex justify-center  mb-12 lg:mb-0">
        <img src="/franchiise_work_image.avif" alt="Franchise Process" 
        className="w-full h-[500px] lg:w-[600px] xl:h-[700px] rounded-lg" />
      </div>

      <div className="w-full  text-center lg:text-left">
       
        <div className="flex flex-col items-center justify-center">
          {steps.map((step, index) => (
            <Step key={index} step={step} index={index} />
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default FranchiseProcess;

