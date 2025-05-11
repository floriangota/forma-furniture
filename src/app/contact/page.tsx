'use client';

import Header from '@/components/layout/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </main>
    </div>
  );
} 