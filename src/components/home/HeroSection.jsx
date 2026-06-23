import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const disciplines = [
  "Creative Leadership",
  "Movement Direction",
  "Mentorship",
  "Strategic Insight",
];

export default function HeroSection() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroImageRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, heroImageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-start justify-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          ref={heroImageRef}
          src="/photos/Photo%2008-12-2025,%2012%2002%2027%20(19).jpg"
          alt="David Blake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-44 md:pt-60 pb-24">
        <div className="max-w-3xl space-y-7 text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-body text-xs md:text-sm uppercase tracking-[0.34em] text-white/70"
          >
            Expertise. Leadership. Insight. Transformation.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.9, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            David Blake
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="font-heading text-3xl md:text-5xl leading-tight text-white"
          >
            Creative leadership for artists, organisations, and ideas in motion.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.7 }}
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
            transition={{ delay: 0.48, duration: 0.7 }}
            className="text-base md:text-lg text-white/75 leading-relaxed font-body font-light max-w-2xl"
          >
            I help people and organisations turn creative experience into clearer thinking, stronger leadership, and meaningful change. Sometimes through dance. Sometimes through education, mentoring, consultancy, and the work that happens beyond the stage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 pt-3"
          >
            <a
              href="#work-with-david"
              className="font-body text-sm tracking-widest lowercase bg-white text-black px-8 py-3 text-center hover:bg-sage hover:text-background transition-all duration-300"
            >
              work with david
            </a>
            <a
              href="/contact"
              className="font-body text-sm tracking-widest lowercase border border-white/70 text-white px-8 py-3 text-center hover:bg-white hover:text-black transition-all duration-300"
            >
              start a conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
