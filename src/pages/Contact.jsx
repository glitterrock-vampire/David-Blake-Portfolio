import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Calendar, Clock, User, Mail, ArrowRight } from "lucide-react";

const services = {
  choreography: {
    title: "Choreography Commission",
    description: "Original choreography and movement direction for performances, events, and productions. Creating compelling work through storytelling, musicality, and physical language.",
    duration: "Custom"
  },
  "creative-direction": {
    title: "Creative Direction",
    description: "Strategic vision and artistic leadership for projects across stage, screen, and digital platforms. From concept to execution, shaping cohesive and impactful creative outcomes.",
    duration: "Project-based"
  },
  mentoring: {
    title: "1:1 Mentoring Session",
    description: "Personalized mentoring and career coaching for artists and creative practitioners. Structured guidance, reflection, and practical tools to strengthen professional identity.",
    duration: "1 hour"
  },
  consultation: {
    title: "Virtual Consultation",
    description: "In-depth virtual consultation for artistic and strategic development. Perfect for organizations and individuals seeking expert guidance on creative projects.",
    duration: "1 hour"
  },
  academic: {
    title: "Academic Advisory",
    description: "External advisory support for higher education and creative organisations, including programme validation, curriculum development, and quality enhancement.",
    duration: "Custom"
  },
  production: {
    title: "Production Consultation",
    description: "Creative production and project management for small to large-scale artistic projects. From planning to execution and post-production support.",
    duration: "Custom"
  },
  "portfolio-review": {
    title: "Portfolio Review",
    description: "Professional portfolio review and feedback for artists and creative practitioners. Strengthen your presentation and showcase your work effectively.",
    duration: "1 hour"
  },
  "mentoring-star": {
    title: "Mentoring Star",
    description: "Monthly mentoring for creative & artistic development. Perfect for artists making career transitions or building a new creative practice. Includes 12 mentoring sessions, bespoke mentoring plan, and member discounts.",
    duration: "12 months"
  },
  "mentoring-superstar": {
    title: "Mentoring Superstar",
    description: "Intense mentoring for creative & artistic development. Ideal for developing a new creative practice. Includes 24 mentoring sessions, bespoke mentoring plan, and priority support.",
    duration: "12 months"
  },
  "creative-development": {
    title: "Creative Development Package",
    description: "3-session package for project development. Perfect for artists starting new creative work. Includes development sessions, portfolio review, strategic planning, and follow-up support.",
    duration: "3 sessions"
  }
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(searchParams.get('service') || '');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });

  const service = services[selectedService];

  // Update selected service when URL parameters change
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam !== selectedService) {
      setSelectedService(serviceParam || '');
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
    // Handle booking submission
    console.log("Booking submitted:", { service: selectedService, ...formData });
    // You could add email sending functionality here
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
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-sage-800 mb-4"
          >
            Schedule Your Service
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl tracking-wide lowercase text-foreground"
          >
            {service ? service.title : "Book a Service"}
          </motion.h1>
          {service && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-lg text-foreground/70 mt-6 max-w-2xl mx-auto"
            >
              {service.description}
            </motion.p>
          )}
        </div>

        {!selectedService ? (
          /* Service Selection */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center py-20"
          >
            <p className="font-body text-lg text-foreground/70 mb-8">
              Please select a service from the Services page to continue with booking.
            </p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-sage-900 text-white rounded-md hover:bg-sage-800 transition-colors duration-200"
            >
              View Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ) : (
          /* Booking Form */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="mb-12 text-center">
              <p className="font-body text-sm text-foreground/60">
                Check out our availability and book the date and time that works for you
              </p>
              {service.duration && (
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-foreground/60">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="font-heading text-xl tracking-wide lowercase text-foreground">Your Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-sage-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-sage-400 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-sage-400 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Scheduling */}
              <div className="space-y-6">
                <h3 className="font-heading text-xl tracking-wide lowercase text-foreground">Select Date & Time</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-sage-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-sage-400 transition-colors appearance-none"
                      >
                        <option value="">Select time</option>
                        {generateTimeSlots().map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block font-body text-sm text-foreground mb-2">Additional Notes (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-sage-400 transition-colors resize-none"
                  placeholder="Any specific requirements or questions about this service..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full font-body text-sm tracking-widest lowercase bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Request Booking
                </button>
                <p className="font-body text-xs text-black text-center mt-4">
                  We'll review your request and confirm availability within 24-48 hours
                </p>
              </div>
            </form>
          </motion.div>
        )}

        {/* Contact Info */}
        {!selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="space-y-4">
              <a
                href="mailto:hello@davidpblake.org"
                className="font-body text-lg tracking-widest lowercase text-sage hover:text-sage/80 transition-colors block"
              >
                hello@davidpblake.org
              </a>
              <div className="flex justify-center gap-8">
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
          </motion.div>
        )}
      </div>
    </div>
  );
}