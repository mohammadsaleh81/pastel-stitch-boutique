
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Package, Sparkles, Gift } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => setShowSparkle(true), 300);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowSparkle(false);
  };

  // Enhanced cute ribbon styling
  const ribbonColors = {
    "شمع معطر": "bg-pastel-pink text-primary-foreground",
    "شمع دکوری": "bg-pastel-mint text-primary-foreground",
    "گلدان": "bg-pastel-yellow text-primary-foreground",
    "جاشمعی": "bg-pastel-lavender text-primary-foreground",
    "ست دکوری": "bg-pastel-cream text-accent-foreground",
  };

  const ribbonColor = ribbonColors[category as keyof typeof ribbonColors] || "bg-pastel-cream bg-opacity-90 text-accent-foreground";

  return (
    <div 
      className="card group hover:-translate-y-3 transition-transform duration-300 rounded-2xl relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gift box decoration for product */}
      <div className="absolute -top-4 -right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        <Gift size={20} className="text-pastel-pink animate-bounce" />
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Decorative sparkles */}
      {showSparkle && (
        <>
          <div className="absolute top-2 right-10 text-xl animate-float z-10 opacity-70">✨</div>
          <div className="absolute bottom-10 left-5 text-xl animate-float z-10 opacity-70" style={{ animationDelay: '0.5s' }}>✨</div>
        </>
      )}
      
      <div className="relative overflow-hidden rounded-xl h-64 shadow-lg bg-white">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-black/5 via-transparent to-black/30"></div>
        
        {/* Cute ribbon category tag */}
        <div className="absolute top-3 left-0">
          <span className={`${ribbonColor} px-3 py-1.5 rounded-r-full text-sm flex items-center gap-1 shadow-sm hover:pr-5 transition-all duration-300`}>
            <Package size={14} className="text-inherit" />
            {category}
          </span>
        </div>
        
        {/* Heart favorite button with animation */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)} 
          className={`absolute top-2 right-2 bg-white/90 p-2 rounded-full hover:bg-pastel-pink transition-all hover:scale-125 shadow-sm ${isFavorite ? 'animate-wiggle' : ''}`}
        >
          <Heart 
            size={18} 
            fill={isFavorite ? "#FFDEE2" : "transparent"} 
            className={`${isFavorite ? "text-red-500" : "text-gray-600"} transition-colors`} 
          />
        </button>
        
        {/* Floating add to cart button */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-pastel-pink hover:bg-pastel-pink/90 text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-all">
              <ShoppingBag size={16} />
              افزودن به سبد
            </button>
          </div>
        )}
        
        {/* Cute decorative corner */}
        <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-pastel-mint rounded-tr-xl"></div>
      </div>

      <div className="pt-4 pb-2 px-2">
        {/* Product name with cute font */}
        <h3 className="font-medium text-lg text-primary-foreground group-hover:text-primary-foreground/80 transition-colors">{name}</h3>
        
        <div className="flex justify-between items-center mt-2">
          {/* Price with cute animation */}
          <div className="relative">
            <span className="text-primary-foreground font-bold flex items-center gap-1">
              {price} 
              <span className="text-xs">تومان</span>
              {isHovered && <Sparkles size={14} className="text-amber-400 animate-pulse" />}
            </span>
          </div>
          
          {/* Add to cart button with lovely shadow effects */}
          <button className="bg-pastel-pink p-2 rounded-full hover:scale-110 hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md">
            <ShoppingBag size={20} className="text-white" />
          </button>
        </div>
      </div>
      
      {/* Animated decorations */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-pastel-yellow rounded-full opacity-0 group-hover:opacity-70 transition-all duration-300 animate-pulse"></div>
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-pastel-mint rounded-full opacity-0 group-hover:opacity-70 transition-all duration-300 delay-100 animate-pulse"></div>
    </div>
  );
};

export default ProductCard;
