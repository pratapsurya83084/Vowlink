import React from "react";

const Poster = () => {
  return (
    <div className="">
      <header className="text-center bg-gray-200   py-10">
        <h1 className="text-4xl font-bold">BEST  TRAINING INSTITUTE </h1>
        <p className="mt-2">
           ABAP | PP | SD | HR | HANA | Logistics | Finance |
          Admin | BW
        </p>
        <p className="mt-1">
          Pan India SAP Training | Classroom & Webinar Trainings | Up-Skill
          employees
        </p>
      </header>
      <main className="lg:flex justify-center mx-auto py-10">
        <div className=" bg-white text-black m-4 p-10 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Skill Trainnig Course</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            quas odit necessitatibus laudantium unde dolore! Aut doloribus
            dolorum culpa quod placeat dolores quae inventore autem. Rerum,
            illum voluptates. Similique, harum. Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Illo iste fugit excepturi mollitia
            minima repellendus, perferendis officiis at aperiam, nihil
            blanditiis soluta vel, sapiente similique in. Praesentium id <br />
            reprehenderit illo? 
          </p>
        </div>

        {/* ml-10 */}
        <div className="p-4">
          <div className="bg-white text-black p-8 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Course Enquiry</h3>
            <form className="space-y-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Enter Name"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                placeholder="Enter Email"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="tel"
                placeholder="Enter Phone No*"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Interested Course"
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Message Details"
              />
              <button
                className="w-full p-2 bg-blue-500 text-white rounded"
                type="submit"
              >
                Enquire Now your Interested Course Here!
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Poster;
