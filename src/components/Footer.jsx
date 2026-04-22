import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Gift } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-stone-100 text-[#12372A] pt-16 pb-8 overflow-hidden z-40">
      {/* Decorative Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">

            {/* Logo + Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">

              <Link to="/" className="inline-block group w-fit shrink-0">
                <Logo
                  size="lg"
                  className="shadow-lg shadow-[#10b981]/10 rounded-xl"
                />
                {/* Tagline */}
                <p className="text-gray-800 text-sm leading-relaxed max-w-sm">
                  Creating clarity for calm living
                </p>
              </Link>

              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-gray-900"> +1 (916) 254-3662</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-gray-900">emeraldclean8@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-gray-900">CA, United States</span>
                </div>
              </div>

            </div>
          
          </div>
       
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-600">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li>
                <Link to="/services" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Our Services</Link>
              </li>
              <li>
                {/*  <Link to="/pricing" className="hover:text-black hover:translate-x-1 transition-all duration-300 inline-block">Pricing Plans</Link>*/}
              </li>
              <li>
                <Link to="/gift-certificates" className="hover:text-black hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5 font-medium text-[#135E4B]">
                  <Gift className="w-3.5 h-3.5" />
                  Gift Certificates
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-black  hover:translate-x-1 transition-all duration-300 inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-black  hover:translate-x-1 transition-all duration-300 inline-block">Book Now</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-600">Follow Us</h3>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-black">Join our community for cleaning tips and inspiration.</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/emerald_clean8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg hover:shadow-[#10b981]/30 hover:border-[#10b981]/50 hover:bg-white/10 group transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6 text-gray-800 group-hover:text-[#10b981] transition-colors duration-300" />
                </motion.a>

                   {/* Facebook */}
      <motion.a
                  href="https://www.facebook.com/people/Emerald-Clean/61571094064069/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg hover:shadow-[#10b981]/30 hover:border-[#10b981]/50 hover:bg-white/10 group transition-all duration-300"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-6 h-6 text-gray-800 group-hover:text-[#10b981] transition-colors duration-300" />
      </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {currentYear} Emerald Clean. All rights reserved.| Powered by BrenStudio</p>
            <div className="flex gap-6">
              <span className="hover:text-gray-800 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-gray-800 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;