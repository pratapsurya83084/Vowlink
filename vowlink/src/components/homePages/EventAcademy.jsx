import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const images = [
    'https://franchising.bisjhintus.com/img/COMPANY%20ATMOSPHERE.png',
    'https://franchising.bisjhintus.com/img/OFFLINE%20OFFICE.png',
    'https://franchising.bisjhintus.com/img/ONLINE%20CLASS.png',
    'https://franchising.bisjhintus.com/img/SALE.png',
    //  'https://franchising.bisjhintus.com/img/TECH%20TEAM.png',
    // Add more image paths as needed
  ];

const EventAcademy = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds
      };
    
      return (
        <div className="container mx-auto py-12">
            <h1 className='text-center text-3xl md:text-5xl text-white font-bold py-4 pb-10'>
            Curious about what's happening at the Academy? <br />
            <p className='text-2xl text-white mt-2'> Stay tuned for exciting news and events!</p>
              </h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full px-10 lg:px-32  h-[600px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
      );
}

export default EventAcademy
