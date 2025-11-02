import React from 'react'
import imageAbout from '../../assets/About.webp'

const AboutLeft = () => {
  return (
    
        <div className="md:w-1/2 w-full">
          <img
            src={imageAbout}
            alt="About"
            className="w-full h-full object-cover md:rounded-l-3xl rounded-t-3xl"
          />
        </div>
  )
}

export default AboutLeft
