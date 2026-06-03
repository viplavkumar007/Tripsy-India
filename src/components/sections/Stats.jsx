import { motion } from 'framer-motion';
import { stats } from '../../data/siteContent';
import { useCounter } from '../../hooks/useCounter';
import { fadeUp, slideLeft, staggerContainer, viewportOnce } from '../../utils/motionVariants';

function StatItem({ number, suffix, label }) {
  const { count, ref } = useCounter(number, 2200);
  return (
    <div ref={ref} className="text-center py-8 px-4">
      <p className="text-5xl md:text-6xl font-black text-white mb-2">
        {count}{suffix}
      </p>
      <p className="text-white/70 font-medium text-sm tracking-wide uppercase">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80"
          alt="Happy Travelers"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,184,196,0.92), rgba(14,165,233,0.88), rgba(255,46,147,0.75))' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeUp} className="inline-block text-white/80 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Achievement
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white leading-snug mb-5">
              Creating Unforgettable<br />Memories Across India
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 text-base leading-relaxed mb-6 max-w-lg">
              For over a decade, Tripsy India has been turning dream holidays into reality. 
              Every trip we plan is packed with carefully selected experiences, comfortable stays, 
              and memories that last a lifetime.
            </motion.p>
            <motion.div variants={fadeUp}>
              <button
                onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:-translate-y-1 transition-transform duration-300 shadow-lg text-sm"
              >
                Start Your Journey →
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl"
              >
                <StatItem {...stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
