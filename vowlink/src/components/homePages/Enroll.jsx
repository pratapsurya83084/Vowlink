// EnrollmentAndAdmissions.jsx
import React from 'react';

const EnrollmentAndAdmissions = () => {
  return (
    <section className="font-type py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-2xl  sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Join VL Academy  Today
              </h2>
            <p className="mt-4 text-lg text-gray-600">
            Take the first step towards a successful business
             career with Vowlink. Our comprehensive courses, 
             expert guidance, and supportive community will
              help you transform your ideas into reality.
               Whether you dream of starting your own business,
                leading a company, or becoming a savvy investor,
                 VL Academy is your gateway to success.
                 Join VL Academy today and start your journey towards entrepreneurship!
            </p>
            <div className="mt-6 flex justify-center sm:justify-start gap-4">
              <button 
               
                className="inline-block px-10 py-3 text-base 
                 text-
                 bg-orange-500 text-white font-bold rounded-md shadow "
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
