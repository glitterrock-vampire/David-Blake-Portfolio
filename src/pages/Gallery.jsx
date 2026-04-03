import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/b5b97b634_generated_da364573.png", alt: "Melanin Migration Performance" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/c1ba29128_generated_a68e1ea9.png", alt: "Awards Ceremony" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/6d649a4f5_generated_e3086f8c.png", alt: "Stage Performance" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/2eda9fd59_generated_60044d95.png", alt: "Dance Rehearsal Studio" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/3c9eee068_generated_1a2867f9.png", alt: "Dance Workshop" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/b754eb047_generated_cd5873fd.png", alt: "Rehearsal Duet" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/9e7e5467b_generated_4673f453.png", alt: "Graduation Ceremony" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/9a2867c0b_generated_ae68bcb6.png", alt: "Drawing With Light" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/1daf94633_generated_377ba96e.png", alt: "Embodied Code" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/233df2bb8_generated_158df6d1.png", alt: "Creative Direction" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/a88d2e3bf_generated_62c23445.png", alt: "Creative Lab" },
  { src: "https://media.base44.com/images/public/69cb383c7ed443549328234d/3c7222529_generated_a3983d22.png", alt: "Mentoring Session" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-sage-100">
      <div className="text-center mb-6 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-sage-800 mb-4"
        >
          Visual Archive
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wide text-sage-900"
        >
          Gallery
        </motion.h1>
      </div>
      <div className="text-center mb-16 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm text-sage-700 font-light max-w-xl mx-auto"
        >
          A visual journey through performances, rehearsals, and creative moments captured in motion and stillness.
        </motion.p>
      </div>

      {/* Masonry-style Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-1 px-1">
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