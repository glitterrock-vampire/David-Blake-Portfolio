import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const programmes = [
  {
    title: "Beyond Performance",
    focus: "Transferable skills, identity, growth, career transition, employability.",
    description: "Helping people recognise and apply the value of the skills, strengths, and experiences they already possess toward leadership, employability, and new opportunities.",
    audiences: [
      "Artists & Creative Professionals",
      "Elite Athletes & High Performers",
      "Young People & Emerging Leaders",
      "Leaders & Organisations"
    ],
    cta: "Learn More",
    link: "/contact?service=mentoring"
  },
  {
    title: "Leadership Lab",
    focus: "Leadership development for professionals and organisations.",
    description: "Leadership development through coaching, workshops, masterclasses, and strategic conversations.",
    audiences: [
      "Creative Leaders",
      "Organisational Teams",
      "Emerging Managers"
    ],
    cta: "Explore",
    link: "/contact?service=consultation"
  },
  {
    title: "Mentorship & Coaching",
    focus: "Personalised support, guidance, accountability, and growth.",
    description: "One-to-one and small group mentoring focused on individual goals, challenges, and development pathways.",
    audiences: [
      "Individual Artists",
      "High Performers",
      "Professionals in Transition"
    ],
    cta: "Start Mentoring",
    link: "/contact?service=mentoring"
  }
];

export default function BeyondPerformance() {
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
            Programmes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl tracking-wide text-foreground mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Beyond Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground font-light"
          >
            Programmes designed to help people recognise their value, navigate transition, and lead with purpose.
          </motion.p>
        </motion.div>
      </div>

      {/* Programmes Section */}
      <div className="max-w-6xl mx-auto px-6">
        {programmes.map((programme, index) => (
          <motion.div
            key={programme.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="mb-16 last:mb-0"
          >
            <div className="bg-gradient-to-br from-background to-background/50 border border-foreground/10 p-10 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                    {programme.title}
                  </h2>
                  <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-4">
                    {programme.focus}
                  </p>
                </div>
              </div>
              
              <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-3xl">
                {programme.description}
              </p>

              <div className="mb-8">
                <h3 className="font-heading text-lg text-foreground mb-4">For</h3>
                <div className="flex flex-wrap gap-3">
                  {programme.audiences.map((audience) => (
                    <span
                      key={audience}
                      className="font-body text-sm text-muted-foreground bg-foreground/5 px-4 py-2"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={programme.link}
                className="inline-block font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {programme.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Elite Athletes Highlight */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-foreground text-background p-10 md:p-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-background mb-6">
            Elite Athletes & High Performers
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8 max-w-3xl">
            Supporting high performers in transition, identity, leadership and life beyond performance. Drawing on deep experience in high-performance environments, this work helps athletes translate the discipline, resilience, and mindset developed in sport into sustainable success and lasting impact.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body text-sm tracking-widest lowercase bg-white text-black px-10 py-4 hover:bg-sage hover:text-background transition-all duration-300"
          >
            start a conversation
          </Link>
        </motion.div>
      </div>

      {/* Community Impact Section */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Community & Social Impact
          </h2>
          <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-3xl">
            Supporting schools, local authorities, charities and youth services through creative learning, employability and personal development.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Schools", "Local Authorities", "Charities", "Youth Services", "NEET Programmes", "Youth Offending Teams"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background border border-foreground/10 p-6 text-center"
              >
                <span className="font-body text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
