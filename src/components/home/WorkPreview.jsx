import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "melanin-migration",
    title: "Melanin Migration",
    tags: ["Performance", "Identity", "Brotherhood", "Movement"],
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/b5b97b634_generated_da364573.png",
  },
  {
    slug: "drawing-with-light",
    title: "Drawing With Light",
    tags: ["Technology", "Site-Specific", "Community", "Immersive"],
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/9a2867c0b_generated_ae68bcb6.png",
  },
  {
    slug: "embodied-code",
    title: "Embodied Code",
    tags: ["Motion Capture", "Digital", "Cross-Disciplinary", "Research"],
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/1daf94633_generated_377ba96e.png",
  },
];

export default function WorkPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          <Link to={`/work/${project.slug}`} className="group block relative overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-sm px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-2xl text-white lowercase tracking-wide">
                {project.title}
              </h3>
            </div>
            {/* Name always visible below */}
            <div className="py-4 text-center">
              <p className="font-body text-sm tracking-widest text-muted-foreground lowercase">
                {project.title}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}