import { motion } from 'framer-motion';
import { MapPin, Clock, MessageCircle, Star } from 'lucide-react';
import { destinations, contact } from '../../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motionVariants';

function DestinationCard({ dest, index }) {
  const handleBookNow = () => {
    const msg = `Hello Tripsy India! 🌏\n\nI'm interested in the *${dest.name}* package (${dest.nights}).\n\nPlease share the complete itinerary and pricing details.`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <motion.div
      variants={fadeUp}
      className="group bg-white rounded-2xl overflow-hidden shadow-card card-hover border border-border"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Badge */}
        <span className="floating-badge">{dest.badge}</span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-text-dark text-xl">{dest.name}</h3>
            <p className="text-text-light text-sm flex items-center gap-1 mt-0.5">
              <MapPin size={12} /> {dest.tagline}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 text-amber-500 text-xs font-semibold px-2 py-1 rounded-lg">
            <Star size={12} fill="currentColor" />
            <span>4.9</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs mb-4">
          <span className="flex items-center gap-1.5 text-text-light">
            <Clock size={13} className="text-primary" />
            {dest.nights}
          </span>
          <span className="font-bold text-primary text-right">{dest.price}</span>
        </div>

        {/* Highlights */}
        <ul className="flex flex-wrap gap-2 mb-5">
          {dest.highlights.map((h) => (
            <li key={h} className="text-xs bg-primary/8 text-primary font-medium px-2.5 py-1 rounded-full border border-primary/15">
              {h}
            </li>
          ))}
        </ul>

        <button onClick={handleBookNow} className="btn-primary w-full justify-center">
          <MessageCircle size={16} />
          Book Now on WhatsApp
        </button>
      </div>
    </motion.div>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Tour Packages
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Popular <span className="text-gradient">Destinations</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
            Handpicked destinations with customized itineraries — crafted just for you.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-4 text-sm">Don't see your destination? We cover 25+ destinations across India!</p>
          <button
            onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Request Custom Package
          </button>
        </motion.div>
      </div>
    </section>
  );
}
