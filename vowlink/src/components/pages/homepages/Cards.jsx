import React from "react";

const courses = [
  {
    title: "Introduction to Programming",
    description:
      "Learn the fundamentals of programming with hands-on projects.",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    title: "Digital Marketing Mastery",
    description:
      "Master the strategies and tools to excel in digital marketing.",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    title: "Graphic Design Essentials",
    description: "Unlock your creativity with our graphic design course.",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    title: "Data Science for Beginners",
    description: "Dive into data analysis and visualization techniques.",
    imgSrc: "https://via.placeholder.com/300",
  },
];

const blogs = [
  {
    title: "The Future of Online Learning",
    snippet: "Explore the latest trends shaping the future of education...",
    imgSrc: "https://via.placeholder.com/200",
  },
  {
    title: "Top Skills for 2024",
    snippet:
      "Discover the essential skills you need to thrive in the coming years...",
    imgSrc: "https://via.placeholder.com/200",
  },
  {
    title: "How to Stay Motivated While Learning Online",
    snippet:
      "Tips and tricks to keep your learning journey engaging and productive...",
    imgSrc: "https://via.placeholder.com/200",
  },
];

const testimonials = [
  {
    quote:
      "This course changed my career path for the better! Highly recommend!",
    name: "Jane Doe, Marketing Specialist",
  },
  {
    quote:
      "The instructors are knowledgeable and passionate. A great learning experience!",
    name: "John Smith, Graphic Designer",
  },
  {
    quote:
      "I loved the flexibility and the content was top-notch. Will take more courses!",
    name: "Emily Johnson, Data Analyst",
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Our Learning Platform
            </h1>
            <p className="mb-8 leading-relaxed">
              Enpower Yourself With high quality educational resources !
            </p>
            <div className="flex justify-center">
              <button className="inline-flex bg-yellow-400 text-black border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                Explore Cources
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          Welcome to [Your Organization Name], where we empower learners of all
          ages to achieve their dreams through high-quality educational
          resources. Our mission is to provide accessible and engaging courses
          that inspire and equip individuals with the knowledge and skills
          necessary for success in today’s fast-paced world. With a dedicated
          team of experienced educators and industry professionals, we offer a
          diverse range of subjects designed to foster growth and innovation.
          Join us on this journey of lifelong learning and discover your
          potential!
        </p>
      </section>
      {/* online course section */}
      <section className="py-8 px-4 bg-white">
        <h1 className="text-3xl pb-4 font-bold text-gray-800">Online Course</h1>

        <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="https://w7.pngwing.com/pngs/382/328/png-transparent-online-degree-course-lecturer-learning-student-massive-open-online-course-text-logo-teacher.png"
              alt="Online Course"
            />
          </div>
          <div className="w-full md:w-2/3 flex-grow">
            <p className="text- text-gray-700">
              Our courses are for anyone, anywhere seeking to create a positive
              impact in their communities. Learn about storytelling for change,
              explore systems practice, or dive into human-centered design. More
              than half a million people have taken a course. Find yours.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Courses */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Explore Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={course.imgSrc}
                alt={course.title}
                className="rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p>{course.description}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Blog Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p>{blog.snippet}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
              <p className="italic">“{testimonial.quote}”</p>
              <p className="font-bold mt-2">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;
