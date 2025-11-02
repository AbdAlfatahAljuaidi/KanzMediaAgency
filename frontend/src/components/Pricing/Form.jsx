import React, { useState } from "react";
import axios from "axios";

const Form = () => {

  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    Brief: "",
    contentType: "",
    Package: "Professional",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("test");
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/send", formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "حدث خطأ أثناء الإرسال");
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-customRed">Contact Form</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-semibold text-customRed">Full Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-customRed">Phone*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-customRed">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-customRed">Business Type*</label>
            <input
              type="text"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              placeholder="Enter your business type"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-customRed">Brief*</label>
            <textarea
              name="Brief"
              value={formData.Brief}
              onChange={handleChange}
              placeholder="Brief about your business or content needs"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-customRed">Content Type*</label>
            <input
              type="text"
              name="contentType"
              value={formData.contentType}
              onChange={handleChange}
              placeholder="Type of content (e.g. Video, Image)"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-customRed">Package*</label>
            <select
              name="Package"
              value={formData.Package}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Professional">Professional</option>
           
            </select>
          </div>

          <div className="text-customRed text-sm">
            By submitting this form you consent to KRE8’s Terms and Conditions
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Submit
          </button>

          {message && (
            <p className="text-center text-green-600 font-semibold mt-4">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Form;
