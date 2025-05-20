
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Home, Info, ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pastel-cream bg-opacity-30 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">فروشگاه شمع و دکوری</h3>
            <p className="text-gray-600">
              شمع‌های معطر و لوازم دکوری زیبا برای خانه شما، با کیفیت عالی و طراحی منحصر به فرد
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">بخش‌های سایت</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-foreground flex items-center gap-2">
                  <Home size={16} /> صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary-foreground flex items-center gap-2">
                  <ShoppingBag size={16} /> محصولات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-foreground flex items-center gap-2">
                  <Info size={16} /> درباره ما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-foreground flex items-center gap-2">
                  <Mail size={16} /> تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-gray-600" />
                <span className="text-gray-600">۰۹۱۲۳۴۵۶۷۸۹</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-gray-600" />
                <span className="text-gray-600">info@candleshop.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Home size={16} className="text-gray-600" />
                <span className="text-gray-600">تهران، خیابان ولیعصر</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-pastel-cream mt-8 pt-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} - تمامی حقوق محفوظ است</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
