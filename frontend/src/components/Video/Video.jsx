import React from 'react'

const Video = () => {
  return (
    <section id='home' className="w-full flex justify-center items-center  py-10 mt-32 md:h-[78vh]">
      <div className=" w-full overflow-hidden shadow-lg">
        <video
          className="w-full h-auto"
          src="https://res.cloudinary.com/danvxvhvq/video/upload/v1762228565/main_w7mvpy.mp4"
          
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  )
}

export default Video
