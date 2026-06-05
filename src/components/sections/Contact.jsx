import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { contact } from '../../data/siteContent';
import EnquiryForm from '../EnquiryForm';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from '../../utils/motionVariants';

export default function Contact() {
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
                    <p className="text-xs text-text-light">Mon-Sun, 9am-9pm</p>
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

            <div className="bg-navy rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Saturday</span>
                  <span className="font-medium">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Sunday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <EnquiryForm id="contact" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
