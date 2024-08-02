import React from "react";

const OpportunitySection = () => {
  return (
    <div className="font-jost text-white flex flex-col items-center px-10 py-8">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center   font-bold mb-8">
        Pathways to Progress : Vision Meets Opportunity
      </h1>

      {/* <div className=" flex flex-col md:mt-20 md:flex-row items-center justify-center gap-8"> */}
        {/* Image section */}
        {/* <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/people-looking-man-with-megaphone-concept-illustration_52683-23816.jpg?t=st=1721652429~exp=1721656029~hmac=10290541d7db53b98823cec43921636c3d938f025587435347e1d4858d0262e2&w=740"
            alt="Opportunity"
            className="max-w-full h-auto"
          />
        </div> */}

        {/* Text section */}
         {/* Point 1 */}
         <div className="text-black  mt-10 md:mt-12 mb-12 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {/* Point 1 */}
      <div className="bg-white  transition-transform transform hover:scale-105 p-2 rounded-lg shadow-lg">
       <div className="flex justify-center">
        <img 
        className="h-14"
        src="https://cdn-icons-png.freepik.com/512/8573/8573260.png?ga=GA1.1.1066618313.1718467903" alt="" />
       </div>
        <h2 className="text-2xl font-semibold mb-2  mt-4">Innovative Learning</h2>
        <p className="text-lg">Cutting-edge teaching methods and technologies for a successful future.</p>
      </div>

      {/* Point 2 */}
      <div className="bg-white p-2 transition-transform transform hover:scale-105 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <img className="h-14"
          src="https://cdn-icons-png.freepik.com/512/9158/9158060.png?ga=GA1.1.1066618313.1718467903" alt="" />
      </div>
        <h2 className="text-2xl font-semibold mb-2  mt-4">Supportive Community</h2>
        <p className="text-lg">A collaborative environment that drives academic excellence.</p>
      </div>

      {/* Point 3 */}
      <div className="bg-white p-2  transition-transform transform hover:scale-105 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <img className="h-14"
          src="https://cdn-icons-png.freepik.com/512/7159/7159461.png?ga=GA1.1.1066618313.1718467903" alt="" />
      </div>
        <h2 className="text-2xl font-semibold mb-2  mt-4">Sustainable Growth</h2>
        <p className="text-lg">Education initiatives crucial for long-term societal development.</p>
      </div>

      {/* Point 4 */}
      <div className="bg-white p-2   transition-transform transform hover:scale-105 h-52  rounded-lg shadow-lg">
  
      <div className="flex justify-center">
        <img className="h-14"
          src="https://cdn-icons-png.freepik.com/512/6444/6444172.png?ga=GA1.1.1066618313.1718467903" alt="" />
      </div>
        <h2 className="text-2xl font-semibold mb-2 mt-4">Adaptive  Support</h2>
        <p className="text-lg">Flexible support systems for a resilient and dynamic learning experience.</p>
      </div>
      
    </div>

      {/* buttons explore now */}
      <div className='mt-14 mb-10 flex justify-center '>
        <button className='bg-orange-500 rounded-lg px-12 py-3 text-white text-lg font-bold'>
            Get Now
          </button>
      </div>
    </div>
  );
};

export default OpportunitySection;
