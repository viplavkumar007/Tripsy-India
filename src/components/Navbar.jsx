import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand, nav, contact } from '../data/siteContent';
import { useScrolled } from '../hooks/useScrollSpy';

export default function Navbar({ activeSection }) {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-2 flex-shrink-0">
          <img src={brand.logo} alt={brand.name} className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {nav.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-link text-sm font-medium ${isActive ? 'active text-primary' : 'text-text-dark hover:text-primary'}`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-sm font-semibold text-text-dark hover:text-primary transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone size={14} className="text-primary" />
            </div>
            <span>{contact.phoneDisplay}</span>
          </a>
          <button
            onClick={() => handleNavClick('#enquiry')}
            className="btn-primary text-sm px-5 py-2.5"
          >
            Book Now
          </button>
        </div>

        {/* Mobile menu btn */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-border text-text-dark hover:bg-section-alt transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-section-alt">
                  <X size={18} />
                </button>
              </div>
              <ul className="flex flex-col p-4 gap-1 flex-1">
                {nav.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <li key={item.label}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-text-dark hover:bg-section-alt'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="p-4 border-t border-border space-y-3">
                <a href={`tel:${contact.phone}`} className="btn-outline w-full justify-center">
                  <Phone size={16} />
                  Call Us Now
                </a>
                <button onClick={() => handleNavClick('#enquiry')} className="btn-primary w-full justify-center">
                  Book Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
