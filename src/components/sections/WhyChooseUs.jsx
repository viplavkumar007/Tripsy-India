import { motion } from 'framer-motion';
import { Map, Plane, Shield, Headphones } from 'lucide-react';
import { whyChooseUs } from '../../data/siteContent';
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '../../utils/motionVariants';

const iconMap = { Map, Plane, Shield, Headphones };

export default function WhyChooseUs() {
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
            Why Choose Us
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Why We Are <span className="text-gradient">The Best</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
            From planning to return — we handle everything so you can focus on creating memories.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || Map;
            return (
              <motion.div
                key={item.title}
                variants={scaleIn}
                className="group bg-white rounded-2xl p-7 text-center shadow-card card-hover border border-border cursor-default"
              >
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-text-dark text-lg mb-3">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
