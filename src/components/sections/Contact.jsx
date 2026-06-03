import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { contact } from '../../data/siteContent';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from '../../utils/motionVariants';

const initialForm = { name: '', phone: '', email: '', destination: '', date: '', travelers: '2', message: '' };
const destinations = ['Kashmir', 'Manali', 'Himachal Pradesh', 'Darjeeling', 'Goa', 'South India Pilgrim', 'Rajasthan', 'Kerala', 'Other'];

function Toast({ type, message, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.9 }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-white text-sm font-medium ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
      role="alert"
      aria-live="polite"
    >
      {type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
      {message}
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">✕</button>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  const setField = (k, v) => {
    setForm(prev => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors(prev => ({ ...prev, [k]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.match(/^[0-9]{10}$/)) e.phone = 'Enter a valid 10-digit phone number';
    if (form.email && !form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address';
    if (!form.destination) e.destination = 'Please select a destination';
    return e;
  };

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const msg = `Hello Tripsy India! 🌏\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email || 'N/A'}\n*Destination:* ${form.destination}\n*Travel Date:* ${form.date || 'Flexible'}\n*Travelers:* ${form.travelers}\n*Message:* ${form.message || 'Please share package details.'}\n\nLooking forward to hearing from you!`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setForm(initialForm);
    showToast('success', 'Opening WhatsApp with your enquiry!');
  };

  const handleEmail = () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const subject = `Holiday Enquiry — ${form.destination} | ${form.name}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDestination: ${form.destination}\nTravel Date: ${form.date || 'Flexible'}\nTravelers: ${form.travelers}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast('success', 'Email client opened successfully!');
  };

  return (
    <section id="enquiry" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Book Your <span className="text-gradient">Dream Holiday</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
            Fill the form and our travel expert will call you back within 30 minutes.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Contact Info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-section-alt rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-text-dark text-lg mb-5">Contact Information</h3>
              <div className="space-y-5">
                <a href={`tel:${contact.phone}`} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#00B8C4,#0EA5E9)' }}>
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-text-light font-medium mb-0.5">Call Us</p>
                    <p className="font-semibold text-text-dark group-hover:text-primary transition-colors">{contact.phoneDisplay}</p>
                    <p className="text-xs text-text-light">Mon–Sun, 9am–9pm</p>
                  </div>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#FF2E93,#ff6b35)' }}>
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-text-light font-medium mb-0.5">Email Us</p>
                    <p className="font-semibold text-text-dark group-hover:text-primary transition-colors text-sm">{contact.email}</p>
                    <p className="text-xs text-text-light">Reply within 2 hours</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#7B2FF7,#FF2E93)' }}>
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-text-light font-medium mb-0.5">Visit Us</p>
                    <p className="font-semibold text-text-dark text-sm">{contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-4 bg-green-50 border border-green-100 rounded-2xl p-5 hover:bg-green-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}>
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-green-800">Chat on WhatsApp</p>
                <p className="text-green-600 text-sm">Instant response guaranteed</p>
              </div>
            </a>

            {/* Office Hours */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Monday — Friday</span>
                  <span className="font-medium">9:00 AM — 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Saturday</span>
                  <span className="font-medium">10:00 AM — 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Sunday</span>
                  <span className="font-medium">10:00 AM — 5:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-border shadow-card p-7 md:p-9" id="contact">
              <h3 className="font-bold text-text-dark text-xl mb-6">Send Your Enquiry</h3>
              <form onSubmit={handleWhatsApp} noValidate>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-dark mb-1.5">Full Name *</label>
                    <input
                      type="text" value={form.name} onChange={e => setField('name', e.target.value)}
                      placeholder="Your full name"
                      className={`input-field ${errors.name ? 'border-red-400 focus:border-red-400' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-dark mb-1.5">Phone Number *</label>
                    <input
                      type="tel" value={form.phone} onChange={e => setField('phone', e.target.value)}
                      placeholder="10-digit mobile number"
                      className={`input-field ${errors.phone ? 'border-red-400' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-text-dark mb-1.5">Email Address</label>
                  <input
                    type="email" value={form.email} onChange={e => setField('email', e.target.value)}
                    placeholder="your@email.com (optional)"
                    className={`input-field ${errors.email ? 'border-red-400' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-dark mb-1.5">Destination *</label>
                    <select value={form.destination} onChange={e => setField('destination', e.target.value)} className={`input-field ${errors.destination ? 'border-red-400' : ''}`}>
                      <option value="">Select destination</option>
                      {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.destination && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.destination}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-dark mb-1.5">Travel Date</label>
                    <input type="date" value={form.date} onChange={e => setField('date', e.target.value)} className="input-field" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-text-dark mb-1.5">No. of Travelers</label>
                  <select value={form.travelers} onChange={e => setField('travelers', e.target.value)} className="input-field">
                    {[1,2,3,4,5,6,7,8,'9+'].map(n => <option key={n} value={n}>{n} Person{n !== 1 && n !== '1' ? 's' : ''}</option>)}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-text-dark mb-1.5">Message</label>
                  <textarea
                    value={form.message} onChange={e => setField('message', e.target.value)}
                    rows={4} placeholder="Tell us about your travel plans, preferences, budget..."
                    className="input-field resize-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" disabled={loading} className="btn-whatsapp flex-1 justify-center py-4 text-base font-bold">
                    <MessageCircle size={20} />
                    Send on WhatsApp
                  </button>
                  <button type="button" onClick={handleEmail} className="btn-primary flex-1 justify-center py-4 text-base font-bold">
                    <Send size={20} />
                    Send Email
                  </button>
                </div>
                <p className="text-text-light text-xs text-center mt-4">
                  🔒 Your information is safe and will never be shared with third parties.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast type={toast.type} message={toast.msg} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </section>
  );
}
