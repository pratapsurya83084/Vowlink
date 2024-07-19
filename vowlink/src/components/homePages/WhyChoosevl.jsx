
import React from 'react';

const WhyChoosevl = () => {
  return (
    // bg-gray-100
    <div className=" py-14  px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold ">Why Choose VL Academy?</h2>
      </div>
      <div className="flex flex-wrap justify-center items-start">
        <div className="flex flex-col items-center mx-4 mb-8 max-w-md">
          <div className="w-24 h-24 bg-yellow-500 text-  flex items-center justify-center rounded-full text-2xl font-bold">
            1
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">Expert Instructors</h3>
          <p className="mt-2 text-gray-500 text-center">
            Industry professionals who have practical insights and extensive experience in their fields to enhance learning.
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 mb-8 max-w-md">
          <div className="w-24 h-24 bg-yellow-500 text- flex items-center justify-center rounded-full text-2xl font-bold">
            2
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">Comprehensive Curriculum</h3>
          <p className="mt-2 text-gray-500 text-center">
            Designed to cover essential skills and advanced techniques ensuring a thorough understanding of each subject. Courses are regularly updated to reflect the latest industry trends and standards.
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 mb-8 max-w-md">
          <div className="w-24 h-24 bg-yellow-500 text- flex items-center justify-center rounded-full text-2xl font-bold">
            3
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">Flexible Learning Options</h3>
          <p className="mt-2 text-gray-500 text-center">
          ( yet to add)
            {/* Add more details about flexible learning options here */}
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 mb-8 max-w-md">
          <div className="w-24 h-24 bg-yellow-500 text-  flex items-center justify-center rounded-full text-2xl font-bold">
            4
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">Hands-on Training</h3>
          <p className="mt-2 text-gray-500 text-center">
            Practical, hands-on projects and assignments help students apply their knowledge and build real-world skills. Opportunities for internships and industry collaborations provide practical experience.
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 mb-8 max-w-md">
          <div className="w-24 h-24 bg-yellow-500 text-  flex items-center justify-center rounded-full text-2xl font-bold">
            5
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">Innovative Learning Methods</h3>
          <p className="mt-2 text-gray-500 text-center">
            Use of cutting-edge educational technology and methodologies to enhance learning and engagement. Interactive and immersive learning experiences such as virtual labs and simulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosevl;
