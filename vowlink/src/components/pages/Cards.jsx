import React from 'react';

const courses = [
  {
    title: "Introduction to Programming",
    description: "Learn the fundamentals of programming with hands-on projects.",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    title: "Digital Marketing Mastery",
    description: "Master the strategies and tools to excel in digital marketing.",
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
    snippet: "Discover the essential skills you need to thrive in the coming years...",
    imgSrc: "https://via.placeholder.com/200",
  },
  {
    title: "How to Stay Motivated While Learning Online",
    snippet: "Tips and tricks to keep your learning journey engaging and productive...",
    imgSrc: "https://via.placeholder.com/200",
  },
];

const testimonials = [
  {
    quote: "This course changed my career path for the better! Highly recommend!",
    name: "Jane Doe, Marketing Specialist",
  },
  {
    quote: "The instructors are knowledgeable and passionate. A great learning experience!",
    name: "John Smith, Graphic Designer",
  },
  {
    quote: "I loved the flexibility and the content was top-notch. Will take more courses!",
    name: "Emily Johnson, Data Analyst",
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="flex items-center  justify-between mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Welcome to Our Learning Platform</h1>
          <p className="mt-4">Empower yourself with high-quality educational resources!</p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">Explore Courses</button>
        </div>
        <img  src="https://via.placeholder.com/400"
         alt="Promotional Poster"
          className="w-1/2 rounded " />
      </div>

      {/* About Us */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          Welcome to [Your Organization Name], where we empower learners of all ages to achieve their dreams through high-quality educational resources. Our mission is to provide accessible and engaging courses that inspire and equip individuals with the knowledge and skills necessary for success in today’s fast-paced world. With a dedicated team of experienced educators and industry professionals, we offer a diverse range of subjects designed to foster growth and innovation. Join us on this journey of lifelong learning and discover your potential!
        </p>
      </section>

      {/* Explore Courses */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Explore Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img src={course.imgSrc} alt={course.title} className="rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p>{course.description}</p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Enroll Now</button>
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
              <img src={blog.imgSrc} alt={blog.title} className="rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p>{blog.snippet}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Read More</button>
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
