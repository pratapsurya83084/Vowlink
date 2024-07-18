import React from 'react';

const testimonials = [
  {
    name: "Sahil Thakur",
    title: "PGA",
    testimonial: "[[name  of organisation]] Learning offers the best data science education. Thank you for the effort you put in during the pandemic. It is my pleasure to thank the management, the trainers, the placement team, and all those involved with the institute.",
    rating: 5
  },
  {
    name: "Pavani Iytla",
    title: "CIBOP",
    testimonial: "Thanks to [name  of organisation], I was placed with State Street Bank where I can contribute to my professional development in the most effective manner. Because of my interest in finance, I took the plunge into Investment Banking, and [name  of organisation] made it possible.",
    rating: 4.6
  },
  {
    name: "Aman Sinha",
    title: "FAP",
    testimonial: "I am grateful to the training and placement department of [name  of organisation] Learning for their ongoing efforts in imparting quality training and providing opportunities for placement. I can't express how much your support helped me secure a job.",
    rating: 5
  },
  {
    name: "Komal Boraste",
    title: "PGA",
    testimonial: "With [name  of organisation] Learning, I have completed a postgraduate program in Data Analytics. Overall, I had a positive learning experience. The faculty is very knowledgeable and supportive as well. With the help of the soft skill sessions and much more.",
    rating: 4.9
  },
  {
    name: "Rudraksh Gandhi",
    title: "CIBOP",
    testimonial: "Being a part of [name  of organisation] Learning has been a great experience.",
    rating: 4.5
  },
  {
    name: "Ajay Rautela",
    title: "FAP",
    testimonial: "I am grateful to be a part of [name  of organisation] Learning.",
    rating: 4.7
  },
  {
    name: "Bipasha Sikarwar",
    title: "PGA",
    testimonial: "After completing graduation in B.Com I joined [name  of organisation] Learning.",
    rating: 4.8
  },
  {
    name: "Prasanna Kumar Rout",
    title: "CIBOP",
    testimonial: "With [name  of organisation], I gained a lot of knowledge and skills.",
    rating: 4.6
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold ">We Develop The Leaders Of Tomorrow</h2>
          <p className="text-lg  mt-4">Read about a few success stories that were created with [name  of organisation] Learning.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium">{testimonial.name}</div>
                  <div className="text-teal-600">{testimonial.title}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center">
                <div className="flex items-center">
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
                <div className="text-gray-600 ml-2">{testimonial.rating.toFixed(1)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-12">
          <button className="bg-yellow-500  px-6 py-3 rounded-md">Request a Callback</button>
          <button className="bg-white border border-green-800 text-green-800 px-6 py-3 rounded-md">Say Hi! on Whatsapp</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
