import React from 'react';

const data = [
  {
    category: "Competitiveness",
    vowlink: "Direct Leadership Support: Our founders are personally invested in your success.",
    others: "Limited support and resources"
  },



  {
    category: "Quality",
    vowlink: "Dedicated Support Team: Unlimited assistance from our experienced team.",
    others: "Top-down decision making"
  },
  
  {
    category: "Technology",
    vowlink: "24/7 Accessibility: We're always here to help.",
    others: "Poor communication"
  },

  {
    category: "Education/Training",
    vowlink: "Innovation Focus: We drive growth and new ideas.",
    others: "Focus on revenue over partnership"
  },


  {
    category: "Market Research/Gap Analysis",
    vowlink: "Comprehensive Resources: Tools and training for your success.",
    others: "Lack of franchisee autonomy"
  },

  {
    category: "Marketing Tactics",
    vowlink: "Personalized Support: Tailored solutions for your unique needs.",
    others: "Rigid systems and processes"
  },

  {
    category: "Revenue",
    vowlink: "Long-Term Partnership: Committed to your ongoing growth.",
    others: "Distant leadership"
  },

  // {
  //   category: "Market Research/ Gap Analysis",
  //   vowlink: "vowlink will provide always for our franchising partner",
  //   others: "Company will always take over"
  // },
  // {
  //   category: "Revenue",
  //   vowlink: "vowlink will accurately compare our franchising partners swot fro better future approach in pricing and sale",
  //   others: "Making analysis for market or company product"
  // },
  // {
  //   category: "Marketing Tactics",
  //   vowlink: "vowlink will 24*7 serve the marketing tactics for our franchising partner",
  //   others: "Marketing towards customer base"
  // },
  // {
  //   category: "Revenue",
  //   vowlink: "vowlink always serve to franching partner to more and more",
  //   others: "Particular and more royalty systems process from franching partner"
  // },
];

const FranchiseComparison = () => (
  <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 space-y-2 md:space-y-16 pt-10 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          {data.map((item, index) => (
            <div key={index} className="py-3 border-b border-blue-700 last:border-b-0">
              <p className="text-lg">{item.category}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-700 space-y-2  lg:space-y-10 md:space-y-4 pt-10 text-white  p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
          Our Competitive Advantages
            </h2>
          {data.map((item, index) => (
            <div key={index} className="py-3 border-b border-green-500 last:border-b-0">
              <p className="text-lg">{item.vowlink}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-500  space-y-2 lg:space-y-14 md:space-y-4 text-black p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Common Challenges in Traditional Franchising</h2>
          {data.map((item, index) => (
            <div key={index} className="py-3 border-b border-yellow-300 last:border-b-0">
              <p className="text-lg">{item.others}</p>
            </div>
          ))}
        </div>
       
      </div>
      
    </div>
    <div className='flex justify-center items-center'>
    <button className='mt-5 bg-orange-500 px-10 text-white text-xl font-bold rounded-xl lg:px-20 py-3 '>Join Vowlink</button>
    </div>
   
  </div>
);


// const FranchiseComparison = () => (
//   <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="bg-gray-900 pt-10 text-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Categories</h2>
//           {data.map((item, index) => (
//             <div key={index} className="flex py-3 border-b border-blue-700 last:border-b-0">
//               <p className="text-lg w-full">{item.category}</p>
//             </div>
//           ))}
//         </div>

//         <div className="bg-green-700 pt-10 text-white p-6 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Our Competitive Advantages</h2>
//           {data.map((item, index) => (
//             <div key={index} className="flex py-3 border-b border-green-500 last:border-b-0">
//               <p className="text-lg w-full">{item.vowlink}</p>
//             </div>
//           ))}
//         </div>

//         <div className="bg-yellow-500 pt-10 text-black p-6 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-bold mb-4">Common Challenges in Traditional Franchising</h2>
//           {data.map((item, index) => (
//             <div key={index} className="flex py-3 border-b border-yellow-300 last:border-b-0">
//               <p className="text-lg w-full">{item.others}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );




// export default FranchiseComparison;

export default FranchiseComparison;








// import React from 'react';

// const data = [
//   {
//     category: "Competitiveness",
//     vowlink: "Senior leadership no middle man (CEO, FOUNDERS)",
//     others: "Senior leadership (MANAGER, ASSOCIATE)"
//   },
//   {
//     category: "Quality",
//     vowlink: "Devoted towards franchising partner, unlimited team understanding",
//     others: "Devoted towards growing revenue, slow team bonding"
//   },
//   {
//     category: "Quires",
//     vowlink: "24*7 Ask question by franchising partner top notch leaders with take care any issue",
//     others: "Monthly asking question systems with communicating with top notch leaders"
//   },
//   {
//     category: "Idea Generation Techniques",
//     vowlink: "Fresh prospective with new ideas for our franchising partner for better sale grow",
//     others: "Ideas single align always"
//   },
//   {
//     category: "Invest With Support",
//     vowlink: "Provide always clientele systems for 24*7",
//     others: "Normally the local franchising is tackle the issue"
//   },
//   {
//     category: "Technology",
//     vowlink: "High growth software and new generation tech-savvy (DIGITAL FOOT PRINT)",
//     others: "Only compliance and billing system techniques"
//   },
//   {
//     category: "Education/ Training",
//     vowlink: "Always(24*7) towards our franchising partner global training process for strategies, marketing & sale",
//     others: "Providing as tele training for grow business"
//   },
//   {
//     category: "Market Research/ Gap Analysis",
//     vowlink: "vowlink will provide always for our franchising partner",
//     others: "Company will always take over"
//   },
//   {
//     category: "Swot Analysis",
//     vowlink: "vowlink will accurately compare our franchising partners swot fro better future approach in pricing and sale",
//     others: "Making analysis for market or company product"
//   },
//   {
//     category: "Marketing Tactics",
//     vowlink: "vowlink will 24*7 serve the marketing tactics for our franchising partner",
//     others: "Marketing towards customer base"
//   },
//   {
//     category: "Revenue",
//     vowlink: "vowlink always serve to franching partner to more and more",
//     others: "Particular and more royalty systems process from franching partner"
//   },
// ];

// const FranchiseComparison = () => (
//   <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 gap-6">
//         <div className="p-6 bg-gray-300 rounded-xl shadow-lg">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center font-bold text-lg sm:text-base">
//             <div className="text-blue-900">Categories</div>
//             <div className="text-green-700">vowlink</div>
//             <div className="text-yellow-500">Others</div>
//           </div>
//         </div>
//         {data.map((item, index) => (
//           <div key={index} className={`p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
//               <div className="text-blue-900 text-lg sm:text-base font-bold">{item.category}</div>
//               <div className="text-green-700 text-base sm:text-sm">{item.vowlink}</div>
//               <div className="text-yellow-500 text-base sm:text-sm">{item.others}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default FranchiseComparison;
