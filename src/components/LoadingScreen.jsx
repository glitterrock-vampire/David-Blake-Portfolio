'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VIDEO_URL = "/videos/VIDEO-2026-03-28-20-03-24.mp4";
const PORTRAIT_URL = "https://www.davidpblake.org/images/hero/Photo%2008-12-2025,%2012%2002%2027%20(19).jpg";

const disciplines = [
  "Creative Direction",
  "Choreography",
  "Leadership",
  "Mentorship and Coaching",
];

function ProgressList() {
  const [progress, setProgress] = useState({});
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    const timeouts = [];
    const intervals = [];

    disciplines.forEach((_, i) => {
      let p = 0;

      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          p += Math.random() * 4 + 2;

          if (p >= 100) {
            p = 100;
            clearInterval(interval);
            setLoaded(prev => [...prev, i]);
          }

          setProgress(prev => ({ ...prev, [i]: p }));
        }, 80);

        intervals.push(interval);
      }, 400 + i * 1800);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="space-y-3 w-full">
      {disciplines.map((item, i) => {
        const pct = progress[i] || 0;
        const done = loaded.includes(i);

        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.55 }}
            className="flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5">
              {done ? (
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              ) : pct > 0 ? (
                <div className="w-1.5 h-1.5 border border-white/50 rounded-full animate-pulse" />
              ) : (
                <div className="w-1.5 h-1.5 border border-white/20 rounded-full" />
              )}
            </div>

            <span
              className={`font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase w-44 ${
                done ? "text-white" : pct > 0 ? "text-white/50" : "text-white/20"
              }`}
            >
              {item}
            </span>

            <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.08 }}
              />
            </div>

            <span
              className={`font-mono text-[8px] w-7 text-right ${
                done ? "text-white" : "text-white/30"
              }`}
            >
              {done ? "100" : Math.floor(pct)}%
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* LEFT VIDEO */}
      <div className="absolute inset-y-0 left-0 w-[58%] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "blur(1.5px)" }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* FULL IMAGE WITH LEFT FADE */}
      <div className="absolute inset-0">
        <img
          src={PORTRAIT_URL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "center top",
            WebkitMaskImage: `
              linear-gradient(
                to right,
                transparent 0%,
                rgba(0,0,0,0.15) 12%,
                rgba(0,0,0,0.45) 25%,
                rgba(0,0,0,0.8) 40%,
                black 55%
              )
            `,
            maskImage: `
              linear-gradient(
                to right,
                transparent 0%,
                rgba(0,0,0,0.15) 12%,
                rgba(0,0,0,0.45) 25%,
                rgba(0,0,0,0.8) 40%,
                black 55%
              )
            `,
            filter: "blur(0.6px)"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* BLEND ZONE */}
      <div
        className="absolute inset-y-0 left-[45%] w-[25%] pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, rgba(0,0,0,0.25), transparent)",
          backdropFilter: "blur(6px)"
        }}
      />

      {/* SCANLINES */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)"
        }}
      />

      {/* MOBILE */}
      <div className="md:hidden relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-[18vw] leading-none">
          DAVID<br />BLAKE
        </h1>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex relative z-10 h-full">

        {/* LEFT CONTENT */}
        <div className="w-1/2 flex flex-col justify-center px-16">
          <ProgressList />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-1/2 flex flex-col justify-end p-16 pb-24">
          <h1
            className="text-7xl xl:text-8xl font-black text-white leading-none mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            david<br />blake
          </h1>

          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
            Portfolio / 2026 · London / Los Angeles
          </p>
        </div>

      </div>
    </motion.div>
  );
}