import React from 'react';

const AboutSection = () => (
  <section className="  py-1">
    <div className="container mx-auto px-6 text-left">
    
     <div className='md:flex space-y-10 justify-center gap-10'>
      
     <p className="text-lg text-left mb-">
     <h2 className="text-4xl  font-bold mb-8">About Us</h2>
        We are a leading franchise provider with a proven track record of success. <br />
         Our mission is to help entrepreneurs
        achieve their business goals with a support system 
        <br />
        that guarantees growth and profitability.
      </p>
      
      <div>
      <img
       src="https://franchising.bisjhintus.com/img/hero.svg" alt="About Us"
        className="mx-auto h-60 pb-10" />
      </div>
   
     </div>
      
    </div>
  </section>
);

export default AboutSection;
