import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motionVariants';

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`bg-white rounded-2xl border transition-all duration-200 ${isOpen ? 'border-primary/30 shadow-card' : 'border-border'}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-text-dark text-sm md:text-base pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-section-alt text-text-light'}`}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-5 md:px-6 pb-5 text-text-light text-sm leading-relaxed border-t border-border/50 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            FAQs
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
            Everything you need to know before booking your dream holiday with us.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
