import React from "react";
import Layout from "../layout/Layout";
import FirstSection from "../franchisePages/FirstSection";
import AboutSection from "../franchisePages/AboutSection";
import Benefits from "../franchisePages/Benefits";
import FranchiseProcess from "../franchisePages/HowworkFranchise";
import FranchiseComparison from "../franchisePages/FranchiseCompare";
import VidioSection from "../franchisePages/VidioSection";
import TextAndPictureSection from "../franchisePages/TextAndPictureSection";
import OppourtunitySection from "../franchisePages/OppourtunitySection";
const Franchise = () => {
  return (
    <Layout>
      <div>
        {/* <FirstSection /> */}
        <FranchiseComparison />
        {/* <AboutSection /> */}
        {/* <TextAndPictureSection /> */}
        <Benefits />
        <FranchiseProcess />
        {/* <VidioSection /> */}
        <OppourtunitySection />
        
      </div>
    </Layout>
  );
};

export default Franchise;
