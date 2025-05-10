'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.about}</h3>
            <p className="text-gray-400">{t.aboutText}</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <span className="font-medium">{t.address}:</span>
                <br />
                {t.addressLine1}
                <br />
                {t.addressLine2}
              </p>
              <p>
                <span className="font-medium">{t.phone}:</span> +383 45 330 636
              </p>
              <p>
                <span className="font-medium">{t.email}:</span> info@formafurniture.com
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.hours}</h3>
            <div className="space-y-2 text-gray-400">
              <p>{t.weekdays}</p>
              <p>{t.saturday}</p>
              <p>{t.sunday}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Forma Furniture. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
} 