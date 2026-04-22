import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import BookingPage from '@/pages/BookingPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import GiftCertificatesPage from '@/pages/GiftCertificatesPage';
import { Toaster } from '@/components/ui/toaster';

// Initialize Stripe with test key
const stripePromise = loadStripe('pk_test_51234567890abcdefghijklmnopqrstuvwxyz');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <Helmet>
          <title>Emerald Clean - Premium Home Cleaning Services</title>
          <meta name="description" content="Premium home cleaning services for busy women. Enjoy a clean, peaceful, and healthy home without stress." />
        </Helmet>
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gift-certificates" element={<GiftCertificatesPage />} />
            </Routes>
          </div>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </Elements>
  );
}

export default App;