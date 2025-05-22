
import React from "react";
import { Link } from "react-router-dom";
import { Star, Heart, Package, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-pastel-pink/40 to-white py-20 px-4 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-pastel-cream opacity-30 blur-2xl"></div>
        <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full bg-pastel-mint opacity-30 blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-52 h-52 rounded-full bg-pastel-lavender opacity-20 blur-xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right relative">
            {/* Floating tags */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2 mb-4">
              <span className="inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-primary-foreground flex items-center gap-1 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                <Star size={14} fill="#FEF7CD" className="text-accent-foreground" />
                محصولات دست‌ساز
              </span>
              <span className="inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-accent-foreground flex items-center gap-1 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                <Heart size={14} fill="#FFDEE2" className="text-primary-foreground" />
                طراحی خاص
              </span>
              <span className="inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-primary-foreground flex items-center gap-1 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                <Sparkles size={14} className="text-amber-400" />
                قیمت مناسب
              </span>
            </div>

            {/* Main heading with decorations */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="relative inline-block text-pastel-pink">
                لایت لند
                <span className="absolute -top-6 -right-6 text-3xl animate-float">✨</span>
              </span> 
              <br />
              <span className="relative inline-block">
                شمع‌ها 
                <span className="absolute -top-6 -left-6 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🕯️</span>
              </span> 
              {" "}و{" "} 
              <span className="relative inline-block text-accent-foreground">
                دکوری‌های
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-pastel-yellow/30 -z-10 transform -rotate-1"></div>
              </span>
              {" "}زیبا
            </h1>
            
            <p className="text-gray-600 mb-8 text-lg relative">
              مجموعه‌ای منحصر به فرد از شمع‌های معطر و لوازم دکوری برای زیباتر کردن فضای خانه
              <span className="absolute -bottom-4 right-1/3 text-xl animate-float" style={{ animationDelay: '1.2s' }}>🕯️</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/products" className="btn-primary flex items-center gap-2 group">
                <Package size={18} className="group-hover:animate-pulse" />
                <span>مشاهده محصولات</span>
                <span className="absolute -top-6 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity animate-float">🎁</span>
              </Link>
              <Link to="/about" className="btn-secondary flex items-center gap-2 group">
                <Star size={18} className="group-hover:animate-pulse" />
                <span>درباره ما</span>
                <span className="absolute -bottom-6 -left-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity animate-float">✨</span>
              </Link>
            </div>
          </div>
          
          <div className="relative mt-12 md:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-xl transform transition-all hover:scale-105 duration-300 hover:shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7194420/pexels-photo-7194420.jpeg"
                alt="Cute Fantasy Candles"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                <p className="text-white text-center text-sm md:text-base font-medium">
                  <span className="inline-block mr-2 animate-float" style={{ animationDelay: '0.3s' }}>✨</span>
                  <span className="text-pastel-pink font-bold">لایت لند</span> - شمع‌های خاص و فانتزی با رایحه‌های طبیعی
                  <span className="inline-block ml-2 animate-float" style={{ animationDelay: '0.7s' }}>✨</span>
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-5 left-5 md:-top-10 md:-left-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-pastel-mint opacity-70 animate-float" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute bottom-16 right-5 md:-bottom-5 md:-right-5 w-12 h-12 md:w-20 md:h-20 rounded-full bg-pastel-lavender opacity-70 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-4 left-12 md:-bottom-10 md:left-16 w-10 h-10 md:w-16 md:h-16 rounded-full bg-pastel-yellow opacity-70 animate-float" style={{ animationDelay: '0.8s' }}></div>
            
            {/* Emoji decorations */}
            <div className="absolute top-20 md:top-36 right-0 md:-right-10 text-2xl md:text-4xl animate-float" style={{ animationDelay: '1s' }}>🕯️</div>
            <div className="absolute bottom-12 md:bottom-16 left-0 md:-left-8 text-2xl md:text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🎁</div>
            <div className="absolute top-4 right-12 md:-top-6 md:right-28 text-2xl md:text-4xl animate-float" style={{ animationDelay: '0.7s' }}>✨</div>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute -top-16 -left-16 w-40 h-40 md:w-64 md:h-64 rounded-full bg-pastel-cream opacity-30 blur-md"></div>
      <div className="absolute -bottom-20 -right-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-pastel-mint opacity-30 blur-md"></div>
      <div className="absolute top-1/4 right-10 text-5xl md:text-6xl animate-float opacity-40">✨</div>
      <div className="absolute bottom-1/4 left-10 text-5xl md:text-6xl animate-float opacity-40" style={{ animationDelay: '1.2s' }}>🕯️</div>
    </div>
  );
};

export default Hero;
