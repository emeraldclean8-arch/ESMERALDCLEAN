import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, HelpCircle, X, Loader2, Calendar, Mail, User } from 'lucide-react';
//import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useToast } from '@/components/ui/use-toast';
import GiftCertificateCard from '@/components/GiftCertificateCard';
import Button from '@/components/Button';
import emailjs from "@emailjs/browser";

const GIFT_CERTIFICATES = [
/*{
    id: 'gift_50',
    name: "The Thoughtful Touch",
    price: 50,
    subtitle: "A Perfect Starter Gift",
    description: "Ideal for adding extra time or specific focus areas to an existing cleaning service.",
    features: [
      "Use towards any cleaning service",
      "Perfect for partial service payment",
      "Never expires",
      "Digital delivery instantly"
    ]
  },*/
  {
    id: 'gift_100',
    name: "ESSENTIAL",
    price: 150,
    subtitle: "Clarity Boost",
    description: "A thoughtful introduction to the Emerald Clean experience.Perfect for refreshing a key area or contributing toward a full-service clean.",
    features: [
      "Ideal for kitchen or bathroom refresh",
      "Can be applied to any service",
      " Great as an add-on gift",
      " Personalized digital certificate included"
    ]
  },
  {
    id: 'gift_250',
    name: "ELITE",
    price: 300,
    subtitle: "Signature Home Refresh",
    description: "A complete, elevated cleaning experience designed to restore balance and clarity to your home.",
    features: [
      "Covers standard cleaning for most homes (1–3 bedrooms)",
      "Perfect for busy professionals or new beginnings",
      "Priority scheduling available",
      "A meaningful and practical gift"
    ]
  },
  {
    id: 'gift_500',
    name: "EMERALD",
    price: 500,
    subtitle: "Ultimate Clarity Experience",
     description:  "Our most luxurious offering. A deep, intentional transformation that brings peace, order, and renewed energy into the home.",
    features: [
      " Deep, detail-focused cleaning",
      "Intentional organization",
      "Full-home reset experience",
      " Priority scheduling",  
    ],
      closingText: "A space that feels lighter, calmer, and fully supportive.",
  }
];

const FAQS = [
  {
    question: "How are gift certificates delivered?",
    answer: "Gift certificates are delivered digitally via email immediately after purchase. You can choose to have it sent to yourself to print, or directly to the recipient with a scheduled date."
  },
  {
    question: "Do gift certificates expire?",
    answer: "No, our gift certificates never expire. They can be used at any time for any of our services."
  },
  {
    question: "Can they be used for recurring services?",
    answer: "Absolutely! The value can be applied to one-time cleans, recurring maintenance, or any special add-on services."
  },
  {
    question: "Is the amount refundable?",
    answer: "Gift certificates are non-refundable but are fully transferable to another person if needed."
  }
];

const PurchaseModal = ({ isOpen, onClose, certificate }) => {
 // const stripe = useStripe();
 // const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  //const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    recipientName: '',
    recipientEmail: '',
     phone: '', 
    message: '',
    deliveryDate: new Date().toISOString().split('T')[0]
  });

  if (!isOpen || !certificate) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.send(
      "service_fuoj9tb",
      "template_wedfza1",
      {
        senderName: formData.senderName,
        senderEmail: formData.senderEmail,
        recipientName: formData.recipientName,
        recipientEmail: formData.recipientEmail,
         phone: formData.phone,
        message: formData.message,
        certificate: certificate.name,
        amount: certificate.price,
      },
        "WRPnGAHXfv7x8sALy"
    );

    toast({
      title: "¡Solicitud enviada! 🎉",
      description: "Te contactaremos para completar el pago.",
    });

    setFormData({
      senderName: '',
      senderEmail: '',
      recipientName: '',
      recipientEmail: '',
      message: '',
      deliveryDate: new Date().toISOString().split('T')[0]
    });

    onClose();

  } catch (error) {
    console.error(error);
    toast({
      title: "Error",
      description: "No se pudo enviar el formulario",
      variant: "destructive",
    });
  }
console.log("SUBMIT FUNCIONANDO 🔥");
  setLoading(false);
};

