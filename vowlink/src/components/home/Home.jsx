import React from "react";
import Layout from "../../components/layout/Layout";
// import Cards from '../pages/homepages/Cards'
import Faq  from '../homePages/FaqSection'
import TopPoster   from '../homePages/TopPoster'
import AboutSections  from '../homePages/AboutSections'
import Testimonials  from '../homePages/Testimonials'
import PlacementReport  from '../homePages/PlacementReport'
import ImageAndTextSection  from  '../homePages/ImageAndTextSection'
const Home = () => {
  return (
    <Layout>
      <div>
        <TopPoster/>
        <ImageAndTextSection/>
       
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
