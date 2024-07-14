import React from "react";

const programs = [
  {
    title: "Full Stack Web Development Bootcamp",
    description:
      "Master the skills required to become a proficient full stack web developer.",
    duration: "12 weeks",
    category: "technology",
    image: "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },

  {
    title: "Android Development Bootcamp",
    description:
      "Master the skills required to become a proficient Android  developer.",
    duration: "10 weeks",
    category: "technology",
    image: "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },

  {
    title: "Postgraduate Program in Finance and Investment Banking",
    description:
      "Gain comprehensive knowledge and skills in finance and investment banking.",
    duration: "9 Months",
    category: "finance",
    image:
      "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },
  {
    title: "Chartered Financial Analyst (CFA)",
    description:
      "CFA Certification: Your Competitive Edge in the World of Finance",
    duration: "6 Months | Live Online",

    category: "Certification Program",
    image:
      "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },
  {
    title: "Executive Program in Business Analytics",
    description:
      "Gain strategic skills in business analytics for senior management roles.",
    duration: "4 Months | Weekend | Live Online",

    category: "Executive Program",
    image:
      "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },
  {
    title: "Digital Marketing Specialist",
    description:
      "Become a certified digital marketing expert with hands-on training.",
    duration: "3 Months | Weekday | Classroom",

    category: "Specialization Program",
    image:
      "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },
  {
    title: "Certified Blockchain Professional",
    description:
      "Master blockchain technology with practical projects and expert guidance.",
    duration: "5 Months | Weekday | Live Online",

    category: "Certification Program",
    image:
      "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },
  {
    title: "Strategic Leadership & Management",
    description:
      "Develop leadership skills for effective management in dynamic environments.",
    duration: "6 Months | Weekend | Classroom",

    category: "Leadership Program",
    image:
      "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },
  {
    title: "Artificial Intelligence Engineer",
    description: "Become proficient in AI and machine learning technologies.",
    duration: "6 Months | Weekday | Live Online",

    category: "Specialization Program",
    image:
      "https://th.bing.com/th/id/OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4?rs=1&pid=ImgDetMain",
  },
  
];

const ProgramCard = ({ program }) => (
  <div className="ml-2 mt-4  bg-white shadow rounded overflow-hidden">
    <img
      src={program.image}
      alt={program.title}
      className="w-full sm:h-96 md:h-60 h-40 object-cover"
    />
    <div className="p-4">
      <div className="text-sm font-bold text-gray-600">{program.category}</div>
      <h4 className="text-lg font-bold mt-2">{program.title}</h4>
      <p className="text-gray-600 mt-2">{program.description}</p>
      <p className="text-sm text-gray-600 mt-2">{program.duration}</p>
      {/* <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-lg font-bold">
          {program.rating}
        </span>
        <span className="text-gray-600 text-sm ml-2">/ 5</span>
      </div> */}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-yellow-400  py-2 px-4 rounded">Buy Course</button>
        {/* <button className="bg-gray-200 py-2 px-4 rounded">Know More</button> */}
      </div>
    </div>
  </div>
);

// top programs list
const ProgramList = () => (
  <div className="container   mx-auto px-6 py-12 flex flex-wrap">
    {/* top program */}
    <aside className="w-full lg:w-1/4  p-4 ">
      <div className="bg-gray-100 rounded">
        <h3 className="text-lg font-bold mb-4 px-3 p-2">Top Programs</h3>
        {/* Dropdown for smaller screens */}
        <select className="block lg:hidden w-full py-2 px-4   bg-gray-200 rounded">
          <option>Finance</option>
          <option>Analytics</option>
          <option>Technology</option>
          <option>Marketing</option>
          <option>General Management</option>
          <option>Sales</option>
          {/* <option>Human Resources</option>
          <option>Operations</option>
          <option>Fintech</option> */}
        </select>
      </div>

      <nav>
        {/* List for larger screens */}
        <div className="bg-gray-100 p-4 ">
          <ul className="hidden lg:block  space-y-2">
            <li className="block  cursor-pointer hover:bg-yellow-300 py-2 px-4 bg-gray-200  rounded">
              Finance
            </li>
            <li className="block cursor-pointer    hover:bg-yellow-300 py-2 px-4 bg-gray-200 rounded">
              Analytics
            </li>
            <li className="block  cursor-pointer  hover:bg-yellow-300  py-2 px-4 bg-gray-200 rounded">
              Technology
            </li>
            <li className="block  cursor-pointer   hover:bg-yellow-300 py-2 px-4 bg-gray-200 rounded">
              Marketing
            </li>
            <li className="block cursor-pointer    hover:bg-yellow-300 py-2 px-4 bg-gray-200 rounded">
              General Management
            </li>
            <li className="block  cursor-pointer   hover:bg-yellow-300 py-2 px-4 bg-gray-200 rounded">
              Sales
            </li>
            {/* <li className="block  cursor-pointer  hover:bg-yellow-300  py-2 px-4 bg-gray-200 rounded">
              {" "}
              Human Resources
            </li> */}
            {/* <li className="block  cursor-pointer  hover:bg-yellow-300  py-2 px-4 bg-gray-200 rounded">
              Operations
            </li> */}
            {/* <li className="block  cursor-pointer   hover:bg-yellow-300 py-2 px-4 bg-gray-200 rounded">
              Fintech
            </li> */}
          </ul>
        </div>
      </nav>
    </aside>

    {/* show cards data */}
    <section className="w-full lg:w-3/4">
      <h2 className="text-2xl font-bold mb-6 px-5 lg:hidden">Our Programs</h2>
      <div className="sm:grid-cols-2 flex  flex-wrap -mx-4">
        {programs.map((program, index) => (
          <div key={index} className="w-full lg:w-1/3 px-4 mb-8">
            <ProgramCard program={program} />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ProgramList;
