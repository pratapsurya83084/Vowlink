import React from 'react';

const AboutSection = () => (
  <section className=" md:flex justify-center px-10 md:gap-10">
    {/* left  section */}
   <div className='text-left mt-32'>
   <h2 className="text-4xl  font-bold mb-8">About Us</h2>
    <p>
    We are a leading franchise provider with a proven track record of success. <br />
         Our mission is to help entrepreneurs
        achieve their business goals with a support system 
        <br />
        that guarantees growth and profitability.
    </p>
   </div>
    


    <div className='flex justify-center items-center '>
      <img 
      className='h-[500px]'
      // src="\about_franchise_imgae.avif" alt="" />
    src='https://img.freepik.com/free-vector/teamwork-concept-landing-page_23-2148240859.jpg?t=st=1721665710~exp=1721669310~hmac=56f7d17573501b1b0b9d13424916d6015749c998d492e7e16c1e37e8444f48df&w=740'/>
    
      </div>
    




  </section>
);

export default AboutSection;
