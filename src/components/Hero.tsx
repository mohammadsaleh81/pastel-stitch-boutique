
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-pastel-cream to-white py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              شمع‌ها و <span className="text-accent-foreground">دکوری‌های</span> زیبا برای خانه شما
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              مجموعه‌ای منحصر به فرد از شمع‌های معطر و لوازم دکوری برای زیباتر کردن فضای خانه
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link to="/products" className="btn-primary animate-float">
                مشاهده محصولات
              </Link>
              <Link to="/about" className="btn-secondary">
                درباره ما
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img
                src="https://images.pexels.com/photos/278446/pexels-photo-278446.jpeg"
                alt="Candles and Home Decor"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-pastel-mint opacity-60 animate-float" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-pastel-lavender opacity-60 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-5 left-16 w-10 h-10 rounded-full bg-pastel-yellow opacity-60 animate-float" style={{ animationDelay: '0.8s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="hidden md:block absolute -top-16 -left-16 w-40 h-40 rounded-full bg-pastel-cream opacity-50"></div>
      <div className="hidden md:block absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-pastel-mint opacity-40"></div>
    </div>
  );
};

export default Hero;
