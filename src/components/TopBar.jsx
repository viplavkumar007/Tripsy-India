import { Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { contact } from '../data/siteContent';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-navy text-white text-xs py-2.5 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone size={13} />
            <span>{contact.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail size={13} />
            <span>{contact.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={contact.social.facebook} target="_blank" rel="noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
            <Facebook size={12} />
          </a>
          <a href={contact.social.instagram} target="_blank" rel="noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
            <Instagram size={12} />
          </a>
          <a href={contact.social.youtube} target="_blank" rel="noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
            <Youtube size={12} />
          </a>
          <a href={contact.social.twitter} target="_blank" rel="noreferrer"
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
            <Twitter size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
