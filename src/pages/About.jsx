import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-4"
        >
          About David Blake
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
          src="/photos/david-blake-portrait.jpg"
          alt="David Blake - Professional portrait"
          className="w-full object-cover"
        />
      </motion.div>

      {/* Bio */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-base leading-relaxed text-muted-foreground font-light"
        >
          David Blake is a creative director, educator, mentor, choreographer, and performer with over two decades of international experience across performance, leadership, higher education, and artist development.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-base leading-relaxed text-muted-foreground font-light mt-6"
        >
          Widely recognised for his 17-year career with Disney's The Lion King and as a former Principal Dancer with the National Dance Theatre Company of Jamaica (NDTC), David's work spans stage, screen, education, and community engagement. His recent creative credits include Wicked: For Good, BBC productions, EE, and Ernst & Young.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-base leading-relaxed text-muted-foreground font-light mt-6"
        >
          As the former Director of Dance & Musical Theatre at Urdang, City St George's University of London, David has led programmes, developed emerging talent, and supported artists and organisations in navigating growth, change, and opportunity.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-body text-base leading-relaxed text-muted-foreground font-light mt-6"
        >
          Through Blake Arts, he creates training programmes, mentorship opportunities, leadership initiatives, and creative projects that support artists, educators, organisations, and communities.
        </motion.p>
      </div>

      {/* Professional Practice */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl md:text-3xl tracking-wide text-foreground mb-8 lowercase"
        >
          Professional Practice
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <li className="font-body text-base leading-relaxed text-muted-foreground font-light flex items-start gap-3">
            <span className="text-foreground">•</span>
            <span>Creative Direction & Choreography</span>
          </li>
          <li className="font-body text-base leading-relaxed text-muted-foreground font-light flex items-start gap-3">
            <span className="text-foreground">•</span>
            <span>Education & Leadership</span>
          </li>
          <li className="font-body text-base leading-relaxed text-muted-foreground font-light flex items-start gap-3">
            <span className="text-foreground">•</span>
            <span>Mentoring & Artist Development</span>
          </li>
          <li className="font-body text-base leading-relaxed text-muted-foreground font-light flex items-start gap-3">
            <span className="text-foreground">•</span>
            <span>Performance</span>
          </li>
          <li className="font-body text-base leading-relaxed text-muted-foreground font-light flex items-start gap-3">
            <span className="text-foreground">•</span>
            <span>Speaking & Consultancy</span>
          </li>
        </motion.ul>
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