import { motion } from 'motion/react';
import { products } from '../data';

export default function PhoneMarquee() {
  // Get a subset of phone images to display in the marquee
  const marqueeImages = products
    .filter(p => p.brand === 'iPhone' || p.brand === 'Samsung')
    .map(p => p.image);
  
  // Duplicate images to create a seamless infinite scroll effect
  const duplicatedImages = [...marqueeImages, ...marqueeImages, ...marqueeImages];

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-12 relative flex items-center border-y border-gray-200/50">
      {/* Gradient masks for smooth fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-gray-100 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-gray-100 to-transparent" />
      
      <motion.div 
        className="flex gap-4 sm:gap-6 w-max"
        animate={{ x: ["0%", "-33.3333%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {duplicatedImages.map((img, i) => (
          <div 
            key={i} 
            className="w-28 sm:w-40 aspect-[3/4] shrink-0 rounded-2xl overflow-hidden shadow-sm bg-white border border-gray-100"
          >
            <img 
              src={img} 
              alt="Smartphone" 
              className="w-full h-full object-cover mix-blend-multiply" 
              loading="lazy" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
