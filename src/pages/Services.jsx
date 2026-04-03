import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";

const services = [
  {
    title: "Creative Direction",
    description: "Strategic vision and artistic leadership for projects across stage, screen, and digital platforms. From concept to execution, shaping cohesive and impactful creative outcomes.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/233df2bb8_generated_158df6d1.png",
  },
  {
    title: "Choreography",
    description: "Original choreography and movement direction for performances, events, and productions. Creating compelling work through storytelling, musicality, and physical language.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/2eda9fd59_generated_60044d95.png",
  },
  {
    title: "External Advisory & Consultancy",
    description: "External advisory support for higher education and creative organisations, including programme validation, curriculum development, employability strategy, and quality enhancement.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/76527826c_generated_14b90782.png",
  },
  {
    title: "Mentoring & Coaching",
    description: "One-to-one mentoring and career coaching for artists and creative practitioners, offering structured guidance, reflection, and practical tools to strengthen professional identity and sustain long-term practice.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/3c7222529_generated_a3983d22.png",
  },
  {
    title: "The Creative Lab",
    description: "Workshops, career clinics, and professional development sessions supporting emerging and mid-career artists with industry transition, mindset, and sustainable career strategy.",
    image: "https://media.base44.com/images/public/69cb383c7ed443549328234d/a88d2e3bf_generated_62c23445.png",
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