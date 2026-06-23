import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const trustedBy = [
  {
    name: "Ernst & Young",
    logo: "/logos/ey.svg",
  },
  {
    name: "University of Greenwich",
    logo: "/logos/university-of-greenwich.png",
  },
  {
    name: "BBC",
    logo: "/logos/bbc.svg",
  },
  {
    name: "Disney Theatrical Productions",
    logo: "/logos/disney-theatrical.svg",
  },
  {
    name: "Black British Theatre Awards",
    logo: "/logos/black-british-theatre-awards.png",
  },
  {
    name: "Danceworks London",
    logo: "/logos/danceworks-london.png",
  },
  {
    name: "EE",
    logo: "/logos/ee.svg",
  },
  {
    name: "Urdang City St George's, University of London",
    logo: "/logos/city-st-georges.png",
  },
  {
    name: "Bayes Business School",
    logo: "/logos/bayes-business-school.png",
  },
];

export default function Footer() {
  const location = useLocation();
  const isWorkPage = location.pathname === '/work';
  const isCreativeLabPage = location.pathname === '/creative-lab';
  const isGalleryPage = location.pathname === '/gallery';

  return (
    <footer className={`border-t py-12 px-6 md:px-12 ${
      isWorkPage || isCreativeLabPage || isGalleryPage ? 'border-white/20 bg-black' : 'border-border'
    }`}>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-6 border-b border-foreground/10">
          {trustedBy.map((partner) => (
            <div key={partner.name} className="flex h-12 min-w-[120px] items-center justify-center">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-8 max-w-[120px] w-auto object-contain grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <Link to="/" className={`font-heading text-lg tracking-wide block ${
              isWorkPage || isCreativeLabPage ? 'text-white' : isGalleryPage ? 'text-rust' : 'text-foreground'
            }`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {"David Blake".split("").map((letter, i) => (
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
              href="https://www.instagram.com/blakeartsuk"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-body text-xs tracking-widest uppercase transition-colors ${
                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-rust/70 hover:text-rust' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Instagram
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
      </div>
    </footer>
  );
}