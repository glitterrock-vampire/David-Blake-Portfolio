import { motion } from "framer-motion";
import ServiceCard from "../components/services/ServiceCard";

// Container animation for stagger effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const creativeLabServices = [
  {
    title: "Portfolio Development",
    description: "Personal branding and portfolio development for dancers and performing artists. Creating compelling digital presence that showcases your unique artistic voice and professional journey.",
    image: "/photos/Photo 08-12-2025, 12 02 27 (5).jpg",
  },
  {
    title: "Audition Technique",
    description: "Master audition preparation and technique refinement across dance, musical theatre, and commercial performance. Build confidence and versatility for diverse casting opportunities.",
    image: "/photos/Photo 08-12-2025, 12 02 27 (12).jpg",
  },
  {
    title: "Career Strategy Sessions",
    description: "One-on-one guidance for long-term career planning. Navigate the performing arts industry with strategic thinking, goal setting, and actionable career development plans.",
    image: "/photos/Photo 08-12-2025, 12 02 27 (1).jpg",
  },
  {
    title: "Industry Networking",
    description: "Connect with industry professionals and build meaningful relationships. Learn networking strategies specific to the performing arts sector and expand your professional circle.",
    image: "/photos/Photo 08-12-2025, 12 02 27 (2).jpg",
  },
];

export default function CreativeLab() {
  return (
    <div className="relative pt-28 md:pt-36 pb-24 bg-black text-white">
      <div className="relative z-10">
      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="aspect-[16/9] overflow-hidden rounded-lg"
        >
          <img
            src="/photos/the-creative-lab.jpeg"
            alt="Creative Lab Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </motion.div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg leading-relaxed text-white/70 font-light text-center"
        >
          The Creative Lab is a space for dancers and performing artists to explore professional growth, mindset, and sustainable career development. Sessions combine real-world insight, interactive exercises, and guidance from an experienced industry practitioner with a background across performance, education, and leadership.
        </motion.p>
      </div>

      {/* What You'll Get Section */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-3xl md:text-4xl tracking-wide lowercase text-white text-center mb-12"
        >
          What You'll Get
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            "Industry insights from an experienced performer and mentor",
            "Tools for building networks and career strategy",
            "Practical exercises and reflection prompts",
            "Case studies and real-world examples",
            "Live Q&A sessions",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
              <p className="font-body text-base leading-relaxed text-white/70">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-1"
        >
          {creativeLabServices.map((service, i) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard service={service} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Register Interest Form */}
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
        >
          <h2 className="font-heading text-2xl tracking-wide lowercase text-white text-center mb-8">
            Register Your Interest
          </h2>
          <p className="font-body text-sm text-white/70 text-center mb-8">
            Fill out your details below to register interest and be notified of upcoming sessions. Spaces are limited to keep workshops focused and interactive.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block font-body text-sm text-white mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-sage/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-sage/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-white mb-2">Training level / career stage</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50 transition-colors">
                <option value="">Select your stage</option>
                <option value="student">Student</option>
                <option value="emerging">Emerging</option>
                <option value="mid-career">Mid-career</option>
              </select>
            </div>
            <div>
              <label className="block font-body text-sm text-white mb-2">Interests / goals for workshop (optional)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
                placeholder="Tell us what you hope to gain from the workshop..."
              />
            </div>
            <button
              type="submit"
              className="w-full font-body text-sm tracking-widest lowercase border border-white px-8 py-3 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              register interest
            </button>
          </form>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
