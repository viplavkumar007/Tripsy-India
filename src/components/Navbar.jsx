import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand, nav, contact } from '../data/siteContent';
import { useScrolled } from '../hooks/useScrollSpy';

const navbarLogo = '/navbar-logo.png';

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
      className={`fixed inset-x-0 top-0 z-40 w-full max-w-[100vw] transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white lg:bg-white/95 lg:backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-white lg:bg-transparent'
      }`}
    >
      <nav className="relative max-w-7xl mx-auto px-3 md:px-4 flex items-center justify-between gap-3 h-16 md:h-24 overflow-hidden md:overflow-visible">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className={`flex h-12 w-28 items-center flex-shrink-0 overflow-hidden rounded-md border px-0 md:h-[calc(100%-1rem)] md:w-auto md:max-w-none md:px-2 transition-colors ${
            scrolled
              ? 'border-transparent bg-transparent'
              : 'border-transparent bg-transparent md:border-primary/25 md:bg-white/50 md:backdrop-blur-sm md:shadow-sm'
          }`}
        >
          <img src={navbarLogo} alt={brand.name} className="block h-full max-w-full w-auto object-contain" />
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
                  className={`nav-link text-sm font-medium ${
                    isActive
                      ? scrolled
                        ? 'active text-primary'
                        : 'text-text-dark bg-white/55 border border-primary/45 backdrop-blur-sm shadow-sm px-3 py-2 rounded-full'
                      : scrolled
                        ? 'text-text-dark hover:text-primary'
                        : 'text-text-dark/90 hover:text-primary bg-white/45 border border-primary/30 backdrop-blur-sm shadow-sm px-3 py-2 rounded-full'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${contact.phone}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? 'text-text-dark hover:text-primary' : 'text-text-dark hover:text-primary drop-shadow-sm'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                scrolled ? 'bg-primary/10' : 'bg-white/60 backdrop-blur-sm'
              }`}
            >
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
          className={`absolute right-3 top-1/2 -translate-y-1/2 lg:static lg:translate-y-0 lg:hidden w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-xl border transition-colors ${
            scrolled
              ? 'border-border text-text-dark hover:bg-section-alt'
              : 'border-border text-text-dark bg-section-alt hover:bg-white md:border-white/60 md:bg-white/50 md:hover:bg-white/70'
          }`}
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
              className="fixed inset-0 bg-white z-50 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between h-20 px-4 border-b border-border">
                <img src={navbarLogo} alt={brand.name} className="block h-full w-auto object-contain" />
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
