

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const EventAcademy = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 1, // Default
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     prevArrow: null,
//     nextArrow: null,
//     responsive: [
//       {
//         breakpoint: 425, // mobile screens
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640, // mobile screens
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768, // small screens
//         settings: {
//           slidesToShow: 2, //image 2 show
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 2560, // medium screens
//         settings: {
//           slidesToShow: 3, //image number for each slide
//           slidesToScroll: 1, //slide number
//         },
//       },
//     ],
//   };

//   // Testimonial data
// const images = [
//     'https://franchising.bisjhintus.com/img/COMPANY%20ATMOSPHERE.png',
//     'https://franchising.bisjhintus.com/img/OFFLINE%20OFFICE.png',
//     'https://franchising.bisjhintus.com/img/ONLINE%20CLASS.png',
//     'https://franchising.bisjhintus.com/img/SALE.png',
//     //  'https://franchising.bisjhintus.com/img/TECH%20TEAM.png',
//     // Add more image paths as needed
//   ];

//   return (
//     <section className="font-type px-0 md:px-5 lg:px-40 xl:px-60 2xl:px-80 ">

//       <h1 className="text-center mt-10 rounded-tl-xl rounded-tr-xl text-white font-bold p-1 px-4">
//         <p className="text-2xl sm:text-4xl lg:text-5xl">
//         Stay Informed and Inspired
//         </p> <br />
//        {/* <h2 className="text-lg sm:text-xl lg:text-2xl">Stay tuned for exciting news and events!</h2>  */}

//       </h1>

//       {/* Testimonials Section */}
//       <div className="flex flex-col mt-10 mb-10 lg:mt-20 px-8 md:px-20 justify-center items-center w-full radius-yellow p-4 rounded-3xl bg-custom-brown">
//         <Slider {...settings} className="flex p-2 w-full">
//           {images.map((image, index) => (
//             <div key={index} className="p-1">
//               <div className="flex justify-center items-center gap-4">
//                 <div className="text-center w-60 p- flex flex-col justify-center bg-white rounded-lg">
//                   {/* <h1 className="text-xl font-bold mb-5">{image}</h1> */}
//                   <img src={image} alt="" />
//                   {/* <p>{testimonial.text}</p> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default EventAcademy;


import React from 'react';

const EventAcademy = () => {
  const items = [
    {
      title: "Exciting New Courses",
      description: "Explore our latest offerings designed to keep pace with industry trends and equip you with cutting-edge skills.",
      imageUrl: "https://franchising.bisjhintus.com/img/COMPANY%20ATMOSPHERE.png",
    },
    {
      title: "Upcoming Events",
      description: "Be the first to know about our upcoming workshops, webinars, and seminars featuring industry experts and thought leaders.",
      imageUrl: "https://franchising.bisjhintus.com/img/OFFLINE%20OFFICE.png",
    },
    {
      title: "Success Stories",
      description: "Discover how our students and franchise partners are achieving remarkable success and transforming their futures.",
      imageUrl: "https://franchising.bisjhintus.com/img/ONLINE%20CLASS.png",
    },

    // next 3 image
    {
      title: "Innovative Tools",
      description: "Get updates on the newest tools and technologies we're integrating to enhance your learning experience.",
      imageUrl: "https://franchising.bisjhintus.com/img/GIRL%20VIRTUAL.png",
    },
    {
      title: "Community Highlights",
      description: "See how our vibrant community is making an impact, from student achievements to franchisee milestones.",
      imageUrl: "https://franchising.bisjhintus.com/img/SALE.png",
    },
    {
      title: "Exclusive Offers",
      description: "Stay tuned for special promotions, discounts, and opportunities to join our growing network of successful franchise partners.",
      imageUrl: "https://franchising.bisjhintus.com/img/INTERNSHIP.png",
    },
    {
      title: "Stay Connected",
      description: "Follow us on social media and subscribe to our newsletter to keep up with all the exciting developments at VL Academy.",
      imageUrl: "https://franchising.bisjhintus.com/img/ONLINE%20CLASS%20FOR%20CAT.png",
    },
  ];

  return (
    <div className="font-jost bg- text-white py-10">
     <h1 className='text-center text-2xl sm:text-4xl lg:text-5xl mb-10'>Stay Informed and Inspired</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="pb-  transition-transform transform hover:scale-105 p-6 rounded-lg  w-full h-64 object-cover mb-4  shadow-lg"
              />
              <h3 className="text-xl md:text-2xl font-semibold text- mb-2">
                {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
       {/* button */}
       <div className="flex justify-center pb-10">
                <button className="bg-orange-500 text-white font-bold px-14 text-xl py-4 mt-10 rounded-lg">Start Now</button>
              </div>
    </div>
  );
};

export default EventAcademy;

