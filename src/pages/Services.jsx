import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";

const services = [
  {
    title: "Creative Direction",
    description: "Strategic vision and artistic leadership for projects across stage, screen, and digital platforms. From concept to execution, shaping cohesive and impactful creative outcomes.",
    image: "/photos/Photo 28-09-2018, 16 58 35.jpg",
  },
  {
    title: "Choreography",
    description: "Original choreography and movement direction for performances, events, and productions. Creating compelling work through storytelling, musicality, and physical language.",
    image: "/photos/Photo 14-10-2020, 16 08 01.jpg",
  },
  {
    title: "External Advisory & Consultancy",
    description: "External advisory support for higher education and creative organisations, including programme validation, curriculum development, employability strategy, and quality enhancement.",
    image: "/photos/Photo 08-12-2025, 12 02 27 (5).jpg",
  },
  {
    title: "Mentoring & Coaching",
    description: "One-to-one mentoring and career coaching for artists and creative practitioners, offering structured guidance, reflection, and practical tools to strengthen professional identity and sustain long-term practice.",
    image: "/photos/Photo 14-10-2020, 16 18 00.jpg",
  },
  {
    title: "The Creative Lab",
    description: "Workshops, career clinics, and professional development sessions supporting emerging and mid-career artists with industry transition, mindset, and sustainable career strategy.",
    image: "/photos/the-creative-lab.jpeg",
  },
];

export default function Services() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="text-center mb-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-7xl tracking-wide lowercase text-foreground"
        >
          Services
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {services.map((service, i) => (
            <div key={service.title}>
              {service.title === "The Creative Lab" ? (
                <Link to="/creative-lab">
                  <ServiceCard service={service} index={i} />
                </Link>
              ) : (
                <ServiceCard service={service} index={i} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}