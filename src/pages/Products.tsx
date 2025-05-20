
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Filter, Search } from "lucide-react";

// Sample product data
const allProducts = [
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
  {
    id: 4,
    name: "بلوز سنتی گلدوزی شده",
    image: "https://images.pexels.com/photos/6069723/pexels-photo-6069723.jpeg",
    price: "۲۱۰,۰۰۰",
    category: "بلوز",
  },
  {
    id: 5,
    name: "شلوار راحتی نخی",
    image: "https://images.pexels.com/photos/6311649/pexels-photo-6311649.jpeg",
    price: "۱۹۰,۰۰۰",
    category: "شلوار",
  },
  {
    id: 6,
    name: "مانتو سنتی گلدوزی شده",
    image: "https://images.pexels.com/photos/6069561/pexels-photo-6069561.jpeg",
    price: "۴۵۰,۰۰۰",
    category: "مانتو",
  },
];

const categories = ["همه", "پیراهن", "شال و روسری", "تونیک", "بلوز", "شلوار", "مانتو"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "همه" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-pastel-mint bg-opacity-30 py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">محصولات ما</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مجموعه‌ای از بهترین لباس‌های دست‌دوز ما با طراحی منحصر به فرد
            </p>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto">
            {/* Search & Filter */}
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="جستجو در محصولات..."
                  className="w-full py-2 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-pink pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>

              <button
                className="md:hidden flex items-center gap-2 py-2 px-4 bg-pastel-cream rounded-full"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={18} />
                فیلتر محصولات
              </button>

              <div className={`md:flex gap-2 w-full md:w-auto ${isFilterOpen ? 'flex flex-wrap' : 'hidden'}`}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`py-2 px-4 rounded-full transition-all ${
                      selectedCategory === category
                        ? "bg-pastel-pink text-primary-foreground"
                        : "bg-gray-100 text-gray-600 hover:bg-pastel-pink hover:bg-opacity-30"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium">محصولی یافت نشد</h3>
                <p className="text-gray-600 mt-2">لطفاً جستجو یا فیلتر خود را تغییر دهید</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
