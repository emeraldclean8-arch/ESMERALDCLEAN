import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Calendar, Clock, DollarSign, CheckCircle, Loader2, Sparkles } from 'lucide-react';
import Button from '@/components/Button';
import { useToast } from '@/components/ui/use-toast';

const BookingPage = () => {
  const location = useLocation();
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Define Pricing Services
  const serviceTiers = [
    {
      id: 'Essential Clean',
      name: 'Essential Clean',
      subtitle: 'Light Maintenance',
      prices: { weekly: 150, biweekly: 200, monthly: 250, onetime: 280 }
    },
    {
      id: 'Esmerald Cleand',
      name: 'Esmerald Cleand',
      subtitle: 'Balanced Care',
      prices: { weekly: 200, biweekly: 250, monthly: 300, onetime: 350 }
    },
    {
      id: 'Signature Clean',
      name: 'Signature Clean',
      subtitle: 'Standard Care',
      prices: { onetime: 275 }
    },
    {
      id: 'Elite Clean',
      name: 'Elite Clean',
      subtitle: 'Maximum Detail',
      prices: { onetime: 500 } // Elite Clean is typically one-time
    }
  ];

  // Frequencies
  const frequencies = [
    { id: 'weekly', label: 'Weekly' },
    { id: 'biweekly', label: 'Bi-Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'onetime', label: 'One-Time' }
  ];

  // Form State
  const [formData, setFormData] = useState({
    serviceId: location.state?.selectedService || '',
    frequency: 'onetime',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: ''
  });

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  useEffect(() => {
    // If service is Elite Clean, force frequency to 'onetime'
    if (formData.serviceId === 'Elite Clean' ||
      formData.serviceId === 'Signature Clean') {
      setFormData(prev => ({ ...prev, frequency: 'onetime' }));
    }
  }, [formData.serviceId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Determine current price
  const getPrice = () => {
    const selectedTier = serviceTiers.find(p => p.id === formData.serviceId);
    if (!selectedTier) return 0;

    // Elite Clean special case or if frequency is not available for a service
    if (selectedTier.id === 'Elite Clean' || !selectedTier.prices[formData.frequency]) {
      return selectedTier.prices.onetime;
    }

    // Check if the price for the frequency is an object (like for Esmerald Cleand weekly)
    const priceValue = selectedTier.prices[formData.frequency];
    return typeof priceValue === 'object' ? priceValue.price : priceValue;
  };

  const currentPrice = getPrice();
  const selectedTierData = serviceTiers.find(p => p.id === formData.serviceId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.serviceId || !formData.date || !formData.time || !formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate successful payment
      await new Promise(resolve => setTimeout(resolve, 2000));

      const booking = {
        id: Date.now(),
        ...formData,
        price: currentPrice,
        service: selectedTierData ? selectedTierData.name : 'Unknown',
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };

      const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      existingBookings.push(booking);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));

      setPaymentSuccess(true);
      toast({
        title: 'Booking Confirmed!',
        description: 'Your cleaning service has been successfully booked.',
      });

      setFormData({
        serviceId: '',
        frequency: 'onetime',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        specialRequests: ''
      });

    } catch (error) {
      toast({
        title: 'Payment Failed',
        description: error.message || 'There was an error processing your payment.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-[#CCDCDB]/10 to-white pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-[#4CB572] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for choosing Emerald Clean. We've sent a confirmation email with all the details.
            </p>
            <Button variant="primary" size="lg" onClick={() => setPaymentSuccess(false)}>
              Book Another Service
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Book Your Cleaning Service - Emerald Clean</title>
        <meta name="description" content="Book your preferred cleaning service online." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white via-[#CCDCDB]/10 to-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Reserve Your <span className="text-[#135E4B]">Cleaning</span>
            </h1>
            <p className="text-xl text-gray-600">
              Customize your service and schedule in minutes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
                {/* Service Tier & Frequency */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      <Sparkles className="w-4 h-4 inline mr-2" />
                      Select Service *
                    </label>
                    <select
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900"
                    >
                      <option value="">Choose a service...</option>
                      {serviceTiers.map(tier => (
                        <option key={tier.id} value={tier.id}>
                          {tier.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Frequency *
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleInputChange}
                      required
                      disabled={formData.serviceId === 'Elite Clean'} // Elite Clean is always one-time
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900 disabled:opacity-50"
                    >
                      {formData.serviceId === 'Elite Clean' ? (
                        <option value="onetime">One-Time Only</option>
                      ) : (
                        frequencies.map(freq => (
                          <option key={freq.id} value={freq.id}>{freq.label}</option>
                        ))
                      )}
                    </select>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={today}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900"
                    >
                      <option value="">Select time...</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="space-y-6 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Your Details</h3>
                  
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address *"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Service Address *"
                    required
                    rows="2"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors resize-none text-gray-900 placeholder-gray-400"
                  />
                  
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any special instructions or gate codes?"
                    rows="2"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#135E4B] focus:outline-none transition-colors resize-none text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Payment Information */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
                  <div className="p-4 border-2 border-gray-200 rounded-xl">
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#1a1b1e',
                            '::placeholder': { color: '#9ca3af' }
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading || !stripe || !elements} 
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <DollarSign className="w-5 h-5 mr-2" />
                      Book & Pay ${currentPrice}
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Booking Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-[#135E4B] to-[#4CB572] rounded-3xl shadow-xl p-8 text-white sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Your Summary</h3>
                
                {selectedTierData ? (
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-white/20">
                      <p className="text-sm opacity-80 mb-1">Service Tier</p>
                      <p className="text-lg font-semibold">{selectedTierData.name}</p>
                      <p className="text-xs opacity-75">{selectedTierData.subtitle}</p>
                    </div>

                    <div className="pb-4 border-b border-white/20">
                      <p className="text-sm opacity-80 mb-1">Frequency</p>
                      <p className="text-lg font-semibold capitalize">
                        {formData.serviceId === 'Elite Clean' ? 'One-Time' : formData.frequency}
                      </p>
                    </div>
                    
                    {formData.date && (
                      <div className="pb-4 border-b border-white/20">
                        <p className="text-sm opacity-80 mb-1">Date & Time</p>
                        <p className="text-lg font-semibold">
                          {new Date(formData.date + 'T00:00:00').toLocaleDateString('en-US', { 
                            month: 'short', day: 'numeric' 
                          })} 
                          {formData.time && ` @ ${formData.time}`}
                        </p>
                      </div>
                    )}
                    
                    <div className="pt-4">
                      <p className="text-sm opacity-80 mb-1">Total Due Today</p>
                      <p className="text-4xl font-bold">${currentPrice}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-center opacity-80 italic">Select a service to see pricing details</p>
                )}

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="opacity-90">
                      Satisfaction guaranteed. Fully bonded & insured for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;