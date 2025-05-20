
import React from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Features Section */}
        <section className="py-16 px-4 bg-pastel-mint bg-opacity-20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">چرا ما را انتخاب کنید</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                لباس‌های دست‌دوز ما با بهترین مواد و با دقت زیاد تولید می‌شوند
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-pastel-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">کیفیت عالی</h3>
                <p className="text-gray-600">
                  تمام محصولات ما با بهترین پارچه‌ها و با دقت زیاد دوخته می‌شوند
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-pastel-lavender p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">طراحی منحصر به فرد</h3>
                <p className="text-gray-600">
                  هر محصول ما طراحی منحصر به فردی دارد که در جای دیگر پیدا نمی‌کنید
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-pastel-cream p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-bold mb-2">ساخته شده با عشق</h3>
                <p className="text-gray-600">
                  تمام محصولات ما با عشق و علاقه ساخته می‌شوند
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeaturedProducts />

        {/* Testimonial Section */}
        <section className="py-16 px-4 bg-pastel-cream bg-opacity-30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">نظرات مشتریان</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                آنچه مشتریان ما در مورد محصولات ما می‌گویند
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-r-4 border-pastel-pink">
                <p className="text-gray-600 mb-4">
                  "من عاشق لباس‌های دست‌دوز این فروشگاه هستم! کیفیت عالی و طراحی منحصر به فرد آنها واقعاً خاص است."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pastel-pink rounded-full mr-3 flex items-center justify-center font-bold">س</div>
                  <div>
                    <h4 className="font-bold">سارا احمدی</h4>
                    <p className="text-sm text-gray-500">مشتری دائمی</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-r-4 border-pastel-mint">
                <p className="text-gray-600 mb-4">
                  "پیراهنی که از اینجا خریدم بی‌نظیر است! دوخت تمیز و پارچه با کیفیت. حتماً دوباره خرید خواهم کرد."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pastel-mint rounded-full mr-3 flex items-center justify-center font-bold">ن</div>
                  <div>
                    <h4 className="font-bold">نیلوفر محمدی</h4>
                    <p className="text-sm text-gray-500">مشتری راضی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
