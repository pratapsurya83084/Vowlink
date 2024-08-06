// import React from 'react';

// const testimonials = [
//   {
//     name: "Sahil Thakur",
//     title: "PGA",
//     testimonial: "Vowlink was my career lifeline! I switched from finance to tech, and their courses were instrumental. The practical knowledge and expert guidance helped me land my dream job. Highly recommend!",
//     rating: 4.3
//   },
//   {
//     name: "Pavani Iytla",
//     title: "CIBOP",
//     testimonial:"I wanted to level up my marketing skills, and Vowlink delivered. The courses were engaging and informative. I've already seen a significant improvement in my work performance.",
//     rating: 4.6
//   },
//   {
//     name: "Aman Sinha",
//     title: "FAP",
//     testimonial:"As a new grad, Vowlink gave me the confidence to enter the job market. Their courses covered everything from resume building to interview skills. I landed a great job within months!",
//     rating: 5
//   },
//   {
//     name: "Komal Boraste",
//     title: "PGA",
//     testimonial: "I needed to stay relevant in my field. Vowlink's courses were the perfect solution. The content was up-to-date and the platform was easy to use. Definitely worth the investment.",

//     rating: 4.9
//   },
//   {
//     name: "Rudraksh Gandhi",
//     title: "CIBOP",
//     testimonial: "Vowlink's flexible learning format was a game-changer for me as a remote worker. I could balance work, family, and skill development seamlessly. Great platform!",

//     rating: 4.5
//   },
//   {
//     name: "Ajay Rautela",
//     title: "FAP",
//     testimonial: "I was impressed by the quality of Vowlink's courses considering the affordable price. The instructors were knowledgeable and the content was practical. Best value for money!",
//     rating: 4.7
//   },
//   {
//     name: "Bipasha Sikarwar",
//     title: "PGA",
//     testimonial: "The Vowlink community is amazing! I connected with other learners who were going through the same journey. The support and encouragement were invaluable.",
//     rating: 4.8
//   },
//   {
//     name: "Prasanna Kumar Rout",
//     title: "CIBOP",
//     testimonial: "I tracked my progress using Vowlink's assessment tools and saw a clear improvement in my skills. The platform provides the resources and support to help you succeed.",
//     rating: 4.6
//   }
// ];

// const Testimonials = () => {
//   return (
//     <div className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold ">
//           The Vowlink Hall of Fame
//             </h2>
//           <p className="text-lg  mt-4">
//           Our learners can't stop raving. Discover why.
//             </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-12 w-12 rounded-full"
//                     src={`https://i.pravatar.cc/150?img=${index + 1}`}
//                     alt={testimonial.name}
//                   />
//                 </div>
//                 <div className="ml-4">
//                   <div className="text-lg font-medium">{testimonial.name}</div>
//                   <div className="text-teal-600">{testimonial.title}</div>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
//               <div className="flex items-center">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((star, i) => (
//                     <svg
//                       key={i}
//                       className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.9c.969 0 1.371 1.24.588 1.81l-3.97 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.884a1 1 0 00-1.175 0l-3.97 2.884c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.441 10.1c-.783-.57-.38-1.81.588-1.81h4.9a1 1 0 00.95-.69L9.049 2.927z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <div className="text-gray-600 ml-2">{testimonial.rating.toFixed(1)}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center space-x-4 mt-12">
//           <button className="bg-yellow-500  px-6 py-3 rounded-md">Request a Callback</button>
//           <button className="bg-white border border-green-800 text-green-800 px-6 py-3 rounded-md">Say Hi! on Whatsapp</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// SwiperCore.use([Autoplay, Pagination, Navigation]);

// const testimonials = [
//     {
//       name: "Sahil Thakur",
//       title: "PGA",
//       testimonial: "Vowlink was my career lifeline! I switched from finance to tech, and their courses were instrumental. The practical knowledge and expert guidance helped me land my dream job. Highly recommend!",
//       rating: 4.3
//     },
//     {
//       name: "Pavani Iytla",
//       title: "CIBOP",
//       testimonial:"I wanted to level up my marketing skills, and Vowlink delivered. The courses were engaging and informative. I've already seen a significant improvement in my work performance.",
//       rating: 4.6
//     },
//     {
//       name: "Aman Sinha",
//       title: "FAP",
//       testimonial:"As a new grad, Vowlink gave me the confidence to enter the job market. Their courses covered everything from resume building to interview skills. I landed a great job within months!",
//       rating: 5
//     },
//     {
//       name: "Komal Boraste",
//       title: "PGA",
//       testimonial: "I needed to stay relevant in my field. Vowlink's courses were the perfect solution. The content was up-to-date and the platform was easy to use. Definitely worth the investment.",

