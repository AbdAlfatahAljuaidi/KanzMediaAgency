import React from "react";
import { FaUsers, FaBullhorn, FaPenFancy, FaChartLine, FaCamera, FaVideo } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaUsers className="text-4xl text-customRed mb-3" />,
      title: "Social Media Management",
      color: "text-indigo-600",
      description: "Managing story comments, responding to messages, and analyzing account performance monthly and minutely.",
    },
    {
      icon: <FaPenFancy className="text-4xl text-customRed mb-3" />,
      title: "Content Creation",
      color: "text-pink-600",
      description: "Writing captions, hashtags, mentions, reels, and video posts while turning your ideas into engaging content.",
    },
    {
      icon: <FaBullhorn className="text-4xl text-customRed mb-3" />,
      title: "Marketing Activities",
      color: "text-green-600",
      description: "Logo, branding, campaign management, design, video production, editing, photography, and voiceover services.",
    },
    {
      icon: <FaChartLine className="text-4xl text-customRed mb-3" />,
      title: "Account & Growth",
      color: "text-yellow-600",
      description: "Daily management, engagement monitoring, performance analysis, and growth strategy development.",
    },
    {
      icon: <FaVideo className="text-4xl text-customRed mb-3" />,
      title: "Sponsored Ads",
      color: "text-red-600",
      description: "Smart campaigns targeting your ideal audience, including ad creation and performance tracking.",
    },
    {
      icon: <FaCamera className="text-4xl text-customRed mb-3" />,
      title: "Photography & Media",
      color: "text-blue-600",
      description: "Professional photography, poster creation, video shoots, and media content tailored to client needs.",
    },
  ];

  return (
    <section id="services" className="mt-48 px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-customRed">Our Services</h1>
        <h3 className="text-lg text-gray-600">
          Start with us with confidence
        </h3>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <h1 className="text-center mx-auto w-fit">
            {service.icon}
            </h1>
            <h2 className={`text-2xl font-semibold mb-3 text-customRed`}>
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;
