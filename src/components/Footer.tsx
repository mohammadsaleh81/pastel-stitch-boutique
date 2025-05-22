
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Home, Info, ShoppingBag, Gift, Heart, Star, Package, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-pastel-pink to-pastel-pink/30 py-8 mt-16 rounded-t-3xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-pastel-yellow rounded-full flex items-center justify-center relative">
                <Package size={20} className="text-accent-foreground" />
                <span className="absolute -top-2 -right-2 text-lg">✨</span>
              </div>
              <h3 className="text-xl font-bold flex items-center">
                <span className="text-pastel-pink mr-1">لایت</span> 
                <span>لند</span>
                <Sparkles className="h-4 w-4 text-pastel-yellow ml-1" />
              </h3>
            </div>
            <p className="text-gray-600">
              شمع‌های معطر و لوازم دکوری زیبا برای خانه شما، با کیفیت عالی و طراحی منحصر به فرد ✨
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-pastel-mint rounded-full flex items-center justify-center">
                <Star size={20} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold">بخش‌های سایت</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-foreground flex items-center gap-2 hover:translate-x-1 transition-all">
                  <Home size={16} /> صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary-foreground flex items-center gap-2 hover:translate-x-1 transition-all">
                  <ShoppingBag size={16} /> محصولات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-foreground flex items-center gap-2 hover:translate-x-1 transition-all">
                  <Info size={16} /> درباره ما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-foreground flex items-center gap-2 hover:translate-x-1 transition-all">
                  <Mail size={16} /> تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-pastel-cream rounded-full flex items-center justify-center">
                <Heart size={20} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold">تماس با ما</h3>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-2 transition-all hover:-translate-y-1">
                <Phone size={16} className="text-pastel-pink" />
                <span className="text-gray-600">۰۹۱۲۳۴۵۶۷۸۹</span>
              </p>
              <p className="flex items-center gap-2 transition-all hover:-translate-y-1">
                <Mail size={16} className="text-pastel-pink" />
                <span className="text-gray-600">info@lightland.com</span>
              </p>
              <p className="flex items-center gap-2 transition-all hover:-translate-y-1">
                <Home size={16} className="text-pastel-pink" />
                <span className="text-gray-600">تهران، خیابان ولیعصر</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center">
          <div className="flex justify-center gap-3 mb-4">
            {["🕯️", "✨", "🎁", "💝", "🏡"].map((emoji, index) => (
              <div key={index} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <span className="text-lg">{emoji}</span>
              </div>
            ))}
          </div>
          <p className="text-white">© {new Date().getFullYear()} - لایت لند | تمامی حقوق محفوظ است</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
