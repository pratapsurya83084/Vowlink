// Statistics.jsx
import React from 'react';

const statistics = [
  // 1st
  {
    title: "Global Presenc",
    value: "100+ ",
    description: "Franchise Locations Worldwide Our franchise network spans across major regions, including India, the UK, Singapore, and Tokyo."
  },
  //2nd
  {
    title: "Successful Graduates",
    value: "10,000+",
    description: " Empowered more than 10,000 individuals with the skills and knowledge to excel in their business ventures."
  },
  //3rd
  {
    title: "Industry Recognition",
    value: "10+",
    description: " Received accolades for excellence in business education and innovative e-learning solutions."
  },
  //4rth
  {
    title: "Revenue Growth",
    value: "200%",
    description: "Achieved a remarkable 200% growth in franchise revenue over the past three years."
  },

  // 5th
  {
    title: "High Satisfaction Rate",
    value: "95%",
    description: "Maintained a 95% satisfaction rate among our franchise partners, reflecting the quality and effectiveness of our support."
  },
  // 6th
  {
    title: "Expanding Market Reach",
    value: "50%",
    description: "Expanded our market presence by 50% in new regions and sectors, demonstrating our growing influence and reach."
  },
];

const Statistics = () => {
  return (
    // bg-gray-200
    <section className="font-jost py-12 mt-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          <p className="mt-2 text-2xl sm:text-4xl lg:text-5xl leading-8 font-extrabold tracking-tight text-white ">
            Our Achievements</p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {statistics.map((stat, index) => (
                // bg-white,shadow-lg
              <div key={index} className="           transition-transform transform hover:scale-105 shadow-lg  rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="mt-2 text-xl font-bold text-white">{stat.title}</p>
                <p className="mt-2 text-lg text-white">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    {/* button */}
    <div className="flex justify-center pb-10">
                <button className="bg-orange-500 text-white font-bold px-14 text-xl py-4 mt-10 rounded-lg">Start Now</button>
              </div>
    </section>
  );
};

export default Statistics;
