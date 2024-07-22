import React from "react";

const TextAndPictureSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-10 py-8">
      {/* Image left */}
      <div className="hidden md:flex  md:w-1/2  justify-center mb-8 md:mb-0">
        <img
          src="\employees-discussing-office.jpg"
          alt="Educatus"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text right */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
          Discover the Path to Excellence with Educatus Franchise
        </h1>
        <p className="">
          At Educatus Franchise, we are dedicated to fostering a nurturing
          environment that empowers aspiring entrepreneurs to make a meaningful
          impact. Our mission is to cultivate future leaders who not only excel
          in their ventures but also contribute positively to society. We
          proudly champion the vision of self-reliance and innovation, fully
          supporting the "Make in India" initiative. Here, you will find the
          resources and support needed to transform your ambitions into reality.
          Join us to embark on a journey of growth and achievement. "Transform
          your dreams into reality while staying grounded in your values."
        </p>
      </div>
    </div>
  );
};

export default TextAndPictureSection;
