import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Calendar, Clock, User, Mail, ArrowRight } from "lucide-react";

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
    <div className="pt-28 md:pt-36 pb-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-sage-800 mb-5">
              Contact
            </p>
            <h1 className="font-heading text-5xl md:text-7xl leading-tight tracking-wide text-foreground">
              {service ? service.title : "Start a conversation"}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="space-y-6"
          >
            <p className="font-body text-lg leading-relaxed text-muted-foreground font-light">
              {service
                ? service.description
                : "For creative projects, training, mentoring, consultancy, speaking, and partnerships, share what you are building or navigating. The first step is clarity."}
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-foreground/60">
              <span>Expertise</span>
              <span>/</span>
              <span>Leadership</span>
              <span>/</span>
              <span>Insight</span>
              <span>/</span>
              <span>Transformation</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 mb-16">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + index * 0.08, duration: 0.6 }}
              className="bg-background p-7 md:p-8"
            >
              <p className="font-body text-xs tracking-[0.28em] uppercase text-muted-foreground mb-8">
                0{index + 1}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                {card.title}
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground font-light">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="space-y-8"
          >
            <div className="border border-foreground/10 p-7 md:p-8">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
                Direct contact
              </p>
              <a
                href="mailto:hello@davidpblake.org"
                className="font-body text-lg tracking-widest lowercase text-foreground hover:text-sage transition-colors block break-all"
              >
                hello@davidpblake.org
              </a>
              <div className="flex flex-wrap gap-6 mt-8">
                <a
                  href="https://www.instagram.com/davidpblake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-sage transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/davidpblake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-sage transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-foreground text-background p-7 md:p-8">
              <p className="font-heading text-3xl leading-tight mb-5">
                Not sure what to book?
              </p>
              <p className="font-body text-sm leading-relaxed text-background/70 font-light mb-8">
                Start with the context. David can help shape the right format,
                whether it becomes a workshop, consultation, commission, or ongoing support.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-body text-sm tracking-widest lowercase border-b border-current pb-1"
              >
                view service areas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="border border-foreground/10 p-6 md:p-10 space-y-8 bg-background"
          >
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Enquiry form
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Tell us what you are imagining.
              </h2>
              {service?.duration && (
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-sm text-foreground mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-sage-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-sm text-foreground mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-sage-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-sm text-foreground mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-sage-400 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block font-body text-sm text-foreground mb-2">Area of interest</label>
                <select
                  name="interest"
                  value={formData.interest || service?.title || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-sage-400 transition-colors"
                >
                  <option value={service?.title || ""}>
                    {service?.title || "Select an area"}
                  </option>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {service && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-sage-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-sage-400 transition-colors"
                    >
                      <option value="">Select time</option>
                      {generateTimeSlots().map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="block font-body text-sm text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:border-sage-400 transition-colors resize-none"
                placeholder="Tell us about the project, people, challenge, timeline, or transformation you are exploring..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full font-body text-sm tracking-widest lowercase bg-black text-white px-8 py-4 hover:bg-sage transition-colors duration-200"
              >
                {service ? "request a conversation" : "send enquiry"}
              </button>
              <p className="font-body text-xs text-muted-foreground text-center mt-4">
                We will review your message and respond within 24-48 hours.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
