import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center md:text-left">
        <div className="space-y-2">
          <Link to="/" className="font-heading text-lg tracking-wide lowercase text-foreground block">
            david blake
          </Link>
          <p className="font-body text-xs tracking-widest text-muted-foreground uppercase">
            Creative Direction · Choreography · Leadership · Mentorship and Coaching
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/davidpblake"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/davidpblake"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="font-body text-xs text-muted-foreground md:text-right">
          © {new Date().getFullYear()} David Blake. All rights reserved.<br />
          Developed by Andre Walters, ALDEN Web Studio.
        </p>
      </div>
    </footer>
  );
}