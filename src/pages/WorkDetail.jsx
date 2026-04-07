import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useMemo, useRef, useEffect, useState } from "react";

const projectsData = {
  "melanin-migration": {
    title: "Melanin Migration",
    subtitle: "Brothers in Arms",
    image: "/photos/Photo 08-12-2025, 12 02 27 (19).jpg",
    tags: ["Performance", "Identity", "Brotherhood", "Movement"],
    overview: "This research investigates how professional performers navigate uncertainty, career transition, and wellbeing when traditional performance structures are disrupted. It focuses on skills, forms of support, and collective practices that enable performers—particularly Black male artists working in commercial theatre—to imagine sustainable futures beyond the stage.",
    researchFocus: [
      "How performers prepare for life beyond the stage during periods of disruption.",
      "The role of peer-led, embodied creative practice in supporting wellbeing and resilience.",
      "How collective reflection and movement-based processes support career reorientation.",
      "Sustainable, non-clinical models of support within cultural labour contexts.",
    ],
    approach: "The research adopts a practice-based and reflexive approach, using creative process as a method of inquiry. Qualitative reflection on embodied practice, dialogue, and shared authorship is used to generate insight into professional experience, wellbeing, and future planning.",
    futureDirection: "The long-term aim is to adapt these peer-led, embodied practices into accessible models that support wellbeing, skills development, and future planning across professional, educational, and community contexts.",
  },
  "drawing-with-light": {
    title: "Drawing With Light",
    subtitle: "Immersive Performance",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/9a2867c0b_generated_ae68bcb6.png",
    tags: ["Technology", "Site-Specific", "Community", "Immersive"],
    overview: "An immersive, site-specific performance project exploring the intersection of movement, light, and community engagement. Drawing With Light transforms public spaces through choreographed interactions with projected light, creating shared experiences that bridge technology and human connection.",
    researchFocus: [],
    approach: "",
    futureDirection: "",
  },
  "embodied-code": {
    title: "Embodied Code",
    subtitle: "Digital Research",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/1daf94633_generated_377ba96e.png",
    tags: ["Motion Capture", "Digital", "Cross-Disciplinary", "Research"],
    overview: "A cross-disciplinary research project investigating the relationship between physical movement and digital expression. Embodied Code uses motion capture technology and computational processes to explore how the body's intelligence can inform and transform digital creation.",
    researchFocus: [],
    approach: "",
    futureDirection: "",
  },
};

export default function WorkDetail() {
  const { slug } = useParams();
  const videoRef = useRef(null);
  const [isVideoInView, setIsVideoInView] = useState(false);

  const project = useMemo(
    () => projectsData[slug],
    [slug]
  );

  const projectSlugs = Object.keys(projectsData);
  const currentIndex = projectSlugs.indexOf(slug);
  const previousProject = currentIndex > 0 ? projectSlugs[currentIndex - 1] : null;
  const nextProject = currentIndex < projectSlugs.length - 1 ? projectSlugs[currentIndex + 1] : null;

  // Scroll-based video auto-play
  useEffect(() => {
    if (slug !== "melanin-migration" || !videoRef.current) return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(err => console.log("Auto-play failed:", err));
            setIsVideoInView(true);
          } else {
            video.pause();
            setIsVideoInView(false);
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of video is visible
    );

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
        video.pause();
      }
    };
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-36 text-center">
        <p className="font-body text-muted-foreground">Project not found.</p>
        <Link to="/work" className="font-body text-sm underline mt-4 inline-block">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-white lowercase tracking-wide"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-xl md:text-2xl text-white/70 mt-4 lowercase tracking-wide"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12 px-6 md:px-12 border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-[10px] tracking-widest uppercase text-muted-foreground border border-border px-4 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Video - Only for Melanin Migration */}
          {slug === "melanin-migration" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] overflow-hidden rounded-lg"
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                autoPlay={false}
                muted={true}
                loop={true}
                preload="metadata"
              >
                <source src="/videos/Melanin Migration .mov" type="video/mp4" />
                <source src="/videos/Melanin Migration .mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              {/* Visual indicator for auto-play status */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                <p className="text-white text-xs font-mono">
                  {isVideoInView ? "▶ PLAYING" : "⏸ PAUSED"}
                </p>
              </div>
            </motion.div>
          )}

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl lowercase tracking-wide text-foreground mb-6">
              Research Overview
            </h2>
            <p className="font-body text-sm leading-relaxed text-muted-foreground font-light">
              {project.overview}
            </p>
          </motion.div>

          {/* Research Focus */}
          {project.researchFocus.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl lowercase tracking-wide text-foreground mb-6">
                Research Focus
              </h2>
              <ul className="space-y-3">
                {project.researchFocus.map((item, i) => (
                  <li key={i} className="font-body text-sm leading-relaxed text-muted-foreground font-light flex gap-3">
                    <span className="text-foreground mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Approach */}
          {project.approach && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl lowercase tracking-wide text-foreground mb-6">
                Research Approach
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground font-light">
                {project.approach}
              </p>
            </motion.div>
          )}

          {/* Future */}
          {project.futureDirection && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl lowercase tracking-wide text-foreground mb-6">
                Future Direction
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground font-light">
                {project.futureDirection}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            {previousProject && (
              <Link
                to={`/work/${previousProject}`}
                className="inline-flex items-center gap-2 font-body text-sm tracking-widest lowercase text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1} />
                Previous
              </Link>
            )}
            <div className="flex-1" />
            {nextProject && (
              <Link
                to={`/work/${nextProject}`}
                className="inline-flex items-center gap-2 font-body text-sm tracking-widest lowercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Next
                <ArrowLeft className="w-4 h-4 rotate-180" strokeWidth={1} />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="px-6 md:px-12 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest lowercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1} />
            Back to Work
          </Link>
        </div>
      </div>
    </div>
  );
}