import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Plane, Shield, Headphones, Tag, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { hero, contact } from '../../data/siteContent';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

const iconMap = { Package, Plane, Shield, Headphones, Tag };

function HeroEnquiryCard() {
  const [form, setForm] = useState({ name: '', phone: '', destination: '', date: '', travelers: '2' });
  const setField = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Tripsy India! 🌏\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Destination:* ${form.destination}\n*Travel Date:* ${form.date}\n*Travelers:* ${form.travelers}\n\nPlease share package details.`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="glass rounded-3xl p-7 shadow-2xl max-w-sm ml-auto">
      <h3 className="text-white text-xl font-bold mb-1">Quick Enquiry</h3>
      <p className="text-white/60 text-sm mb-5">Get a custom quote in 30 minutes</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text" placeholder="Your Name" value={form.name}
          onChange={e => setField('name', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-primary transition-colors"
          required
        />
        <input
          type="tel" placeholder="Phone Number" value={form.phone}
          onChange={e => setField('phone', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-primary transition-colors"
          required
        />
        <select
          value={form.destination} onChange={e => setField('destination', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-navy/80 border border-white/20 text-white text-sm outline-none focus:border-primary transition-colors"
          required
        >
          <option value="">Select Destination</option>
          {['Kashmir','Manali','Himachal','Darjeeling','Goa','South India Pilgrim'].map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <input
          type="date" value={form.date} onChange={e => setField('date', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm outline-none focus:border-primary transition-colors"
          required
        />
        <select
          value={form.travelers} onChange={e => setField('travelers', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-navy/80 border border-white/20 text-white text-sm outline-none focus:border-primary transition-colors"
        >
          {[1,2,3,4,5,6,'7+'].map(n => (
            <option key={n} value={n}>{n} Traveler{n !== 1 ? 's' : ''}</option>
          ))}
        </select>
        <button type="submit" className="btn-accent w-full justify-center py-4 text-base font-bold mt-2">
          <MessageCircle size={18} />
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <img src="/hero-bg.png" alt="Explore Incredible India" className="w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/60" />
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-white">
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full">
                  {hero.badge}
                </span>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="text-lg md:text-xl font-medium text-white/80 mb-2">{hero.heading1}</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-2">
                  <span style={{ background: 'linear-gradient(135deg,#00B8C4,#0EA5E9,#FF2E93)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {hero.heading2}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-white/90 mt-2">{hero.heading3}</p>
              </motion.div>
              <motion.p variants={fadeUp} className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-xl">
                {hero.subheading}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary text-base px-8 py-4">
                  <Plane size={18} /> {hero.cta1}
                </button>
                <a href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hello Tripsy India! I'm interested in your tour packages.")}`} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-8 py-4">
                  <MessageCircle size={18} /> {hero.cta2}
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-6">
                <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <span>Call now: <strong className="text-white">{contact.phoneDisplay}</strong></span>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <HeroEnquiryCard />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative z-10 bg-white/95 backdrop-blur-xl border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {hero.trustBadges.map((badge) => {
              const Icon = iconMap[badge.icon] || Package;
              return (
                <div key={badge.label} className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#00B8C4,#0EA5E9)' }}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-xs">{badge.label}</p>
                    <p className="text-text-light text-xs hidden md:block">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 text-white/50 hidden lg:block">
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
