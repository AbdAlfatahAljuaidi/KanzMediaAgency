import React from 'react'
import imageAbout from '../../assets/About.webp'

const AboutRight = () => {
  return (
    <div className="relative bg-customRed p-8 text-white flex flex-col justify-center h-[400px] rounded-2xl shadow-lg overflow-hidden">
      
      {/* الصورة بالخلفية */}
      <img
        src={imageAbout}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* تدرج خفيف لزيادة وضوح النص */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* المحتوى فوق الصورة */}
      <div className="relative z-10 ">
        <h1 className="font-bold text-2xl mb-4">ABOUT US</h1>
        <p className="text-gray-100 leading-relaxed">
          Based in Jordan, we are committed to empowering local businesses by
          connecting them with unique, diverse, and rare content of the highest
          quality. Our mission is to be a company specializing in managing
          various social media accounts, creating creative content, and
          monitoring advertising campaigns. We aim to help small and medium-sized
          businesses build an effective digital presence in a distinctive and
          modern way.
        </p>
      </div>
    </div>
  )
}

export default AboutRight
