import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PricingCard from '@/components/PricingCard';
import { CheckCircle, Info, Home, LayoutDashboard } from 'lucide-react';

const PricingPage = () => {
  const navigate = useNavigate();

  const serviceTiers = [
    {
      name: "Essential Clean",
      subtitle: "Simple · Functional · Light Maintenance",
      description: "Designed for homes that need basic upkeep with a practical, straightforward approach.",
      features: [
        "General cleaning of kitchens and bathrooms (main surfaces only)",
        "Vacuuming and mopping floors",
        "Trash removal"
      ],
      pricing: {
        weekly: 150,
        biweekly: 200,
        monthly: 250,
        onetime: 280
      },
      bestFor: "Homes that are already fairly maintained and only need light, functional cleaning.",
      mostPopular: false
    },

    {
      name: "Signature Clean",
      subtitle: "One-Time Cleaning · Standard Care",
      description: "A one-time cleaning service designed for homes that need a refresh with Emerald Clean's quality and attention to detail—without ongoing maintenance.",
      features: [
        "General cleaning of kitchens and bathrooms",
        "Surface cleaning throughout the home",
        "Vacuuming and mopping floors",
        "Exterior appliance cleaning",
        "Light organization",
        "Attention to visible details"
      ],
      pricing: {
        startingPrice: 275
      },
      bestFor: "First-time clients or homes not ready for ongoing service who want a one-time clean with Emerald Clean's signature care.",
      mostPopular: false
    },
    {
      name: "Esmerald Cleand",
      subtitle: "Esmerald Cleand · Balanced Care",
      description: "Our most popular service. Created for homeowners who value consistency, detail, and peace of mind.",
      features: [
        "Everything in Essential Clean",
        "Higher level of detail in kitchens and bathrooms",
        "Carefully cleaned surfaces",
        "Light organization",
        "Attention to visible details"
      ],
      pricing: {
        weekly: {
          price: 200,
          recommended: true
        },
        biweekly: 250,
        monthly: 300,
        onetime: 350
      },
      bestFor: "Busy women who want their home consistently cared for and always looking its best.",
      mostPopular: true
    },
    {
      name: "Elite Clean",
      subtitle: "Elite Cleaning · Maximum Detail",
      description: "A top-tier service for homes that need a complete reset or elevated level of care.",
      features: [
        "Full Elite Cleaning throughout the home",
        "Baseboards, doors, and door frames",
        "Detailed kitchen and bathrooms",
        "Built-up dust and accumulation addressed"
      ],
      pricing: {
        startingPrice: 500
      },
      bestFor: "First-time service, move-ins/move-outs, or homes with heavy buildup that need a deep refresh before maintenance begins.",
      mostPopular: false
    }
  ];

  const adjustmentTiers = [
    { range: "1,501 - 2,000 sq ft", increase: "+$30", detail: "Additional time for larger surface areas" },
    { range: "2,001 - 2,500 sq ft", increase: "+$60", detail: "Extended focus on extra rooms/bathrooms" },
    { range: "2,501 - 3,000 sq ft", increase: "+$90", detail: "Comprehensive coverage for estate homes" },
    { range: "3,000+ sq ft", increase: "Custom Quote", detail: "Tailored plan for luxury properties", isPremium: true },
  ];

  const handleChooseTier = (tierName) => {
    navigate('/booking', { state: { selectedService: tierName } });
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Emerald Clean</title>
        <meta name="description" content="Transparent pricing for all cleaning services. Choose from Essential, Premium, Signature, or Elite Cleaning services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#F0F7F5] to-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F3D2E]/5 rounded-full text-[#0F3D2E] text-sm font-semibold mb-6 border border-[#0F3D2E]/10">
              <CheckCircle className="w-4 h-4" />
              <span>Transparent Pricing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Simple, <span className="text-[#0F3D2E]">Honest Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service tier that fits your lifestyle. No hidden fees.
            </p>
          </motion.div>

          {/* Base Price Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <div className="relative py-4 px-8 bg-white rounded-xl shadow-sm border-y-2 border-[#C9A24D]/40 inline-block">
              <div className="flex items-center gap-3 justify-center text-[#0F3D2E] font-medium text-lg">
                <Info className="w-5 h-5 text-[#C9A24D]" />
                <p>Nuestros precios base aplican a hogares de hasta 1,500 sq ft (3 recámaras / 2 baños).</p>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24 items-start">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <PricingCard
                  pkg={tier}
                  onChoose={() => handleChooseTier(tier.name)}
                />
              </motion.div>
            ))}
          </div>

          {/* Price Adjustment by Square Footage Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#0F3D2E] font-playfair mb-3">Price Adjustment by Square Footage</h2>
              <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto rounded-full mb-4 opacity-60" />
              <p className="text-gray-600">Fair pricing scaled to your home's specific needs.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {/* Visual / Info Side */}
                <div className="p-8 bg-[#0F3D2E]/5 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-[#0F3D2E] rounded-full flex items-center justify-center text-[#C9A24D] mb-6 shadow-lg border border-[#C9A24D]/20">
                    <LayoutDashboard className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F3D2E] mb-2">Larger Homes</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    For homes exceeding 1,500 sq ft, we apply a standardized adjustment to ensure our cleaners have the time needed to deliver our signature quality.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#C9A24D] font-bold uppercase tracking-wide">
                    <Home className="w-4 h-4" />
                    <span>Transparent Scaling</span>
                  </div>
                </div>

                {/* Tiers List */}
                <div className="p-8 space-y-4">
                  {adjustmentTiers.map((tier, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        tier.isPremium 
                          ? 'bg-[#0F3D2E] text-white border-[#0F3D2E] shadow-md transform hover:-translate-y-1' 
                          : 'bg-white border-gray-100 text-gray-700 hover:border-[#C9A24D]/50 hover:shadow-sm'
                      }`}
                    >
                      <div>
                        <span className={`block text-sm font-bold ${tier.isPremium ? 'text-[#C9A24D]' : 'text-[#0F3D2E]'}`}>
                          {tier.range}
                        </span>
                        <span className={`text-xs ${tier.isPremium ? 'text-gray-300' : 'text-gray-500'}`}>
                          {tier.detail}
                        </span>
                      </div>
                      <span className={`text-lg font-bold ${tier.isPremium ? 'text-white' : 'text-[#0F3D2E]'}`}>
                        {tier.increase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Promise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A24D]/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
            
            <h2 className="text-3xl font-bold text-[#0F3D2E] mb-10 text-center font-playfair relative z-10">
              Our Promise to You
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                'Professional & Vetted Team',
                'Eco-Friendly Supplies Included',
                '100% Satisfaction Guarantee',
                'Fully Insured & Bonded',
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#0F3D2E]/5 flex items-center justify-center group-hover:bg-[#0F3D2E] transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-[#0F3D2E] group-hover:text-[#C9A24D] transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-[#0F3D2E] transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default PricingPage;