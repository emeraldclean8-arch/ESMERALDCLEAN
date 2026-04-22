import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, Home } from 'lucide-react';
import meticulouscare from '../assets/meticulouscare.jpg';
import modernserenity from '../assets/modernserenity.jpg';
import familyflourishing from '../assets/familyabout.jpg';  
import restoringbalance from '../assets/restoringbalance.jpg';



const AboutPage = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const fadeIn = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  // Content Data
  const ourWhyParagraphs = ["As a working woman, wife, and mother, I understand how challenging it can be to balance family, work, and personal well-being.", "Life moves fast, responsibilities multiply, and too often the home—the very place meant to restore us—becomes another source of stress.", "I believe homes are sacred spaces. They are meant to be a refuge of peace, connection, and happiness for every member of the family.", "That belief is what inspired Emerald Clean.", "More than a cleaning service, Emerald Clean was created to bring clarity, calm, and care into the homes of busy families. Through thoughtful cleaning, order, and attention to detail, we help create spaces where you can breathe, reconnect, and truly enjoy being home.", "When a home feels calm and cared for, families flourish. And when families flourish, life feels lighter, more intentional, and more joyful.", "This is our why. And it's at the heart of everything we do."];
  const founderParagraphs = ["This message is for the woman who gives so much of herself every day.", "For the woman balancing responsibilities, dreams, family, and expectations—often without pause. For the woman who carries more than she lets on.", "You don't have to do everything alone.", , "At Emerald Clean, we understand that your time and energy are precious. When your home is cared for, you gain something invaluable: the freedom to focus on what truly matters to you. Your passions. Your family. Your rest. Your growth.", "We step in with respect and intention, so you can step back into your life with more presence and ease.", "You deserve a home that supports you, not one that demands from you.", "We are honored to care for your space, so you can care for yourself and the people you love.", "— Founder, Esmeralda B"];
  const galleryImages = [{
    url: restoringbalance,
    caption: "Restoring Balance",
    icon: <Home className="w-5 h-5" />
  }, {
    url: meticulouscare,
    caption: "Meticulous Care",
    icon: <Sparkles className="w-5 h-5" />
  }, {
    url: modernserenity,
    caption: "Modern Serenity",
    icon: <Star className="w-5 h-5" />
  }, {
    url: familyflourishing,
    caption: "Family Flourishing",
    icon: <Heart className="w-5 h-5" />
  }];
  return <>
      <Helmet>
        <title>About Us - Emeralda B</title>
        <meta name="description" content="Discover the heart behind Emerald Clean. We create spaces where families can breathe, flourish, and find peace through meticulous, eco-friendly home care." />
      </Helmet>

      <div className="bg-[#FDFBF7] min-h-screen font-sans text-[#6B6157]">
        
        {/* SECTION 1: HERO */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb" alt="Bright clean home for families" className="w-full h-full object-cover" />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#007A5E]/40 via-[#007A5E]/20 to-[#FDFBF7]" />
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
             <span className="inline-block py-1 px-4 border border-white/50 rounded-full text-white/95 text-xs md:text-sm tracking-[0.25em] mb-8 uppercase backdrop-blur-sm shadow-sm font-medium">
              Welcome Home
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white font-medium mb-8 leading-tight drop-shadow-lg">
              Creating spaces where families can <span className="italic font-light">breathe</span> and <span className="italic font-light">flourish</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
              Restoring peace and balance to your sanctuary, one detail at a time.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2: OUR WHY */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              {/* Image Left */}
              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={fadeInUp} className="relative lg:sticky lg:top-32">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] border-4 border-white">
                  <img src="https://horizons-cdn.hostinger.com/6904378e-0247-435a-a34e-dce1deb8a5cf/gemini_generated_image_vics76vics76vics-PotHb.png" alt="Woman relaxing in clean home" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-[#007A5E]/10 mix-blend-overlay" />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#D4AF7F]/20 rounded-full blur-3xl -z-10" />
              </motion.div>

              {/* Text Right */}
              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={staggerContainer} className="lg:pt-8">
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-16 bg-[#D4AF7F]" />
                  <span className="text-[#007A5E] tracking-widest uppercase text-sm font-semibold">Our Why</span>
                </motion.div>
                
                <div className="space-y-2">
                  {ourWhyParagraphs.map((paragraph, index) => <motion.div key={index} variants={fadeInUp}>
                      <p className="text-lg md:text-xl font-light leading-relaxed text-[#6B6157]">
                        {paragraph}
                      </p>
                      {index !== ourWhyParagraphs.length - 1 && <div className="py-6 flex justify-center lg:justify-start opacity-40">
                          <div className="w-12 h-[1px] bg-[#D4AF7F]" />
                        </div>}
                    </motion.div>)}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FOUNDER'S MESSAGE */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#F7F5F0] to-[#fff] relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              {/* Text Left */}
              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={staggerContainer} className="order-2 lg:order-1 lg:pt-8">
                 <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-16 bg-[#D4AF7F]" />
                  <span className="text-[#007A5E] tracking-widest uppercase text-sm font-semibold">A Message From The Founder</span>
                </motion.div>

                <div className="space-y-2">
                  {founderParagraphs.map((paragraph, index) => <motion.div key={index} variants={fadeInUp}>
                      <p className={`text-lg md:text-xl font-light leading-relaxed text-[#6B6157] ${index === founderParagraphs.length - 1 ? "font-playfair italic text-[#007A5E] text-2xl mt-8" : ""}`}>
                        {paragraph}
                      </p>
                      {index !== founderParagraphs.length - 1 && <div className="py-6 flex justify-center lg:justify-start opacity-40">
                           <div className="w-12 h-[1px] bg-[#D4AF7F]" />
                         </div>}
                    </motion.div>)}
                </div>
              </motion.div>

              {/* Image Right */}
              <motion.div initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }} variants={fadeInUp} className="order-1 lg:order-2 relative lg:sticky lg:top-32">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] border-4 border-white lg:translate-y-12">
                  <img src="https://horizons-cdn.hostinger.com/6904378e-0247-435a-a34e-dce1deb8a5cf/6109b26e41ebcbfc886fb9f98953c885-IwTS3.jpg" alt="Founder cleaning with care" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#007A5E]/20 to-transparent" />
                </div>
                 {/* Decorative Element */}
                 <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#007A5E]/10 rounded-full blur-3xl -z-10" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 4: REAL HOMES, REAL CARE GALLERY */}
      <section className="py-24 bg-[#006B5B] text-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Real Homes, Real Care</h2>
              <div className="w-24 h-[1px] bg-[#D4AF7F] mx-auto opacity-70" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {galleryImages.map((item, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: idx * 0.1,
              duration: 0.6
            }} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.url} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d3b] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 text-[#D4AF7F] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.icon}
                      <span className="text-sm font-medium tracking-wider uppercase">Emerald Care</span>
                    </div>
                    <h3 className="font-playfair text-2xl text-white">{item.caption}</h3>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

      </div>
    </>;
};
export default AboutPage;