import { motion } from 'framer-motion';
import { Clock, MapPin, MessageCircle, Mountain, Snowflake, Trees } from 'lucide-react';
import { contact } from '../../data/siteContent';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motionVariants';

const hillPackages = [
  {
    id: 'shimla',
    name: 'Shimla',
    tagline: 'Queen of Hills',
    image: '/himachal-card.png',
    nights: '3N/4D',
    highlights: ['Mall Road', 'Kufri snow point', 'Jakhu Temple'],
    badge: 'Family',
  },
  {
    id: 'kullu-manali',
    name: 'Kullu Manali',
    tagline: 'Adventure in the Himalayas',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
    nights: '4N/5D',
    highlights: ['Solang Valley', 'Rohtang Pass', 'Kullu rafting'],
    badge: 'Popular',
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    tagline: 'Paradise on Earth',
    image: '/kashmir-card.png',
    nights: '5N/6D',
    highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley'],
    badge: 'Bestseller',
  },
  {
    id: 'mussoorie',
    name: 'Mussoorie',
    tagline: 'The Garhwal hill escape',
    image: '/gallery-02.png',
    nights: '3N/4D',
    highlights: ['Kempty Falls', 'Mall Road', 'Gun Hill'],
    badge: 'Scenic',
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    tagline: 'Queen of Hills',
    image: '/darjeeling-card.png',
    nights: '3N/4D',
    highlights: ['Tiger Hill sunrise', 'Toy Train Ride', 'Tea Gardens'],
    badge: 'Trending',
  },
  {
    id: 'nainital',
    name: 'Nainital',
    tagline: 'Lakeside mountain holiday',
    image: '/gallery-04.png',
    nights: '2N/3D',
    highlights: ['Naini Lake', 'Snow View Point', 'Mall Road'],
    badge: 'Weekend',
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Yoga, Ganga and adventure',
    image: '/gallery-02.png',
    nights: '2N/3D',
    highlights: ['River rafting', 'Ganga Aarti', 'Laxman Jhula'],
    badge: 'Adventure',
  },
];

const iconMap = [Snowflake, Mountain, Trees];

function handlePackageEnquiry(dest) {
  const msg = `Hello Tripsy India!\n\nI want information about the *${dest.name}* hill station package.\n\nPlease share itinerary, hotels, transport and best price.`;
  window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

export default function HomeHillPackages() {
  return (
    <section className="py-14 md:py-18 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8"
        >
          <div>
            <motion.span variants={fadeUp} className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Hill Station Packages
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title">
              Shimla, Kullu Manali & <span className="text-gradient">More Mountain Trips</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-text-light text-sm md:max-w-md">
            Quick package options for snow holidays, family vacations, honeymoon trips and custom hill station plans.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7"
        >
          {hillPackages.map((dest, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.article
                key={dest.id}
                variants={fadeUp}
                className="group overflow-hidden rounded-2xl bg-white border border-border shadow-card"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-primary">
                    {dest.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold leading-tight">{dest.name}</h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-white/90">
                      <MapPin size={12} /> {dest.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 font-semibold text-text-dark">
                      <Clock size={13} className="text-primary" /> {dest.nights}
                    </span>
                    <Icon size={16} className="text-primary" />
                  </div>

                  <ul className="mb-4 space-y-2">
                    {dest.highlights.slice(0, 3).map((item) => (
                      <li key={item} className="text-xs text-text-light">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePackageEnquiry(dest)}
                    className="btn-primary w-full justify-center px-4 py-3 text-xs"
                  >
                    <MessageCircle size={15} />
                    Get Details
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
