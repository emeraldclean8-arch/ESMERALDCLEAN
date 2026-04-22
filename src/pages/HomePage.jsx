import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Heart, Gift } from 'lucide-react';
import Button from '@/components/Button';
import HeroImage from '@/components/HeroImage';
import logo from '@/assets/logo.png';

const HomePage = () => {
  const navigate = useNavigate();
  const benefits = ['Professional & Trusted Cleaners', 'Satisfaction Guaranteed'];
 
  const REVIEWS = [
  {
    name: "Peter Idzikowski",
    text: "Today we hired Emerald Clean for a deep cleaning of our house. We are satisfied with the results and professionalism."
  },
  {
    name: "Julie Home",
    text: "Always satisfied with Emerald Clean services. Great attention to detail and excellent results."
  },
  {
    name: "Chuck OBrien",
    text: "Esmeralda and her team have cleaned our home for years. Always thorough and respectful."
  },
  {
    name: "C C",
    text: "Amazing service! My house has never looked better. Highly professional and detailed."
  },
  {
    name: "Nicole Wertz",
    text: "We’ve used their service for over 10 years. Very reliable and trustworthy."
  },
  {
    name: "Karina KS",
    text: "Wonderful service. Always punctual and extremely detailed. Highly recommend!"
  }
];

  return (
    <>
      <Helmet>
        <title>Emerald Clean - Creating Clarity, So You Can Create Your Best Life</title>
        <meta name="description" content="We help busy women enjoy a clean, peaceful, and healthy home without stress. Professional cleaning services with flexible scheduling." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#F0F7F5]">
        <HeroImage />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="flex flex-col items-start max-w-xl lg:max-w-2xl"
          >
            {/* Prominent Hero Image Section - Kept as is */}
            <motion.div 
              className="w-full" 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-xl max-w-sm mb-6 sm:mb-8">
                <img src={logo} alt="Emerald Clean Serene Interior" className="w-full h-[180px] sm:h-[220px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
            
            <div className="w-full max-w-4xl ml-0 px-4 sm:px-6 p-8 sm:p-10 rounded-3xl shadow-xl">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair text-[#007A5E] font-bold leading-tight">
                  Less chaos, more clarity, more happiness.
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-bold">
                  We create clarity in your home through thorough cleaning and thoughtful organization that elevate the energy of your space. A calm home opens space for well-being, connection, and a more fulfilling life.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                  <Link to="/contact">
                    <Button variant="primary" size="lg" className="px-8 py-4 text-lg bg-[#007A5E] text-[#FDFBF7] hover:bg-[#00624b] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full">
                      Book Your Cleaning
                    </Button>
                  </Link>

                  <Link to="/gift-certificates">
                    <Button variant="primary" size="lg" className="px-8 py-4 text-lg bg-[#10b981] text-white hover:bg-[#059669] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full flex items-center gap-2">
                      <Gift className="w-5 h-5" />
                      Buy a Gift
                    </Button>
                  </Link>
                  
                  <Link to="/services" className="flex items-center gap-1 text-[#007A5E] font-medium hover:underline group ml-2 mt-2 sm:mt-0">
                    See Services
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Benefits - Updated colors for light background */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#007A5E]/10 mt-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#6B6157]">
                      <CheckCircle className="w-5 h-5 text-[#007A5E] flex-shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Introduction Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#CCDCDB]/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A1D8B5]/20 rounded-full text-[#135E4B] text-sm font-semibold">
              <Heart className="w-4 h-4" />
              <span>Caring for Your Home</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Your Home Deserves the <span className="text-[#135E4B]">Best Care</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              At Emerald Clean, we know your home is a reflection of your lifestyle. We go beyond cleaning-bringing clarity, order, and a sense of calm throungh every detail.Our work ensures your space feels fresh,elevated, and effortlessly maintained.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 pt-8">
              {[
                { number: '10+', label: 'Years of Experience' },
                { number: '100%', label: 'Service Guarantee' },
                { number: '100%', label: 'Satisfaction Rate' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1, duration: 0.5 }} 
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-[#135E4B] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
       {/* reviews */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#135E4B]">
        What Our Clients Say
      </h2>
      <div className="flex justify-center mb-8 text-[#4CB572]">
  ★★★★★ ★★★★★ ★★★★★
</div>
      <p className="text-gray-600 mt-3">
        Real experiences from real homes
      </p>
    </motion.div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {REVIEWS.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="bg-[#F9FAFB] p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          {/* Stars */}
       <div className="flex justify-center mb-6 text-yellow-400 text-2xl">
  ★★★★★
</div>

          {/* Text */}
          <p className="text-gray-700 italic leading-relaxed mb-4">
            "{review.text}"
          </p>

          {/* Name */}
          <p className="font-semibold text-[#135E4B]">
            — {review.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      
    </>
    
  );
};
export default HomePage;