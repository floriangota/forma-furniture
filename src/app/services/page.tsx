'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';

const HERO_IMAGE = '/images/projects/luzern-penthouse/03.jpg';
const SERVICE_IMAGES = [
  '/images/projects/luzern-penthouse/08.jpg', // custom furniture
  '/images/projects/banesa/16.jpg', // interior design
  '/images/projects/coffee-house-zenn/06.jpg', // installation
  '/images/projects/banesa/13.jpg', // maintenance
];
const PROCESS_IMAGE = '/images/projects/other-works/07.jpg';

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} text={s.description} image={HERO_IMAGE} />

      {/* Statement */}
      <section className="container-x py-20 lg:py-24">
        <p className="display mx-auto max-w-4xl text-center text-2xl leading-snug text-ink sm:text-3xl lg:text-[34px]">
          {s.statement}
        </p>
      </section>

      {/* Services as editorial image blocks */}
      <section className="container-x grid gap-6 pb-24 sm:grid-cols-2 lg:pb-32">
        {s.items.map((item, i) => (
          <article key={item.title} className="group relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[5/6] lg:aspect-[4/3]">
            <Image
              src={SERVICE_IMAGES[i]}
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover opacity-90 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white lg:p-10">
              <p className="display text-5xl text-bronze-light/80">0{i + 1}</p>
              <h2 className="display mt-3 text-3xl sm:text-4xl">{item.title}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-200 sm:text-base">{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
        <Image src={PROCESS_IMAGE} alt="" fill sizes="100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        <div className="container-x relative">
          <p className="eyebrow text-center text-bronze-light">{s.eyebrow}</p>
          <h2 className="display mt-3 text-center text-4xl sm:text-5xl">{s.processTitle}</h2>
          <ol className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {s.steps.map((step, i) => (
              <li key={step.title} className="bg-ink/80 p-8 backdrop-blur-sm lg:p-10">
                <p className="display text-5xl text-bronze">0{i + 1}</p>
                <h3 className="mt-5 text-[13px] font-medium uppercase tracking-widest2 text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-300">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 text-center">
            <Link href="/contact" className="btn-light">
              {t.common.getInTouch}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
