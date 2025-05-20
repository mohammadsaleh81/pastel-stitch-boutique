
import React from "react";
import { Link } from "react-router-dom";
import { Star, Heart, Package } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-pastel-pink to-white py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right relative z-10">
            <div className="mb-2 flex justify-center md:justify-end gap-2">
              <span className="inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-primary-foreground flex items-center gap-1 shadow-md">
                <Star size={14} fill="#FEF7CD" className="text-accent-foreground" />
                محصولات دست‌ساز
              </span>
              <span className="inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-accent-foreground flex items-center gap-1 shadow-md">
                <Heart size={14} fill="#FFDEE2" className="text-primary-foreground" />
                طراحی خاص
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="relative">
                شمع‌ها 
                <span className="absolute -top-6 -right-6 text-3xl animate-bounce">✨</span>
              </span> و <span className="text-accent-foreground">دکوری‌های</span> زیبا برای خانه شما
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              مجموعه‌ای منحصر به فرد از شمع‌های معطر و لوازم دکوری برای زیباتر کردن فضای خانه
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/products" className="btn-primary animate-float flex items-center gap-2">
                <Package size={18} />
                مشاهده محصولات
              </Link>
              <Link to="/about" className="btn-secondary flex items-center gap-2">
                <Star size={18} />
                درباره ما
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-full overflow-hidden border-8 border-white shadow-xl transform transition-all hover:scale-105 duration-300">
              <img
                src="https://images.pexels.com/photos/7194420/pexels-photo-7194420.jpeg"
                alt="Cute Fantasy Candles"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-white text-center text-sm md:text-base font-medium">✨ شمع‌های خاص و فانتزی با رایحه‌های طبیعی ✨</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-pastel-mint opacity-60 animate-float" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-pastel-lavender opacity-60 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-5 left-16 w-10 h-10 rounded-full bg-pastel-yellow opacity-60 animate-float" style={{ animationDelay: '0.8s' }}></div>
            
            {/* Emoji decorations */}
            <div className="absolute top-28 right-0 animate-float" style={{ animationDelay: '1s' }}>🕯️</div>
            <div className="absolute bottom-16 left-4 animate-float" style={{ animationDelay: '1.5s' }}>🎁</div>
            <div className="absolute top-4 right-16 animate-float" style={{ animationDelay: '0.7s' }}>✨</div>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="hidden md:block absolute -top-16 -left-16 w-40 h-40 rounded-full bg-pastel-cream opacity-50"></div>
      <div className="hidden md:block absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-pastel-mint opacity-40"></div>
      <div className="hidden md:block absolute top-1/4 right-10 text-6xl animate-float">✨</div>
      <div className="hidden md:block absolute bottom-1/4 left-10 text-6xl animate-float" style={{ animationDelay: '1.2s' }}>🕯️</div>
    </div>
  );
};

export default Hero;
