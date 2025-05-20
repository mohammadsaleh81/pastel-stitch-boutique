
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Package } from "lucide-react";

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

  return (
    <div 
      className="card group hover:-translate-y-2 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl h-64">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute top-2 left-2">
          <span className="bg-pastel-cream bg-opacity-90 text-accent-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1">
            <Package size={14} />
            {category}
          </span>
        </div>
        <button 
          onClick={() => setIsFavorite(!isFavorite)} 
          className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-pastel-pink transition-all"
        >
          <Heart 
            size={18} 
            fill={isFavorite ? "#FFDEE2" : "transparent"} 
            className={`${isFavorite ? "text-red-500" : "text-gray-600"} transition-colors`} 
          />
        </button>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="font-medium text-lg">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-primary-foreground font-bold">{price} تومان</span>
          <button className="bg-pastel-pink p-2 rounded-full hover:scale-110 hover:bg-opacity-90 transition-all">
            <ShoppingBag size={20} className="text-white" />
          </button>
        </div>
      </div>
      
      {/* Animated decoration */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-pastel-yellow rounded-full opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-pastel-mint rounded-full opacity-0 group-hover:opacity-70 transition-all duration-300 delay-100"></div>
    </div>
  );
};

export default ProductCard;
