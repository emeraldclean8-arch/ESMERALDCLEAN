import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

const PricingCard = ({ pkg, onChoose }) => {
  // Guard clause to prevent crashes if pkg is undefined
  if (!pkg) {
    return null;
  }

  const isPopular = pkg.mostPopular || false;
  const isElite = pkg.name === 'Elite Clean';
  
  // Icon selection based on package name or passed icon
  const getIcon = () => {
    if (pkg.icon) return pkg.icon;
    if (pkg.name && pkg.name.includes('Essential')) return Sparkles;
    if (pkg.name && pkg.name.includes('Elite')) return Crown;
    return Star;
  };
  
  const Icon = getIcon();

  // Helper to extract price and recommendation status
  const getPriceDetails = (priceData) => {
    if (typeof priceData === 'object' && priceData !== null) {
      return { price: priceData.price, recommended: priceData.recommended };
    }
    return { price: priceData, recommended: false };
  };

  // Safe access to nested properties
  const pricing = pkg.pricing || {};
  const features = pkg.features || [];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className={`relative flex flex-col h-full rounded-3xl transition-all duration-500 overflow-hidden ${
        isPopular 
          ? 'bg-gradient-to-b from-[#E6C87A]/10 via-white to-white border border-[#C9A24D]/60 shadow-xl shadow-[#C9A24D]/5' 
          : 'bg-white border border-gray-100 shadow-lg hover:border-[#C9A24D]/30 hover:shadow-xl'
      }`}
    >
      {/* Most Popular Badge - Refined to Emerald Core with Gold Signature text */}
      {isPopular && (
        <div className="absolute top-0 inset-x-0 flex justify-center -mt-3.5 z-10">
          <div className="bg-[#0F3D2E] text-[#C9A24D] px-6 py-1 rounded-full text-[10px] font-bold shadow-sm flex items-center gap-2 border border-[#C9A24D]/40 tracking-widest uppercase">
            <Star className="w-3 h-3 text-[#F5D76E] fill-[#F5D76E]" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card Header */}
      <div className="p-8 pb-4">
        <div className="flex justify-between items-start mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-300 ${
            isPopular || isElite
              ? 'bg-[#0F3D2E] text-[#C9A24D] border border-[#C9A24D]/20' 
              : 'bg-[#0F3D2E]/5 text-[#0F3D2E] border border-[#0F3D2E]/10'
          }`}>
            <Icon className="w-7 h-7" />
          </div>
          {isElite && (
            <span className="text-[#0F3D2E] border border-[#C9A24D] bg-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Premium
            </span>
          )}
        </div>

        <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-[#0F3D2E]' : 'text-gray-900'}`}>{pkg.name}</h3>
        <p className={`text-sm font-medium mb-4 flex items-center gap-2 ${isPopular ? 'text-[#C9A24D]' : 'text-[#1F7A63]'}`}>
          {isPopular && <Sparkles className="w-3 h-3 text-[#F5D76E]" />}
          {pkg.subtitle}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-[#C9A24D]/10 pb-6">
          {pkg.description}
        </p>
      </div>

      {/* Pricing Section */}
      <div className="px-8 pb-2">
        {pricing.startingPrice ? (
          <div className={`rounded-2xl p-6 text-center border ${
            isElite ? 'bg-[#0F3D2E]/5 border-[#C9A24D]/30' : 'bg-gray-50 border-gray-100'
          }`}>
            <span className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Starting From</span>
            <span className={`text-4xl font-bold ${isElite ? 'text-[#0F3D2E]' : 'text-gray-900'}`}>${pricing.startingPrice}</span>
          </div>
        ) : (
          <div className="space-y-3">
            {['weekly', 'biweekly', 'monthly'].map((tier) => {
              const details = getPriceDetails(pricing[tier]);
              if (!details.price) return null;
              
              return (
                <div 
                  key={tier}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 group ${
                    details.recommended 
                      ? 'bg-[#E6C87A]/10 border-[#C9A24D]/40' 
                      : 'bg-white border-gray-100 hover:border-[#C9A24D]/30 hover:bg-[#E6C87A]/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`capitalize text-sm font-medium ${details.recommended ? 'text-[#0F3D2E]' : 'text-gray-600 group-hover:text-[#0F3D2E]'}`}>
                      {tier}
                    </span>
                    {details.recommended && (
                      <span className="text-[9px] font-bold text-white bg-[#0F3D2E] px-2 py-0.5 rounded-full">
                        BEST VALUE
                      </span>
                    )}
                  </div>
                  <span className={`font-bold ${details.recommended ? 'text-[#0F3D2E]' : 'text-gray-900'}`}>
                    ${details.price}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Features */}
      <div className="px-8 py-8 flex-grow">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                isPopular 
                  ? 'bg-[#0F3D2E]/10 text-[#0F3D2E]' 
                  : 'bg-[#0F3D2E]/5 text-[#0F3D2E] group-hover:text-[#C9A24D] group-hover:bg-[#0F3D2E]/10'
              }`}>
                <Check className="w-3 h-3" />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Best For & Footer */}
      <div className="px-8 pb-8 mt-auto">
        {pkg.bestFor && (
          <div className="mb-6 pt-6 border-t border-[#C9A24D]/10">
            <p className="text-[10px] font-bold text-[#C9A24D] uppercase tracking-wider mb-2 flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#F5D76E] text-[#F5D76E]" /> Best For
            </p>
            <p className="text-xs text-gray-500 italic leading-relaxed">"{pkg.bestFor}"</p>
          </div>
        )}

        <button
          onClick={onChoose}
          className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-md transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 ${
            isPopular 
              ? 'bg-[#0F3D2E] text-white hover:bg-[#1F7A63] border border-transparent' 
              : isElite
                ? 'bg-[#0F3D2E] text-[#C9A24D] hover:bg-[#1F7A63] border border-[#C9A24D]/30'
                : 'bg-white text-[#0F3D2E] border border-[#0F3D2E] hover:bg-[#0F3D2E] hover:text-white'
          }`}
        >
          {isPopular && <Sparkles className="w-4 h-4 text-[#F5D76E]" />}
          {pricing.startingPrice ? 'Get a Custom Quote' : 'Select Plan'}
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;