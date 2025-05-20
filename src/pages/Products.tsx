
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Filter, Search } from "lucide-react";

// Sample product data
const allProducts = [
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
  {
    id: 4,
    name: "ست شمع استوانه‌ای",
    image: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg",
    price: "۱۸۰,۰۰۰",
    category: "شمع دکوری",
  },
  {
    id: 5,
    name: "جاشمعی چوبی",
    image: "https://images.pexels.com/photos/2931615/pexels-photo-2931615.jpeg",
    price: "۸۵,۰۰۰",
    category: "جاشمعی",
  },
  {
    id: 6,
    name: "ست دکوری هندسی",
    image: "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg",
    price: "۲۲۰,۰۰۰",
    category: "ست دکوری",
  },
];

const categories = ["همه", "شمع معطر", "شمع دکوری", "گلدان", "جاشمعی", "دکوری دیواری", "ست دکوری"];

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
        <div className="bg-pastel-cream bg-opacity-30 py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">محصولات ما</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مجموعه‌ای از بهترین شمع‌ها و اکسسوری‌های دکوراتیو برای خانه شما
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
                  className="w-full py-2 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-cream pr-10"
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
                        ? "bg-pastel-cream text-accent-foreground"
                        : "bg-gray-100 text-gray-600 hover:bg-pastel-cream hover:bg-opacity-30"
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
