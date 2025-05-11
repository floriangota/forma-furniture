'use client';

import Header from '@/components/layout/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language].gallery;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: '/images/gallery/g1.jpg', alt: 'Furniture 1' },
    { id: 2, src: '/images/gallery/g2.jpg', alt: 'Furniture 2' },
    { id: 3, src: '/images/gallery/g3.jpg', alt: 'Furniture 3' },
    { id: 4, src: '/images/gallery/g4.jpg', alt: 'Furniture 4' },
    { id: 5, src: '/images/gallery/g5.jpg', alt: 'Furniture 5' },
    { id: 6, src: '/images/gallery/g6.jpg', alt: 'Furniture 6' },
    { id: 7, src: '/images/gallery/g7.jpg', alt: 'Furniture 7' },
    { id: 8, src: '/images/gallery/g8.jpg', alt: 'Furniture 8' },
    { id: 9, src: '/images/gallery/g9.jpg', alt: 'Furniture 9' },
    { id: 10, src: '/images/gallery/g10.jpg', alt: 'Furniture 10' },
    { id: 11, src: '/images/gallery/g11.jpg', alt: 'Furniture 11' },
    { id: 12, src: '/images/gallery/g12.jpg', alt: 'Furniture 12' },
    { id: 13, src: '/images/gallery/g13.jpg', alt: 'Furniture 13' },
    { id: 14, src: '/images/gallery/g14.jpg', alt: 'Furniture 14' },
    { id: 15, src: '/images/gallery/g15.jpg', alt: 'Furniture 15' },
    { id: 16, src: '/images/gallery/g16.jpg', alt: 'Furniture 16' },
    { id: 17, src: '/images/gallery/g17.jpg', alt: 'Furniture 17' },
    { id: 18, src: '/images/gallery/g18.jpg', alt: 'Furniture 18' },
    { id: 19, src: '/images/gallery/g19.jpg', alt: 'Furniture 19' },
    { id: 20, src: '/images/gallery/g20.jpg', alt: 'Furniture 20' },
  ];

  const slides = galleryImages.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

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
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="group relative cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={375}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={photoIndex}
        carousel={{
          spacing: 0,
          padding: 0,
        }}
        animation={{ fade: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
} 