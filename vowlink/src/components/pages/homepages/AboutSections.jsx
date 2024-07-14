import React from "react";
const imgurl =
  "https://th.bing.com/th/id/OIP.Pn4fqvv9fitoazSHdatTrwHaDI?w=768&h=325&rs=1&pid=ImgDetMain";

const AboutSections = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: `url(${imgurl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About</h2>
          <h3 className="text-5xl font-bold text-yellow-400">
            [organisation name] Learning
          </h3>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg">
            [organisation name] Learning is an award-winning ed-tech company offering
            finance, analytics, technology, and marketing courses. We are a
            classroom and online training institute that provides certification
            programs, interview-guaranteed, executive and university-assured
            courses.
          </p>
          <p className="text-lg mt-4">
            Our vision is to prepare the global community with the best
            educational programs for the new-age market. We are present
            globally, and in India, we have our centres in Mumbai, Thane, Pune,
            Ahmedabad, Jaipur, Delhi, Gurgaon, Noida, Patna, Lucknow, Dehradun,
            Bangalore, Chennai, Hyderabad, Coimbatore, Cochin, and Kolkata.
          </p>
        </div>
        <div className="flex flex-col  sm:flex-row justify-center space-x-16 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-400">
              10,00,000+</div>
            <div className="text-lg">Learners</div>
          </div>
          <div className="text-center pr-20 pt-10 sm:pt-0">
            <div className="text-5xl font-bold text-yellow-400">67%</div>
            <div className="text-lg">Average Salary Hike</div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md">
            Request a Callback
          </button>
          <button className="bg-  border border-yellow-400 text-yellow-400 px-6 py-3 rounded-md">
            Say Hi! on Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
