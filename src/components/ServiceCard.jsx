import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from './Button';

const ServiceCard = ({ service, onSelect }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
    >
      <div className="p-8 flex-grow">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-[#135E4B] to-[#4CB572] rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Service Name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>

        {/* Price and Duration */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl font-bold text-[#135E4B]">${service.price}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-600">{service.duration}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#4CB572] flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="p-8 pt-0">
        <Button
          variant="primary"
          className="w-full group/btn"
          onClick={onSelect}
        >
          Select & Book
          <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;