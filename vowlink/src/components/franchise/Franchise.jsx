import React from "react";
import Layout from "../layout/Layout";


import Benefits from "../franchisePages/Benefits";
import FranchiseProcess from "../franchisePages/HowworkFranchise";
import FranchiseComparison from "../franchisePages/FranchiseCompare";


import OppourtunitySection from "../franchisePages/OppourtunitySection";
const Franchise = () => {
  return (
    <Layout>
      <div>
       
        <FranchiseComparison />
        
        
        <Benefits />
        <FranchiseProcess />
      
        <OppourtunitySection />
        
      </div>
    </Layout>
  );
};

export default Franchise;
