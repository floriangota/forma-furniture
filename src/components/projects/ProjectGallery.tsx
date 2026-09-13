'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import type { ProjectImage } from '@/data/projects';

interface Props {
  images: ProjectImage[];
  alt: string;
}

/** Masonry grid of a project's photos with a full-screen lightbox. */
export default function ProjectGallery({ images, alt }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            aria-label={`${alt} ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={`${alt} ${i + 1}`}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading={i < 6 ? 'eager' : 'lazy'}
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((img, i) => ({ src: img.src, width: img.width, height: img.height, alt: `${alt} ${i + 1}` }))}
        plugins={[Zoom, Counter]}
        animation={{ fade: 250 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: 'rgba(27, 26, 23, 0.96)' } }}
      />
    </>
  );
}
