import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import Button from './Button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: 'Missing Information',
      description: 'Please fill in all fields.',
      variant: 'destructive'
    });
    return;
  }

  setLoading(true);

  try {
    await emailjs.send(
      'service_fuoj9tb',
      'template_x6t9bgp',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'WRPnGAHXfv7x8sALy'
    );
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. We will get back to you soon.',
    });

    setFormData({ name: '', email: '', message: '' });

  } catch (error) {
    console.error(error); //
    toast({
      title: 'Error',
      description: 'No se pudo enviar',
      variant: 'destructive'
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors resize-none text-gray-900 placeholder-gray-400"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;