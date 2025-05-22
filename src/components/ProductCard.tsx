
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Package, Sparkles } from "lucide-react";

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

  return (
    <div 
      className="card group hover:-translate-y-2 transition-transform duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative sparkles */}
      {showSparkle && (
        <>
          <div className="absolute top-2 right-10 text-xl animate-float z-10 opacity-70">✨</div>
          <div className="absolute bottom-10 left-5 text-xl animate-float z-10 opacity-70" style={{ animationDelay: '0.5s' }}>✨</div>
        </>
      )}
      
      <div className="relative overflow-hidden rounded-xl h-64">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-black/5 via-transparent to-black/30"></div>
        <div className="absolute top-2 left-2">
          <span className="bg-pastel-cream bg-opacity-90 text-accent-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-sm hover:bg-opacity-100 transition-all">
            <Package size={14} className="text-accent-foreground" />
            {category}
          </span>
        </div>
        <button 
          onClick={() => setIsFavorite(!isFavorite)} 
          className="absolute top-2 right-2 bg-white/90 p-2 rounded-full hover:bg-pastel-pink transition-all hover:scale-110 shadow-sm"
        >
          <Heart 
            size={18} 
            fill={isFavorite ? "#FFDEE2" : "transparent"} 
            className={`${isFavorite ? "text-red-500" : "text-gray-600"} transition-colors`} 
          />
        </button>
        
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-pastel-pink hover:bg-pastel-pink/90 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-all">
              <ShoppingBag size={16} />
              افزودن به سبد
            </button>
          </div>
        )}
      </div>

      <div className="pt-4 pb-2">
        <h3 className="font-medium text-lg text-primary-foreground group-hover:text-primary-foreground/80 transition-colors">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <div className="relative">
            <span className="text-primary-foreground font-bold flex items-center gap-1">
              {price} 
              <span className="text-xs">تومان</span>
              {isHovered && <Sparkles size={14} className="text-amber-400 animate-pulse" />}
            </span>
          </div>
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
