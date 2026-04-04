import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause } from "lucide-react";

const VIDEO_URL = "/videos/VIDEO-2026-03-28-20-03-24.mp4";

const images = [
  { src: "/videos/ChatGPT Image Apr 3, 2026, 04_48_37 AM.png", alt: "Drawing With Light" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/1daf94633_generated_377ba96e.png", alt: "Embodied Code" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-sage-100">
      <div className="text-center mb-6 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-rust mb-4"
        >
          Visual Archive
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wide text-rust"
        >
          Gallery
        </motion.h1>
      </div>
      <div className="text-center mb-16 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm text-rust/80 font-light max-w-xl mx-auto"
        >
          A visual journey through performances, rehearsals, and creative moments captured in motion and stillness.
        </motion.p>
      </div>

      {/* Masonry-style Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-1 px-1">
        {/* Video Item */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="break-inside-avoid mb-1 cursor-pointer group"
          onClick={toggleVideo}
        >
          <div className="relative overflow-hidden rounded-lg">
            <video
              ref={(el) => {
                if (el) {
                  if (isVideoPlaying) el.play();
                  else el.pause();
                }
              }}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loop
              muted
              playsInline
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-sage-200/0 group-hover:bg-sage-300/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-sage-800/80 backdrop-blur-sm rounded-full p-3">
                {isVideoPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-white">
              <p className="font-body text-xs tracking-widest lowercase opacity-80">Featured Performance</p>
            </div>
          </div>
        </motion.div>

        {/* Melanin Migration Video Item */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="break-inside-avoid mb-1 cursor-pointer group"
        >
          <div className="relative overflow-hidden rounded-lg">
            <video
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/videos/Melanin Migration .mov" type="video/mp4" />
              <source src="/videos/Melanin Migration .mov" type="video/quicktime" />
            </video>
            <div className="absolute inset-0 bg-sage-200/0 group-hover:bg-sage-300/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-sage-800/80 backdrop-blur-sm rounded-full p-3">
                <Play className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-white">
              <p className="font-body text-xs tracking-widest lowercase opacity-80">Melanin Migration</p>
            </div>
          </div>
        </motion.div>

        {/* Image Items */}
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="break-inside-avoid mb-1 cursor-pointer group"
            onClick={() => setSelected(img)}
          >
            <div className="overflow-hidden relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sage-200/0 group-hover:bg-sage-300/20 transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-sage-900/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-sage-600 hover:text-sage-800 transition-colors"
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}