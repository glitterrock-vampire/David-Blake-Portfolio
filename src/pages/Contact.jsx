import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You could add email sending functionality here
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen flex flex-col">
      <div className="flex-1 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-5xl md:text-7xl tracking-wide lowercase text-sage mb-8"
            >
              Let's Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-sm text-sage/70 font-light leading-relaxed"
            >
              For enquiries about creative direction, choreography, mentorship, workshops, or collaboration opportunities, please get in touch.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-sage/30 rounded-lg text-foreground placeholder-sage/50 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-sage/30 rounded-lg text-foreground placeholder-sage/50 focus:outline-none focus:border-sage transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-sage/30 rounded-lg text-foreground focus:outline-none focus:border-sage transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="creative-direction">Creative Direction</option>
                    <option value="choreography">Choreography</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="workshop">Workshop</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-sage/30 rounded-lg text-foreground placeholder-sage/50 focus:outline-none focus:border-sage transition-colors resize-none"
                    placeholder="Tell me about your project or enquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-body text-sm tracking-widest lowercase border border-sage px-8 py-3 text-sage hover:bg-sage hover:text-background transition-all duration-300"
                >
                  send message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl tracking-wide lowercase text-sage mb-4">Direct Contact</h2>
                <a
                  href="mailto:hello@davidpblake.org"
                  className="font-body text-lg md:text-xl tracking-widest lowercase text-sage hover:text-sage/80 transition-colors block mb-8"
                >
                  hello@davidpblake.org
                </a>
              </div>

              <div>
                <h2 className="font-heading text-2xl tracking-wide lowercase text-sage mb-4">Follow</h2>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/davidpblake"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-sage transition-colors block"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/davidpblake"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-sage transition-colors block"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl tracking-wide lowercase text-sage mb-4">Studio Locations</h2>
                <div className="space-y-2">
                  <p className="font-body text-sm text-muted-foreground">
                    London, UK
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}