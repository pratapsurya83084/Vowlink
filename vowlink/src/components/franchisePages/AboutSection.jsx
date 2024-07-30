// import React from 'react';

// const AboutSection = () => (
//   <section className=" md:flex justify-center px-10 md:gap-10">
//     {/* left  section */}
//    <div className='text-left mt-32'>
//    <h2 className="text-4xl  font-bold mb-8">About Us</h2>
//     <p className='text-lg'>
   
// Vowlink pioneered e-learning franchising in 
// [Year]. Our mission: empower entrepreneurs. By blending technology with education, we've built a thriving community of successful franchisees. Today, we're a leading franchise provider with a proven track record of success
//     </p>
//    </div>
    


//     <div className='flex justify-center items-center '>
//       <img 
//       className='h-[500px]'
//       // src="\about_franchise_imgae.avif" alt="" />
//     src='https://img.freepik.com/free-vector/teamwork-concept-landing-page_23-2148240859.jpg?t=st=1721665710~exp=1721669310~hmac=56f7d17573501b1b0b9d13424916d6015749c998d492e7e16c1e37e8444f48df&w=740'/>
    
//       </div>
    




//   </section>
// );

// export default AboutSection;




import React from 'react'

const AboutSection = () => {
  return (
    <div>
      <section class="text-white body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">
      About Us</h1>
      <p class="mb-8 leading-relaxed text-lg">
      Vowlink pioneered e-learning franchising in [Year]. 
      Our mission: empower entrepreneurs. 
      By blending technology with education,
       we've built a thriving community of successful 
       franchisees. Today, we're a leading franchise provider
        with a proven track record of success. </p>
      <div class="flex w-full md:justify-start justify-center items-end">
        
        {/* <button class="inline-flex text-white bg-orange-500  px-7  border-0 py-2  focus:outline-none  rounded text-lg">Button</button> */}
      </div>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero"
       src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_23-2148240859.jpg?t=st=1721665710~exp=1721669310~hmac=56f7d17573501b1b0b9d13424916d6015749c998d492e7e16c1e37e8444f48df&w=740"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutSection

