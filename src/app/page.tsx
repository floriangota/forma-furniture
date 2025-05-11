'use client';

import Header from '@/components/layout/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/index';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                    {t.description}
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {t.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {t.description}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/gallery"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {t.viewCollection}
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {t.contactUs} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                {t.description}
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Featured items will go here */}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                {t.description}
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                {t.description}
              </p>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {t.viewCollection}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 