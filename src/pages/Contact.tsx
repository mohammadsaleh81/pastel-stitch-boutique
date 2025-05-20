
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Home } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-pastel-pink bg-opacity-30 py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">تماس با ما</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ما مشتاقانه منتظر شنیدن از شما هستیم. با ما در تماس باشید!
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">با ما در ارتباط باشید</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  اگر سوال یا پیشنهادی دارید، لطفاً با ما تماس بگیرید. تیم ما آماده پاسخگویی به سوالات شما است.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-pastel-pink p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">تلفن</h3>
                      <p className="text-gray-600">۰۹۱۲۳۴۵۶۷۸۹</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-pastel-mint p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">ایمیل</h3>
                      <p className="text-gray-600">info@handmade.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-pastel-cream p-3 rounded-full mr-4">
                      <Home className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">آدرس فروشگاه</h3>
                      <p className="text-gray-600">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
                      <p className="text-gray-500 text-sm mt-1">شنبه تا چهارشنبه ۱۰ صبح تا ۸ شب</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="font-bold mb-4">ما را در شبکه‌های اجتماعی دنبال کنید</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-pastel-pink p-3 rounded-full hover:bg-opacity-80 transition-all"
                    >
                      <span className="text-xl">📱</span>
                    </a>
                    <a
                      href="#"
                      className="bg-pastel-lavender p-3 rounded-full hover:bg-opacity-80 transition-all"
                    >
                      <span className="text-xl">📷</span>
                    </a>
                    <a
                      href="#"
                      className="bg-pastel-mint p-3 rounded-full hover:bg-opacity-80 transition-all"
                    >
                      <span className="text-xl">🐦</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                        placeholder="نام خود را وارد کنید"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                        ایمیل
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                        placeholder="ایمیل خود را وارد کنید"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                      موضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                      placeholder="موضوع پیام خود را وارد کنید"
                    />
                  </div>

                  <div className="mt-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                      پیام شما
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pastel-pink"
                      placeholder="پیام خود را بنویسید..."
                    ></textarea>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full btn-primary py-3 text-lg font-medium"
                    >
                      ارسال پیام
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto">
            <div className="bg-pastel-mint bg-opacity-20 p-4 rounded-2xl shadow-md">
              <div className="w-full h-72 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-pastel-cream bg-opacity-50">
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">موقعیت فروشگاه ما</h3>
                    <p className="text-gray-600">تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
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

export default Contact;
