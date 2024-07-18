import React from 'react';

const PlacementReport = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <div className="text-xl md:text-2xl font-bold">[organisation name] LEARNING | [12 YEARS]</div>
        <button className="py-2 px-4 bg-yellow-500 rounded">Login</button>
      </header>
      <main className="flex flex-col items-center py-12 px-4 md:px-8 lg:px-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">3,500+ Multinational Hiring Partners</h1>
        <p className="text-md md:text-lg mb-4 text-center">A World Of Opportunities For You</p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['KPMG', 'RBS', 'Capgemini', 'Goldman Sachs', 'Societe Generale', 'BNP Paribas', 'HSBC', 'UBS'].map((company, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white shadow-md rounded w-24 md:w-32 lg:w-40">
              <img src={`path_to_${company}_logo`} alt={`${company} logo`} className="h-8 md:h-12 lg:h-16"/>
            </div>
          ))}
        </div>
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-xl font-semibold">We Have An 80% Placement Success Rate</h2>
          <p className="text-sm md:text-md">Learn more about how we've been impacting thousands of careers.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="py-2 px-4 bg-yellow-500  rounded">Download Placement Report</button>
          {/* <button className="py-2 px-4 bg-yellow-500  rounded">Request a Callback</button> */}
          <button className="py-2 px-4 bg-yellow-500  rounded">Say Hi! on Whatsapp</button>
        </div>
      </main>
      
    </div>
  );
}

export default PlacementReport;
