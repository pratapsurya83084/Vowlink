import React from 'react';

const Benefit = ({ icon, title, description }) => (
  <div className="relative bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
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
    <div className="container mx-auto px-6">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl  font-bold text-center text-gray-900 mb-12">Franchise Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <Benefit
          icon="\mount_8007400.png"
          title="Established Brand Recognition"
          description="Leverage the credibility of a well-established brand known for excellence in business education. Benefit from our reputation and existing customer base to attract and retain clients."
        />
        <Benefit
          icon="\coaching_11421475.png"
          title="Comprehensive Training and Support"
          description="Receive extensive training on our business model, operations, and educational tools. Access continuous support from our dedicated team to ensure your franchise's success."
        />
        <Benefit
          icon="\technical-support_3193158.png"
          title="Innovative Educational Resources"
          description="Utilize our expertly designed courses and materials that keep pace with industry advancements. Incorporate the latest e-learning tools and platforms to enhance the learning experience."
        />
        <Benefit
          icon="\materials-science_9089005.png"
          title="Proven Business Model"
          description="Benefit from a business model with a track record of success and profitability. Utilize our tested marketing strategies to boost your franchise's visibility and growth."
        />
        <Benefit
          icon="\LucrativeFinancialOpportunities_icon.png"
          title="Lucrative Financial Opportunities"
          description="Enjoy competitive financial returns with a structured revenue model. Tap into multiple revenue streams, including course fees, workshops, and additional services."
        />
        <Benefit
          icon="\GlobalNetworkandCommunity_icon.png"
          title="Global Network and Community"
          description="Connect with a global network of franchise partners and educational professionals. Join a supportive community that shares best practices and success stories."
        />


        <Benefit
          icon="\FlexibilityandAutonomy_icon.png"
          title="Flexibility and Autonomy"
          description="Run your franchise with the autonomy to tailor services to your local market while following our proven model. Customize your approach to meet the specific needs and preferences of your region."
        />

        <Benefit
          icon="\ExclusiveAccesstoResources_icon.png"
          title="Exclusive Access to Resources"
          description="Gain access to exclusive educational materials, resources, and tools. Stay informed with the latest trends and insights from the business education sector."
        />
      </div>
    </div>
  </section>
);

export default Benefits;
