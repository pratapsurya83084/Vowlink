import React from "react";
import Layout from "../layout/Layout";

// import AboutSection from "../franchisePages/AboutSection";
import Benefits from "../franchisePages/Benefits";
import FranchiseProcess from "../franchisePages/HowworkFranchise";
import FranchiseComparison from "../franchisePages/FranchiseCompare";
// import VidioSection from "../franchisePages/VidioSection";

import OppourtunitySection from "../franchisePages/OppourtunitySection";
const Franchise = () => {
  return (
    <Layout>
      <div>
       
        <FranchiseComparison />
        {/* <AboutSection /> */}
        
        <Benefits />
        <FranchiseProcess />
        {/* <VidioSection /> */}
        <OppourtunitySection />
        
      </div>
    </Layout>
  );
};

export default Franchise;
