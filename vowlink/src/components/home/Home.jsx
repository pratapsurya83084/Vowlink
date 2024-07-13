import React from "react";
import Layout from "../../components/layout/Layout";
import Cards from '../../components/pages/Cards'
import Faq  from '../../components/pages/FaqSection'
import Poster   from '../../components/pages/Poster'
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