//       rating: 4.9
//     },
//     {
//       name: "Rudraksh Gandhi",
//       title: "CIBOP",
//       testimonial: "Vowlink's flexible learning format was a game-changer for me as a remote worker. I could balance work, family, and skill development seamlessly. Great platform!",

//       rating: 4.5
//     },
//     {
//       name: "Ajay Rautela",
//       title: "FAP",
//       testimonial: "I was impressed by the quality of Vowlink's courses considering the affordable price. The instructors were knowledgeable and the content was practical. Best value for money!",
//       rating: 4.7
//     },
//     {
//       name: "Bipasha Sikarwar",
//       title: "PGA",
//       testimonial: "The Vowlink community is amazing! I connected with other learners who were going through the same journey. The support and encouragement were invaluable.",
//       rating: 4.8
//     },
//     {
//       name: "Prasanna Kumar Rout",
//       title: "CIBOP",
//       testimonial: "I tracked my progress using Vowlink's assessment tools and saw a clear improvement in my skills. The platform provides the resources and support to help you succeed.",
//       rating: 4.6
//     }
//   ];

// const Testimonials = () => {
//   return (
//     <div className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold">The Vowlink Hall of Fame</h2>
//           <p className="text-lg mt-4">Our learners can't stop raving. Discover why.</p>
//         </div>
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           navigation
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="mySwiper"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex items-center mb-4">
//                   <div className="flex-shrink-0">
//                     <img
//                       className="h-12 w-12 rounded-full"
//                       src={`https://i.pravatar.cc/150?img=${index + 1}`}
//                       alt={testimonial.name}
//                     />
//                   </div>
//                   <div className="ml-4">
//                     <div className="text-lg font-medium">{testimonial.name}</div>
//                     <div className="text-teal-600">{testimonial.title}</div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
//                 <div className="flex items-center">
//                   <div className="flex items-center">
//                     {[...Array(5)].map((star, i) => (
//                       <svg
//                         key={i}
//                         className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.9c.969 0 1.371 1.24.588 1.81l-3.97 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.884a1 1 0 00-1.175 0l-3.97 2.884c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.441 10.1c-.783-.57-.38-1.81.588-1.81h4.9a1 1 0 00.95-.69L9.049 2.927z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <div className="text-gray-600 ml-2">{testimonial.rating.toFixed(1)}</div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex justify-center space-x-4 mt-12">
//           <button className="bg-yellow-500 px-6 py-3 rounded-md">Request a Callback</button>
//           <button className="bg-white border border-green-800 text-green-800 px-6 py-3 rounded-md">Say Hi! on Whatsapp</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;













