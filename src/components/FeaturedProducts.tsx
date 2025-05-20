
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "پیراهن دست‌دوز گلدار",
    image: "https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg",
    price: "۲۸۰,۰۰۰",
    category: "پیراهن",
  },
  {
    id: 2,
    name: "شال دست‌دوز نخی",
    image: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg",
    price: "۱۲۰,۰۰۰",
    category: "شال و روسری",
  },
  {
    id: 3,
    name: "تونیک طرح سنتی",
    image: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg",
    price: "۳۵۰,۰۰۰",
    category: "تونیک",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">محصولات ویژه</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مجموعه‌ای از بهترین محصولات ما که با دقت و ظرافت دست‌دوز شده‌اند
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
