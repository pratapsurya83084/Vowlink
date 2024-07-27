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




// 2nd

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     prevArrow: null, // No previous arrow
//     nextArrow: null, // No next arrow
//   };

//   return (
//     <section className="px-0 font-type">
//       <h1 className=" text-center  mt-10 rounded-tl-xl rounded-tr-xl text-white font-bold  p-1 px-4">
//         <h2 className="text-2xl md:text-5xl">The Vowlink Hall of Fame</h2> <br />
//      <h2 className="text-xl"> Our learners can't stop raving. Discover why.</h2>  
//       </h1>

//       {/* 3 slides  */}
//       <div className="flex  image-carousel-section mt-60 mb-60 lg:mt-20    px-8 md:px-20 justify-center items-center w-full radius-yellow p-4 h-32 sm:h-32 md:h-36 lg:h-36 xl:h-36 2xl:h-40 rounded-3xl bg-custom-brown">
//         <Slider {...settings} className="flex p-2 w-full">
//           {/* First slide */}
//           <div className=" p-2">
//             <div className="flex justify-center items-center gap-4">
//               <div className="flex text-center  w-60 p-4  flex-col justify-center bg-white rounded-lg p-">
//                 <h1 className="text-xl font-bold mb-5">Sophie Carter</h1>
//                 <p className="">
//                   "Vowlink has been a game-changer for me. 
//                    The specialized  business curriculum 
//                     gave me the confidence to start my own 
//                   venture, and the hands-on projects made all 
//                    the difference.
//                   Highly recommend!" .
//                 </p>
//               </div>
//               <div className="text-center  w-60 p-4 flex flex-col  justify-center bg-white rounded-lg ">
//                 <h1 className="text-xl font-bold mb-5"> Raj Patel</h1>
//                 <p>
//                   "The quality of education at Vowlink is top-notch. The expert
//                   mentors provided invaluable insights, and the flexible
//                   learning options were perfect for balancing my work and
//                   studies. A great investment in my future!"
//                 </p>
//               </div>
//               <div className="text-center  w-60  flex flex-col   justify-center bg-white rounded-lg p-4">
//                 <h1 className="text-xl font-bold mb-5"> Emily Johnson</h1>
//                 <p>
//                   "Vowlink's innovative courses are exactly what I needed to
//                   take my business ideas to the next level. The practical
//                   approach and networking opportunities have opened new doors
//                   for me."
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Second slide */}
//           <div className="p-2">
//             <div className="flex justify-center items-center gap-4">
//               <div className="text-center  w-60 flex flex-col   justify-center bg-white rounded-lg p-4">
//                 <h1 className="text-xl font-bold mb-5">Carlos Mendoza</h1>
//                 <p>
//                   "I was impressed by the breadth of topics covered and the
//                   real-world applications of the lessons. Vowlink’s curriculum
//                   is comprehensive and relevant, making it easy to apply what I
//                   learned immediately."
//                 </p>
//               </div>

//               <div className="flex flex-col text-center  w-60  justify-center  bg-white rounded-lg p-4">
//                 <h1 className="text-xl font-bold mb-5">Aisha Ahmed</h1>
//                 <p>
//                   "Joining Vowlink was one of the best decisions I've made. The
//                   community is supportive, the mentors are experienced, and the
//                   flexibility of the courses allowed me to learn at my own pace
//                   while working full-time."
//                 </p>
//               </div>

//               <div className="text-center  w-60 flex flex-col   justify-center bg-white rounded-lg p-4">
//                 <h1 className="text-xl font-bold mb-5">Michael Lee</h1>
//                 <p>
//                   "Vowlink offers an exceptional learning experience with its
//                   top-tier global business education. The ability to work on
//                   real business scenarios and the access to industry experts
//                   have been incredibly valuable."
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* Third slide */}
//           <div className="p-2">
//             <div className="flex justify-center items-center gap-4">
             
