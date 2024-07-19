// SuccessStories.jsx
import React from "react";

const SuccessStory = () => {
  const stories = [
    {
      name: "Jane Doe",
      title: "CEO at ExampleCorp",
      story:
        "VL Academy helped me transform my career and achieve my goals. The courses are top-notch and the instructors are amazing.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "John Smith",
      title: "Developer at Techies",
      story:
        "I learned so much from VL Academy. The practical approach and real-world examples made all the difference.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "John Smith",
      title: "Developer at Techies",
      story:
        "I learned so much from VL Academy. The practical approach and real-world examples made all the difference.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "John Smith",
      title: "Developer at Techies",
      story:
        "I learned so much from VL Academy. The practical approach and real-world examples made all the difference.",
      image: "https://via.placeholder.com/150",
    },
    // Add more stories as needed
  ];

  return (
    // bg-gray-100
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Students Say
          </p>
          <h2 className="text-base font-semibold  tracking-wide uppercase mt-2">
            Success Stories
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={story.image}
                    alt={`${story.name}'s profile`}
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-500">{story.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{story.story}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-yellow-400 py-3 px-10 rounded">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
