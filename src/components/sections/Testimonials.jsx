import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motionVariants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDirection(1); setCurrent((c) => (c + 1) % testimonials.length); };

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            What Our <span className="text-gradient">Travelers Say</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
            Real stories from real travelers who trusted us with their dream holidays.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-card overflow-hidden p-8 md:p-12 min-h-[280px] flex items-center">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} className="text-primary" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#F59E0B" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-text-dark text-lg md:text-xl leading-relaxed font-medium mb-8">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-text-dark">{t.name}</p>
                    <p className="text-text-light text-sm">{t.location}</p>
                    <span className="inline-block text-xs bg-primary/10 text-primary font-medium px-2.5 py-0.5 rounded-full mt-1">
                      {t.destination}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-primary' : 'w-2 bg-primary/25'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* All Reviewer Avatars */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button key={t.id} onClick={() => goTo(i)} className={`transition-all duration-300 ${i === current ? 'scale-110 ring-2 ring-primary ring-offset-2' : 'opacity-50 hover:opacity-80'} rounded-full`}>
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
