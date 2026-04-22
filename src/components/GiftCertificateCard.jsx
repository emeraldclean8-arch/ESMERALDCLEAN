import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Check, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const GiftCertificateCard = ({ certificate, onPurchase }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <div className="bg-[#135E4B]/5 p-8 text-center border-b border-[#135E4B]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Gift className="w-24 h-24 text-[#135E4B]" />
        </div>
        <h3 className="text-2xl font-bold text-[#135E4B] mb-2">{certificate.name}</h3>
        <div className="text-4xl font-bold text-gray-900 mb-2">${certificate.price}</div>
        <p className="text-sm text-gray-600 italic">{certificate.subtitle}</p>
      </div>
      
      <div className="p-8 flex-grow flex flex-col justify-between">
        <p className="text-gray-600 mb-6 leading-relaxed">
          {certificate.description}
        </p>
        
        <div className="space-y-3 mb-8">
          {certificate.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#4CB572] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        {certificate.closingText && (
  <p className="mt-4 text-sm italic text-gray-500">
    {certificate.closingText}
  </p>
)}
        <Button 
          onClick={() => onPurchase(certificate)}
          className="w-full bg-[#135E4B] hover:bg-[#0f4a3a] text-white flex items-center justify-center gap-2 group"
        >
          Purchase Gift
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

export default GiftCertificateCard;