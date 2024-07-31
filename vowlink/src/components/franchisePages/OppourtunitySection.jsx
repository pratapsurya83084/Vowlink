import React from "react";

const OpportunitySection = () => {
  return (
    <div className="text-white flex flex-col items-center px-10 py-8">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center   font-bold mb-8">
        Pathways to Progress : Vision Meets Opportunity
      </h1>

      <div className=" flex flex-col md:mt-20 md:flex-row items-center justify-center gap-8">
        {/* Image section */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/people-looking-man-with-megaphone-concept-illustration_52683-23816.jpg?t=st=1721652429~exp=1721656029~hmac=10290541d7db53b98823cec43921636c3d938f025587435347e1d4858d0262e2&w=740"
            alt="Opportunity"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text section */}
        <div className="flex flex-col items- md:items-start w-full md:w-1/2">
  {/* Point 1 */}
  <div className="mb-6 text- md:text-left">
    <h2 className="text-2xl font-semibold mb-2">
      Innovative Learning :
    </h2>
    <p>
      Cutting-edge teaching methods and technologies for a successful future.
    </p>
  </div>

  {/* Point 2 */}
  <div className="mb-6 text- md:text-left">
    <h2 className="text-2xl font-semibold mb-2">
      Supportive Community :
    </h2>
    <p className="">
      A collaborative environment that drives academic excellence.
    </p>
  </div>

  {/* Point 3 */}
  <div className="mb-6 text- md:text-left">
    <h2 className="text-2xl font-semibold mb-2">
      Sustainable Growth :
    </h2>
    <p>
      Education initiatives crucial for long-term societal development.
    </p>
  </div>

  {/* Point 4 */}
  <div className="mb-6 text- md:text-left">
    <h2 className="text-2xl font-semibold mb-2">
      Adaptive Support :
    </h2>
    <p>
      Flexible support systems for a resilient and dynamic learning experience.
    </p>
  </div>
</div>


      </div>
    </div>
  );
};

export default OpportunitySection;
