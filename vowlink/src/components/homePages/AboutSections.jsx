import React from "react";
const imgurl =
  "https://th.bing.com/th/id/OIP.Pn4fqvv9fitoazSHdatTrwHaDI?w=768&h=325&rs=1&pid=ImgDetMain";

const AboutSections = () => {
  return (
    <div
      className=" bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: `url(${imgurl})` }}
    >
      <div className=" inset-0 bg-black opacity-50"></div>
      <div className=" container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About</h2>
          <h3 className="text-4xl font-bold text-yellow-400">
           Vowlink Learning
          </h3>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg">
          AT VL Academy, we wholeheartedly believe in the power
           of skills to transform futures and careers. Our company 
           is dedicated to providing high-quality, comprehensive skill 
           courses which are designed by our experts 
          to meet the demands of todays’ dynamic job market.
          </p>
          <p className="text-lg mt-4">
          At VL, we have special tailored programs to meet
           your requirements, be it for you to enhance your
            professional skill-set, switch careers or if you
             are someone who is looking forward to starting 
             one’s professional life.
              Our company is driven by the three basic principles: ( yet to add )

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
          {/* <button className="bg-yellow-400 text-black px-6 py-3 rounded-md">
            Request a Callback
          </button> */}
          <button className="bg-  border border-yellow-400 text-yellow-400 px-6 py-3 rounded-md">
         Learn more about
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
