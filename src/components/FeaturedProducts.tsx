
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

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
          <h2 className="text-3xl font-bold mb-4">محصولات ویژه</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مجموعه‌ای از زیباترین شمع‌ها و لوازم دکوری برای زیباتر کردن فضای خانه شما
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="btn-primary inline-flex items-center gap-2"
          >
            مشاهده همه محصولات
            <span className="inline-block rotate-180">&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
