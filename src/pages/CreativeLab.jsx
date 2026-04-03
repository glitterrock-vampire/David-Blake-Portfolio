import { motion } from "framer-motion";
import ServiceCard from "../components/services/ServiceCard";

const creativeLabServices = [
  {
    title: "Portfolio Development",
    description: "Personal branding and portfolio development for dancers and performing artists. Creating compelling digital presence that showcases your unique artistic voice and professional journey.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/233df2bb8_generated_158df6d1.png",
  },
  {
    title: "Audition Technique",
    description: "Master audition preparation and technique refinement across dance, musical theatre, and commercial performance. Build confidence and versatility for diverse casting opportunities.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/76527826c_generated_14b90782.png",
  },
  {
    title: "Career Strategy Sessions",
    description: "One-on-one guidance for long-term career planning. Navigate the performing arts industry with strategic thinking, goal setting, and actionable career development plans.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/3c7222529_generated_a3983d22.png",
  },
  {
    title: "Industry Networking",
    description: "Connect with industry professionals and build meaningful relationships. Learn networking strategies specific to the performing arts sector and expand your professional circle.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/a88d2e3bf_generated_62c23445.png",
  },
];

export default function CreativeLab() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      {/* Header */}
      <div className="text-center mb-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-7xl tracking-wide lowercase text-foreground"
        >
          Build a Career That Lasts
        </motion.h1>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="aspect-[16/9] overflow-hidden rounded-lg"
        >
          <img
            src="https://media.base44.com/images/public/69cb383c7ed443549328234d/a88d2e3bf_generated_62c23445.png"
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
          className="font-body text-lg leading-relaxed text-muted-foreground font-light text-center"
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
          className="font-heading text-3xl md:text-4xl tracking-wide lowercase text-foreground text-center mb-12"
        >
          What You'll Get
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Industry insights from an experienced performer and mentor",
            "Tools for building networks and career strategy",
            "Practical exercises and reflection prompts",
            "Case studies and real-world examples",
            "Live Q&A sessions",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0" />
              <p className="font-body text-base leading-relaxed text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {creativeLabServices.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>

      {/* Register Interest Form */}
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-8"
        >
          <h2 className="font-heading text-2xl tracking-wide lowercase text-foreground text-center mb-8">
            Register Your Interest
          </h2>
          <p className="font-body text-sm text-muted-foreground text-center mb-8">
            Fill out your details below to register interest and be notified of upcoming sessions. Spaces are limited to keep workshops focused and interactive.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block font-body text-sm text-foreground mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-white/50 focus:outline-none focus:border-foreground/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-white/50 focus:outline-none focus:border-foreground/50 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">Training level / career stage</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground focus:outline-none focus:border-foreground/50 transition-colors">
                <option value="">Select your stage</option>
                <option value="student">Student</option>
                <option value="emerging">Emerging</option>
                <option value="mid-career">Mid-career</option>
              </select>
            </div>
            <div>
              <label className="block font-body text-sm text-foreground mb-2">Interests / goals for the workshop (optional)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-white/50 focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                placeholder="Tell us what you hope to gain from the workshop..."
              />
            </div>
            <button
              type="submit"
              className="w-full font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              register interest
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
