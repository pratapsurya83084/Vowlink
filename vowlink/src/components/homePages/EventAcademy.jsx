
import React from 'react';

const EventAcademy = () => {
  const items = [
    {
      title: "Exciting New Courses",
      description: "Explore our latest offerings designed to keep pace with industry trends and equip you with cutting-edge skills.",
      imageUrl: "\exciting_course_logo.jpg",
    },
    {
      title: "Upcoming Events",
      description: "Be the first to know about our upcoming workshops, webinars, and seminars featuring industry experts and thought leaders.",
      imageUrl: "/upcoming_events_logo.jpg",
    },
    {
      title: "Success Stories",
      description: "Discover how our students and franchise partners are achieving remarkable success and transforming their futures.",
      imageUrl: "\success_story.jpg",
    },

    // next 3 image
    {
      title: "Innovative Tools",
      description: "Get updates on the newest tools and technologies we're integrating to enhance your learning experience.",
      imageUrl: "\innovative_tools.jpg",
    },
    {
      title: "Community Highlights",
      description: "See how our vibrant community is making an impact, from student achievements to franchisee milestones.",
      imageUrl: "\community_highlights.jpg",
    },
    {
      title: "Exclusive Offers",
      description: "Stay tuned for special promotions, discounts, and opportunities to join our growing network of successful franchise partners.",
      imageUrl: "\special-offer-creative-sale_logoimage.jpg",
    },
  
  ];

  return (
    <div className="font-jost bg- text-white py-10">
     <h1 className='text-center text-3xl font-bold  sm:text-4xl lg:text-5xl mb-10'>Stay Informed and Inspired</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="pb- border  transition-transform transform hover:scale-105 p-6 rounded-lg  w-full h-64 object-cover mb-4  shadow-lg"
              />
              <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold text- mb-2">
                {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
       {/* button */}
       <div className="flex justify-center pb-10">
       <a href="https://vowlink.com/">
                <button className="bg-orange-500 text-white font-bold px-14 text-xl py-4 mt-10 rounded-lg">
                  Stay Connected
                  </button>
                  </a>
              </div>
    </div>
  );
};

export default EventAcademy;

