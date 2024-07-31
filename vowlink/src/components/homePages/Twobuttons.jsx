
import React from 'react';

const TwoButtons = () => {
  return (
    // to-teal-600
    <div className='font-jost flex flex-col items-center bg-gradient-to-r bg-[#683695] border border-white   mt-20 mx-4 lg:mx-20 mb-20 py-12 px-6 rounded-lg shadow-2xl'>
      <p className='text-center text-white text-xl sm:text-2xl  lg:text-3xl font-bold px- mb-8'>
      At VL, we aim to shape tomorrow’s global leaders 
      and visionaries through our expert-designed business
       approaches and highly efficient technology tools.
        Join our franchise and be a part of this transformative journey.

      </p>
      {/* 2 buttons */}
      <div className='flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto'>
        {/* <button className='bg-yellow-300 text-teal-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 w-full sm:w-auto'>
          Enroll in our courses
        </button> */}
        <button className='bg-orange-500 text-white  font-semibold py-3 px-14 rounded shadow-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto'>
        
         About Us
        </button>
      </div>
    </div>
  );
};

export default TwoButtons;
