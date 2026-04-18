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
    title: "Mentoring Packages",
    description: "Comprehensive mentoring packages including multiple sessions, bespoke development plans, and ongoing support. Choose from Mentoring Star or Mentoring Superstar packages below.",
    duration: "See packages",
    action: "View Packages",
    image: "/photos/Photo 08-12-2025, 12 02 27 (5).jpg",
    link: "#payment-plans"
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

      {/* Payment Plans Section */}
      <div id="payment-plans" className="mt-32 mb-20">
        <div className="text-center mb-16 px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-sage-800 mb-4"
          >
            Payment Plans & Packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl tracking-wide text-foreground"
          >
            Membership Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-foreground/70 mt-6 max-w-3xl mx-auto"
          >
            Become a member to receive discounted services, exclusive mentoring, and bespoke development plans tailored to your artistic journey.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mentoring Star */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="border border-border rounded-xl p-8 hover:border-sage-400 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              <div className="mb-8">
                <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3">Mentoring Star</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-body text-5xl font-bold text-foreground">$120</span>
                  <span className="font-body text-lg text-foreground/60">/month</span>
                </div>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">Monthly mentoring for creative & artistic development</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center font-body text-sm font-semibold">12</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Mentoring Sessions</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Bespoke mentoring plan</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Career guidance between sessions</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Member discounts on one-off bookings</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-6 mb-6">
                <div className="space-y-2">
                  <p className="font-body text-sm text-sage-600 font-semibold">Total savings: $1,220</p>
                  <p className="font-body text-xs text-foreground/50">Full package value: $2,660</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Link
                  to="/contact?service=mentoring-star"
                  className="w-full block text-center font-body text-sm tracking-widest bg-black text-white px-6 py-4 rounded-md hover:bg-white hover:text-black border border-black transition-colors duration-200"
                >
                  get started
                </Link>
              </div>
            </motion.div>

            {/* Mentoring Superstar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border-2 border-sage-400 rounded-xl p-8 bg-sage-50 relative overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Best Value
              </div>
              <div className="mb-8">
                <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3">Mentoring Superstar</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-body text-5xl font-bold text-foreground">$200</span>
                  <span className="font-body text-lg text-foreground/60">/month</span>
                </div>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">Intense mentoring for creative & artistic development</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-body text-sm font-semibold">24</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Mentoring Sessions</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Bespoke mentoring plan</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Priority mentoring support</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Member discounts on one-off bookings</span>
                </div>
              </div>
              
              <div className="border-t border-sage-300 pt-6 mb-6">
                <div className="space-y-2">
                  <p className="font-body text-sm text-sage-600 font-semibold">Total savings: $1,820</p>
                  <p className="font-body text-xs text-foreground/50">Full package value: $4,220</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Link
                  to="/contact?service=mentoring-superstar"
                  className="w-full block text-center font-body text-sm tracking-widest bg-black text-white px-6 py-4 rounded-md hover:bg-white hover:text-black border border-black transition-colors duration-200"
                >
                  get started
                </Link>
              </div>
            </motion.div>

            {/* Creative Development Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="border border-border rounded-xl p-8 hover:border-sage-400 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              <div className="mb-8">
                <h3 className="font-heading text-2xl tracking-wide text-foreground mb-3">Creative Development</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-body text-5xl font-bold text-foreground">$400</span>
                  <span className="font-body text-lg text-foreground/60">/package</span>
                </div>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">3-session package for project development</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center font-body text-sm font-semibold">3</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Development Sessions</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Project portfolio review</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Strategic planning session</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center font-body text-sm font-semibold">1</span>
                  <span className="font-body text-sm text-foreground leading-relaxed">Follow-up support</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-6 mb-6">
                <div className="space-y-2">
                  <p className="font-body text-sm text-sage-600 font-semibold">Perfect for: New projects</p>
                  <p className="font-body text-xs text-foreground/50">Ideal for artists starting new creative work</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Link
                  to="/contact?service=creative-development"
                  className="w-full block text-center font-body text-sm tracking-widest bg-black text-white px-6 py-4 rounded-md hover:bg-white hover:text-black border border-black transition-colors duration-200"
                >
                  get started
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}