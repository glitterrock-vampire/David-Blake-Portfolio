import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import WorkPreview from "../components/home/WorkPreview";
import LoadingScreen from "../components/LoadingScreen";
import TransferableSkillsSection from "../components/home/TransferableSkillsSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleLoadComplete = () => {
    sessionStorage.setItem("intro_shown", "true");
    setLoading(false);
  };

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <img
          src="/photos/Photo%2014-10-2020,%2016%2008%2001.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <div className="relative z-10">
        <HeroSection />

        <section className="pb-24 md:pb-32">
          <div className="px-6 md:px-12 mb-16 pt-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl text-center tracking-wide lowercase text-foreground"
            >
              Selected Work
            </motion.h2>
          </div>

          <WorkPreview />

          <div className="text-center mt-16">
            <Link
              to="/work"
              className="font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
            >
              view full work
            </Link>
          </div>
        </section>

        <TransferableSkillsSection />

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/9] overflow-hidden rounded-lg mb-12"
            >
              <img
                src="/photos/the-creative-lab.jpeg"
                alt="Creative Lab Workshop"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl text-center tracking-wide lowercase text-foreground mb-12"
            >
              Creative Lab
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-sm text-muted-foreground font-light max-w-3xl mx-auto text-center leading-relaxed"
            >
              Workshops, career clinics, and professional development sessions supporting
              emerging and mid-career artists with industry transition, mindset, and
              sustainable career strategy.
            </motion.p>

            <div className="text-center mt-12">
              <Link
                to="/creative-lab"
                className="font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
              >
                explore creative lab
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}