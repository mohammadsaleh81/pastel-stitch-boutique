
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-pastel-lavender bg-opacity-30 py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">درباره ما</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              داستان ما و چگونگی شروع کار در زمینه لباس‌های دست‌دوز
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  ما کار خود را از یک کارگاه کوچک در سال ۱۳۹۰ شروع کردیم. با عشق به هنر دوخت و دوز، تصمیم گرفتیم لباس‌هایی تولید کنیم که نه تنها زیبا باشند، بلکه داستانی را نیز با خود به همراه داشته باشند.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  هر محصولی که ما تولید می‌کنیم، دست‌دوز و منحصر به فرد است. ما از بهترین پارچه‌های موجود استفاده می‌کنیم و هر مرحله از تولید با دقت و ظرافت انجام می‌شود.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  امروز، ما افتخار می‌کنیم که محصولات ما در سراسر کشور محبوب هستند و بسیاری از مشتریان وفادار داریم که از کیفیت و زیبایی لباس‌های ما لذت می‌برند.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="bg-pastel-pink rounded-tl-[100px] rounded-br-[100px] h-96 w-full overflow-hidden border-8 border-white shadow-xl">
                    <img
                      src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg"
                      alt="Our Story"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-pastel-mint border-4 border-white overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/6069561/pexels-photo-6069561.jpeg"
                      alt="Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 bg-pastel-cream bg-opacity-30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">ارزش‌های ما</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                اصولی که ما در تولید محصولات خود به آنها پایبند هستیم
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-pastel-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">پایداری</h3>
                <p className="text-gray-600">
                  ما تلاش می‌کنیم تا با استفاده از مواد پایدار و تکنیک‌های سازگار با محیط زیست، تأثیر خود را بر محیط زیست به حداقل برسانیم.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-pastel-mint p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👐</span>
                </div>
                <h3 className="text-xl font-bold mb-2">صنعتگری</h3>
                <p className="text-gray-600">
                  ما به هنر دست و ارزش کار دستی اعتقاد داریم. هر محصول ما با عشق و دقت ساخته می‌شود.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="bg-pastel-lavender p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💙</span>
                </div>
                <h3 className="text-xl font-bold mb-2">جامعه</h3>
                <p className="text-gray-600">
                  ما به ایجاد جامعه‌ای قوی از هنرمندان و مشتریان متعهد هستیم و از تولیدکنندگان محلی حمایت می‌کنیم.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">تیم ما</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                با افرادی آشنا شوید که پشت لباس‌های زیبای ما هستند
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pastel-pink rounded-full w-40 h-40 mx-auto overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img
                    src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                    alt="Sarah Ahmad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">سارا احمدی</h3>
                <p className="text-gray-500 mb-3">بنیانگذار و طراح اصلی</p>
                <p className="text-gray-600">
                  سارا با بیش از ۱۰ سال تجربه در صنعت مد، تیم ما را هدایت می‌کند
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pastel-mint rounded-full w-40 h-40 mx-auto overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img
                    src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg"
                    alt="Mohammad Rezaei"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">محمد رضایی</h3>
                <p className="text-gray-500 mb-3">مدیر تولید</p>
                <p className="text-gray-600">
                  محمد مسئول اطمینان از کیفیت بالای تمام محصولات ماست
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pastel-lavender rounded-full w-40 h-40 mx-auto overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                    alt="Leila Karimi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">لیلا کریمی</h3>
                <p className="text-gray-500 mb-3">طراح الگو</p>
                <p className="text-gray-600">
                  لیلا با خلاقیت و مهارت بالا، الگوهای منحصر به فرد ما را طراحی می‌کند
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
