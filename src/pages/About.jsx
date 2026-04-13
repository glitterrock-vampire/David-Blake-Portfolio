import { motion } from "framer-motion";

const sections = [
  {
    title: "Performance",
    content: "As a performer, he has appeared in award-winning productions, including playing Banzai in Disney's The Lion King. His career also includes work as a Principal Dancer with the National Dance Theatre Company of Jamaica (NDTC) and with professional dance companies in Southern California, alongside extensive credits across film, television, and theatre. Most recently, he appeared in Universal's Wicked for Good (2025)."
  },
  {
    title: "Creative Practice",
    content: "His creative practice includes choreography, movement direction, and large-scale collaborative projects integrating movement, technology, and community engagement. This work often explores themes of identity, connection, and resilience. Melanin Migration: Brothers in Arms was nominated by One Dance UK and presented at the ScreenMiami Festival at the Pérez Art Museum Miami."
  },
  {
    title: "Education & Leadership",
    content: "Alongside his creative output, he is an experienced educator and institutional leader. As the inaugural Director of Dance and Musical Theatre at Urdang City St George's, University of London, he helped shape curriculum and mentorship frameworks that align professional training with current industry standards and practice. His teaching has extended internationally across conservatoires, universities, and professional schools."
  },
  {
    title: "Education & Qualifications",
    content: "He holds a BA in Business Administration from California State University and an MA in Arts Administration and Cultural Policy, grounding his creative and educational work in organisational leadership, cultural strategy, and sustainable practice."
  },
  {
    title: "Awards & Funding",
    content: "His work has been recognised with the Best Teacher of Performing Arts honour from the Black British Theatre Awards, alongside funding from Arts Council England and the University of London Federation, acknowledging both creative and educational impact."
  },
  {
    title: "Blake Arts",
    content: "Through Blake Arts and the Blake Arts Dance Company, he supports emerging, mid-career, and transitioning artists through periods of growth and reinvention. This work includes mentorship, professional development, creative production, and strategic guidance grounded in real-world industry experience."
  },
  {
    title: "Public Engagement",
    content: "He delivers talks and presentations on Kingdom Economics through ICAN Community Church, exploring leadership, purpose, stewardship, and long-term thinking within creative and professional contexts."
  },
  {
    title: "How He Works",
    content: "At the core of his work is a people-centred, integrative approach grounded in the belief that meaningful creative work, strong professional lives, and thriving communities are built together."
  },
];

export default function About() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wide lowercase text-foreground"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          david blake
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
          src="/photos/Photo 08-12-2025, 12 02 27 (18).jpg"
          alt="David Blake - Professional portrait"
          className="w-full object-cover"
        />
      </motion.div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-base leading-relaxed text-muted-foreground font-light"
        >
          David Blake is an international creative director, choreographer, educator, and leadership practitioner, with a strong foundation in mentorship and professional development. His work spans stage, screen, education, and public space, shaped by sustained experience across performance, creation, and institutional leadership.
        </motion.p>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 space-y-16">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-foreground mb-6 lowercase">
              {section.title}
            </h2>
            <p className="font-body text-sm leading-relaxed text-muted-foreground font-light">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Training Note */}
      <div className="max-w-3xl mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border pt-10"
        >
          <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
            Beyond institutional settings, he delivers audition intensives and professional training programmes that prepare artists for employment in the West End and international markets. This work focuses on technical excellence, professional literacy, audition strategy, and the adaptability required to navigate careers across performing and commercial sectors.
          </p>
        </motion.div>
      </div>
    </div>
  );
}