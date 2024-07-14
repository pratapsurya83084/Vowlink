import React from "react";
import Layout from "../../components/layout/Layout";
import Cards from '../pages/homepages/Cards'
import Faq  from '../pages/homepages/FaqSection'
import Poster   from '../pages/homepages/Poster'
const Home = () => {
  return (
    <Layout>
      <div>
        <Poster/>
        <Cards/>
        
      <Faq/>
      </div>
    </Layout>
  );
};

export default Home;
