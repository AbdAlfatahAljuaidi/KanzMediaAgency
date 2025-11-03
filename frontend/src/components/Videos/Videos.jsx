import React from "react";

const videos = [
  { id: 1, src: "https://www.instagram.com/reel/DM7mC-RKgt8/", title: "Video 1" },
  { id: 2, src: "https://www.instagram.com/reel/DQROuVkjHgy/", title: "Video 2" },
  { id: 3, src: "https://www.instagram.com/reel/DN-ddpSDDX1/", title: "Video 3" },
  { id: 4, src: "https://www.instagram.com/reel/DPQvRNxDJz4/", title: "Video 4" },
  { id: 5, src: "https://www.instagram.com/p/DOarJFmjP5k/", title: "Video 5" },
  { id: 6, src: "https://www.instagram.com/reel/DOiiIbFDPWe/", title: "Video 6" },
  { id: 7, src: "https://www.instagram.com/reel/DQZDTUKDANB/", title: "Video 7" },
  { id: 8, src: "https://www.instagram.com/reel/DOLU-KODBUU/", title: "Video 8" },
];

const Videos = () => {
  return (
    <section id="videos" className="py-32 px-6 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2 text-customRed">Videos</h2>
        <p className="text-gray-600 text-center">Enjoy Watching Our Ideas</p>
      </div>

      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {videos.map((video) => {
          const embedUrl = `${video.src}embed`; // نضيف كلمة embed على نهاية الرابط

          return (
            <div
              key={video.id}
              className="flex-shrink-0 w-80 rounded-lg shadow-md overflow-hidden bg-white"
            >
              <iframe
                src={embedUrl}
                className="w-full h-96 rounded-lg"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Videos;
