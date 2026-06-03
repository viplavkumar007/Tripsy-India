import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Heart } from 'lucide-react';
import { brand, contact, quickLinks, popularDestinations } from '../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motionVariants';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact-footer" className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Col 1: Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <img src={brand.logo} alt={brand.name} className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Tripsy India Tours & Holidays — The Holiday Wala. Creating unforgettable travel memories across India since {brand.established}. Your trusted travel partner for customized holiday packages.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: contact.social.facebook },
                { Icon: Instagram, href: contact.social.instagram },
                { Icon: Youtube, href: contact.social.youtube },
                { Icon: Twitter, href: contact.social.twitter },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-white mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Popular Destinations */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-white mb-5 text-base">Popular Destinations</h4>
            <ul className="space-y-3">
              {popularDestinations.map((dest) => (
                <li key={dest}>
                  <button
                    onClick={() => scrollTo('#packages')}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                    {dest}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact Details */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-white mb-5 text-base">Contact Details</h4>
            <div className="space-y-4">
              <a href={`tel:${contact.phone}`} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors mt-0.5">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Phone</p>
                  <p className="text-white/80 text-sm font-medium group-hover:text-primary transition-colors">{contact.phoneDisplay}</p>
                </div>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors mt-0.5">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Email</p>
                  <p className="text-white/80 text-sm font-medium group-hover:text-primary transition-colors break-all">{contact.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Address</p>
                  <p className="text-white/80 text-sm leading-relaxed">{contact.address}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>
            Copyright © {brand.copyright} <span className="text-white/70 font-medium">{brand.fullName}</span>. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={13} className="text-accent" fill="currentColor" /> for Indian Travelers
          </p>
        </div>
      </div>
    </footer>
  );
}
