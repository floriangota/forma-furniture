'use client';

import Header from '@/components/layout/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/index';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      name: t.customFurniture,
      description: t.customFurnitureDesc,
      icon: '🎨',
    },
    {
      name: t.interiorDesign,
      description: t.interiorDesignDesc,
      icon: '🏭',
    },
    {
      name: t.installation,
      description: t.installationDesc,
      icon: '🔧',
    },
    {
      name: t.maintenance,
      description: t.maintenanceDesc,
      icon: '💡',
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.title}</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {t.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span className="text-3xl">{service.icon}</span>
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
} 