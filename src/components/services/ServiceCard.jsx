import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="aspect-[1/1] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500" />
      
      {/* Always visible name */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="font-heading text-xl md:text-2xl text-white lowercase tracking-wide">
          {service.title}
        </h3>
      </div>

      {/* Hover booking info */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="font-body text-sm text-white/90 font-light leading-snug text-center mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Duration only */}
        <div className="flex items-center justify-center gap-2 text-xs text-white/80 mb-4">
          <Clock className="w-3 h-3" />
          <span>{service.duration}</span>
        </div>

        {/* Action Button */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-sage-900 text-white rounded-md hover:bg-sage-800 transition-colors duration-200 text-sm">
          {service.action}
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
}