import React from 'react'
import  Layout  from '../layout/Layout'
import FirstSection from '../franchisePages/FirstSection'
import AboutSection from '../franchisePages/AboutSection'
import Benefits  from '../franchisePages/Benefits'
import FranchiseProcess  from '../franchisePages/HowworkFranchise'
const Franchise = () => {
  return (
    <Layout>

   
    <div>
     <FirstSection/>
     <AboutSection/>

     <Benefits/>
    <FranchiseProcess/>
    </div>
    </Layout>
  )
}

export default Franchise
