import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const careerHighlights = [
    {
      title: "17 Years in Disney's The Lion King",
      description: "Principal performer and creative contributor to one of the world's most successful theatrical productions."
    },
    {
      title: "Former Director of Dance & Musical Theatre at Urdang",
      description: "Led programmes and developed emerging talent at City St George's, University of London."
    },
    {
      title: "Advisory Roles",
      description: "Strategic partnerships with BBC, Ernst & Young, and Camden Council on creative and educational initiatives."
    },
    {
      title: "Award-Winning Educator",
      description: "Recognised for excellence in teaching, artist development, and educational leadership."
    }
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-sm tracking-[0.3em] text-muted-foreground mb-4"
        >
          About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wide text-foreground"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          David Blake
        </motion.h1>
      </div>

      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl mx-auto mb-20 px-6"
      >
        <img
          src="/photos/WhatsApp Image 2026-05-31 at 01.57.22.jpeg"
          alt="David Blake - Professional portrait"
          className="w-full object-cover"
        />
      </motion.div>

      {/* Who I Am */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-foreground mb-8 lowercase">
            Who I Am
          </h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground font-light">
            David Blake is a creative director, educator, mentor, choreographer, and performer with over two decades of international experience across performance, leadership, higher education, and artist development.
          </p>
        </motion.div>
      </div>

      {/* Career Highlights */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-foreground mb-4 lowercase">
            Career Highlights
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-background to-background/50 border border-foreground/10 p-8"
            >
              <h3 className="font-heading text-lg md:text-xl text-foreground mb-4">
                {highlight.title}
              </h3>
              <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-foreground text-background p-10 md:p-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-background mb-8 lowercase">
            Philosophy
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 font-light leading-relaxed">
            David's work explores how the discipline, resilience and mindset developed in high-performance environments across the arts, sport, education and leadership can translate into sustainable success and lasting impact.
          </p>
          <p className="font-body text-base text-white/70 font-light leading-relaxed mt-6">
            This philosophy connects performers, athletes, and leaders through shared principles of excellence, adaptation, and purpose-driven growth.
          </p>
        </motion.div>
      </div>

      {/* Let's Connect */}
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-2xl md:text-3xl tracking-wide text-foreground mb-6 lowercase"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base leading-relaxed text-muted-foreground font-light mb-8"
            >
            David is available for speaking engagements, workshops, artist development programmes, consultancy, creative projects, and educational partnerships.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-block font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground hover:bg-sage hover:text-background transition-all duration-300"
            >
              get in touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
