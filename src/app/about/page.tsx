'use client';

import Header from '@/components/layout/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">{t.title}</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">{t.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">{t.mission}</h2>
              <p className="text-gray-600">{t.missionText}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">{t.vision}</h2>
              <p className="text-gray-600">{t.visionText}</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">{t.values}</h2>
            <ul className="space-y-3">
              {t.valuesList.map((value, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 