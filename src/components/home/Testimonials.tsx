import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface Testimonial {
  id: number;
  thumbnail: string;
  video: string;
}

// Using placeholder videos - replace with your actual video paths
const testimonials: Testimonial[] = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/seed/client1/300/400",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/seed/client2/300/400",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/seed/client3/300/400",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/seed/client4/300/400",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/seed/client5/300/400",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/seed/client6/300/400",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 7,
    thumbnail: "https://picsum.photos/seed/client7/300/400",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: 8,
    thumbnail: "https://picsum.photos/seed/client8/300/400",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  // Handle responsive visible count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(testimonials.length - visibleCount, prev + 1)
    );
  };

  const handlePlayVideo = (id: number) => {
    setPlayingVideo(id);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="bg-[#EFECE2] py-16 px-6 md:px-[10%]">
      {/* Title */}
      <h2 className="text-[#444444] text-4xl md:text-5xl font-bold text-center mb-12">
        Happy Clients
      </h2>

      {/* Slider Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6 text-[#444444]" />
        </button>

        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              gap: "16px",
              transform: `translateX(calc(-${currentIndex} * (${
                100 / visibleCount
              }% + ${16 / visibleCount}px)))`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="shrink-0"
                style={{
                  width: `calc(${100 / visibleCount}% - ${
                    (16 * (visibleCount - 1)) / visibleCount
                  }px)`,
                }}
              >
                <div className="relative aspect-3/4 bg-gray-200 rounded-none overflow-hidden group cursor-pointer">
                  <img
                    src={testimonial.thumbnail}
                    alt={`Testimonial ${testimonial.id}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div
                    onClick={() => handlePlayVideo(testimonial.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
                  >
                    <div className="bg-white/40 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= testimonials.length - visibleCount}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6 text-[#444444]" />
        </button>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#A9F125] hover:bg-[#98dc1f] text-black font-bold px-8 py-3 rounded-full transition-colors flex items-center gap-2">
          Get In Touch <span>&gt;</span>
        </button>
      </div>

      {/* Video Player Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-end justify-start p-8"
          onClick={handleCloseVideo}
        >
          <div
            className="bg-black rounded-lg overflow-hidden w-80 aspect-3/4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={testimonials.find((t) => t.id === playingVideo)?.video || ""}
              poster={
                testimonials.find((t) => t.id === playingVideo)?.thumbnail || ""
              }
              controls
              className="w-full h-full object-cover bg-gray-900"
              preload="metadata"
            />
          </div>
        </div>
      )}
    </section>
  );
}
