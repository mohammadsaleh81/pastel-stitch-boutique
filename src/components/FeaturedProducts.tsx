
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Package, Star, Sparkles, Heart } from "lucide-react";

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
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-pastel-pink/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground relative z-10">محصولات ویژه</h2>
            <div className="absolute -top-8 -right-8 text-4xl animate-float">✨</div>
            <div className="absolute -bottom-6 -left-8 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🎁</div>
            <div className="absolute inset-0 bg-pastel-pink/20 rounded-full -z-10 w-[120%] h-[120%] mx-auto my-auto transform -translate-x-[10%] -translate-y-[10%]"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            مجموعه‌ای از زیباترین شمع‌ها و لوازم دکوری برای زیباتر کردن فضای خانه شما
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 max-w-md mx-auto">
            <span className="inline-block bg-pastel-pink bg-opacity-30 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-50 transition-all hover:scale-105 transform">
              <Star size={14} fill="#FFDEE2" stroke="#FFDEE2" /> دست‌ساز
            </span>
            <span className="inline-block bg-pastel-mint bg-opacity-30 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-50 transition-all hover:scale-105 transform">
              <Heart size={14} fill="#D1E8E0" stroke="#D1E8E0" /> با کیفیت
            </span>
            <span className="inline-block bg-pastel-yellow bg-opacity-30 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-50 transition-all hover:scale-105 transform">
              <Sparkles size={14} className="text-accent-foreground" /> قیمت مناسب
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-pastel-cream/50 rounded-full blur-lg"></div>
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-2 py-3 px-6 rounded-full relative hover:shadow-lg hover:shadow-pastel-pink/30 transition-all"
            >
              <Package size={18} />
              مشاهده همه محصولات
              <span className="inline-block rotate-180 animate-pulse">&#8594;</span>
            </Link>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {[..."✨🕯️🎁💖"].map((emoji, index) => (
              <span 
                key={index} 
                className="text-2xl opacity-70 animate-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
