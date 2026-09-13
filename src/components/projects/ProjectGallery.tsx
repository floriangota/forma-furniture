'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import type { ProjectImage } from '@/data/projects';

interface Group {
  label?: string;
  images: ProjectImage[];
}

interface Props {
  /** one or more labelled groups; a single unlabelled group renders as a plain grid */
  groups: Group[];
  alt: string;
}

/** Masonry grid(s) of a project's photos with one shared full-screen lightbox. */
export default function ProjectGallery({ groups, alt }: Props) {
  const [index, setIndex] = useState(-1);
  const all = groups.flatMap((g) => g.images);
  let offset = 0;

  return (
    <>
      <div className="space-y-16">
        {groups.map((group, gi) => {
          const start = offset;
          offset += group.images.length;
          return (
            <section key={gi}>
              {group.label && (
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="display text-2xl text-ink sm:text-3xl">{group.label}</h2>
                  <span className="h-px flex-1 bg-stone-200" />
                  <span className="text-[11px] uppercase tracking-widest2 text-stone-500">{group.images.length}</span>
                </div>
              )}
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
                {group.images.map((img, i) => {
                  const n = start + i;
                  return (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setIndex(n)}
                      className="group relative block w-full break-inside-avoid overflow-hidden bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                      aria-label={`${alt} ${n + 1}`}
                    >
                      <Image
                        src={img.src}
                        alt={`${alt} ${n + 1}`}
                        width={img.width}
                        height={img.height}
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading={n < 6 ? 'eager' : 'lazy'}
                      />
                      <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={all.map((img, i) => ({ src: img.src, width: img.width, height: img.height, alt: `${alt} ${i + 1}` }))}
        plugins={[Zoom, Counter]}
        animation={{ fade: 250 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: 'rgba(27, 26, 23, 0.96)' } }}
      />
    </>
  );
}
