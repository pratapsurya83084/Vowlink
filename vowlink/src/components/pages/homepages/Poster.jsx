import React from "react";

const Poster = () => {
  return (
    // <div classNameName="">
    //   <header classNameName="text-center bg-gray-200   py-10">
    //     <h1 classNameName="text-4xl font-bold">BEST  TRAINING INSTITUTE </h1>
    //     <p classNameName="mt-2">
    //        ABAP | PP | SD | HR | HANA | Logistics | Finance |
    //       Admin | BW
    //     </p>
    //     <p classNameName="mt-1">
    //       Pan India SAP Training | ClassNameroom & Webinar Trainings | Up-Skill
    //       employees
    //     </p>
    //   </header>
    //   <main classNameName="lg:flex justify-center mx-auto py-10">
    //     <div classNameName=" bg-white text-black m-4 p-10 rounded shadow-lg">
    //       <h2 classNameName="text-2xl font-bold mb-4">Skill Trainnig Course</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
    //         quas odit necessitatibus laudantium unde dolore! Aut doloribus
    //         dolorum culpa quod placeat dolores quae inventore autem. Rerum,
    //         illum voluptates. Similique, harum. Lorem ipsum dolor sit amet <br />
    //         consectetur adipisicing elit. Illo iste fugit excepturi mollitia
    //         minima repellendus, perferendis officiis at aperiam, nihil
    //         blanditiis soluta vel, sapiente similique in. Praesentium id <br />
    //         reprehenderit illo?
    //       </p>
    //     </div>

    //     {/* ml-10 */}
    //     <div classNameName="p-4">
    //       <div classNameName="bg-white text-black p-8 rounded shadow-lg">
    //         <h3 classNameName="text-xl font-bold mb-4">Course Enquiry</h3>
    //         <form classNameName="space-y-4">
    //           <input
    //             classNameName="w-full p-2 border border-gray-300 rounded"
    //             type="text"
    //             placeholder="Enter Name"
    //           />
    //           <input
    //             classNameName="w-full p-2 border border-gray-300 rounded"
    //             type="email"
    //             placeholder="Enter Email"
    //           />
    //           <input
    //             classNameName="w-full p-2 border border-gray-300 rounded"
    //             type="tel"
    //             placeholder="Enter Phone No*"
    //           />
    //           <input
    //             classNameName="w-full p-2 border border-gray-300 rounded"
    //             type="text"
    //             placeholder="Interested Course"
    //           />
    //           <textarea
    //             classNameName="w-full p-2 border border-gray-300 rounded"
    //             placeholder="Message Details"
    //           />
    //           <button
    //             classNameName="w-full p-2 bg-blue-500 text-white rounded"
    //             type="submit"
    //           >
    //             Enquire Now your Interested Course Here!
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <section className="text-gray-600 body-font">
      <h1 className=" p-4  text-center text-2xl">
        At [organisation name] entrepreneurs learn the hard skills required to build
        scalable solutions to poverty and hone the harder skills of moral
        leadership to reimagine and build a better world.
      </h1>
      <div className="container px-5 py-10 mx-auto">
        <div className="bg-yellow-300 p-10 flex flex-col text-center w-full mb-20">
          {/* <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
            ROOF PARTY POLAROID
          </h2> */}
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            BEST TRAINING INSTITUTE
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            ABAP | PP | SD | HR | HANA | Logistics | Finance | Admin | BW
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Shooting Stars
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a className=" text-black inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a className="text-black inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              Neptune
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a className="text-black inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-2">
              Melanchole
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a className="text-black inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-black bg-yellow-400 border-0 py-2 px-8 focus:outline-none  rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default Poster;
