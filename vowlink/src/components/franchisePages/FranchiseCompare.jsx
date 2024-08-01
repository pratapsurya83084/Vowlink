// import React from 'react';

// const data = [
//   {
//     category: "Competitiveness",
//     vowlink: "Direct Leadership Support: Our founders are personally invested in your success.",
//     others: "Limited support and resources"
//   },

//   {
//     category: "Quality",
//     vowlink: "Dedicated Support Team: Unlimited assistance from our experienced team.",
//     others: "Top-down decision making"
//   },

//   {
//     category: "Technology",
//     vowlink: "24/7 Accessibility: We're always here to help.",
//     others: "Poor communication"
//   },

//   {
//     category: "Education/Training",
//     vowlink: "Innovation Focus: We drive growth and new ideas.",
//     others: "Focus on revenue over partnership"
//   },

//   {
//     category: "Market Research/Gap Analysis",
//     vowlink: "Comprehensive Resources: Tools and training for your success.",
//     others: "Lack of franchisee autonomy"
//   },

//   {
//     category: "Marketing Tactics",
//     vowlink: "Personalized Support: Tailored solutions for your unique needs.",
//     others: "Rigid systems and processes"
//   },

//   {
//     category: "Revenue",
//     vowlink: "Long-Term Partnership: Committed to your ongoing growth.",
//     others: "Distant leadership"
//   },

//   {
//     category: "Market Research/ Gap Analysis",
//     vowlink: "vowlink will provide always for our franchising partner",
//     others: "Company will always take over"
//   },
//   {
//     category: "Revenue",
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
//   <div classNameName=" py-12 px-4 sm:px-6 lg:px-8">
//     <div classNameName="max-w-7xl mx-auto">
//       <div classNameName="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div classNameName="bg-gray-900 space-y-2 md:space-y-16 pt-10 text-white p-6 rounded-xl shadow-lg">
//           <h2 classNameName="text-2xl font-bold mb-4">Categories</h2>
//           {data.map((item, index) => (
//             <div key={index} classNameName="py-3 border-b border-blue-700 last:border-b-0">
//               <p classNameName="text-lg">{item.category}</p>
//             </div>
//           ))}
//         </div>

//         <div classNameName="bg-green-700 space-y-2  lg:space-y-10 md:space-y-4 pt-10 text-white  p-6 rounded-xl shadow-lg">
//           <h2 classNameName="text-2xl font-bold mb-4">
//           Our Competitive Advantages
//             </h2>
//           {data.map((item, index) => (
//             <div key={index} classNameName="py-3 border-b border-green-500 last:border-b-0">
//               <p classNameName="text-lg">{item.vowlink}</p>
//             </div>
//           ))}
//         </div>

//         <div classNameName="bg-yellow-500  space-y-2 lg:space-y-14 md:space-y-4 text-black p-6 rounded-xl shadow-lg">
//           <h2 classNameName="text-2xl font-bold mb-4">Common Challenges in Traditional Franchising</h2>
//           {data.map((item, index) => (
//             <div key={index} classNameName="py-3 border-b border-yellow-300 last:border-b-0">
//               <p classNameName="text-lg">{item.others}</p>
//             </div>
//           ))}
//         </div>

//       </div>

//     </div>
//     <div classNameName='flex justify-center items-center'>
//     <button classNameName='mt-5 bg-orange-500 px-10 text-white text-xl font-bold rounded-xl lg:px-20 py-3 '>Join Vowlink</button>
//     </div>

//   </div>
// );

// export default FranchiseComparison;

import React from 'react';

