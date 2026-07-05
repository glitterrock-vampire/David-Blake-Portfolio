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
    cta: "learn more",
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
    cta: "explore",
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
    cta: "start mentoring",
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
    cta: "explore",
    link: "/creative-lab",
    image: "/photos/the-creative-lab.jpeg",
    duration: "2 hours"
  }
];

export default function BeyondPerformance() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-sm tracking-[0.3em] text-sage-700 mb-6"
          >
            Programmes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl tracking-wide text-foreground mb-8 max-w-4xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Beyond Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl leading-relaxed text-foreground/75 font-normal max-w-3xl"
          >
            Programmes designed to help people recognise their value, navigate transition, and lead with purpose.
          </motion.p>
        </motion.div>
      </div>

      {/* Programmes Section — Stacked layout: image on top, content below */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programmes.map((programme, index) => (
            <motion.div
              key={programme.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group overflow-hidden border border-foreground/10 bg-white/55 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage-500/50 hover:shadow-xl"
            >
              <Link to={programme.link} className="flex flex-col h-full">
                {/* Image – stacked on top */}
                <div className="relative w-full aspect-[16/9] md:aspect-[16/8] overflow-hidden bg-sage-100">
                  <img
                    src={programme.image}
                    alt={programme.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-body text-xs tracking-[0.24em] uppercase text-white/90">
                    {programme.duration}
                  </span>
                </div>

                {/* Content – below image */}
                <div className="flex flex-col flex-1 justify-between p-6 md:p-7">
                  <div>
                    <p className="mb-3 font-body text-xs uppercase tracking-[0.28em] text-sage-700">
                      {programme.focus}
                    </p>
                    <h2 className="font-heading text-2xl md:text-3xl leading-tight text-foreground">
                      {programme.title}
                    </h2>
                    <p className="mt-4 font-body text-base leading-relaxed text-foreground/75">
                      {programme.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-3 font-body text-sm tracking-widest lowercase text-foreground transition-all duration-300 group-hover:gap-4 group-hover:text-sage-800">
                    {programme.cta}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
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
          className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 text-white p-10 md:p-16"
        >
          <div className="absolute right-0 top-0 h-56 w-56 bg-sage/20 blur-3xl" />
          <div className="relative">
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
          </div>
        </motion.div>
      </div>

    </div>
  );
}
