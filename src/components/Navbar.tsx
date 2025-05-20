
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "صفحه اصلی", path: "/" },
    { name: "محصولات", path: "/products" },
    { name: "درباره ما", path: "/about" },
    { name: "تماس با ما", path: "/contact" },
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
        <Link to="/" className="flex items-center">
          <ShoppingBag className="text-pastel-pink h-8 w-8 ml-2" />
          <h1 className="text-xl font-bold text-primary-foreground">فروشگاه لباس دست‌دوز</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-full transition-all ${
                isActive(link.path)
                  ? "bg-pastel-pink text-primary-foreground font-medium"
                  : "text-gray-600 hover:text-primary-foreground hover:bg-pastel-pink hover:bg-opacity-30"
              }`}
            >
              {link.name}
            </Link>
          ))}
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
                className={`px-4 py-3 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-pastel-pink text-primary-foreground font-medium"
                    : "text-gray-600 hover:text-primary-foreground hover:bg-pastel-pink hover:bg-opacity-30"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
