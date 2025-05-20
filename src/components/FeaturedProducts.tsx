
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Package, Star } from "lucide-react";

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "شمع معطر وانیلی",
    image: "https://images.pexels.com/photos/278446/pexels-photo-278446.jpeg",
    price: "۹۵,۰۰۰",
    category: "شمع معطر",
  },
  {
    id: 2,
    name: "گلدان سرامیکی طرح گل",
    image: "https://images.pexels.com/photos/6069230/pexels-photo-6069230.jpeg",
    price: "۱۲۰,۰۰۰",
    category: "گلدان",
  },
  {
    id: 3,
    name: "آویز دیواری بوهو",
    image: "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg",
    price: "۱۵۰,۰۰۰",
    category: "دکوری دیواری",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-3xl font-bold mb-4">محصولات ویژه</h2>
            <div className="absolute -top-6 -right-6 text-3xl animate-float">✨</div>
            <div className="absolute -bottom-4 -left-6 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🎁</div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مجموعه‌ای از زیباترین شمع‌ها و لوازم دکوری برای زیباتر کردن فضای خانه شما
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="inline-block bg-pastel-pink bg-opacity-30 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Star size={14} fill="#FFDEE2" /> دست‌ساز
            </span>
            <span className="inline-block bg-pastel-mint bg-opacity-30 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Star size={14} fill="#D1E8E0" /> با کیفیت
            </span>
            <span className="inline-block bg-pastel-yellow bg-opacity-30 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Star size={14} fill="#FEF7CD" /> قیمت مناسب
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="btn-primary inline-flex items-center gap-2 animate-float"
          >
            <Package size={18} />
            مشاهده همه محصولات
            <span className="inline-block rotate-180">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