const FranchiseComparison = () => {
  return (
    <div className="font-jost p-6 md:p-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1st box */}
        <div className="text-center md:text-xl rounded-3xl  bg-gray-100 ">
          <ul className="space-y-0">
            <li className="bg-gradient-to-r bg-yellow-200 rounded-tl-3xl   rounded-tr-3xl md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Competitiveness</strong>
            </li>
            <li className="bg-violet-500 text-white md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Leadership</strong>
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Quality</strong>
            </li>
            <li className="bg-violet-500 text-white md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Quires</strong>
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Idea Generation Techniques</strong>
            </li>
            <li className="bg-violet-500 text-white md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Invest With Support</strong>
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Technology</strong>
            </li>
            <li className=" bg-violet-500 text-white md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Education/ Training</strong>
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Market Research/ Gap Analysis</strong>
            </li>
            <li className="bg-violet-500 text-white md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Swot Analysis</strong>
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Marketing Tactics</strong>
            </li>
            <li className="bg-violet-500 text-white rounded-bl-3xl rounded-br-3xl md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center ">
              <strong>Revenue</strong>
            </li>
          </ul>
        </div>

        {/* 2nd box */}
        <div className="text-center text-lg bg-gray-100  rounded-3xl">
          <ul className="space-y-0">
            <li className=" bg-yellow-200 rounded-tl-3xl   rounded-tr-3xl md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b  border-gray-300">
              <strong>Vowlink Franchising</strong>
            </li>
            <li className="bg-violet-500 text-white md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b  border-gray-300">
              Senior leadership no middle man (CEO, FOUNDERS)
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Devoted towards franchising partner, unlimited team understanding
            </li>
            <li className="bg-violet-500 text-white md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              24*7 Ask question by franchising partner top notch leaders with take care any issue
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Fresh perspective with new ideas for our franchising partner for better sale growth
            </li>
            <li className="bg-violet-500 text-white  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Provide always clientele systems for 24*7
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              High growth software and new generation tech-savvy (DIGITAL FOOTPRINT)
            </li>
            <li className="bgg-v bg-violet-500 text-white md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Always (24*7) towards our franchising partner global training process for strategies, marketing & sale
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Vowlink will provide always for our franchising partner
            </li>
            <li className="bg-violet-500 text-white  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Vowlink will accurately compare our franchising partners SWOT for better future approach in pricing and sale
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Vowlink will 24*7 serve the marketing tactics for our franchising partner
            </li>
            <li className="bg-violet-500 text-white     rounded-bl-3xl rounded-br-3xl md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center ">
              Vowlink always serve to franchising partner to more and more
            </li>
          </ul>
        </div>

        {/* 3rd box */}
        <div className="text-center text-lg   bg-gray-100 rounded-3xl">
          <ul className="space-y-0">
            <li className="bg-yellow-200 rounded-tl-3xl   rounded-tr-3xl  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              <strong>Others Franchising</strong>
            </li>
            <li className="bg-violet-500 text-white  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Senior leadership (MANAGER, ASSOCIATE)
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Devoted towards growing revenue, slow team bonding
            </li>
            <li className="bg-violet-500 text-white  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Monthly asking question systems with communicating with top notch leaders
            </li>
            <li className="bg-yellow-200  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Ideas single align always
            </li>
            <li className="bg-violet-500 text-white  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Normally the local franchising is tackle the issue
            </li>
            <li className=" bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Only compliance and billing system techniques
            </li>
            <li className="bg-violet-500 text-white  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Providing as tele-training for growth business
            </li>
            <li className=" bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Company will always take over
            </li>
            <li className="bg-violet-500 text-white  md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Making analysis for market or company product
            </li>
            <li className="bg-yellow-200 md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center  border-b border-gray-300">
              Marketing towards customer base
            </li>
            <li className="bg-violet-500 text-white  rounded-bl-3xl rounded-br-3xl md: md:pb- px-2 md:px-1  h-20 md:h-32 lg:h-20 flex items-center justify-center ">
              Particular and more royalty systems process from franchising partner
            </li>
          </ul>
        </div>
      </div>
      {/* buttons explore now */}
      <div className='mt-14 mb-14 flex justify-center '>
        <button className='bg-orange-500 rounded-lg px-12 py-3 text-white text-lg font-bold'>Explore Now</button>
      </div>
    </div>
  );
}

export default FranchiseComparison;

