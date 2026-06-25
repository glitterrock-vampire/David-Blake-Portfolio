import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          ref={heroImageRef}
          src="/photos/Photo%2008-12-2025,%2012%2002%2027%20(19).jpg"
          alt="David Blake"
          className="h-full w-full object-cover object-[58%_center] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end px-6 pb-12 pt-36 md:px-12 md:pb-16 lg:px-20">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-6 font-body text-[11px] uppercase tracking-[0.38em] text-white/70"
            >
              Creative direction. Education. Mentoring.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.9, ease: "easeOut" }}
              className="font-black leading-[0.86] tracking-[-0.07em] text-white text-[clamp(4.25rem,13vw,11.5rem)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              David
              <span className="block pl-[0.14em]">Blake</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.75 }}
              className="mt-8 max-w-3xl border-l border-white/30 pl-5 md:mt-10 md:pl-7"
            >
              <h2 className="font-body text-2xl font-light leading-tight tracking-[-0.02em] text-white md:text-4xl">
                Creative leadership for people, organisations, and ideas in motion.
              </h2>
              <p className="mt-5 max-w-2xl font-body text-base font-light leading-relaxed text-white md:text-lg">
                Helping people redefine performance to unlock purpose, leadership and lasting impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.7 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="font-body text-sm tracking-widest lowercase bg-white px-8 py-4 text-center text-black transition-all duration-300 hover:bg-sage hover:text-background"
              >
                start a conversation
              </Link>
              <Link
                to="/work-with-david"
                className="font-body text-sm tracking-widest lowercase border border-white/60 px-8 py-4 text-center text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                work with david
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.75 }}
            className="hidden border border-white/18 bg-black/35 p-7 text-white shadow-2xl backdrop-blur-md lg:block"
          >
            <p className="font-body text-[11px] uppercase tracking-[0.32em] text-white/55">
              Focus
            </p>
            <div className="mt-8 space-y-6">
              {[
                "Creative direction",
                "Education & training",
                "Mentoring & coaching",
                "Consultancy & advisory",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between gap-5 border-b border-white/12 pb-4">
                  <span className="font-heading text-2xl leading-none text-white">
                    {item}
                  </span>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-sage" />
                </div>
              ))}
            </div>
            <Link
              to="/impact"
              className="mt-8 inline-flex font-body text-xs uppercase tracking-[0.28em] text-white/65 transition-colors duration-300 hover:text-white"
            >
              impact & recognition
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
