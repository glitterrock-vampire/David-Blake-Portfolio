import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isWorkPage = location.pathname === '/work';
  const isCreativeLabPage = location.pathname === '/creative-lab';
  const isGalleryPage = location.pathname === '/gallery';

  return (
    <footer className={`border-t py-12 px-6 md:px-12 ${
      isWorkPage || isCreativeLabPage ? 'border-white/20 bg-black' : isGalleryPage ? 'border-sage-300 bg-sage-100' : 'border-border'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center md:text-left">
        <div className="space-y-2">
          <Link to="/" className={`font-heading text-lg tracking-wide lowercase block ${
            isWorkPage || isCreativeLabPage ? 'text-white' : isGalleryPage ? 'text-sage-900' : 'text-foreground'
          }`}>
            david blake
          </Link>
          <p className={`font-body text-xs tracking-widest uppercase ${
            isWorkPage || isCreativeLabPage ? 'text-white/70' : isGalleryPage ? 'text-sage-700' : 'text-muted-foreground'
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
              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-sage-700 hover:text-sage-900' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/davidpblake"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body text-xs tracking-widest uppercase transition-colors ${
              isWorkPage || isCreativeLabPage ? 'text-white/70 hover:text-white' : isGalleryPage ? 'text-sage-700 hover:text-sage-900' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            LinkedIn
          </a>
        </div>
        <p className={`font-body text-xs md:text-right ${
          isWorkPage || isCreativeLabPage ? 'text-white/70' : isGalleryPage ? 'text-sage-700' : 'text-muted-foreground'
        }`}>
          © {new Date().getFullYear()} David Blake. All rights reserved.<br />
          Developed by Andre Walters, ALDEN Web Studio.
        </p>
      </div>
    </footer>
  );
}