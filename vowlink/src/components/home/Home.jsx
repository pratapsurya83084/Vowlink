import React from "react";
import Layout from "../../components/layout/Layout";
// import Cards from '../pages/homepages/Cards'
import Faq  from '../homePages/FaqSection'
import TopPoster   from '../homePages/TopPoster'
import AboutSections  from '../homePages/AboutSections'
import Testimonials  from '../homePages/Testimonials'


import WhyChoosevl  from '../homePages/WhyChoosevl'
import Twobuttons  from '../homePages/Twobuttons'
// import SuccessStory  from '../homePages/SuccessStory'
import Statistics  from  '../homePages/Statistics'
import Enroll from '../homePages/Enroll'
import StudentSupportServices  from '../homePages/StudentSupportServices'
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
        <StudentSupportServices/>
        {/* <SuccessStory/> */}
        <Enroll/>
       
       
       
      {/* <Faq/> */}
      <EventAcademy/>
      </div>
    </Layout>
  );
};

export default Home;
