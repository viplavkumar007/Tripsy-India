import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, MapPin } from 'lucide-react';
import { brand } from '../../data/siteContent';
import { fadeUp, slideLeft, staggerContainer, viewportOnce } from '../../utils/motionVariants';

const features = [
  { icon: CheckCircle2, text: 'Customized Holiday Packages for every budget' },
  { icon: CheckCircle2, text: 'Experienced local guides at every destination' },
  { icon: CheckCircle2, text: '24x7 dedicated travel support team' },
  { icon: CheckCircle2, text: 'Best price guarantee — no hidden charges' },
  { icon: CheckCircle2, text: 'Fully verified & trusted accommodations' },
  { icon: CheckCircle2, text: 'Flexible cancellation & refund policies' },
];

const highlights = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '5000+', label: 'Happy Travelers' },
  { icon: MapPin, value: '25+', label: 'Destinations' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Brand Logo */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative flex min-h-[360px] items-center justify-center"
          >
            <div className="flex w-full max-w-xl items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="block w-full max-w-lg object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                About Tripsy India
              </span>
              <h2 className="section-title leading-tight">
                Your Trusted Travel Partner
                <br />
                <span className="text-gradient">Since 2015</span>
              </h2>
              <p className="section-subtitle mt-4 text-base leading-relaxed">
                We are Tripsy India Tours & Holidays — <em>The Holiday Wala</em>. Based in Amroha, Uttar Pradesh, 
                we have been crafting unforgettable travel experiences across India for over a decade. From serene 
                Kashmir valleys to spiritual South India temples, we make every journey meaningful.
              </p>
            </motion.div>

            <motion.ul variants={staggerContainer} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feat) => (
                <motion.li
                  key={feat.text}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-text-dark"
                >
                  <feat.icon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{feat.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Highlights Row */}
            <motion.div variants={fadeUp} className="mt-10 flex gap-8">
              {highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2"
                    style={{ background: 'linear-gradient(135deg,rgba(0,184,196,0.12),rgba(14,165,233,0.12))' }}
                  >
                    <h.icon size={20} className="text-primary" />
                  </div>
                  <p className="text-2xl font-black text-text-dark">{h.value}</p>
                  <p className="text-xs text-text-light font-medium mt-0.5">{h.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <button
                onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Plan My Holiday
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
