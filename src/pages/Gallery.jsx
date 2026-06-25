import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause } from "lucide-react";

const VIDEO_URL = "/videos/VIDEO-2026-03-28-20-03-24.mp4";

const images = [
  { src: "/photos/Photo%2008-12-2025,%2012%2002%2027%20(1).jpg", alt: "Performance Moment" },
  { src: "/photos/Photo%2008-12-2025,%2012%2002%2027%20(2).jpg", alt: "Creative Process" },
  { src: "/photos/Photo%2008-12-2025,%2012%2002%2027%20(5).jpg", alt: "Dance Rehearsal" },
  { src: "/photos/Photo%2008-12-2025,%2012%2002%2027%20(12).jpg", alt: "Stage Performance" },
  { src: "/photos/Photo%2014-10-2020,%2016%2008%2001.jpg", alt: "Workshop Session" },
  { src: "/photos/Photo%2014-10-2020,%2016%2018%2000.jpg", alt: "Teaching Moment" },
  { src: "/photos/Photo%2015-02-2013,%2013%2052%2013.jpg", alt: "Early Career" },
  { src: "/photos/Photo%2028-09-2018,%2016%2058%2035.jpg", alt: "Performance Art" },
  { src: "/photos/Photo%2028-09-2018,%2017%2008%2057.jpg", alt: "Creative Direction" },
  { src: "/photos/Photo%2006-06-2024,%2022%2001%2038.jpg", alt: "Recent Work" },
  { src: "/photos/embodied-code.png", alt: "Embodied Code" },
  { src: "/photos/the-creative-lab.jpeg", alt: "Creative Lab Workshop" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const featuredVideoRef = useRef(null);
  const melaninVideoRef = useRef(null);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-black text-white">
      <div className="text-center mb-6 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-rust mb-4"
        >
          {"Visual Archive".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wide text-rust"
        >
          {"Gallery".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
            >
              {letter}
            </motion.span>
          ))}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.6 }}
          className="break-inside-avoid mb-1 group"
        >
          <div 
            className="relative overflow-hidden rounded-lg"
            onMouseEnter={() => {
              if (featuredVideoRef.current) {
                featuredVideoRef.current.play().catch(err => console.log("Play failed:", err));
              }
            }}
            onMouseLeave={() => {
              if (featuredVideoRef.current) {
                featuredVideoRef.current.pause();
              }
            }}
          >
            <video
              ref={featuredVideoRef}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loop
              muted
              playsInline
              preload="metadata"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="break-inside-avoid mb-1 cursor-pointer group"
        >
          <div 
            className="relative overflow-hidden rounded-lg"
            onMouseEnter={() => {
              if (melaninVideoRef.current) {
                melaninVideoRef.current.play().catch(err => console.log("Play failed:", err));
              }
            }}
            onMouseLeave={() => {
              if (melaninVideoRef.current) {
                melaninVideoRef.current.pause();
              }
            }}
          >
            <video
              ref={melaninVideoRef}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
            className="break-inside-avoid mb-1 cursor-pointer group"
            onClick={() => setSelected(img)}
          >
            <div className="overflow-hidden relative">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                decoding="async"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
              loading="eager"
              decoding="sync"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
