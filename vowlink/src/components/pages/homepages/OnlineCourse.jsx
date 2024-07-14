import React from "react";

const OnlineCourse = () => {
  return (
    <section className="py-5 ">
    <h1 className="text-3xl pb-4 font-bold text-gray-800">Online Course</h1>
    
    <div className="bg-gray-100 md:flex gap-10 h-40">
      <div className="flex-shrink-0">
        <img
          className="h-full w-full object-cover"
          src="https://w7.pngwing.com/pngs/382/328/png-transparent-online-degree-course-lecturer-learning-student-massive-open-online-course-text-logo-teacher.png"
          alt="Online Course"
        />
      </div>
      <div className="flex-grow">
        <p className=" text-gray-700">
          Our courses are for anyone, anywhere seeking to create a positive impact in their communities. Learn about storytelling for change, explore systems practice, or dive into human-centered design. More than half a million people have taken a course. Find yours.
        </p>
      </div>
    </div>
  </section>
  
  );
};

export default OnlineCourse;
