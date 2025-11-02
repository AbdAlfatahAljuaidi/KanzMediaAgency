import React from "react";
import {Link} from 'react-router-dom'

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 px-6 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Pricing</h2>
        <p className="text-gray-600">Choose the plan that fits your needs</p>
      </div>

      {/* Single Pricing Card */}
      <div className="m-5 mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center ">
          <h3 className="text-3xl font-bold text-customRed mb-4">Professional Package</h3>
          <p className="text-gray-700 mb-6">
            The Professional Package includes 8 videos per month (two videos per week). Trending ideas and unique creative stories are tailored to the client's needs. Five posts per month (one post and two reels per week) are available, along with custom content design, comprehensive advertising coverage, and all services.
          </p>
        
          <ul className="text-gray-700 mb-8 space-y-3 text-left">
            <li>✅ 8 videos per month (2 per week)</li>
            <li>✅ 5 posts per month (1 post + 2 reels per week)</li>
            <li>✅ Trending ideas & unique creative stories</li>
            <li>✅ Custom content design & advertising coverage</li>
            <li>✅ All included services</li>
          </ul>
<Link to={"/Form"}>
          <button className="bg-customRed text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:border hover:text-customRed hover:border-customRed transition">
            Get Started
          </button>
          
</Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
