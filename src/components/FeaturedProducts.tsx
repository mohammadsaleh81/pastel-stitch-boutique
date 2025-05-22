
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Package, Star, Sparkles, Heart, Gift, Bookmark } from "lucide-react";

// Sample product data with cute fantasy candle images
const featuredProducts = [
  {
    id: 1,
    name: "شمع معطر وانیلی",
    image: "https://images.pexels.com/photos/7173789/pexels-photo-7173789.jpeg",
    price: "۹۵,۰۰۰",
    category: "شمع معطر",
  },
  {
    id: 2,
    name: "شمع فانتزی رنگارنگ",
    image: "https://images.pexels.com/photos/8141223/pexels-photo-8141223.jpeg",
    price: "۱۲۰,۰۰۰",
    category: "شمع دکوری",
  },
  {
    id: 3,
    name: "شمع طرح گل رز",
    image: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg",
    price: "۱۵۰,۰۰۰",
    category: "شمع دکوری",
  },
];

const FeaturedProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-pastel-pink/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pastel-mint/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pastel-lavender/10 rounded-full blur-3xl"></div>
      
      {/* Floating emojis */}
      <div className="absolute top-10 right-10 text-4xl animate-float">🕯️</div>
      <div className="absolute bottom-20 left-10 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🎁</div>
      <div className="absolute top-1/3 right-1/4 text-3xl animate-float" style={{ animationDelay: '0.8s' }}>🌸</div>
      <div className="absolute bottom-1/4 right-20 text-3xl animate-float" style={{ animationDelay: '2.2s' }}>💝</div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Cute section title with decorations */}
          <div className="inline-block relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-pastel-cream rounded-full animate-pulse opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pastel-mint rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }}></div>
            
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground relative z-10 bg-white/60 px-6 py-2 rounded-full shadow-sm">
              ✨ محصولات ویژه ✨
            </h2>
            
            <div className="absolute -top-8 -right-10 text-4xl animate-float">✨</div>
            <div className="absolute -bottom-6 -left-10 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🎁</div>
            <div className="absolute inset-0 bg-pastel-pink/20 rounded-full -z-10 w-[120%] h-[120%] mx-auto my-auto transform -translate-x-[10%] -translate-y-[10%]"></div>
          </div>
          
          {/* Cute description with heart bullet points */}
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 bg-white/50 p-3 rounded-xl shadow-sm relative">
            <span className="absolute -top-3 -right-3 text-xl animate-float">🌟</span>
            <span className="absolute -bottom-3 -left-3 text-xl animate-float" style={{ animationDelay: '0.7s' }}>🌟</span>
            مجموعه‌ای از زیباترین شمع‌ها و لوازم دکوری برای زیباتر کردن فضای خانه شما
          </p>
          
          {/* Cute feature tags with animations */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-lg mx-auto">
            <span className="inline-block bg-pastel-pink bg-opacity-50 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-80 transition-all hover:scale-110 transform shadow-md">
              <Star size={16} fill="#FFDEE2" stroke="#FFDEE2" className="animate-pulse" /> دست‌ساز
            </span>
            <span className="inline-block bg-pastel-mint bg-opacity-50 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-80 transition-all hover:scale-110 transform shadow-md">
              <Heart size={16} fill="#D1E8E0" stroke="#D1E8E0" className="animate-pulse" /> با کیفیت
            </span>
            <span className="inline-block bg-pastel-yellow bg-opacity-50 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-80 transition-all hover:scale-110 transform shadow-md">
              <Sparkles size={16} className="text-amber-400 animate-pulse" /> قیمت مناسب
            </span>
            <span className="inline-block bg-pastel-lavender bg-opacity-50 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-80 transition-all hover:scale-110 transform shadow-md">
              <Gift size={16} className="text-purple-400 animate-pulse" /> هدیه مناسب
            </span>
            <span className="inline-block bg-pastel-cream bg-opacity-50 px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-80 transition-all hover:scale-110 transform shadow-md">
              <Bookmark size={16} className="text-amber-600 animate-pulse" /> طراحی خاص
            </span>
          </div>
        </div>

        {/* Product grid with hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="transform transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <>
                  <div className="absolute -top-2 -right-2 text-xl animate-float z-20">✨</div>
                  <div className="absolute -bottom-2 -left-2 text-xl animate-float z-20" style={{ animationDelay: '0.3s' }}>✨</div>
                </>
              )}
              <ProductCard key={product.id} {...product} />
            </div>
          ))}
        </div>

        {/* Cute "view all" button with animations */}
        <div className="mt-16 text-center">
          <div className="relative inline-block group">
            {/* Button decorations */}
            <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-cream to-pastel-mint rounded-full blur-lg opacity-70 group-hover:opacity-90 transition-opacity"></div>
            
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-3 py-4 px-8 rounded-full relative hover:shadow-xl hover:shadow-pastel-pink/30 transition-all group-hover:scale-105 transform duration-300"
            >
              <Package size={20} className="group-hover:animate-bounce" />
              مشاهده همه محصولات
              <span className="inline-block rotate-180 animate-bounce">&#8594;</span>
            </Link>
            
            {/* Animated emoji cloud around button on hover */}
            <div className="absolute -top-8 -right-8 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float">🎁</div>
            <div className="absolute -bottom-8 -left-8 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float" style={{ animationDelay: '0.7s' }}>🌸</div>
            <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float" style={{ animationDelay: '0.3s' }}>🕯️</div>
          </div>
          
          {/* Cute emoji row */}
          <div className="flex justify-center mt-6 gap-4">
            {[..."✨🕯️🎁💖🌸"].map((emoji, index) => (
              <span 
                key={index} 
                className="text-2xl opacity-80 animate-float hover:animate-bounce cursor-pointer transition-all hover:scale-125 transform"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
          
          {/* Cute decorative divider */}
          <div className="mt-8 max-w-xs mx-auto flex items-center gap-4">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-pastel-pink to-transparent flex-grow"></div>
            <span className="text-xl">🌟</span>
            <div className="h-0.5 bg-gradient-to-r from-pastel-pink via-transparent to-pastel-pink flex-grow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
