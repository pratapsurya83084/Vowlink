import React from 'react';

const stats = [
  { icon: '🤝', number: '3500+', label: 'HIRING PARTNERS' },
  { icon: '🎓', number: '10,00,000+', label: 'LEARNERS' },
  { icon: '📈', number: '54%', label: 'AVERAGE SALARY HIKE' },
  { icon: '📊', number: '85%', label: 'PLACEMENT RECORD' },
  { icon: '💼', number: '24', label: 'LPA HIGHEST SALARY' },
];

const FirstSection = () => {
  return (
    <section className=" mt-0 py-32  ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Franchise Opportunities</h1>
          <p className="text-lg md:text-xl mb-8">
          Ready to start your journey with Vowlink?
           Follow our simple application process to get
            started today. Complete the franchise application form,
             attend our franchise orientation session, and begin your
              journey towards transforming education.
          </p>
          <button className="bg-yellow-400 py-3 px-6 rounded font-semibold hover:bg-gray-200 transition duration-300">
           Get Started
          </button>
        </div>
        {/* <div className="flex flex-wrap justify-center items-center">
          {stats.map((stat, index) => (
            <div key={index} className="w-1/2 md:w-1/3 lg:w-1/5 p-4 text-center">
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-2xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default FirstSection;
