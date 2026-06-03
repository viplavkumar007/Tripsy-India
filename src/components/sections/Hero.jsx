import { motion } from 'framer-motion';
import { Package, Shield, Headphones, Tag, ChevronDown } from 'lucide-react';
import { hero } from '../../data/siteContent';

const iconMap = { Package, Shield, Headphones, Tag };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <picture className="block w-full h-full">
          <source media="(max-width: 1023px)" srcSet="/hero-mobile.png" />
          <img
            src="/hero-bg.png"
            alt="Explore Incredible India"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/35" />
      </div>

      <div className="relative z-10 flex-1" />

      {/* Trust Badges */}
      <div className="relative z-10 bg-white/95 backdrop-blur-xl border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
            {hero.trustBadges.map((badge) => {
              const Icon = iconMap[badge.icon] || Package;
              return (
                <div key={badge.label} className="min-w-0 flex items-center gap-2 text-sm sm:gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 sm:w-9 sm:h-9"
                    style={{ background: 'linear-gradient(135deg,#00B8C4,#0EA5E9)' }}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-text-dark text-[11px] leading-tight sm:text-xs">{badge.label}</p>
                    <p className="text-text-light text-xs hidden md:block">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 text-white/50 hidden lg:block"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
