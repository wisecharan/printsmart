import { useEffect, useRef, useState } from 'react';
import logo from '@/assets/images/Logo-01.jpg';

export default function About() {
  const videos = [
    { id: 1, title: "Printing Process", src: "/one.mp4" },
    { id: 2, title: "Project Showcase", src: "/two.mp4" },
    { id: 3, title: "Quality Control", src: "/three.mp4" },
  ];

  const [posters, setPosters] = useState<string[]>([]);

  useEffect(() => {
    // Generate poster for each video
    videos.forEach((video, index) => {
      const vid = document.createElement('video');
      vid.src = video.src;
      vid.crossOrigin = 'anonymous';
      vid.addEventListener('loadeddata', () => {
        const canvas = document.createElement('canvas');
        canvas.width = vid.videoWidth;
        canvas.height = vid.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL();
          setPosters(prev => {
            const arr = [...prev];
            arr[index] = dataURL;
            return arr;
          });
        }
      });
    });
  }, []);

  return (
    <section id="about" className="py-16 px-6 sm:py-20 sm:px-8 lg:py-28 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Video Section */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">See Our Work</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              A glimpse into our creative printing process and project excellence.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 overflow-x-auto max-w-full mx-auto justify-center">
            {videos.map((video, i) => (
              <video
                key={video.id}
                src={video.src}
                poster={posters[i]}
                controls
                controlsList="nodownload"
                disablePictureInPicture
                className="flex-shrink-0 w-72 aspect-[9/16] rounded-xl object-cover shadow-md hover:shadow-lg transition-all duration-300"
              />
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex gap-4 overflow-x-auto py-2 px-2 scroll-smooth">
            {videos.map((video, i) => (
              <video
                key={video.id}
                src={video.src}
                poster={posters[i]}
                controls
                controlsList="nodownload"
                disablePictureInPicture
                className="flex-shrink-0 w-64 aspect-[9/16] rounded-xl object-cover shadow-md hover:shadow-lg transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
