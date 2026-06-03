import { motion } from 'framer-motion';
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
      <svg
        className="relative z-10 h-8 w-8"
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.02 3.2c-7.05 0-12.78 5.66-12.78 12.63 0 2.39.68 4.72 1.97 6.73L3.2 29.8l7.43-1.94a12.94 12.94 0 0 0 6.39 1.67c7.04 0 12.78-5.67 12.78-12.64S23.06 3.2 16.02 3.2Zm0 23.38c-2.06 0-4.07-.58-5.8-1.67l-.42-.27-4.42 1.15 1.18-4.27-.28-.44a10.62 10.62 0 0 1-1.7-5.75c0-5.35 4.4-9.7 9.82-9.7 2.62 0 5.09 1 6.94 2.84a9.6 9.6 0 0 1 2.88 6.86c0 5.35-4.4 9.7-9.82 9.7Zm5.39-7.26c-.3-.15-1.75-.85-2.02-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.65.08-.3-.15-1.25-.45-2.38-1.46a8.86 8.86 0 0 1-1.65-2.02c-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.19.05-.36-.03-.51-.07-.15-.67-1.59-.92-2.18-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.47 1.07 2.89 1.22 3.08.15.2 2.1 3.18 5.08 4.46.71.3 1.26.49 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.75-.71 2-1.39.25-.69.25-1.27.17-1.4-.07-.12-.27-.2-.57-.34Z"
        />
      </svg>
    </motion.a>
  );
}
