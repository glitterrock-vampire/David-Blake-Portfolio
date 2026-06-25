import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const services = {
  choreography: {
    title: "Creative Direction & Choreography",
    description: "Movement, staging, and creative leadership for productions, campaigns, events, and screen work.",
    duration: "Custom"
  },
  "creative-direction": {
    title: "Education & Training",
    description: "Workshops, masterclasses, and learning experiences that build confidence, craft, and professional readiness.",
    duration: "Custom"
  },
  mentoring: {
    title: "Mentoring & Artist Development",
    description: "Focused support for artists navigating growth, transition, identity, and sustainable creative careers.",
    duration: "1 hour"
  },
  consultation: {
    title: "Consultancy & Advisory",
    description: "Strategic insight for creative and educational organisations shaping programmes, teams, and cultural impact.",
    duration: "1 hour"
  },
  academic: {
    title: "Speaking & Professional Development",
    description: "Keynotes, talks, workshops, and professional development around leadership, creativity, purpose, career transition, and growth.",
    duration: "Custom"
  },
  production: {
    title: "Community & Cultural Engagement",
    description: "Programmes and experiences that foster wellbeing, connection, confidence, and participation across diverse communities.",
    duration: "Custom"
  }
};

const enquiryTypes = [
  "Creative project",
  "Workshop or training",
  "Mentoring",
  "Speaking",
  "Consultancy",
  "Partnership",
];

const contactCards = [
  {
    title: "Projects",
    text: "Creative direction, choreography, movement direction, and performance-led work for stage, screen, and live contexts.",
  },
  {
    title: "People",
    text: "Mentoring, career transition support, training, and professional development for artists and creative teams.",
  },
  {
    title: "Organisations",
    text: "Insight, advisory support, programme development, workshops, and cultural engagement for institutions and communities.",
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState(searchParams.get("service") || "");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    date: "",
    time: "",
    message: ""
  });

  const service = services[selectedService];

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam !== selectedService) {
      setSelectedService(serviceParam || "");
    }
  }, [searchParams, selectedService]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact submitted:", { service: selectedService, ...formData });
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
      if (hour < 17) slots.push(`${hour}:30`);
    }
    return slots;
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* How We Can Work Together Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-background/70 mb-5 text-center">
            How We Can Work Together
          </p>
          <h2 className="font-heading text-3xl md:text-4xl leading-tight text-background mb-12 text-center max-w-3xl mx-auto">
            Through initiatives that develop people, strengthen organisations and create opportunity.
          </h2>

          {/* Image Banner */}
          <div className="grid grid-cols-3 gap-0 items-center">
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="relative"
            >
              <img
                src="/photos/dblake_speak-c5mDq9TB33h71iAz.jpg"
                alt="Speaking"
                className="w-full h-96 md:h-[28rem] object-cover object-top"
              />
              <div className="mt-6 text-center">
                <p className="font-heading text-2xl md:text-3xl text-background font-semibold mb-2">
                  SPEAKING
                </p>
                <p className="font-body text-base text-background/80 font-light">
                  Keynotes and Seminars.
                </p>
              </div>
            </motion.div>

            {/* Image 2 - Circular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative -mx-12 md:-mx-20 z-10"
            >
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/photos/blakeweb-tU4ZL193EBSH5bG9.webp"
                  alt="Small Group Sessions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <p className="font-heading text-xl md:text-2xl text-background font-semibold mb-2">
                  1:1 OR SMALL GROUP SESSIONS
                </p>
                <p className="font-body text-base text-background/80 font-light">
                  Building confidence, leadership and employability skills.
                </p>
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative"
            >
              <img
                src="/photos/blakepd-dJ03LT3VQ8W6WFLN.webp"
                alt="Community & Social Impact"
                className="w-full h-96 md:h-[28rem] object-cover object-top"
              />
              <div className="mt-6 text-center">
                <p className="font-heading text-2xl md:text-3xl text-background font-semibold mb-2">
                  COMMUNITY & SOCIAL IMPACT
                </p>
                <p className="font-body text-base text-background/80 font-light">
                  Creative programmes for schools, charities and youth services.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-background/70 mb-5">
            Contact
          </p>
          <h1 className="font-heading text-5xl md:text-7xl leading-tight tracking-wide text-background mb-6">
            Let's start a conversation
          </h1>
          <p className="font-body text-lg leading-relaxed text-background/80 font-light max-w-2xl mx-auto">
            Whether you're looking for speaking, workshops, partnerships, mentoring, or consultancy, I'd love to hear from you. Reach out and let's explore what's possible.
          </p>
        </motion.div>

        {/* Form with Image */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <label className="block font-body text-sm text-background mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder-background/50 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block font-body text-sm text-background mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder-background/50 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block font-body text-sm text-background mb-2">Area of interest</label>
              <select
                name="interest"
                value={formData.interest || service?.title || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value={service?.title || ""}>
                  {service?.title || "Select an area"}
                </option>
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-body text-sm text-background mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder-background/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Tell us about the project, people, challenge, timeline, or transformation you are exploring..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full font-body text-sm tracking-widest lowercase bg-background text-foreground px-8 py-4 hover:bg-cyan-400 hover:text-black transition-colors duration-300 font-semibold"
              >
                send message
              </button>
              <p className="font-body text-xs text-background/70 text-center mt-4">
                We will review your message and respond within 24-48 hours.
              </p>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <img
              src="/photos/blaked-e4Sm4mPhQCDJGUWM.png"
              alt="David Blake"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
            <div className="text-center space-y-4">
              <a
                href="mailto:hello@blakearts.com"
                className="font-body text-lg tracking-widest lowercase text-background hover:text-cyan-400 transition-colors block"
              >
                hello@blakearts.com
              </a>
              <a
                href="https://www.instagram.com/blakeartsuk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm tracking-widest uppercase text-background/80 hover:text-cyan-400 transition-colors"
              >
                Instagram
              </a>
              <div className="pt-4 border-t border-background/20 mt-4">
                <a
                  href="https://substack.com/@davidblakema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm tracking-widest uppercase text-background/80 hover:text-cyan-400 transition-colors block mb-3"
                >
                  Subscribe on Substack
                </a>
                <a
                  href="https://paypal.me/davidblake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm tracking-widest uppercase text-background/80 hover:text-cyan-400 transition-colors block"
                >
                  Support via PayPal
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
