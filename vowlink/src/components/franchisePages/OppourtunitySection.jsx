import React from "react";

const OpportunitySection = () => {
  return (
    <div className="text-white flex flex-col items-center px-10 py-8">
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
            Customer Opinions:
           
            </h2>
            <p>
              {/* Our educational framework integrates the latest teaching
              methodologies and technologies, ensuring a bright future for both
              students and educators. */}
               At Vowlink, the success of our franchisees is 
            the greatest testament to our methods. Here’s 
            what some of our satisfied partners have to say :
            </p>
          </div>

          {/* Point 2 */}
          <div className="mb-6  md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
            Joining Vowlink has been a game :
            </h2>
            <p>
           " changer for my career.
             The support and resources provided have
              made a significant difference in my business.” –
               Jane D., Franchise Owner
            </p>
          </div>

          {/* Point 3 */}
          <div className="mb-6  md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
            The training programs are top :
              </h2>
            <p>
            "notch and incredibly effective.
             I appreciate the guidance from the Vowlink
              team every step of the way!” – Mark R.,
               Franchise Owner
            </p>
          </div>

          {/* Point 4 */}
          <div className=" md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
              {/* Adaptive Support Systems */}
              Vowlink's approach :
              </h2>
            <p>
            To entrepreneurship is refreshing.
             They genuinely care about their
              franchisees' success.” – Sarah L.,
               Franchise Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
