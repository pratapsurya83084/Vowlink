// EnrollmentAndAdmissions.jsx
import React from 'react';

const EnrollmentAndAdmissions = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Join VL Academy Today</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our courses are designed to equip you with the skills and knowledge needed to excel in your career. With flexible learning options and expert instructors, you can start your journey towards success today.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start gap-4">
              <button 
               
                className="inline-block px-10 py-3 text-base font-medium
                 text-
                 bg-yellow-400 rounded-md shadow "
              >
                Apply Now
              </button>
              {/* <a 
                href="#admissions"
                className="inline-block px-6 py-3 text-base font-medium text-indigo-600 bg-gray-100 rounded-md shadow hover:bg-gray-200"
              >
                Admissions Info
              </a> */}
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              className="w-full h-auto rounded-lg "
              src="https://www.upgrad.com/_ww3-next/_next/static/media/person_laptop.d67865f1.svg" 
              alt="Enrollment"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentAndAdmissions;
