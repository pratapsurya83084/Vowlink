import React from "react";
import Layout from "../../components/layout/Layout";
// import Cards from '../pages/homepages/Cards'
import Faq  from '../pages/homepages/FaqSection'
import Poster   from '../pages/homepages/Poster'
import ProgramList   from '../pages/homepages/ProgrameCourse'
import AboutSections  from '../pages/homepages/AboutSections'
// import TestimonialsSection  from '../pages/homepages/TestimonialsSection'

const Home = () => {
  return (
    <Layout>
      <div>
        <Poster/>
        <ProgramList/>
        {/* <Cards/> */}
        <AboutSections/>
        {/* <TestimonialsSection/> */}
      <Faq/>
      </div>
    </Layout>
  );
};

export default Home;
