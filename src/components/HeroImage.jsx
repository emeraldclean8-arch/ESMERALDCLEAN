import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <img
          src="https://horizons-cdn.hostinger.com/6904378e-0247-435a-a34e-dce1deb8a5cf/gemini_generated_image_31zudo31zudo31zu-1-DZsAQ.png"
          alt="Emerald Clean professional cleaning team in a bright home interior"
          className="w-full h-full object-cover"
          style={{ objectPosition: '70% center' }}
          loading="eager"
        />
        {/* Left-to-right gradient overlay: Solid White Pearl -> Translucent -> Transparent */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, #FDFBF7 0%, rgba(253, 251, 247, 0.7) 50%, rgba(253, 251, 247, 0) 100%)'
          }}
        />
      </motion.div>
    </div>
  );
};
export default HeroImage;