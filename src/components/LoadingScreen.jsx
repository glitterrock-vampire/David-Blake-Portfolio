import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ← Replace this with your actual hosted video URL (e.g. Cloudinary, Vimeo direct link, etc.)
const VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

const PORTRAIT_URL = "https://www.davidpblake.org/images/hero/Photo%2008-12-2025,%2012%2002%2027%20(19).jpg";

const disciplines = [
  "Creative Direction",
  "Choreography",
  "Leadership",
  "Mentorship and Coaching",
];

function ProgressList({ onComplete }) {
  const [progress, setProgress] = useState({});
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    const timers = [];
    disciplines.forEach((_, i) => {
      let p = 0;
      timers.push(setTimeout(() => {
        const interval = setInterval(() => {
          p += Math.random() * 4 + 2;
          if (p >= 100) {
            p = 100;
            clearInterval(interval);
            setLoaded(prev => [...prev, i]);
            if (i === disciplines.length - 1) {
              setTimeout(onComplete, 600);
            }
          }
          setProgress(prev => ({ ...prev, [i]: p }));
        }, 80);
      }, 400 + i * 1800));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="space-y-3 w-full">
      {disciplines.map((item, i) => {
        const pct = progress[i] ?? 0;
        const done = loaded.includes(i);
        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.55 }}
            className="flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 flex-shrink-0">
              {done
                ? <div className="w-1.5 h-1.5 bg-white rounded-full" />
                : pct > 0
                ? <div className="w-1.5 h-1.5 border border-white/50 rounded-full animate-pulse" />
                : <div className="w-1.5 h-1.5 border border-white/20 rounded-full" />}
            </div>
            <span className={`font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase w-44 transition-colors ${done ? "text-white" : pct > 0 ? "text-white/50" : "text-white/20"}`}>
              {item}
            </span>
            <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.08, ease: "linear" }}
              />
            </div>
            <span className={`font-mono text-[8px] w-7 text-right ${done ? "text-white" : "text-white/30"}`}>
              {done ? "100" : Math.floor(pct)}%
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#0d0d0d] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Blurred video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto min-w-full object-cover scale-125"
          style={{ filter: "blur(2px)" }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Scanline texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}
      />

      {/* ── MOBILE layout ── */}
      <div className="md:hidden relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-heading text-[18vw] leading-none tracking-wider text-white mb-2"
        >
          DAVID<br />BLAKE
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full h-px bg-white/20 mb-6 origin-left"
        />
        <ProgressList onComplete={onComplete} />
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:flex relative z-10 h-full">

        {/* Left — discipline loader */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-1/2 flex flex-col justify-center px-16 xl:px-24"
        >
          <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/30 mb-8">
            — initialising —
          </p>
          <ProgressList onComplete={onComplete} />
        </motion.div>

        {/* Right — portrait + name */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1/2 relative flex flex-col justify-end p-16"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={PORTRAIT_URL}
              alt="David Blake"
              className="w-full h-full object-cover object-top"
              style={{ maskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/60" />
          </div>

          <div className="relative z-10">
            <h1
              className="text-7xl xl:text-8xl font-black text-white leading-none mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              david<br />blake
            </h1>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              Portfolio / 2026 &nbsp;·&nbsp; London / Los Angeles
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}