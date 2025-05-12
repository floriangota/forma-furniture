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
    { id: 21, src: '/images/gallery/g21.jpg', alt: 'Furniture 21' },
    { id: 22, src: '/images/gallery/g22.jpg', alt: 'Furniture 22' },
    { id: 23, src: '/images/gallery/g23.jpg', alt: 'Furniture 23' },
    { id: 24, src: '/images/gallery/g24.jpg', alt: 'Furniture 24' },
    { id: 25, src: '/images/gallery/g25.jpg', alt: 'Furniture 25' },
    { id: 26, src: '/images/gallery/g26.jpg', alt: 'Furniture 26' },
    { id: 27, src: '/images/gallery/g27.jpg', alt: 'Furniture 27' },
    { id: 28, src: '/images/gallery/g28.jpg', alt: 'Furniture 28' },
    { id: 29, src: '/images/gallery/g29.jpg', alt: 'Furniture 29' },
    { id: 30, src: '/images/gallery/g30.jpg', alt: 'Furniture 30' },
    { id: 31, src: '/images/gallery/g31.jpg', alt: 'Furniture 31' },
    { id: 32, src: '/images/gallery/g32.jpg', alt: 'Furniture 32' },
    { id: 33, src: '/images/gallery/g33.jpg', alt: 'Furniture 33' },
    { id: 34, src: '/images/gallery/g34.jpg', alt: 'Furniture 34' },
    { id: 35, src: '/images/gallery/g35.jpg', alt: 'Furniture 35' },
    { id: 36, src: '/images/gallery/g36.jpg', alt: 'Furniture 36' },
    { id: 37, src: '/images/gallery/g37.jpg', alt: 'Furniture 37' },
    { id: 38, src: '/images/gallery/g38.jpg', alt: 'Furniture 38' },
    { id: 39, src: '/images/gallery/g39.jpg', alt: 'Furniture 39' },
    { id: 40, src: '/images/gallery/g40.jpg', alt: 'Furniture 40' },
    { id: 41, src: '/images/gallery/g41.jpg', alt: 'Furniture 41' },
    { id: 42, src: '/images/gallery/g42.jpg', alt: 'Furniture 42' },
    { id: 43, src: '/images/gallery/g43.jpg', alt: 'Furniture 43' },
    { id: 44, src: '/images/gallery/g44.jpg', alt: 'Furniture 44' },
    { id: 45, src: '/images/gallery/g45.jpg', alt: 'Furniture 45' },
    { id: 46, src: '/images/gallery/g46.jpg', alt: 'Furniture 46' },
    { id: 47, src: '/images/gallery/g47.jpg', alt: 'Furniture 47' },
    { id: 48, src: '/images/gallery/g48.jpg', alt: 'Furniture 48' },

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