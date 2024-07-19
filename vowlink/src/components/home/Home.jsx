import React from "react";
import Layout from "../../components/layout/Layout";
// import Cards from '../pages/homepages/Cards'
import Faq  from '../homePages/FaqSection'
import TopPoster   from '../homePages/TopPoster'
import AboutSections  from '../homePages/AboutSections'
import Testimonials  from '../homePages/Testimonials'
import PlacementReport  from '../homePages/PlacementReport'
import ImageAndTextSection  from  '../homePages/ImageAndTextSection'
import WhyChoosevl  from '../homePages/WhyChoosevl'
import Twobuttons  from '../homePages/Twobuttons'
import SuccessStory  from '../homePages/SuccessStory'
import Statistics  from  '../homePages/Statistics'
import Enroll from '../homePages/Enroll'
const Home = () => {
  return (
    <Layout>
      <div>
        <TopPoster/>
        <Twobuttons/>
        {/* <ImageAndTextSection/> */}
       
        {/* <Cards/> */}
        <AboutSections/>
        <WhyChoosevl/>
        <Testimonials/>
        <Statistics/>
        <SuccessStory/>
        <Enroll/>
       
       
        {/* <PlacementReport/> */}
      <Faq/>
      </div>
    </Layout>
  );
};

export default Home;
