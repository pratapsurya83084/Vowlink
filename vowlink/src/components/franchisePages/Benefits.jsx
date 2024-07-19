import React from 'react';

const Benefit = ({ icon, title, description }) => (
  <div className="flex items-start bg-white p-6 rounded-lg shadow-lg relative">
    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full">
      <img src={icon} alt={`${title} Icon`} className="w-6 h-6" />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <Benefit
          icon="/icons/brand.svg"
          title="Established Brand"
          description="Leverage our strong brand identity and market presence to attract customers and build credibility."
        />
        <Benefit
          icon="/icons/training.svg"
          title="Comprehensive Training"
          description="Receive in-depth training to ensure you are well-prepared to run your franchise effectively."
        />
        <Benefit
          icon="/icons/support.svg"
          title="Ongoing Support"
          description="Benefit from continuous support from our experienced team, including marketing, operations, and more."
        />
        <Benefit
          icon="/icons/model.svg"
          title="Proven Business Model"
          description="Operate with a tested and successful business model that maximizes your chances of success."
        />
        <Benefit
          icon="/icons/marketing.svg"
          title="Marketing Resources"
          description="Access a range of marketing materials and strategies to help you attract and retain customers."
        />
        <Benefit
          icon="/icons/territory.svg"
          title="Exclusive Territories"
          description="Operate in a protected territory to reduce competition and enhance profitability."
        />
      </div>
    </div>
  </section>
);

export default Benefits;
