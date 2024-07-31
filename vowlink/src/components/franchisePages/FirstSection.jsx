import React from "react";



const FirstSection = () => {
  return (
    <section className="font-jost text-white mt-0 pt-32  ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4">
            {/* Franchise Opportunities */}
            Franchise Opportunities Own a Profitable E-learning Business with
            Vowlink
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Ready to start your journey with Vowlink? Follow our simple
            application process to get started today. Complete the franchise
            application form, attend our franchise orientation session, and
            begin your journey towards transforming education.
          </p>
          <button className="bg-orange-500 text-white py-3 px-6 rounded font-bold hover:bg-orange-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
