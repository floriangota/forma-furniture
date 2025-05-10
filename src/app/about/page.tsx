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
          <div className="space-y-6 text-gray-600">
            <p className="text-lg">{t.description}</p>
            <p className="text-lg">{t.paragraph2}</p>
            <p className="text-lg">{t.paragraph3}</p>
          </div>
        </div>
      </main>
    </div>
  );
} 