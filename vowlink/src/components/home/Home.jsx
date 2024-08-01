import React from "react";
import Layout from "../../components/layout/Layout";
// import Cards from '../pages/homepages/Cards'
import Faq  from '../homePages/FaqSection'
import TopPoster   from '../homePages/TopPoster'
import AboutSections  from '../homePages/AboutSections'
import Testimonials  from '../homePages/Testimonials'


import WhyChoosevl  from '../homePages/WhyChoosevl'
import Twobuttons  from '../homePages/Twobuttons'

import Statistics  from  '../homePages/Statistics'
import Enroll from '../homePages/Enroll'
import SupportBelive  from '../homePages/SupportBelive'
import EventAcademy  from '../homePages/EventAcademy'
// import HeadingTestimonial   from '../homePages/HeadingTestimonial'
const Home = () => {
  return (
    <Layout>
      <div>
        <TopPoster/>
        <Twobuttons/>
        <AboutSections/>
        <WhyChoosevl/>
       
        <Testimonials/>
        <Statistics/>
        <SupportBelive/>
        
        <Enroll/>
       
       
       
      {/* <Faq/> */}
      <EventAcademy/>
      </div>
    </Layout>
  );
};

export default Home;
