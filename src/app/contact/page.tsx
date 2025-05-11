'use client';

import Header from '@/components/layout/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">{t.title}</h1>
          <p className="text-lg text-gray-600 text-center mb-12">{t.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{t.contactInfo}</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="font-medium">{t.address}:</span>
                  <span className="ml-2">Muhoc, Ferizaj</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium">{t.phone}:</span>
                  <span className="ml-2">+383 45 330 636</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium">{t.email}:</span>
                  <span className="ml-2">info@formafurniture.com</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{t.businessHours}</h2>
              <div className="space-y-2">
                <p>{t.weekdays}: 8:00 - 17:00</p>
                <p>{t.sunday}: {t.closed}</p>
              </div>
            </div>
          </div>

          {/* Fun Furniture Animation Section */}
          <div className="relative h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated Furniture Icons */}
              <div className="flex space-x-8">
                <div className="animate-float-slow">
                  <Image
                    src="/images/gallery/g1.jpg"
                    alt="Furniture"
                    width={100}
                    height={100}
                    className="rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="animate-float-medium">
                  <Image
                    src="/images/gallery/g2.jpg"
                    alt="Furniture"
                    width={100}
                    height={100}
                    className="rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="animate-float-fast">
                  <Image
                    src="/images/gallery/g3.jpg"
                    alt="Furniture"
                    width={100}
                    height={100}
                    className="rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 