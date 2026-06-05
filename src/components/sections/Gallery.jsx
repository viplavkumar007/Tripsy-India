import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { gallery } from '../../data/siteContent';
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '../../utils/motionVariants';

function getMobileImage(src) {
  const base = src.replace(/\.png$/i, '');

  return `${base}-720.jpg`;
}

function getImageSize(aspect) {
  const [width, height] = aspect.split('/').map((value) => value.trim());

  return { width, height };
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 639px)');
    const updateIsMobile = () => setIsMobile(mobileQuery.matches);

    updateIsMobile();
    mobileQuery.addEventListener('change', updateIsMobile);

    return () => mobileQuery.removeEventListener('change', updateIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return undefined;

    const preloaders = gallery.map((item) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = getMobileImage(item.src);
      return image;
    });

    return () => preloaders.forEach((image) => {
      image.src = '';
    });
  }, [isMobile]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Gallery
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Travel <span className="text-gradient">Moments</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle mx-auto mt-4">
            A glimpse into the beautiful destinations we've taken our travelers to.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5"
        >
          {gallery.map((item, i) => {
            const mobileImage = getMobileImage(item.src);
            const imageSize = getImageSize(item.aspect);
            const isPriority = i < 3;

            return (
              <motion.div
                key={item.src}
                variants={scaleIn}
                className="relative mb-5 break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group bg-section-alt border border-border"
                style={{ aspectRatio: item.aspect }}
                onClick={() => setLightbox(item)}
              >
                <picture>
                  <source
                    media="(max-width: 639px)"
                    type="image/jpeg"
                    srcSet={mobileImage}
                  />
                  <img
                    src={item.src}
                    alt={item.label}
                    width={imageSize.width}
                    height={imageSize.height}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading={isMobile || isPriority ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={isMobile || isPriority ? 'high' : 'auto'}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={28} className="text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X size={20} />
              </button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={lightbox.src}
                alt={lightbox.label}
                className="max-w-[92vw] max-h-[85vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="absolute bottom-6 text-white font-semibold text-lg">{lightbox.label}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
