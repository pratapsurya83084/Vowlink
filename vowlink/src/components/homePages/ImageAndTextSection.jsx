import React from 'react';

const ImageAndTextSection = () => {
  return (
    <div className=" md:flex mt-10  gap- justify-center  items-center px-10">
      {/* image left side */}
      <div className='hidden md:flex py-10'>
        <img 
        className='h-60'
        src="https://franchising.bisjhintus.com/img/STYLING%20JOT%20PICTURE.svg" alt="" />
      </div>

      {/* right side text */}
      <div>
        <h1 className='text-3xl font-bold md:text-right text-center'>"Empower Your Business with Cutting-Edge Solutions"</h1>
        {/* <p className="mt-4 text-center md:text-left">
              Our business strategies will help both the franchisor and the franchisee face any kind of technical situation. We offer comprehensive support, from initial training to ongoing assistance, ensuring that you are never alone in your journey.
            </p> */}
            {/* <p className="mt-4 text-center md:text-left">
              Our flexible job opportunities allow you to manage your time effectively, giving you the freedom to balance your personal and professional life. With our proven business model, you can achieve financial stability and success.
            </p> */}
            <p className="mt-4   md:text-right text-center py-">
              We provide state-of-the-art technology and resources that streamline operations,
              {/* <br /> */}
               making it easier <br />
                for you to focus on what  matters most—growing your business.
                {/* <br /> */}
                Join us and become <br />
                 part of a community that supports and empowers each other.
            </p>
      </div>

      <div className='flex md:hidden py-10'>
        <img 
        className='h-60'
        src="https://franchising.bisjhintus.com/img/STYLING%20JOT%20PICTURE.svg" alt="" />
      </div>
    </div>
  );
}

export default ImageAndTextSection;
