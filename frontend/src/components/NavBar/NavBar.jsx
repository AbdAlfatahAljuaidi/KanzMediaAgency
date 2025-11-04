import React, { useState } from "react";
import "../../../src/index.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // للتحكم بظهور المينيو

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* الشعار */}
        <div className="flex items-center space-x-2 group">
          <img
            src="https://res.cloudinary.com/danvxvhvq/image/upload/v1762228749/Logo_vntafp.png"
            alt="Logo"
            className="h-28 w-28 object-contain transform transition-transform duration-700 group-hover:rotate-[360deg]"
          />
          <h1 className="text-2xl font-bold text-gray-800 mt-5 font-cairo">
            <span className="text-customRed">K</span>anz{" "}
            <span className="text-customRed">M</span>edia
            <h1 className="ml-5">
              <span className="text-customRed">A</span>gency
            </h1>
          </h1>
        </div>

        {/* الروابط - نسخة الديسكتوب */}
        <nav  className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-amber-700 transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-amber-700 transition duration-300">
            About
          </a>
          <a
            href="#services"
            className="hover:text-amber-700 transition duration-300"
          >
            Services
          </a>
          <a
            href="#videos"
            className="hover:text-amber-700 transition duration-300"
          >
            Videos
          </a>
          <a
            href="#pricing"
            className="hover:text-amber-700 transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="hover:text-amber-700 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* زر الموبايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // شكل X عند الفتح
                  : "M4 6h16M4 12h16M4 18h16" // شكل البرجر
              }
            />
          </svg>
        </button>
      </div>

      {/* قائمة الموبايل */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-700 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-700 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-700 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-700 transition duration-300"
            >
              Videos
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-700 transition duration-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-700 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
