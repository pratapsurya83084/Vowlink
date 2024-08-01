// EnrollmentAndAdmissions.jsx
import React from "react";
import { FaCheck } from 'react-icons/fa';
const EnrollmentAndAdmissions = () => {
  return (
    <section className="font-jost py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-center sm:text-left text-2xl  sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Join VL Academy Today as a Franchise Partner
            </h2>
            {/* <p className="mt-4 text-lg text-gray-600">
              Transform Your Future with Us Expand Your Horizons Become a VL
              Academy franchise partner and tap into a global network of
              successful business leaders and entrepreneurs. Access Exclusive
              Resources Benefit from our cutting-edge educational tools,
              comprehensive training, and ongoing support. Drive Success
              Leverage our proven business model to build and grow a thriving
              educational franchise. Why Wait? Partner with Excellence : Join a
              leading e-learning platform and offer top-tier business education.{" "}
              <br />
              Make a Difference : Empower others while achieving substantial
              returns on your investment.
            </p> */}
            {/* bg-white shadow-lg*/}
            <div className="sm:p- pt-5  rounded-lg  max-w-2xl mx-auto">
              
      <h1 className="text-2xl font-bold mb-4">Transform Your Future with Us :</h1>
      <ul className="list-none mb-6 space-y-4">
        <li className="flex items-center">
          <FaCheck className="text-green-500 text-3xl sm:text-2xl mr-2" />
          <span>Expand Your Horizons : Become a VL Academy franchise partner and tap into a global network of successful business leaders and entrepreneurs.</span>
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-500 text-3xl sm:text-xl mr-2" />
          <span>Access Exclusive Resources : Benefit from our cutting-edge educational tools, comprehensive training, and ongoing support.</span>
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-500 text-2xl sm:text-lg mr-2" />
          <span>Drive Success : Leverage our proven business model to build and grow a thriving educational franchise.</span>
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-4">Why Wait?</h2>
      <ul className="list-none space-y-4">
        <li className="flex items-center">
          <FaCheck className="text-green-500 text-2xl sm:text-xl mr-2" />
          <span>Partner with Excellence : Join a leading e-learning platform and offer top-tier business education.</span>
        </li>
        <li className="flex items-center">
          <FaCheck className="text-green-500 text-2xl sm:text-lg mr-2" />
          <span>Make a Difference : Empower others while achieving substantial returns on your investment.</span>
        </li>
      </ul>
    </div>
            <div className="mt-6 lg:ml-10 flex justify-center  gap-4">
              <button
                className="inline-block px-10 py-3 text-base 
                 text-
                 bg-orange-500 text-white font-bold rounded-md shadow "
              >
                Get Started Now!
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
