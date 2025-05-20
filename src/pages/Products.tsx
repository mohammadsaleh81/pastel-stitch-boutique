
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Filter, Search, Package, Star, Heart } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState<any[]>([]);

  // ایجاد تأخیر برای نمایش انیمیشن لودینگ
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // نمایش تدریجی محصولات با انیمیشن
  useEffect(() => {
    if (!isLoading) {
      const filteredProducts = allProducts.filter((product) => {
        const matchesCategory = selectedCategory === "همه" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      
      setVisibleProducts([]);
      if (filteredProducts.length > 0) {
        const showProducts = () => {
          filteredProducts.forEach((product, index) => {
            setTimeout(() => {
              setVisibleProducts(prev => [...prev, product]);
            }, index * 100);
          });
        };
        showProducts();
      }
    }
  }, [isLoading, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-b from-pastel-pink to-white py-12 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full">
            <div className="flex justify-between">
              {[..."✨🕯️🎁💝✨"].map((emoji, index) => (
                <div 
                  key={index} 
                  className="text-2xl animate-float opacity-60" 
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <div className="inline-block relative mb-6">
              <h1 className="text-4xl font-bold">محصولات ما</h1>
              <div className="absolute -top-4 -right-6 text-2xl animate-float">✨</div>
              <div className="absolute -bottom-2 -left-6 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>🕯️</div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مجموعه‌ای از بهترین شمع‌ها و اکسسوری‌های دکوراتیو برای خانه شما
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <span className="bg-white shadow-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Package size={14} className="text-pastel-pink" /> انواع محصولات
              </span>
              <span className="bg-white shadow-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Star size={14} fill="#FFDEE2" className="text-pastel-pink" /> با کیفیت
              </span>
              <span className="bg-white shadow-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Heart size={14} fill="#FFDEE2" className="text-pastel-pink" /> منحصر به فرد
              </span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto">
            {/* Search & Filter */}
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl shadow-md">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="جستجو در محصولات..."
                  className="w-full py-2 px-4 rounded-full border border-pastel-pink border-opacity-30 focus:outline-none focus:ring-2 focus:ring-pastel-pink pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-pastel-pink" size={18} />
              </div>

              <button
                className="md:hidden flex items-center gap-2 py-2 px-4 bg-pastel-cream rounded-full"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={18} className="text-accent-foreground" />
                فیلتر محصولات
              </button>

              <div className={`md:flex gap-2 w-full md:w-auto ${isFilterOpen ? 'flex flex-wrap' : 'hidden'}`}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`py-2 px-4 rounded-full transition-all ${
                      selectedCategory === category
                        ? "bg-pastel-cream text-accent-foreground shadow-md transform -translate-y-1"
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
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-4 h-4 rounded-full bg-pastel-pink animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    ></div>
                  ))}
                </div>
                <p className="mt-4 text-gray-500">در حال بارگذاری محصولات...</p>
              </div>
            ) : visibleProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-md">
                <div className="text-6xl mb-4">😢</div>
                <h3 className="text-xl font-medium">محصولی یافت نشد</h3>
                <p className="text-gray-600 mt-2 mb-4">لطفاً جستجو یا فیلتر خود را تغییر دهید</p>
                <button 
                  className="btn-secondary"
                  onClick={() => {
                    setSelectedCategory("همه");
                    setSearchQuery("");
                  }}
                >
                  نمایش همه محصولات
                </button>
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
