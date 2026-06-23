import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import WorkPreview from "../components/home/WorkPreview";
import LoadingScreen from "../components/LoadingScreen";
import TransferableSkillsSection from "../components/home/TransferableSkillsSection";

const trustedBy = [
  {
    name: "Ernst & Young",
    logo: "/logos/ey.svg",
  },
  {
    name: "University of Greenwich",
    logo: "/logos/university-of-greenwich.png",
  },
  {
    name: "BBC",
    logo: "/logos/bbc.svg",
  },
  {
    name: "Disney Theatrical Productions",
    logo: "/logos/disney-theatrical.svg",
  },
  {
    name: "Black British Theatre Awards",
    logo: "/logos/black-british-theatre-awards.png",
  },
  {
    name: "Danceworks London",
    logo: "/logos/danceworks-london.png",
  },
  {
    name: "EE",
    logo: "/logos/ee.svg",
  },
  {
    name: "Urdang City St George's, University of London",
    logo: "/logos/city-st-georges.png",
  },
  {
    name: "Bayes Business School",
    logo: "/logos/bayes-business-school.png",
  },
];

const trustedByTrack = [...trustedBy, ...trustedBy];

const serviceAreas = [
  {
    title: "Creative Direction & Choreography",
    description: "Movement, staging, and creative leadership for productions, campaigns, events, and screen work.",
    link: "/work",
  },
  {
    title: "Education & Training",
    description: "Workshops, masterclasses, and learning experiences that build confidence, craft, and professional readiness.",
    link: "/work",
  },
  {
    title: "Mentoring & Artist Development",
    description: "Focused support for artists navigating growth, transition, identity, and sustainable creative careers.",
    link: "/work",
  },
  {
    title: "Consultancy & Advisory",
    description: "Strategic insight for creative and educational organisations shaping programmes, teams, and cultural impact.",
    link: "/work",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <img
          src="/photos/Photo%2014-10-2020,%2016%2008%2001.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <div className="relative z-10">
        <HeroSection />

        <section className="py-16 md:py-24 border-y border-foreground/10 bg-gradient-to-b from-background to-background/95 overflow-hidden">
          <div className="mb-12 px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto text-center"
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Trusted by
              </p>
              <h2 className="font-heading text-3xl md:text-5xl leading-tight text-foreground max-w-4xl mx-auto">
                Leading organisations across stage, screen, education, and cultural leadership
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
            <div className="flex w-max animate-logo-marquee py-8">
              {trustedByTrack.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="mx-10 md:mx-16 flex h-24 min-w-[180px] items-center justify-center"
                  aria-hidden={index >= trustedBy.length}
                >
                  <img
                    src={partner.logo}
                    alt={index < trustedBy.length ? `${partner.name} logo` : ""}
                    className="max-h-12 max-w-[180px] w-auto object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="px-6 md:px-12 mb-16 pt-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl text-center tracking-wide lowercase text-foreground"
            >
              Selected Work
            </motion.h2>
          </div>

          <WorkPreview />

          <div className="text-center mt-16">
            <Link
              to="/work"
              className="font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
            >
              view full work
            </Link>
          </div>
        </section>

        <TransferableSkillsSection />

        <section id="work-with-david" className="py-24 md:py-32 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16 md:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
                  Work with David
                </p>
                <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight text-foreground mb-8">
                  Clear pathways for creative, personal, and organisational growth.
                </h2>
                <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground font-light max-w-3xl mx-auto">
                  Blake Arts brings together performance expertise, educational leadership,
                  mentoring, and strategic thinking. Choose the area that fits your next
                  move, or start with a conversation and shape the right approach together.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {serviceAreas.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: index * 0.1 }}
                  className="group relative bg-background border border-foreground/10 p-10 md:p-12 hover:border-foreground/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute top-8 right-8 font-body text-sm tracking-[0.28em] uppercase text-muted-foreground/50">
                    0{index + 1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-3xl md:text-4xl leading-tight mb-6 text-foreground group-hover:text-foreground/90 transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground font-light mb-10">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="font-body text-base tracking-widest lowercase inline-flex items-center gap-2 text-foreground group-hover:gap-3 transition-all duration-300"
                    >
                      explore this work
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/9] overflow-hidden rounded-lg mb-12"
            >
              <img
                src="/photos/the-creative-lab.jpeg"
                alt="Creative Lab Workshop"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl text-center tracking-wide lowercase text-foreground mb-12"
            >
              Creative Lab
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-sm text-muted-foreground font-light max-w-3xl mx-auto text-center leading-relaxed"
            >
              Workshops, career clinics, and professional development sessions supporting
              emerging and mid-career artists with industry transition, mindset, and
              sustainable career strategy.
            </motion.p>

            <div className="text-center mt-12">
              <Link
                to="/creative-lab"
                className="font-body text-sm tracking-widest lowercase border border-foreground px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
              >
                explore creative lab
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-40 bg-foreground text-background">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-cyan-400 mb-6">
                Contact
              </p>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
                Bring the idea, challenge, or transition.
              </h2>
              <p className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-10 text-white/90">
                We will find the shape of the work.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-white/70 font-light max-w-2xl mx-auto mb-12">
                Whether you're looking for creative direction, mentoring, consultancy, or a conversation about what's possible, let's connect.
              </p>
              
              <div className="flex flex-col items-center gap-8">
                <Link
                  to="/contact"
                  className="inline-block font-body text-sm tracking-widest lowercase bg-white text-black px-12 py-5 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold text-lg"
                >
                  start a conversation
                </Link>
                
                <div className="flex flex-col sm:flex-row gap-8 text-white/80">
                  <a href="mailto:hello@blakearts.com" className="font-body text-base hover:text-cyan-400 transition-colors font-medium">
                    hello@blakearts.com
                  </a>
                  <span className="hidden sm:inline text-white/30">•</span>
                  <span className="font-body text-base font-medium">
                    London, UK
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