import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 825, // small screens
        settings: {
          slidesToShow: 2, //image 2 show
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 2560, // medium screens
        settings: {
          slidesToShow: 3, //image number for each slide
          slidesToScroll: 3, //slide number
        },
      },
    ],
  };

  // Testimonial data
  const testimonials = [
    // 1st
    { name: "Rahul Mehta, Franchise Owner, India", 
      text: "Partnering with VL Academy has been a transformative experience. Their franchise model and support have been key to our success.",
      rating: 4
     },
    //2nd
      { name: "Sarah Thompson, Franchisee, UK",
         text: "The VL Academy franchise has provided exceptional value. Their comprehensive training and resources helped us establish a thriving business.",
         rating: 5
              },
    //3rd
      { name: "Priya Patel, Franchise Owner, India", 
        text:  "Becoming a VL Academy franchisee has greatly enhanced our business operations. Their innovative approach and support are unmatched."
     ,  rating: 4 },
    // 4rth
    { name: "James Collins, Franchise Partner, UK",
       text:  "As a VL Academy franchisee, I've benefited from their cutting-edge educational tools and robust business model. It’s a rewarding partnership." ,
       rating: 4.7
      },
//  5th
    { name: "Alicia Wong, Franchisee, Singapore",
       text:   "VL Academy's franchise program has been outstanding. Their expert-designed courses and marketing support have driven our success." ,
       rating: 4.1  },
   //6th 
    { name: "Kenji Tanaka, Franchise Owner, Tokyo",
       text: 
       "The VL Academy franchise has provided invaluable resources and support, enabling us to excel in the competitive Tokyo market.",
       rating: 3.2
    },
    //7th
       { name: "Samantha Lee, Franchise Partner, Singapore",
         text:
         "Joining VL Academy as a franchisee has been a fantastic decision. Their proven methods and comprehensive support have helped our business thrive.",
         rating: 4
      },
      // 8th
    { name: "Haruki Nakamura, Franchisee, Tokyo", 
      text:    "VL Academy’s franchise opportunity has empowered us with the tools and knowledge needed to succeed in the competitive business landscape.",
      rating: 3
    },
    // 9th
    { name: "Vikram Singh, Franchise Owner, India",
       text:   "Partnering with VL Academy has significantly boosted our business. Their franchise model is effective and their support is exceptional.",
       rating: 4.3
      },
  ];

  return (
    // <section className="font-jost px-0 md:px-5 mt-20 lg:px-40 xl:px-60 2xl:px-80 ">

    //   <div className="text-center mt-10   text-white font-bold p- px-4">
    //     <h2 className="text-2xl sm:text-4xl lg:text-5xl "> Vowlink Hall of Fame</h2> <br />
    //    {/* <p className="text-lg"> Our buisness can't stop raving. Discover why.</p> */}
    //   </div>

    //   {/* Testimonials Section */}
    //   <div className="flex flex-col mt-10 mb-10 lg:mt-20 px-8 md:px-10 justify-center items-center w-full  p-4 rounded-3xl bg-custom-brown">
    //     <Slider {...settings} className="flex p-2 pb-7 w-full">
    //       {testimonials.map((testimonial, index) => (
    //         <div key={index} className="p-2">
    //           <div className="flex justify-center items-center gap-4">
    //             <div className="text-center w-60 h-80  px- sm:px-0 md:p-2 xl:p-2  flex flex-col justify-center bg-white rounded-lg">
    //               <h1 className="text- font-bold md:mb-2 xl:mb-7">{testimonial.name}</h1>
    //               <p className="md:mt-2">{testimonial.text}</p>
    //               {/* add reviews star */}
    //               <div className="flex justify-center mt-4 pb-4">
    //                 <h6 className="text-sm">Reviews:  </h6>
    //               {[...Array(5)].map((star, i) => (
    //                 <svg
    //                   key={i}
    //                   className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 20 20"
    //                   fill="currentColor"
    //                 >
    //                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.9c.969 0 1.371 1.24.588 1.81l-3.97 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.884a1 1 0 00-1.175 0l-3.97 2.884c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.441 10.1c-.783-.57-.38-1.81.588-1.81h4.9a1 1 0 00.95-.69L9.049 2.927z" />
    //                 </svg>
    //               ))}
    //               </div>
                  
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
      
    //    {/* button */}
    //    <div className="flex justify-center pb-10">
    //             <button className="bg-orange-500 text-white font-bold px-14 text-xl py-4 mt-10 rounded-lg">Start Now</button>
    //           </div>
    // </section>

    <section className="font-jost px-0 md:px-5 mt-20 lg:px-40 xl:px-60 2xl:px-80">
  <div className="text-center mt-10 text-white font-bold px-4">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl">Vowlink Hall of Fame</h2>
  </div>

  {/* Testimonials Section */}
  <div className="flex flex-col mt-10 mb-10 lg:mt-20 px-8 md:px-10 justify-center items-center w-full p-4 rounded-3xl bg-custom-brown">
    <Slider {...settings} className="flex p-2 pb-7 w-full">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-2">
          <div className="flex justify-center items-center gap-4">
            <div className="text-center w-72 h-80 px-4 md:px-1 xl:px-2 flex flex-col justify-center bg-white rounded-lg">
              <h1 className="text- font-bold mb-10 md:mb-2 xl:mb-7">{testimonial.name}</h1>
              <p className="mt- md:mt-2">{testimonial.text}</p>
              {/* add reviews star */}
              <div className="flex justify-center mt-4 pb-4">
                <h6 className="text-sm">Reviews : </h6>
                {[...Array(5)].map((star, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.9c.969 0 1.371 1.24.588 1.81l-3.97 2.884a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.884a1 1 0 00-1.175 0l-3.97 2.884c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.441 10.1c-.783-.57-.38-1.81.588-1.81h4.9a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  
  {/* Button */}
  <div className="flex justify-center pb-10">
  <a href="https://vowlink.com/">
    <button className="bg-orange-500 text-white font-bold px-14 text-xl py-4 mt-10 rounded-lg">Start Now</button>
 </a>
  </div>
</section>

  );
};

export default Testimonials;
