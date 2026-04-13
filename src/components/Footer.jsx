import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const location = useLocation();
  const isWorkPage = location.pathname === '/work';
  const isCreativeLabPage = location.pathname === '/creative-lab';
  const isGalleryPage = location.pathname === '/gallery';

  return (
    <footer className={`border-t py-12 px-6 md:px-12 ${
      isWorkPage || isCreativeLabPage || isGalleryPage ? 'border-white/20 bg-black' : 'border-border'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center md:text-left">
        <div className="space-y-2">
          <Link to="/" className={`font-heading text-lg tracking-wide lowercase block ${
            isWorkPage || isCreativeLabPage ? 'text-white' : isGalleryPage ? 'text-rust' : 'text-foreground'
          }`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {"david blake".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </Link>
          <p className={`font-body text-xs tracking-widest uppercase ${
            isWorkPage || isCreativeLabPage ? 'text-white/70' : isGalleryPage ? 'text-rust/70' : 'text-muted-foreground'
          }`}>
            Creative Direction · Choreography · Leadership · Mentorship and Coaching
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/davidpblake"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body text-xs tracking-widest uppercase transition-colors ${
              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-rust/70 hover:text-rust' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/davidpblake"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body text-xs tracking-widest uppercase transition-colors ${
              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-rust/70 hover:text-rust' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            LinkedIn
          </a>
        </div>
        <p className={`font-body text-xs md:text-right ${
          isWorkPage || isCreativeLabPage ? 'text-white/70' : isGalleryPage ? 'text-rust/70' : 'text-muted-foreground'
        }`}>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Portfolio
          </motion.span>
          {" "}/ {new Date().getFullYear()} David Blake. All rights reserved.<br />
          Developed by Andre Walters, ALDEN Web Studio.
        </p>
      </div>
    </footer>
  );
}