//               <div className="flex text-center  w-60   flex-col  justify-center bg-white rounded-lg p-4">
//                 <h1 className="text-xl font-bold mb-5">Priya Sharma</h1>
//                 <p>
//                   "The hands-on learning approach at Vowlink really sets it
//                   apart. I’ve been able to directly apply the concepts to my own
//                   projects, and the networking opportunities have been fantastic
//                   for my career growth."
//                 </p>
//               </div>

//               <div className="text-center  w-60 flex flex-col   justify-center bg-white rounded-lg p-4">
//                 <h1 className="text-xl font-bold mb-5"> John Roberts</h1>
//                 <p>
//                   "I’ve taken several online courses, but Vowlink stands out for
//                   its practical approach and expert instructors. The flexible
//                   options allowed me to tailor my learning experience to fit my
//                   busy schedule."
//                 </p>
//               </div>

//               <div
//                 className="text-center  w-60 flex flex-col 
//                justify-center bg-white rounded-lg p-4"
//               >
//                 <h1 className="text-xl font-bold mb-5"> Lena Thompson </h1>
//                 <p>
//                   "Vowlink has provided me with the tools and knowledge needed
//                   to start earning while learning. The innovative courses and
//                   supportive community have been instrumental in my
//                   entrepreneurial journey."
//                 </p>
               
//               </div>

//             </div>
//           </div>
//         </Slider>
//       </div>

      
//     </section>
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
  const testimonials = [
    { name: "Sophie Carter", text: "Vowlink has been a game-changer for me. The specialized business curriculum gave me the confidence to start my own venture, and the hands-on projects made all the difference. Highly recommend!" },
    { name: "Raj Patel", text: "The quality of education at Vowlink is top-notch. The expert mentors provided invaluable insights, and the flexible learning options were perfect for balancing my work and studies. A great investment in my future!" },
    { name: "Emily Johnson", text: "Vowlink's innovative courses are exactly what I needed to take my business ideas to the next level. The practical approach and networking opportunities have opened new doors for me." },
    { name: "Carlos Mendoza", text: "I was impressed by the breadth of topics covered and the real-world applications of the lessons. Vowlink’s curriculum is comprehensive and relevant, making it easy to apply what I learned immediately." },
    { name: "Aisha Ahmed", text: "Joining Vowlink was one of the best decisions I've made. The community is supportive, the mentors are experienced, and the flexibility of the courses allowed me to learn at my own pace while working full-time." },
    { name: "Michael Lee", text: "Vowlink offers an exceptional learning experience with its top-tier global business education. The ability to work on real business scenarios and the access to industry experts have been incredibly valuable." },
    { name: "Priya Sharma", text: "The hands-on learning approach at Vowlink really sets it apart. I’ve been able to directly apply the concepts to my own projects, and the networking opportunities have been fantastic for my career growth." },
    { name: "John Roberts", text: "I’ve taken several online courses, but Vowlink stands out for its practical approach and expert instructors. The flexible options allowed me to tailor my learning experience to fit my busy schedule." },
    { name: "Lena Thompson", text: "Vowlink has provided me with the tools and knowledge needed to start earning while learning. The innovative courses and supportive community have been instrumental in my entrepreneurial journey." },
  ];

  return (
    <section className="px-0 md:px-5 lg:px-40 xl:px-60 2xl:px-80 font-type">

      <h1 className="text-center mt-10 rounded-tl-xl rounded-tr-xl text-white font-bold p-1 px-4">
        <p className="text-2xl md:text-4xl">The Vowlink Hall of Fame</p> <br />
        Our learners can't stop raving. Discover why.
      </h1>

      {/* Testimonials Section */}
      <div className="flex flex-col mt-10 mb-10 lg:mt-20 px-8 md:px-20 justify-center items-center w-full radius-yellow p-4 rounded-3xl bg-custom-brown">
        <Slider {...settings} className="flex p-2 w-full">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-2">
              <div className="flex justify-center items-center gap-4">
                <div className="text-center w-60 p-4 flex flex-col justify-center bg-white rounded-lg">
                  <h1 className="text-xl font-bold mb-5">{testimonial.name}</h1>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
