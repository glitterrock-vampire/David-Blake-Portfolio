import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Coaching & Mentoring",
    description: "Personalised guidance for artists, leaders, and professionals navigating growth, transition, and sustainable success.",
    cta: "Learn More",
    link: "/contact?service=mentoring"
  },
  {
    title: "Speaking",
    description: "Keynote presentations and talks on leadership, creativity, purpose, career transition, and high-performance mindset.",
    cta: "Book David",
    link: "/contact?service=academic"
  },
  {
    title: "Workshops & Development",
    description: "Leadership, employability and personal development programmes for artists, elite athletes, young people and organisations.",
    cta: "Explore Programmes",
    link: "/beyond-performance"
  },
  {
    title: "Creative Direction & Advisory",
    description: "Strategic insight and creative leadership for productions, campaigns, organisations, and cultural projects.",
    cta: "Get in Touch",
    link: "/contact?service=consultation"
  }
];

const audiences = [
  {
    title: "Artists & Creative Professionals",
    description: "Supporting creative practitioners in career development, leadership, and sustainable practice."
  },
  {
    title: "Elite Athletes & High Performers",
    description: "Helping high performers in transition, identity, leadership and life beyond performance."
  },
  {
    title: "Young People & Emerging Leaders",
    description: "Building confidence, employability, and leadership capabilities for the next generation."
  },
  {
    title: "Organisations & Teams",
    description: "Strategic consultancy and development programmes for creative and educational organisations."
  }
];

export default function WorkWithDavid() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-sm tracking-[0.3em] text-muted-foreground mb-6"
          >
            Work With David
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl tracking-wide text-foreground mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Clear pathways for creative, personal, and organisational growth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground font-light"
          >
            Whether you're an artist navigating transition, an organisation building leadership capability, or a high performer redefining purpose, there's a pathway forward.
          </motion.p>
        </motion.div>
      </div>

      {/* Audience Section */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-foreground mb-4">
            Who I Work With
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background border border-foreground/10 p-8 hover:border-foreground/30 transition-all duration-300"
            >
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                {audience.title}
              </h3>
              <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-foreground mb-4">
            Services
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-background to-background/50 border border-foreground/10 p-10 hover:border-foreground/30 transition-all duration-300"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-body text-base text-muted-foreground font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="font-body text-sm tracking-widest lowercase inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all duration-300"
              >
                {service.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 border-t border-foreground/10"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Ready to start?
          </h2>
          <p className="font-body text-lg text-muted-foreground font-light mb-8">
            Let's have a conversation about what you're working toward.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body text-sm tracking-widest lowercase bg-foreground text-background px-10 py-4 hover:bg-sage hover:text-background transition-all duration-300"
          >
            start a conversation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
