import React from 'react';

const Benefit = ({ icon, title, description }) => (
  <div className="flex items-start bg-white p-6 rounded-lg shadow-lg relative">
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
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Franchise Benefits</h2>
     {/* <p>Vowlink's success is driven by our expert team. With a passion for e-learning and franchising, we provide comprehensive support to our franchisees, ensuring their growth and success.</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <Benefit
          icon="\mount_8007400.png"
          title="Franchise Training Programs"
          description="Leverage our strong brand identity and market presence to attract customers and build credibility."
        />
        <Benefit
          icon="\coaching_11421475.png"
          title="Business Development Resources"
          description="Receive in-depth training to ensure you are well-prepared to run your franchise effectively."
        />
        <Benefit
          icon="\technical-support_3193158.png"
          title="Technology Solutions"
          description="Benefit from continuous support from our experienced team, including marketing, operations, and more."
        />
        <Benefit
          icon="\materials-science_9089005.png"
          title="Community Engagement"
          description="Operate with a tested and successful business model that maximizes your chances of success."
        />
        {/* <Benefit
          icon="\resource-allocation_17142739.png"
          title="Marketing Resources"
          description="Access a range of marketing materials and strategies to help you attract and retain customers."
        /> */}
        {/* <Benefit
          icon="\network_2118840.png"
          title="Exclusive Territories"
          description="Operate in a protected territory to reduce competition and enhance profitability."
        /> */}
      </div>
    </div>
  </section>
);

export default Benefits;
