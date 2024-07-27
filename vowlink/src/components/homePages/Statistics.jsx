// Statistics.jsx
import React from 'react';

const statistics = [
  {
    title: "Students Enrolled",
    value: "15,000+",
    description: "Active students currently enrolled in our courses."
  },
  {
    title: "Courses Available",
    value: "120+",
    description: "Variety of courses available across multiple disciplines."
  },
  {
    title: "Instructors",
    value: "50+",
    description: "Expert instructors with extensive industry experience."
  },
  {
    title: "Success Rate",
    value: "95%",
    description: "Percentage of students who have successfully completed their courses."
  },
  // Add more statistics as needed
];

const Statistics = () => {
  return (
    // bg-gray-200
    <section className="font-type py-12 mt-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Our Achievements</p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
                // bg-white,shadow-lg
              <div key={index} className="           transition-transform transform hover:scale-105 shadow-lg  rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="mt-2 text-lg font-medium text-white">{stat.title}</p>
                <p className="mt-2 text-sm text-white">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
