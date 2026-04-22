import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Button from '@/components/Button';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (916) 254-3662',
      link: 'tel:+1 (916) 254-3662'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'emeraldclean8@gmail.com',
      link: 'mailto:emeraldclean8@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      content: 'CA, United States',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Emerald Clean</title>
        <meta name="description" content="Get in touch with Emerald Clean. Send us a message or DM 'CLEAN' to book your service today." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white via-[#CCDCDB]/10 to-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A1D8B5]/20 rounded-full text-[#135E4B] text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We'd Love to <span className="text-[#135E4B]">Hear From You</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or ready to book? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[#135E4B] to-[#4CB572] rounded-3xl p-8 text-white shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Quick Booking</h2>
                <p className="text-lg mb-6 opacity-90">
                  Want to book right away? Send us a direct message!
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-2xl font-bold mb-2">DM 'CLEAN'</p>
                  <p className="opacity-90">to book your service instantly</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#A1D8B5]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#135E4B] transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-[#135E4B] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-1">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-lg font-semibold text-gray-900 hover:text-[#135E4B] transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-gray-900">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '8:30 AM - 5:00 PM' },
                   // { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
                  //  { day: 'Sunday', hours: '10:00 AM - 4:00 PM' } 
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-900 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;