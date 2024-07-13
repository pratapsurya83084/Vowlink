import React, { useState } from 'react';

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer a variety of courses in programming, digital marketing, graphic design, and more."
  },
  {
    question: "How long do the courses last?",
    answer: "Most courses last between 4 to 12 weeks, depending on the subject and depth of the material."
  },
  {
    question: "Are the courses self-paced?",
    answer: "Yes, our courses are designed to be self-paced, allowing you to learn at your own speed."
  },
  {
    question: "Do I receive a certificate after completing a course?",
    answer: "Yes, upon successful completion of a course, you will receive a certificate."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, and bank transfers."
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-10 ">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <button
              className="w-full text-left py-4 focus:outline-none hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
            </button>
            {openIndex === index && (
              <p className="py-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
