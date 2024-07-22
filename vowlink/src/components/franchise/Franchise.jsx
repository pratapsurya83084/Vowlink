import React from 'react'
import  Layout  from '../layout/Layout'
import FirstSection from '../franchisePages/FirstSection'
import AboutSection from '../franchisePages/AboutSection'
import Benefits  from '../franchisePages/Benefits'
import FranchiseProcess  from '../franchisePages/HowworkFranchise'
import FranchiseComparison  from '../franchisePages/FranchiseCompare'
import VidioSection  from '../franchisePages/VidioSection'
const Franchise = () => {
  return (
    <Layout>

   
    <div>
     <FirstSection/>
     <AboutSection/>

     <Benefits/>
    <FranchiseProcess/>
    <VidioSection/>
    <FranchiseComparison/>
    </div>
    </Layout>
  )
}

export default Franchise
