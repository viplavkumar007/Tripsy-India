import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contact } from '../data/siteContent';

export default function WhatsAppFloat() {
  const msg = encodeURIComponent("Hello Tripsy India! I'm interested in your tour packages. Please help me plan my holiday.");
  return (
    <motion.a
      href={`https://wa.me/${contact.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />
      <MessageCircle size={26} className="relative z-10" />
    </motion.a>
  );
}
