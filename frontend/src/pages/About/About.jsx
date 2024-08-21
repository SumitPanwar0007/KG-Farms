import React from "react";
import cow from "../../assets/cow.jpg";
import cow2 from "../../assets/cow3.png";

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
            src={cow}
              alt="Fresh Milk"
              className="w-full h-auto rounded-lg shadow-md mb-6 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 mb-4">
              At KG Farms, we are dedicated to providing the finest
              milk delivery services in Noida and Ghaziabad. Our milk is sourced
              directly from trusted local farms, ensuring that you receive the
              freshest, most natural milk every day.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We believe in the importance of quality, which is why our milk is
              free from preservatives and additives. From the farm to your
              doorstep, we maintain the highest standards to deliver pure,
              nutritious milk that you can trust.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center mt-8">
          <div className="md:w-1/2">
            <img
            //   src="https://pixabay.com/illustrations/ai-generated-cow-thumbs-up-cartoon-8635876/"
            src={cow2}
              alt="Farm Fresh Milk"
              className="w-full h-auto rounded-lg shadow-md mb-6 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg text-gray-700 mb-4">
              Our commitment extends beyond just delivering milk. We support
              local farmers by partnering with them and ensuring fair practices.
              This way, we contribute to the community while providing you with
              the best quality milk.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Choose [Your Company Name] for a service you can rely on, where
              quality and customer satisfaction are our top priorities. We’re
              here to make sure your family enjoys the wholesome goodness of
              fresh milk every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


// import React from "react";

// const About = () => {
//   return (
//     <div className="bg-white py-12">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
//           About Us
//         </h1>
//         <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
//           We are proud to deliver the freshest and highest quality milk directly
//           from local farms to your doorstep in Noida and Ghaziabad. Our
//           commitment to purity and freshness ensures that you and your family
//           enjoy the best milk every day.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
