import React from 'react'
import videoMain from '../../assets/Main.mp4'

const Video = () => {
  return (
    <section id='home' className="w-full flex justify-center items-center  py-10 mt-32 md:h-[78vh]">
      <div className=" w-full overflow-hidden shadow-lg">
        <video
          className="w-full h-auto"
          src={videoMain}
          
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  )
}

export default Video
