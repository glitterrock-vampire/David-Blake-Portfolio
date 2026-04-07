import { motion } from "framer-motion";

const disciplines = [
  "Creative Direction",
  "Choreography",
  "Leadership",
  "Mentorship and Coaching",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start justify-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/Photo%2008-12-2025,%2012%2002%2027%20(19).jpg"
          alt="David Blake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-48 md:pt-64">
        <div className="max-w-2xl space-y-6 text-left">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            david blake
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-wrap items-center gap-2 md:gap-3"
          >
            {disciplines.map((d, i) => (
              <span key={d} className="flex items-center gap-2 md:gap-3">
                <span className="text-xs md:text-sm text-white/80 uppercase tracking-wider font-body">
                  {d}
                </span>
                {i < disciplines.length - 1 && (
                  <span className="text-white/40">•</span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base md:text-lg text-white/70 leading-relaxed font-body font-light"
          >
            David Blake is a choreographer and creative leader producing work for stage, screen, and institutions while mentoring artists toward sustainable creative careers. Through Blake Arts, he cultivates the next generation of dancers through training, mentorship, and performance.
          </motion.p>

        </div>
      </div>
    </section>
  );
}