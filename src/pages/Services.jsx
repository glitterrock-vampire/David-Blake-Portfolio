import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";

const services = [
  {
    title: "Creative Direction & Choreography",
    description: "Creating meaningful movement experiences that connect storytelling, performance, and audience engagement.",
    duration: "Custom",
    action: "Request Quote",
    image: "/photos/Photo 14-10-2020, 16 08 01.jpg",
    link: "/contact?service=choreography"
  },
  {
    title: "Education & Training",
    description: "Delivering dance training, workshops, masterclasses, and professional development that build technical excellence, artistic confidence, and career readiness.",
    duration: "Custom",
    action: "Request Quote",
    image: "/photos/Photo 28-09-2018, 16 58 35.jpg",
    link: "/contact?service=creative-direction"
  },
  {
    title: "Mentoring & Artist Development",
    description: "Helping creative professionals navigate transition, unlock potential, and build sustainable careers.",
    duration: "1 hour",
    action: "Request Quote",
    image: "/photos/Photo 14-10-2020, 16 18 00.jpg",
    link: "/contact?service=mentoring"
  },
  {
    title: "Consultancy & Advisory",
    description: "Bringing insight, experience, and strategic thinking to educational and creative organisations.",
    duration: "1 hour",
    action: "Request Quote",
    image: "/photos/Photo 08-12-2025, 12 02 27 (19).jpg",
    link: "/contact?service=consultation"
  },
  {
    title: "Speaking & Professional Development",
    description: "Delivering keynote presentations, talks, workshops, and professional development sessions on leadership, creativity, purpose, career transition, and personal growth.",
    duration: "Custom",
    action: "Request Quote",
    image: "/photos/Photo 08-12-2025, 12 02 27 (12).jpg",
    link: "/contact?service=academic"
  },
  {
    title: "Community & Cultural Engagement",
    description: "Creating programmes and experiences that foster wellbeing, connection, confidence, and active participation across diverse communities.",
    duration: "Custom",
    action: "Request Quote",
    image: "/photos/Photo 08-12-2025, 12 02 27 (2).jpg",
    link: "/contact?service=production"
  },
  {
    title: "Creative Lab Workshop",
    description: "Interactive workshops and professional development sessions supporting emerging and mid-career artists with industry transition, mindset, and sustainable career strategy.",
    duration: "2 hours",
    action: "Request Quote",
    image: "/photos/the-creative-lab.jpeg",
    link: "/creative-lab"
  }
];

export default function Services() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="text-center mb-20 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-sage-800 mb-4"
        >
          Professional Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl tracking-wide lowercase text-foreground"
        >
          Book Services
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <div key={service.title}>
              {service.title === "Creative Lab Workshop" ? (
                <Link to="/creative-lab">
                  <ServiceCard service={service} index={i} />
                </Link>
              ) : service.link.startsWith("#") ? (
                <a href={service.link}>
                  <ServiceCard service={service} index={i} />
                </a>
              ) : (
                <Link to={service.link}>
                  <ServiceCard service={service} index={i} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-20 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-body text-sm text-foreground/60"
        >
          Click on any service to book or request more information.
        </motion.p>
      </div>
    </div>
  );
}