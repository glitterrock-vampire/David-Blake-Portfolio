import { Link } from "react-router-dom";
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

const themes = [
  {
    title: "Creative Leadership",
    description: "Leading artistic vision and collaborative processes across stage, screen, and digital platforms."
  },
  {
    title: "Movement Direction",
    description: "Crafting meaningful movement that tells stories and connects with audiences."
  },
  {
    title: "Collaboration",
    description: "Working with artists, organisations, and communities to create shared impact."
  },
  {
    title: "Storytelling",
    description: "Using performance and creativity to explore identity, culture, and human experience."
  },
  {
    title: "Cultural Impact",
    description: "Creating work that resonates with communities and contributes to broader cultural conversations."
  }
];

export default function CreativeProjects() {
  return (
    <div className="pt-28 md:pt-36 pb-24 bg-black text-white">
      {/* Header */}
      <div className="text-center mb-20 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-6"
        >
          Creative Projects
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-7xl tracking-wide lowercase text-white mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Selected Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm text-white/70 font-light max-w-xl mx-auto"
        >
          Creative leadership, movement direction, collaboration, storytelling, and cultural impact across stage, screen, and digital research.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-1 px-1 mb-24">
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

      {/* Creative Philosophy Section */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-white mb-6">
            Creative Philosophy
          </h2>
          <p className="font-body text-lg text-white/70 font-light leading-relaxed max-w-3xl">
            Every project is an opportunity to explore how creativity can connect, challenge, and transform. This work spans performance, education, and community engagement with the aim of creating meaningful impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 hover:border-white/30 transition-all duration-300"
            >
              <h3 className="font-heading text-xl text-white mb-4">
                {theme.title}
              </h3>
              <p className="font-body text-base text-white/70 font-light leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
