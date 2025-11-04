import React from "react";

const videos = [
  { id: 1, src: "https://res.cloudinary.com/danvxvhvq/video/upload/v1762227805/WhatsApp_Video_2025-11-04_at_6.41.05_AM_xrby6d.mp4", title: "Video 1" },
  { id: 2, src: "https://res.cloudinary.com/danvxvhvq/video/upload/v1762228125/WhatsApp_Video_2025-11-04_at_6.40.35_AM_bdumhi.mp4", title: "Video 2" },
  { id: 3, src: "https://res.cloudinary.com/danvxvhvq/video/upload/v1762228180/WhatsApp_Video_2025-11-04_at_6.40.26_AM_vsiz7r.mp4", title: "Video 3" },
  { id: 4, src: "https://res.cloudinary.com/danvxvhvq/video/upload/v1762228280/WhatsApp_Video_2025-11-04_at_6.40.01_AM_kojfs3.mp4", title: "Video 4" },
  { id: 5, src: "https://res.cloudinary.com/danvxvhvq/video/upload/v1762228385/WhatsApp_Video_2025-11-04_at_6.39.04_AM_t4n01n.mp4", title: "Video 5" },
  { id: 6, src: "https://res.cloudinary.com/danvxvhvq/video/upload/v1762228400/WhatsApp_Video_2025-11-04_at_6.38.52_AM_caghbg.mp4", title: "Video 6" },
];

const Videos = () => {
  return (
    <section id="videos" className="py-32 px-6 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2 text-customRed">Videos</h2>
        <p className="text-gray-600 text-center">Enjoy Watching Our Ideas</p>
      </div>

      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex-shrink-0 w-80 rounded-lg shadow-md overflow-hidden bg-white"
          >
            <video
              src={video.src}
              controls
              className="w-full h-96 rounded-lg object-cover"
              title={video.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
