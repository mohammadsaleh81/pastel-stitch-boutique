
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X, Home, Package, Info, Mail, Heart, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "صفحه اصلی", path: "/", icon: <Home size={16} /> },
    { name: "محصولات", path: "/products", icon: <Package size={16} /> },
    { name: "درباره ما", path: "/about", icon: <Info size={16} /> },
    { name: "تماس با ما", path: "/contact", icon: <Mail size={16} /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="bg-pastel-pink rounded-full p-2 mr-2 group-hover:animate-bounce relative">
            <ShoppingBag className="text-white h-6 w-6" />
            <span className="absolute -top-1 -right-1 text-lg animate-float">✨</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary-foreground flex items-center">
              <span className="text-pastel-pink mr-1">لایت</span> 
              <span>لند</span>
              <Sparkles className="h-4 w-4 text-pastel-yellow ml-1 animate-pulse" />
            </h1>
            <p className="text-xs text-gray-500">زیبایی را به خانه خود بیاورید 🕯️✨</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-full transition-all flex items-center gap-1 ${
                isActive(link.path)
                  ? "bg-pastel-pink text-white font-medium transform scale-105 shadow-md"
                  : "text-gray-600 hover:bg-pastel-pink hover:bg-opacity-20 hover:-translate-y-1"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <button className="bg-pastel-cream p-2 rounded-full hover:bg-opacity-80 transition-all relative animate-float">
            <Heart size={20} className="text-accent-foreground" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-pastel-pink rounded-full text-[10px] text-white flex items-center justify-center">0</span>
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-primary-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${
                  isActive(link.path)
                    ? "bg-pastel-pink text-white font-medium"
                    : "text-gray-600 hover:bg-pastel-pink hover:bg-opacity-20"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <button className="flex items-center gap-2 px-4 py-3 rounded-lg text-gray-600">
              <Heart size={18} className="text-accent-foreground" />
              <span>علاقه‌مندی‌ها</span>
              <span className="ml-auto bg-pastel-pink text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
