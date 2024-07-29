// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

// const images = [
//     'https://franchising.bisjhintus.com/img/COMPANY%20ATMOSPHERE.png',
//     'https://franchising.bisjhintus.com/img/OFFLINE%20OFFICE.png',
//     'https://franchising.bisjhintus.com/img/ONLINE%20CLASS.png',
//     'https://franchising.bisjhintus.com/img/SALE.png',
//     //  'https://franchising.bisjhintus.com/img/TECH%20TEAM.png',
//     // Add more image paths as needed
//   ];

// const EventAcademy = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000, // 3 seconds
//       };
    
//       return (
//         <div className="font-type container mx-auto py-12">
//             <h1 className='text-center text-3xl md:text-5xl text-white font-bold py-4 pb-10'>
//             Curious about what's happening at the Academy? <br />
//             <p className='text-2xl text-white mt-2'> 
//             Stay tuned for exciting news and events!
//               </p>
//               </h1>
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="flex justify-center">
//             <img
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full px-10 lg:px-32  h-[600px] object-cover"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//       );
// }

// export default EventAcademy
















import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventAcademy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1, // Default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 425, // mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // small screens
        settings: {
          slidesToShow: 2, //image 2 show
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2560, // medium screens
        settings: {
          slidesToShow: 3, //image number for each slide
          slidesToScroll: 1, //slide number
        },
      },
    ],
  };

  // Testimonial data
const images = [
    'https://franchising.bisjhintus.com/img/COMPANY%20ATMOSPHERE.png',
    'https://franchising.bisjhintus.com/img/OFFLINE%20OFFICE.png',
    'https://franchising.bisjhintus.com/img/ONLINE%20CLASS.png',
    'https://franchising.bisjhintus.com/img/SALE.png',
    //  'https://franchising.bisjhintus.com/img/TECH%20TEAM.png',
    // Add more image paths as needed
  ];

  return (
    <section className="font-type px-0 md:px-5 lg:px-40 xl:px-60 2xl:px-80 ">

      <h1 className="text-center mt-10 rounded-tl-xl rounded-tr-xl text-white font-bold p-1 px-4">
        <p className="text-2xl sm:text-4xl lg:text-5xl">
        Curious about what's happening at the Academy?
        </p> <br />
       <h2 className="text-lg sm:text-xl lg:text-2xl">Stay tuned for exciting news and events!</h2> 

      </h1>

      {/* Testimonials Section */}
      <div className="flex flex-col mt-10 mb-10 lg:mt-20 px-8 md:px-20 justify-center items-center w-full radius-yellow p-4 rounded-3xl bg-custom-brown">
        <Slider {...settings} className="flex p-2 w-full">
          {images.map((image, index) => (
            <div key={index} className="p-1">
              <div className="flex justify-center items-center gap-4">
                <div className="text-center w-60 p- flex flex-col justify-center bg-white rounded-lg">
                  {/* <h1 className="text-xl font-bold mb-5">{image}</h1> */}
                  <img src={image} alt="" />
                  {/* <p>{testimonial.text}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EventAcademy;
