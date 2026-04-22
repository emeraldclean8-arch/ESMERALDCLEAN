import React from "react";
import logo from "@/assets/logo.png";
const Logo = ({
  className = "",
  size = "md"
}) => {
  // Tamaños pensados para logos horizontales
  const sizeClasses = {
    sm: "w-28",
    // móvil / compacto
    md: "w-40",
    // navbar desktop
    lg: "w-56",
    // footer o secciones
    xl: "w-72" // hero / portada
  };
  const selectedSize = sizeClasses[size] || sizeClasses.md;
  return <div className={`relative flex items-center ${className}`}>
      <img src={logo} alt="Emerald Clean" className={`
          h-auto
          ${selectedSize}
          object-contain
          transition-transform
          duration-300
          hover:scale-105
          drop-shadow-md
        `} />
    </div>;
};
export default Logo;