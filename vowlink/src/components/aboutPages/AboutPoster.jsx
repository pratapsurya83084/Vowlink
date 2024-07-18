import React from 'react';

const AboutPoster = () => {
  return (
    <div className="bg-gray-50  py-20 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* show large device and hidden small */}
        <h1 className="text-5xl font-bold mb-4 py-4  hidden md:block">ABOUT <br />
       <b className=''>VOWLINK</b>  </h1>

       {/* show small and hidden large device */}
       <h1 className='text-center block md:hidden py-2 text-4xl font-bold'>ABOUT <br />
        VOWLINK</h1>
        <p className="mb-8 hidden md:flex ">
          At [organisation name], we believe that learning is a lifelong process. By organizing knowledge with advanced technology and making learning accessible, our goal is to prepare our global learning community for a futuristic, tech-driven society.
        </p>
        <p className="mb-8 flex md:hidden text-center ">
          At [organisation name], we believe that learning is a lifelong process. By organizing knowledge with advanced technology and making learning accessible, our goal is to prepare our global learning community for a futuristic, tech-driven society.
        </p>
        <button className="hidden md:block bg-white text-teal-800 font-semibold py-2 px-4 rounded">Learn More</button>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">3500+</div>
            <div>HIRING PARTNERS</div>
          </div>
          <div>
            <div className="text-3xl font-bold">10,00,000+</div>
            <div>LEARNERS</div>
          </div>
          <div>
            <div className="text-3xl font-bold">54%</div>
            <div>AVERAGE SALARY HIKE</div>
          </div>
          <div>
            <div className="text-3xl font-bold">85%</div>
            <div>PLACEMENT RECORD</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24</div>
            <div>LPA HIGHEST SALARY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPoster;
