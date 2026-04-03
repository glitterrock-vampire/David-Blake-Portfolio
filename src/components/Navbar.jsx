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
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link to="/" className="font-heading text-xl md:text-2xl tracking-wide text-foreground lowercase">
            david blake
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.label === "services" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`font-body text-sm tracking-widest lowercase transition-colors duration-300 flex items-center gap-1 ${
                        location.pathname === link.path || servicesDropdownOpen
                          ? "text-orange-500"
                          : "text-muted-foreground hover:text-orange-500"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 bg-background border border-foreground/20 rounded-lg shadow-lg overflow-hidden min-w-[200px]"
                        >
                          <Link
                            to="/creative-lab"
                            className="block px-4 py-3 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                          >
                            The Creative Lab
                          </Link>
                          <a
                            href="https://www.blakearts.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors flex items-center justify-between"
                          >
                            <span>blakearts.org</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
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
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="font-body text-sm tracking-widest lowercase border border-foreground px-5 py-2 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
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
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="font-heading text-xl tracking-wide text-foreground lowercase"
              >
                david blake
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-foreground">
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
                  {link.label === "services" ? (
                    <div className="flex flex-col items-center gap-4">
                      <Link
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className="font-heading text-3xl tracking-wide lowercase text-foreground"
                      >
                        {link.label}
                      </Link>
                      <div className="flex flex-col items-center gap-2 ml-8">
                        <Link
                          to="/creative-lab"
                          onClick={() => setMobileOpen(false)}
                          className="font-body text-lg tracking-wide lowercase text-muted-foreground hover:text-foreground"
                        >
                          The Creative Lab
                        </Link>
                        <a
                          href="https://www.blakearts.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="font-body text-lg tracking-wide lowercase text-muted-foreground hover:text-foreground flex items-center gap-2"
                        >
                          blakearts.org
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
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
                  className="font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground"
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