import React from 'react';

const StudentSupportServices = () => {
  return (
    <section className="font-type py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold  text-center
         mb-8 text-white">Student Support Services</h2>
      
  {/* 1th cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-100   font-type         transition-transform transform hover:scale-105 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
            Comprehensive Assistance
              </h3>
            <p className="text-gray-700 text-lg">
            24/7 Support : Offering round-the-clock support to address any student inquiries or issues promptly.
            </p>
          </div>
{/* 2th cards */}
          <div className="bg-blue-100      font-type      transition-transform transform hover:scale-105 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
           Personalized Guidance
            </h3>
            <p className="text-gray-700 text-lg">
            Over 5,000 One-on-One Sessions :
             Conducted personalized guidance sessions 
             to help students navigate their academic and
              career paths effectively.

            </p>
          </div>
{/* 3th cards */}
          <div className="bg-green-100 p-6   font-type         transition-transform transform hover:scale-105 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
            Resource Accessibility
              </h3>
            <p className="text-gray-700 text-lg">
            Access to 200+ Learning Materials : Providing students with an extensive library of resources, including textbooks, videos, and interactive tools.
            </p>
          </div>
{/* 4th cards */}
          <div className="bg-yellow-100    font-type        transition-transform transform hover:scale-105 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
            Career Counseling
              </h3>
            <p className="text-gray-700 text-lg">
            1,000+ Career Counseling Sessions :
             Delivered career counseling to over 1,000 students,
              helping them make informed career choices and plans.

            </p>
          </div>
{/* 5th cards */}
          <div className="bg-pink-100    font-type        transition-transform transform hover:scale-105 p-6  rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
            Technical Support
              </h3>
            <p className="text-gray-700 text-lg">
            98% Resolution Rate : 
            Achieved a 98% resolution rate
             for technical issues, ensuring
              students have a smooth learning experience.

            </p>
          </div>

{/* 6th cards */}
          <div className="bg-purple-100   font-type         transition-transform transform hover:scale-105 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
            Feedback and Improvement
              </h3>
            <p className="text-gray-700 text-lg">
            300+ Feedback Initiatives :
             Implemented over 300 feedback initiatives
              to continuously improve our services based
               on student input.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSupportServices;
