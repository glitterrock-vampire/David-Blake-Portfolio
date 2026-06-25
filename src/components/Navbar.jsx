import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "work with david", path: "/work-with-david", featured: true },
  { label: "beyond performance", path: "/beyond-performance" },
  { label: "creative projects", path: "/creative-projects" },
  { label: "impact & recognition", path: "/impact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isWorkPage = location.pathname === '/work';
  const isCreativeLabPage = location.pathname === '/creative-lab';
  const isGalleryPage = location.pathname === '/gallery';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ${
        isWorkPage || isCreativeLabPage || isGalleryPage ? 'bg-black/80' : 'bg-background/80'
      }`}>
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link to="/" className={`font-heading text-xl md:text-2xl tracking-wide ${
            isWorkPage || isCreativeLabPage ? 'text-white' : isGalleryPage ? 'text-rust' : 'text-foreground'
          }`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
            David Blake
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body tracking-widest lowercase transition-colors duration-300 ${
                  link.featured ? "text-base font-semibold" : "text-sm"
                } ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : isGalleryPage ? "text-white hover:text-orange-500" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`font-body text-sm tracking-widest lowercase border px-5 py-2 transition-all duration-300 ${
                isWorkPage || isCreativeLabPage ? 'border-white text-white hover:bg-sage hover:text-black' : isGalleryPage ? 'border-white/70 text-white/70 hover:border-orange-500 hover:text-orange-500' : 'border-foreground text-foreground hover:bg-sage hover:text-background'
              }`}
            >
              let's connect
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-foreground"
          >
            <Menu className="w-6 h-6" strokeWidth={1} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-[100] flex flex-col ${
              isGalleryPage ? 'bg-black' : 'bg-background'
            }`}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-xl tracking-wide ${
                  isGalleryPage ? 'text-rust' : 'text-foreground'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                David Blake
              </Link>
              <button onClick={() => setMobileOpen(false)} className={isGalleryPage ? 'text-white' : 'text-foreground'}>
                <X className="w-6 h-6" strokeWidth={1} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading tracking-wide lowercase text-foreground ${
                      link.featured ? "text-4xl" : "text-3xl"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground hover:bg-sage hover:text-background transition-all duration-300"
                >
                  let's connect
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
