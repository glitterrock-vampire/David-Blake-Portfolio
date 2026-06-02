import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "melanin-migration",
    title: "Melanin Migration",
    subtitle: "Brothers in Arms",
    tags: ["Performance", "Identity", "Brotherhood", "Movement"],
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/b5b97b634_generated_da364573.png",
    blurb: "Brothers in Arms follows six Black male dancers as they navigate identity, brotherhood, and survival in a shifting world—finding strength in unity, movement, and shared purpose.",
  },
  {
    slug: "drawing-with-light",
    title: "Drawing With Light",
    subtitle: "Immersive Performance",
    tags: ["Technology", "Site-Specific", "Community", "Immersive"],
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/9a2867c0b_generated_ae68bcb6.png",
  },
  {
    slug: "embodied-code",
    title: "Embodied Code",
    subtitle: "Digital Research",
    tags: ["Motion Capture", "Digital", "Cross-Disciplinary", "Research"],
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/1daf94633_generated_377ba96e.png",
  },
];

export default function Work() {
  const navigate = useNavigate();

  const handleWorkClick = () => {
    navigate('/work/melanin-migration');
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 bg-black text-white">
      {/* Header */}
      <div className="text-center mb-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-7xl tracking-wide lowercase text-white mb-6 cursor-pointer"
          onClick={handleWorkClick}
        >
          Selected Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm text-white/70 font-light max-w-xl mx-auto"
        >
          Explore my portfolio of creative projects, choreography, and performance work across stage, screen, and digital platforms.
        </motion.p>
      </div>

      {/* Projects Grid — Models1 style alternating large images */}
      <div className="space-y-1 px-1">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to={`/work/${project.slug}`} className="group block relative overflow-hidden">
              <div className={`${i === 0 ? 'aspect-[16/9]' : 'aspect-[16/9] md:aspect-[21/9]'} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-heading text-3xl md:text-5xl text-white lowercase tracking-wide">
                  {project.title}
                </h2>
                <p className="font-body text-xs tracking-widest uppercase text-white/60 mt-2">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}