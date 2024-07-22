import React from "react";

const OpportunitySection = () => {
  return (
    <div className="flex flex-col items-center px-10 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">
        Pathways to Progress : Where Vision Meets Opportunity
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image section */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/people-looking-man-with-megaphone-concept-illustration_52683-23816.jpg?t=st=1721652429~exp=1721656029~hmac=10290541d7db53b98823cec43921636c3d938f025587435347e1d4858d0262e2&w=740"
            alt="Opportunity"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          {/* Point 1 */}
          <div className="mb-6  md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
              Innovative Learning Strategies for a Successful Tomorrow
            </h2>
            <p>
              Our educational framework integrates the latest teaching
              methodologies and technologies, ensuring a bright future for both
              students and educators.
            </p>
          </div>

          {/* Point 2 */}
          <div className="mb-6  md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
              Engaged Learning Community
            </h2>
            <p>
              Our vibrant and supportive learning community provides a solid
              foundation for academic success. Together, students and educators
              foster a collaborative environment that drives excellence.
            </p>
          </div>

          {/* Point 3 */}
          <div className="mb-6  md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Sustainable Growth</h2>
            <p>
              Research indicates that education-focused initiatives are crucial
              for long-term societal development. Predicting future growth depends
              on the combined efforts of educational institutions and students.
            </p>
          </div>

          {/* Point 4 */}
          <div className=" md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Adaptive Support Systems</h2>
            <p>
              Our adaptive support mechanisms are designed to help both educators
              and students navigate any challenges effectively. This ensures a
              resilient and dynamic learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
