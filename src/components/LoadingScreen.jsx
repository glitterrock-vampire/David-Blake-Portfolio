'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";

const PORTRAIT_URL = "/photos/Photo%2008-12-2025,%2012%2002%2027%20(19).jpg";

const metaItems = [
  "Creative Direction",
  "Choreography",
  "Leadership",
  "Mentorship and Coaching",
];

const letterContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.35,
    },
  },
};

const letterItem = {
  hidden: {
    opacity: 0,
    y: 42,
    rotateX: -100,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.28,
      delayChildren: 2.1,
    },
  },
};

const lineItem = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function AnimatedName({ mobile = false }) {
  return (
    <motion.h1
      variants={letterContainer}
      initial="hidden"
      animate="show"
      className={
        mobile
          ? "text-[clamp(3rem,14vw,6rem)] leading-[0.92] tracking-[-0.02em] text-white"
          : "text-[4rem] xl:text-[5rem] 2xl:text-[6rem] font-black text-white leading-[0.88] tracking-normal"
      }
      style={{
        fontFamily: "'Playfair Display', serif",
        transformStyle: "preserve-3d",
      }}
    >
      {"David Blake".split("").map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          variants={letterItem}
          style={{
            display: "inline-block",
            whiteSpace: letter === " " ? "pre" : "normal",
            transformOrigin: "50% 100%",
            willChange: "transform, opacity, filter",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 7200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0.72 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 6.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={PORTRAIT_URL}
          alt="David Blake"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "58% center",
          }}
        />

        {/* stronger mobile shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent md:from-black/45 md:via-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent md:from-black/35 md:via-transparent" />
      </motion.div>

      {/* soft blend desktop only */}
      <motion.div
        className="hidden md:block absolute inset-y-0 left-[42%] w-[24%] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
        style={{
          background: "linear-gradient(to right, transparent, rgba(0,0,0,0.18), transparent)",
        }}
      />

      {/* scanlines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
        }}
      />

      {/* mobile */}
      <div className="md:hidden relative z-10 flex min-h-screen items-end px-5 sm:px-6 pb-[max(5.5rem,env(safe-area-inset-bottom))]">
        <div className="w-full -translate-y-14">

          {/* NAME */}
          <div className="max-w-[85vw]">
            <AnimatedName mobile />
          </div>

          {/* META TEXT */}
          <motion.div
            variants={lineContainer}
            initial="hidden"
            animate="show"
            className="mt-6 space-y-2"
          >
            <motion.p
              variants={lineItem}
              className="font-mono text-[10px] tracking-[0.24em] uppercase text-white"
            >
              Portfolio / 2026
            </motion.p>

            <motion.p
              variants={lineItem}
              className="font-mono text-[10px] tracking-[0.24em] uppercase text-white"
            >
              Creative Direction
            </motion.p>

            <motion.p
              variants={lineItem}
              className="font-mono text-[10px] tracking-[0.24em] uppercase text-white"
            >
              Choreography
            </motion.p>

            <motion.p
              variants={lineItem}
              className="font-mono text-[10px] tracking-[0.24em] uppercase text-white"
            >
              Leadership
            </motion.p>

            <motion.p
              variants={lineItem}
              className="font-mono text-[10px] tracking-[0.24em] uppercase text-white"
            >
              Mentorship and Coaching
            </motion.p>

            <motion.p
              variants={lineItem}
              className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/90 pt-1"
            >
              London / Los Angeles
            </motion.p>
          </motion.div>

        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex relative z-10 h-full items-end px-16 xl:px-24 pb-20">
        <div className="grid w-full grid-cols-2 gap-12 items-end">
          <motion.div
            className="flex items-end"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatedName />
          </motion.div>

          <div className="flex justify-end">
            <motion.div
              variants={lineContainer}
              initial="hidden"
              animate="show"
              className="max-w-[460px] text-right"
            >
              <motion.p
                variants={lineItem}
                className="font-mono text-[11px] xl:text-[12px] tracking-[0.32em] uppercase text-white mb-8"
              >
                Portfolio / 2026
              </motion.p>

              <div className="space-y-3 mb-8">
                {metaItems.map((item) => (
                  <motion.p
                    key={item}
                    variants={lineItem}
                    className="font-mono text-[12px] xl:text-[13px] tracking-[0.26em] uppercase text-white"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>

              <motion.p
                variants={lineItem}
                className="font-mono text-[11px] xl:text-[12px] tracking-[0.3em] uppercase text-white"
              >
                London / Los Angeles
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}