import { motion } from "framer-motion";

const highlights = [
  {
    title: "17 Years in Disney's The Lion King",
    description: "Principal performer and creative contributor to one of the world's most successful theatrical productions.",
    category: "Performance"
  },
  {
    title: "Former Director of Dance & Musical Theatre at Urdang",
    description: "Led programmes and developed emerging talent at City St George's, University of London.",
    category: "Leadership"
  },
  {
    title: "Advisory Roles",
    description: "Strategic partnerships with BBC, Ernst & Young, and Camden Council on creative and educational initiatives.",
    category: "Advisory"
  },
  {
    title: "Award-Winning Educator",
    description: "Recognised for excellence in teaching, artist development, and educational leadership.",
    category: "Education"
  }
];

const organisations = [
  {
    name: "International Association of Blacks in Dance",
    mark: "IABD",
    logo: null,
    url: "https://www.iabdassociation.org/"
  },
  {
    name: "Royal Academy of Dance",
    logo: "/logos/royal-academy-of-dance.png",
    url: "https://www.royalacademyofdance.org/"
  },
  {
    name: "Central School of Ballet",
    logo: "/logos/central-school-of-ballet.png",
    url: "https://www.centralschoolofballet.co.uk/"
  }
];

export default function Impact() {
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
            Impact & Recognition
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl tracking-wide text-foreground mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Credibility, Influence, and Cultural Capital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground font-light"
          >
            A track record of leadership, performance, and educational impact across stage, screen, and community engagement.
          </motion.p>
        </motion.div>
      </div>

      {/* Career Highlights */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-foreground mb-4">
            Career Highlights
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-background to-background/50 border border-foreground/10 p-8 hover:border-foreground/30 transition-all duration-300"
            >
              <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
                {highlight.category}
              </span>
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                {highlight.title}
              </h3>
              <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trusted Organisations */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-foreground mb-4">
            Trusted Organisations
          </h2>
          <p className="font-body text-base text-muted-foreground font-light max-w-2xl">
            Collaborating with leading institutions across dance, education, and the arts.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organisations.map((org, index) => (
            <motion.a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background border border-foreground/10 p-8 min-h-56 flex items-center justify-center hover:border-foreground/30 transition-all duration-300 group"
            >
              <div className="text-center flex flex-col items-center gap-6">
                {org.logo ? (
                  <img
                    src={org.logo}
                    alt={`${org.name} logo`}
                    className="max-h-20 max-w-44 object-contain grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                ) : (
                  <div className="h-20 w-28 border border-foreground/20 flex items-center justify-center">
                    <span className="font-heading text-2xl tracking-[0.25em] text-foreground/80">
                      {org.mark}
                    </span>
                  </div>
                )}
                <p className="font-body text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {org.name}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

    </div>
  );
}
