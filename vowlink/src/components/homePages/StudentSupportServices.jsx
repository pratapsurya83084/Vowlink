import React from 'react';

const StudentSupportServices = () => {
  return (
    // bg-gray-100 
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Student Support Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Academic Counseling</h3>
            <p className="text-gray-700">
              Get personalized guidance on your academic journey to help you succeed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Career Services</h3>
            <p className="text-gray-700">
              Access resources and support to advance your career goals and aspirations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Mental Health Support</h3>
            <p className="text-gray-700">
              Receive the emotional support and mental health resources you need.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tutoring Services</h3>
            <p className="text-gray-700">
              Get help with your studies from our experienced tutors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Financial Aid</h3>
            <p className="text-gray-700">
              Explore financial aid options to support your educational expenses.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Student Community</h3>
            <p className="text-gray-700">
              Join a vibrant community of students and participate in various activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSupportServices;
