import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { contact } from '../../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motionVariants';

export default function CTABanner() {
  const whatsappMsg = encodeURIComponent("Hello Tripsy India! I want to plan a holiday. Please help me with the best package.");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80"
          alt="Travel"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,184,196,0.90), rgba(14,165,233,0.85), rgba(15,23,42,0.80))' }} />
      </div>

      {/* Animated glow pulse */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,46,147,0.4), transparent 70%)' }} />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="inline-block text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">
            Ready To Travel?
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-white leading-tight mb-5">
            Plan Your Dream Holiday<br />
            <span style={{ background: 'linear-gradient(90deg,#fff,rgba(255,255,255,0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Today with Tripsy India
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Talk to our expert travel consultants. Get a customized itinerary and the best package deals — absolutely free consultation!
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <a href={`https://wa.me/${contact.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-9 py-4">
              <MessageCircle size={20} />
              Talk on WhatsApp
            </a>
            <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 bg-white text-primary font-bold px-9 py-4 rounded-full hover:-translate-y-1 transition-transform duration-300 shadow-lg text-base">
              <Phone size={20} />
              {contact.phoneDisplay}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