// si se llega a agregar pago con stripe, el handleSubmit se vería así:
 {/* const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) return;
    
    setLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, we would create a payment intent on the backend
    // and confirm it here. For this demo, we'll simulate success.

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
   } else {
  try {
    await emailjs.send(
      "service_fuoj9tb",
      "template_2d0gomw",
      {
        senderName: formData.senderName,
        senderEmail: formData.senderEmail,
        recipientName: formData.recipientName,
        recipientEmail: formData.recipientEmail,
        message: formData.message,
        amount: certificate.price,
        certificate: certificate.name
      },
      "WRPnGAHXfv7x8sALy"
    );

    toast({
      title: "Purchase Successful! 🎉",
      description: `Gift sent to ${formData.recipientEmail}`,
      className: "bg-[#135E4B] text-white border-none"
    });

  } catch (error) {
    console.error(error);
    toast({
      title: "Error enviando email",
      description: "El pago pasó pero el email falló",
      variant: "destructive",
    });
  }

  setLoading(false);
  onClose();
}
  };  <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-6">*/}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="p-6 bg-[#135E4B] text-white flex justify-between items-center shrink-0">
          <div>
            <h3 className="text-xl font-bold">Purchase Gift Certificate</h3>
            <p className="text-[#A1D8B5] text-sm">{certificate.name} - ${certificate.price}</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">From Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input 
                        required
                        type="text" 
                        name="senderName"
                        value={formData.senderName} 
                        onChange={handleInputChange}
                        className="pl-9 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-[#135E4B] focus:border-[#135E4B]"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">From Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input 
                        required
                        type="email" 
                        name="senderEmail"
                        value={formData.senderEmail} 
                        onChange={handleInputChange}
                        className="pl-9 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-[#135E4B] focus:border-[#135E4B]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">To Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input 
                      required
                      type="text" 
                      name="recipientName"
                      value={formData.recipientName} 
                      onChange={handleInputChange}
                      className="pl-9 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-[#135E4B] focus:border-[#135E4B]"
                      placeholder="Recipient's Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">To Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input 
                      required
                      type="email" 
                      name="recipientEmail"
                      value={formData.recipientEmail} 
                      onChange={handleInputChange}
                      className="pl-9 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:ring-[#135E4B] focus:border-[#135E4B]"
                      placeholder="recipient@email.com"
                    />
                  </div>
                </div>
                 
                 <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone (for faster response) 
                  </label>
                  <input 
                     required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#135E4B]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>


                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                  <textarea 
                    name="message"
                    value={formData.message} 
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-[#135E4B] focus:border-[#135E4B] min-h-[80px]"
                    placeholder="Write a personal note..."
                  />
                </div>

                <Button type="submit" className="w-full bg-[#135E4B] hover:bg-[#0f4a3a] text-white mt-2">
              Enviar Solicitud
                </Button>
              </div>
             
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2">
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-600">Gift Certificate:</span>
                     <span className="font-semibold text-gray-900">{certificate.name}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-600">Amount:</span>
                     <span className="font-semibold text-gray-900">${certificate.price}.00</span>
                   </div>
                   <div className="flex justify-between text-sm border-t border-gray-200 pt-2 mt-2">
                     <span className="font-bold text-gray-900">Total:</span>
                     <span className="font-bold text-[#135E4B]">${certificate.price}.00</span>
                   </div>
                </div>

                {/*<div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Card Details</label>
                  <div className="p-4 border border-gray-300 rounded-lg bg-white">
                    <CardElement options={{
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#424770',
                          '::placeholder': {
                            color: '#aab7c4',
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }} />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="flex-1 bg-[#135E4B] hover:bg-[#0f4a3a] text-white"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      `Pay $${certificate.price}`
                    )}
                  </Button>
                </div> */}
              </div>
            
          </form>
        </div>
      </motion.div>
    </div>
  );
};

const GiftCertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <Helmet>
        <title>Gift Certificates - Emerald Clean</title>
        <meta name="description" content="Give the gift of a clean home. Purchase gift certificates for Emerald Clean services online instantly." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-[#135E4B] py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1612375411084-503fa501baed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Clean Home Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#135E4B]/90 to-[#135E4B]/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#A1D8B5] text-sm font-semibold mb-6 border border-white/10">
              <Gift className="w-4 h-4" />
              <span>The Perfect Gift</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Give the Gift of <span className="text-[#A1D8B5]">Time & Peace</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              There's no better present than coming home to a spotless sanctuary. Perfect for new parents, busy professionals, or anyone who deserves a break.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gift Cards Grid */}
      <div className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-32 relative z-20">
            {GIFT_CERTIFICATES.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <GiftCertificateCard 
                  certificate={cert} 
                  onPurchase={setSelectedCertificate} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works / FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1697024595411-5d74ff8b0af6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Happy home" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <Heart className="w-10 h-10 text-[#4CB572] mb-4" />
                  <h3 className="text-2xl font-bold mb-2">More Than Just Cleaning</h3>
                  <p className="opacity-90">You're not just giving a clean house. You're giving weekends back, stress-free evenings, and the joy of a peaceful home.</p>
                </div>
              </div>
            </motion.div>

            {/* FAQ Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#135E4B] mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Everything you need to know about our gift certificates.</p>
              </div>

              <div className="space-y-6">
                {FAQS.map((faq, index) => (
                  <div key={index} className="bg-stone-50 rounded-xl p-6 border border-gray-100">
                    <h4 className="flex items-center gap-3 text-lg font-bold text-gray-900 mb-3">
                      <HelpCircle className="w-5 h-5 text-[#4CB572]" />
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 ml-8 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <PurchaseModal 
            isOpen={!!selectedCertificate} 
            onClose={() => setSelectedCertificate(null)} 
            certificate={selectedCertificate}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GiftCertificatesPage;