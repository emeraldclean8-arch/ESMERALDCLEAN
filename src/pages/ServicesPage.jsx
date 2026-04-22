import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import servicehomecleaning from '../assets/servicehomecleaning.png';
import servicehortterm from '../assets/servicehortterm.png';
import servicehomeseccion from '../assets/servicehomeseccion.png';
import servicehomeorganization from '../assets/servicehomeorga.png';
import servicehomeofice from '../assets/servicehomeofice.png';

const servicesData = [
  {
    id: 'home-cleaning',
    title: 'Home Cleaning',
    image: servicehomecleaning,
    services: [
      'Weekly Cleaning',
      'Biweekly Cleaning',
      'Monthly Cleaning',
      'One-Time Cleaning',
      'Deep Cleaning',
      'Move-In / Move-Out Cleaning'
    ]
  },
  {
    id: 'short-term-rental',
    title: 'Short-Term Rental Services',
    image: servicehortterm,
    services: [
      'Airbnb Cleaning',
      'Turnover Cleaning',
      'Laundry & Linen Service',
      'Guest-Ready Setup',
      'Party Cleaning'
    ]
  },
  {
    id: 'home-organization',
    title: 'Home Organization',
    image: servicehomeorganization,
    services: [
      'Closet Organization',
      'Kitchen & Pantry Organization',
      'Garage Organization',
      'Decluttering Sessions',
      'Home Reset',
      'Packing',
      'Unpacking'
    ]
  },
  {
    id: 'home-clarity',
    title: 'Home Clarity Session',
    image: servicehomeseccion ,
    description: '1:1 guidance session  designed to help you create a calm and supportive home. Together we explore how your home currently feels, identify the areas that may be creating stress or disorder, and develop simple systems that bring more order, flow, and ease into your daily life. The goal is not just a clean home, but a space that supports the wellbeing and balance of your family.',
    isSpecial: true
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning Services',
    image: servicehomeofice,
    services: [
      'Apartment Complexes',
      'Condominium Buildings',
      'Office Cleaning',
      'Commercial Buildings'
    ]
  }
];

const ServiceCard = ({ category, isExpanded, onToggle }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 ${
        isExpanded ? 'shadow-2xl ring-1 ring-[#C9A24D]/30' : 'hover:shadow-xl hover:border-[#0F3D2E]/20'
      }`}
    >
      <div 
        className="relative h-64 cursor-pointer group overflow-hidden"
        onClick={onToggle}
      >
        <div className="absolute inset-0 bg-[#0F3D2E]/20 group-hover:bg-[#0F3D2E]/10 transition-colors z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/90 via-[#0F3D2E]/40 to-transparent z-10" />
        
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex justify-between items-end">
          <div>
            {category.isSpecial && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24D]/20 text-[#F5D76E] text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm border border-[#C9A24D]/30">
                <Sparkles className="w-3 h-3" /> Signature Service
              </span>
            )}
            <h3 className="text-2xl font-playfair font-bold text-white drop-shadow-md">
              {category.title}
            </h3>
          </div>
          <div className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transition-transform duration-300 ${isExpanded ? 'bg-[#C9A24D]/80 border-[#C9A24D]' : 'group-hover:bg-white/30'}`}>
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 bg-gradient-to-b from-[#F0F7F5]/50 to-white">
              {category.description ? (
                <div className="mb-8">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {category.description}
                  </p>
                </div>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="text-gray-700 font-medium group-hover:text-[#0F3D2E] transition-colors">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <Link to="/contact">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#0F3D2E] text-white rounded-xl font-semibold shadow-md hover:bg-[#1F7A63] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                    {category.isSpecial ? 'Book Session' : 'Book Now'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServicesPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Emerald Clean</title>
        <meta name="description" content="Explore our comprehensive range of premium cleaning and organization services tailored for your home and business." />
      </Helmet>

      <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#0F3D2E]/5 border border-[#0F3D2E]/10 text-[#0F3D2E] text-sm font-semibold tracking-wider uppercase mb-6">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-[#0F3D2E] mb-6">
              Premium Services <br className="hidden md:block" />
              <span className="text-gray-900">Tailored For You</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of cleaning, organization, and home clarity services designed to elevate your space and bring peace to your daily life.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {servicesData.map((category) => (
              <ServiceCard 
                key={category.id} 
                category={category} 
                isExpanded={expandedId === category.id}
                onToggle={() => handleToggle(category.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;