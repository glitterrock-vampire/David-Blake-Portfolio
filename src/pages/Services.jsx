import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";

const services = [
  {
    title: "Choreography Commission",
    description: "Original choreography and movement direction for performances, events, and productions. Creating compelling work through storytelling, musicality, and physical language.",
    duration: "Custom",
    action: "Request Quote",
    image: "/photos/Photo 14-10-2020, 16 08 01.jpg",
    link: "/contact?service=choreography"
  },
  {
    title: "Creative Direction",
    description: "Strategic vision and artistic leadership for projects across stage, screen, and digital platforms. From concept to execution, shaping cohesive and impactful creative outcomes.",
    duration: "Project-based",
    action: "Request Quote",
    image: "/photos/Photo 28-09-2018, 16 58 35.jpg",
    link: "/contact?service=creative-direction"
  },
  {
    title: "1:1 Mentoring Session",
    description: "Personalized mentoring and career coaching for artists and creative practitioners. Structured guidance, reflection, and practical tools to strengthen professional identity.",
    duration: "1 hour",
    action: "Request Quote",
    image: "/photos/Photo 14-10-2020, 16 18 00.jpg",
    link: "/contact?service=mentoring"
  },
  {
    title: "Mentoring Package",
    description: "Comprehensive mentoring package including multiple sessions, portfolio review, and ongoing support for sustainable creative career development.",
    duration: "3 sessions",
    action: "Request Quote",
    image: "/photos/Photo 08-12-2025, 12 02 27 (5).jpg",
    link: "/contact?service=mentoring-package"
  },
  {
    title: "Creative Lab Workshop",
    description: "Interactive workshops and professional development sessions supporting emerging and mid-career artists with industry transition, mindset, and sustainable career strategy.",
    duration: "2 hours",
    action: "Request Quote",
    image: "/photos/the-creative-lab.jpeg",
    link: "/creative-lab"
  },
  {
    title: "Virtual Consultation",
    description: "In-depth virtual consultation for artistic and strategic development. Perfect for organizations and individuals seeking expert guidance on creative projects.",
    duration: "1 hour",
    action: "Request Quote",
    image: "/photos/Photo 08-12-2025, 12 02 27 (19).jpg",
    link: "/contact?service=consultation"
  },
  {
    title: "Academic Advisory",
    description: "External advisory support for higher education and creative organisations, including programme validation, curriculum development, and quality enhancement.",
    duration: "Custom",
    action: "Request Quote",
    image: "/photos/Photo 08-12-2025, 12 02 27 (12).jpg",
    link: "/contact?service=academic"
  },
  {
    title: "Production Consultation",
    description: "Creative production and project management for small to large-scale artistic projects. From planning to execution and post-production support.",
    duration: "Custom",
    action: "Request Quote",
    image: "/photos/Photo 08-12-2025, 12 02 27 (2).jpg",
    link: "/contact?service=production"
  },
  {
    title: "Portfolio Review",
    description: "Professional portfolio review and feedback for artists and creative practitioners. Strengthen your presentation and showcase your work effectively.",
    duration: "1 hour",
    action: "Request Quote",
    image: "/photos/Photo 15-02-2013, 13 52 13.jpg",
    link: "/contact?service=portfolio-review"
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