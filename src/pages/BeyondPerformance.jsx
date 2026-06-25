import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";

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
    link: "/contact?service=mentoring",
    image: "/photos/Photo 14-10-2020, 16 18 00.jpg",
    duration: "Custom"
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
    link: "/contact?service=consultation",
    image: "/photos/Photo 08-12-2025, 12 02 27 (19).jpg",
    duration: "Custom"
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
    link: "/contact?service=mentoring",
    image: "/photos/Photo 28-09-2018, 16 58 35.jpg",
    duration: "1 hour"
  },
  {
    title: "Creative Lab Workshop",
    focus: "Interactive workshops and professional development.",
    description: "Interactive workshops and professional development sessions supporting emerging and mid-career artists with industry transition, mindset, and sustainable career strategy.",
    audiences: [
      "Emerging Artists",
      "Mid-Career Professionals",
      "Creative Practitioners"
    ],
    cta: "Explore",
    link: "/creative-lab",
    image: "/photos/the-creative-lab.jpeg",
    duration: "2 hours"
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
            className="font-body text-sm tracking-[0.3em] text-sage-600 mb-6"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {programmes.map((programme, index) => (
            <Link key={programme.title} to={programme.link}>
              <ServiceCard service={programme} index={index} />
            </Link>
          ))}
        </div>
      </div>

      {/* Elite Athletes Highlight */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-10 md:p-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Elite Athletes & High Performers
          </h2>
          <p className="font-body text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8 max-w-3xl">
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
                className="bg-gradient-to-br from-sage-50 to-sage-100 border border-sage-200 p-6 text-center hover:border-sage-400 transition-colors"
              >
                <span className="font-body text-sm text-sage-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
