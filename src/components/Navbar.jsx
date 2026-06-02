import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "work", path: "/work" },
  { label: "services", path: "/services" },
  { label: "gallery", path: "/gallery" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
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
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.label === "work" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setWorkDropdownOpen(true)}
                    onMouseLeave={() => setWorkDropdownOpen(false)}
                  >
                    <Link
                      to="/work"
                      className={`font-body text-sm tracking-widest lowercase transition-colors duration-300 flex items-center gap-1 ${
                        location.pathname === "/work" || workDropdownOpen
                          ? "text-orange-500"
                          : isWorkPage || isCreativeLabPage ? "text-white/70 hover:text-white" : isGalleryPage ? "text-white hover:text-orange-500" : "text-muted-foreground hover:text-orange-500"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${workDropdownOpen ? "rotate-180" : ""}`} />
                    </Link>
                    <AnimatePresence>
                      {workDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-0 mt-2 border border-foreground/20 rounded-lg shadow-lg overflow-hidden min-w-[200px] ${
                            isWorkPage || isCreativeLabPage || isGalleryPage ? 'bg-black/90' : 'bg-background'
                          }`}
                        >
                          <Link
                            to="/work/melanin-migration"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Melanin Migration
                          </Link>
                          <Link
                            to="/work/drawing-with-light"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Drawing With Light
                          </Link>
                          <Link
                            to="/work/embodied-code"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Embodied Code
                          </Link>
                          <a
                            href="https://www.blakearts.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block px-4 py-3 font-body text-sm transition-colors flex items-center justify-between ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            <span>blakearts.org</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.label === "services" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to="/services"
                      className={`font-body text-sm tracking-widest lowercase transition-colors duration-300 flex items-center gap-1 ${
                        location.pathname === "/services" || servicesDropdownOpen
                          ? "text-orange-500"
                          : isWorkPage || isCreativeLabPage ? "text-white/70 hover:text-white" : isGalleryPage ? "text-white hover:text-orange-500" : "text-muted-foreground hover:text-orange-500"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                    </Link>
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-0 mt-2 border border-foreground/20 rounded-lg shadow-lg overflow-hidden min-w-[200px] ${
                            isWorkPage || isCreativeLabPage || isGalleryPage ? 'bg-black/90' : 'bg-background'
                          }`}
                        >
                          <Link
                            to="/contact?service=choreography"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Creative Direction & Choreography
                          </Link>
                          <Link
                            to="/contact?service=creative-direction"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Education & Training
                          </Link>
                          <Link
                            to="/contact?service=mentoring"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Mentoring & Artist Development
                          </Link>
                          <Link
                            to="/contact?service=consultation"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Consultancy & Advisory
                          </Link>
                          <Link
                            to="/contact?service=academic"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Speaking & Professional Development
                          </Link>
                          <Link
                            to="/contact?service=production"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Community & Cultural Engagement
                          </Link>
                          <Link
                            to="/creative-lab"
                            className={`block px-4 py-3 font-body text-sm transition-colors ${
                              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            Creative Lab Workshop
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-body text-sm tracking-widest lowercase transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-foreground"
                        : isGalleryPage ? "text-white hover:text-orange-500" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
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
                  {link.label === "work" ? (
                    <div className="flex flex-col items-center gap-4">
                      <button
                        onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                        className={`font-heading text-3xl tracking-wide lowercase flex items-center gap-2 ${
                          isWorkPage || isCreativeLabPage ? 'text-white' : isGalleryPage ? 'text-rust' : 'text-foreground'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileWorkOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileWorkOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center gap-2 ml-8"
                          >
                            <Link
                              to="/work/melanin-migration"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Melanin Migration
                            </Link>
                            <Link
                              to="/work/drawing-with-light"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Drawing With Light
                            </Link>
                            <Link
                              to="/work/embodied-code"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Embodied Code
                            </Link>
                            <a
                              href="https://www.blakearts.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase flex items-center gap-2 ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              blakearts.org
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.label === "services" ? (
                    <div className="flex flex-col items-center gap-4">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`font-heading text-3xl tracking-wide lowercase flex items-center gap-2 ${
                          isWorkPage || isCreativeLabPage ? 'text-white' : isGalleryPage ? 'text-rust' : 'text-foreground'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center gap-2 ml-8"
                          >
                            <Link
                              to="/contact?service=choreography"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Creative Direction & Choreography
                            </Link>
                            <Link
                              to="/contact?service=creative-direction"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Education & Training
                            </Link>
                            <Link
                              to="/contact?service=mentoring"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Mentoring & Artist Development
                            </Link>
                            <Link
                              to="/contact?service=consultation"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Consultancy & Advisory
                            </Link>
                            <Link
                              to="/contact?service=academic"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Speaking & Professional Development
                            </Link>
                            <Link
                              to="/contact?service=production"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Community & Cultural Engagement
                            </Link>
                            <Link
                              to="/creative-lab"
                              onClick={() => setMobileOpen(false)}
                              className={`font-body text-lg tracking-wide lowercase ${
                                isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-white/70 hover:text-orange-500' : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              Creative Lab Workshop
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="font-heading text-3xl tracking-wide lowercase text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
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