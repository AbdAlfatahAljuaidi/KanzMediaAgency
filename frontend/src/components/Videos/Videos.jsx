import React from "react";

import Video1 from "../../assets/Video1.mp4.MP4";
import Video2 from "../../assets/Video2.mp4";
import Video3 from "../../assets/Video3.mp4";
import Video4 from "../../assets/Video4.mp4";
import Video5 from "../../assets/Video5.mp4";
import Video6 from "../../assets/Video6.mp4";
import Video7 from "../../assets/Video7.mp4";
import Video8 from "../../assets/Video8.mp4";
import Video9 from "../../assets/Video9.mp4";

const videos = [
  { id: 1, src: Video1, title: "Video 1" },
  { id: 2, src: Video2, title: "Video 2" },
  { id: 3, src: Video9, title: "Video 3" },
  { id: 4, src: Video4, title: "Video 4" },
  { id: 5, src: Video5, title: "Video 5" },
  { id: 6, src: Video6, title: "Video 6" },
  { id: 7, src: Video7, title: "Video 7" },
  { id: 8, src: Video8, title: "Video 8" },
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
              className="w-full h-70 object-cover"
              src={video.src}
              autoPlay
              muted
              loop
              controls
            />
            <h3 className="text-lg font-semibold text-center mt-2 mb-4">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;
