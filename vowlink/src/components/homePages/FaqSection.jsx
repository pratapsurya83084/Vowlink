// import React, { useState } from 'react';

// const faqs = [
//   {
//     question: "What courses do you offer?",
//     answer: "We offer a variety of courses in programming, digital marketing, graphic design, and more."
//   },
//   {
//     question: "How long do the courses last?",
//     answer: "Most courses last between 4 to 12 weeks, depending on the subject and depth of the material."
//   },
//   {
//     question: "Are the courses self-paced?",
//     answer: "Yes, our courses are designed to be self-paced, allowing you to learn at your own speed."
//   },
//   {
//     question: "Do I receive a certificate after completing a course?",
//     answer: "Yes, upon successful completion of a course, you will receive a certificate."
//   },
//   {
//     question: "What payment methods do you accept?",
//     answer: "We accept major credit cards, PayPal, and bank transfers."
//   },
// ];

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="p-10 ">
//       <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
//       <div className="max-w-2xl mx-auto">
//         {faqs.map((faq, index) => (
//           <div key={index} className="mb-4 border-b">
//             <button
//               className="w-full text-left py-4 focus:outline-none hover:bg-gray-200"
//               onClick={() => toggleFAQ(index)}
//             >
//               <h3 className="text-xl font-semibold">{faq.question}</h3>
//             </button>
//             {openIndex === index && (
//               <p className="py-2 text-gray-700">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Faq;


// FAQ.jsx
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "How important is convenience to you and to your employees?",
    "Does your brand’s success completely depend upon the customer traffic?",
    "How important is brand visibility for your Business firm?",
    "How did the franchise get started and what is the background of your executives?",
    "How much do I have to invest before I can open my doors?",
    "How financially strong is the franchise company?",
    "How many other locations are there and what is your success rate?",
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-black">You Deserve A FAQ Today</h2>
        <p className="mt-4 text-lg text-gray-600">Be young, have fun, taste FAQ because we believe that things will happen after a FAQ.</p>
      </div>
      <div className="max-w-2xl mx-auto divide-y-2 divide-gray-200">
        {questions.map((question, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center text-left text-gray-900 text-lg font-medium"
              onClick={() => toggleQuestion(index)}
            >
              {question}
              <FaChevronRight className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-90' : ''}`} />
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-500">
                {/* Add your answer here */}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
