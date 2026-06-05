import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { contact } from '../data/siteContent';

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
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100">x</button>
    </motion.div>
  );
}

export default function EnquiryForm({ title = 'Send Your Enquiry', compact = false, className = '', id }) {
  const [form, setForm] = useState(initialForm);
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
    const msg = `Hello Tripsy India!\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email || 'N/A'}\n*Destination:* ${form.destination}\n*Travel Date:* ${form.date || 'Flexible'}\n*Travelers:* ${form.travelers}\n*Message:* ${form.message || 'Please share package details.'}\n\nLooking forward to hearing from you!`;
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setForm(initialForm);
    showToast('success', 'Opening WhatsApp with your enquiry!');
  };

  const handleEmail = () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const subject = `Holiday Enquiry - ${form.destination} | ${form.name}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDestination: ${form.destination}\nTravel Date: ${form.date || 'Flexible'}\nTravelers: ${form.travelers}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast('success', 'Email client opened successfully!');
  };

  return (
    <>
      <div className={`bg-white rounded-3xl border border-border shadow-card ${compact ? 'p-4 sm:p-5' : 'p-7 md:p-9'} ${className}`} id={id}>
        <h3 className={`font-bold text-text-dark ${compact ? 'text-lg mb-4' : 'text-xl mb-6'}`}>{title}</h3>
        <form onSubmit={handleWhatsApp} noValidate>
          <div className={`grid sm:grid-cols-2 ${compact ? 'gap-3 mb-3' : 'gap-4 mb-4'}`}>
            <div>
              <label className="block text-xs font-semibold text-text-dark mb-1.5">Full Name *</label>
              <input
                type="text" value={form.name} onChange={e => setField('name', e.target.value)}
                placeholder="Your full name"
                className={`input-field ${compact ? 'py-2.5' : ''} ${errors.name ? 'border-red-400 focus:border-red-400' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-dark mb-1.5">Phone Number *</label>
              <input
                type="tel" value={form.phone} onChange={e => setField('phone', e.target.value)}
                placeholder="10-digit mobile number"
                className={`input-field ${compact ? 'py-2.5' : ''} ${errors.phone ? 'border-red-400' : ''}`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
            </div>
          </div>
          <div className={compact ? 'hidden' : 'mb-4'}>
            <label className="block text-xs font-semibold text-text-dark mb-1.5">Email Address</label>
            <input
              type="email" value={form.email} onChange={e => setField('email', e.target.value)}
              placeholder="your@email.com (optional)"
              className={`input-field ${errors.email ? 'border-red-400' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
          </div>
          <div className={`grid sm:grid-cols-2 ${compact ? 'gap-3 mb-3' : 'gap-4 mb-4'}`}>
            <div>
              <label className="block text-xs font-semibold text-text-dark mb-1.5">Destination *</label>
              <select value={form.destination} onChange={e => setField('destination', e.target.value)} className={`input-field ${compact ? 'py-2.5' : ''} ${errors.destination ? 'border-red-400' : ''}`}>
                <option value="">Select destination</option>
                {destinations.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              {errors.destination && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.destination}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-dark mb-1.5">Travel Date</label>
              <input type="date" value={form.date} onChange={e => setField('date', e.target.value)} className={`input-field ${compact ? 'py-2.5' : ''}`} />
            </div>
          </div>
          <div className={compact ? 'mb-4' : 'mb-4'}>
            <label className="block text-xs font-semibold text-text-dark mb-1.5">No. of Travelers</label>
            <select value={form.travelers} onChange={e => setField('travelers', e.target.value)} className={`input-field ${compact ? 'py-2.5' : ''}`}>
              {[1,2,3,4,5,6,7,8,'9+'].map(n => <option key={n} value={n}>{n} Person{n !== 1 && n !== '1' ? 's' : ''}</option>)}
            </select>
          </div>
          {!compact && (
            <div className="mb-6">
              <label className="block text-xs font-semibold text-text-dark mb-1.5">Message</label>
              <textarea
                value={form.message} onChange={e => setField('message', e.target.value)}
                rows={4} placeholder="Tell us about your travel plans, preferences, budget..."
                className="input-field resize-none"
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" className={`btn-whatsapp flex-1 justify-center font-bold ${compact ? 'py-3 text-sm' : 'py-4 text-base'}`}>
              <MessageCircle size={compact ? 18 : 20} />
              Send on WhatsApp
            </button>
            {!compact && (
              <button type="button" onClick={handleEmail} className="btn-primary flex-1 justify-center py-4 text-base font-bold">
                <Send size={20} />
                Send Email
              </button>
            )}
          </div>
          <p className={`text-text-light text-xs text-center ${compact ? 'mt-3' : 'mt-4'}`}>
            Your information is safe and will never be shared.
          </p>
        </form>
      </div>

      <AnimatePresence>
        {toast && <Toast type={toast.type} message={toast.msg} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </>
  );
}
