import React from 'react';

const Benefit = ({ icon, title, description }) => (
  <div className="font-jost relative border border-blue-400 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full">
      <img src={icon} alt={`${title} Icon`} className="w-8 h-8" />
    </div>
    <div className="ml-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Benefits = () => (
  <section className="font-jost  bg-gray-50 py-16">
    <div className="container mx-auto px-9">
      <h2 className="text-3xl  sm:text-4xl lg:text-5xl  font-bold text-center text-gray-900 mb-12">
        Franchise Benefits
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <Benefit
          icon="\mount_8007400.png"
          title="Ride the Vowlink Wave "
          description="Benefit from our established brand and loyal customer base"
        />
        <Benefit
          icon="\coaching_11421475.png"
          title="Your Success, Our Support"
          description="Get expert training and ongoing guidance"
        />
        <Benefit
          icon="\technical-support_3193158.png"
          title="Teach the Future"
          description=" Deliver cutting-edge courses with our resources"
        />
        <Benefit
          icon="\materials-science_9089005.png"
          title="Proven Path to Profit"
          description="Follow our successful business model"
        />
        <Benefit
          icon="\LucrativeFinancialOpportunities_icon.png"
          title="Earn More, Do More"
          description="Enjoy multiple income streams and growth opportunities"
        />
        <Benefit
          icon="\GlobalNetworkandCommunity_icon.png"
          title="Join the E-Learning Community"
          description="Connect with like-minded entrepreneurs"
        />


        <Benefit
          icon="\FlexibilityandAutonomy_icon.png"
          title="Be Your Own Boss, Our Way"
          description="Balance flexibility and support"
        />

        <Benefit
          icon="\ExclusiveAccesstoResources_icon.png"
          title="Access All Areas"
          description="Unlock exclusive tools and insights"
        />
      </div>
        {/* buttons explore now */}
        <div className='mt-14 mb-10 flex justify-center '>
        <button className='bg-orange-500 rounded-lg px-12 py-3 text-white text-lg font-bold'>
            Connect Now
          </button>
      </div>
    </div>
  </section>
);

export default Benefits;
