import React from "react";
import Layout from "../../components/layout/Layout";
// import Cards from '../pages/homepages/Cards'
import Faq  from '../homePages/FaqSection'
import TopPoster   from '../homePages/TopPoster'
import CourseCards   from '../homePages/CourseCards'
import AboutSections  from '../homePages/AboutSections'
import Testimonials  from '../homePages/Testimonials'
import PlacementReport  from '../homePages/PlacementReport'

const Home = () => {
  return (
    <Layout>
      <div>
        <TopPoster/>
        <CourseCards/>
       
        {/* <Cards/> */}
        <AboutSections/>
        <Testimonials/>
        <PlacementReport/>
      <Faq/>
      </div>
    </Layout>
  );
};

export default Home;
