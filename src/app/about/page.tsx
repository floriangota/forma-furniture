'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';

const HERO_IMAGE = '/images/projects/other-works/09.jpg';
const PORTRAIT_IMAGE = '/images/projects/luzern-penthouse/09.jpg';
const WIDE_IMAGE = '/images/projects/banesa/19.jpg';
const QUOTE_IMAGE = '/images/projects/coffee-house-zenn/08.jpg';

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} image={HERO_IMAGE} />

      {/* Intro: statement + two columns of text */}
      <section className="container-x py-20 lg:py-28">
        <p className="display max-w-4xl text-2xl leading-snug text-ink sm:text-3xl lg:text-[34px]">{a.intro}</p>
        <div className="mt-12 grid gap-10 border-t border-stone-200 pt-12 lg:grid-cols-2 lg:gap-16">
          <p className="leading-relaxed text-stone-600">{a.p2}</p>
          <p className="leading-relaxed text-stone-600">{a.p3}</p>
        </div>
      </section>

      {/* Photo composition */}
      <section className="container-x grid gap-6 pb-20 lg:grid-cols-12 lg:pb-28">
        <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 lg:col-span-5">
          <Image src={PORTRAIT_IMAGE} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="relative flex-1 overflow-hidden bg-stone-200 max-lg:aspect-[16/10]">
            <Image src={WIDE_IMAGE} alt="" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
          <dl className="grid grid-cols-2 gap-px bg-stone-200 sm:grid-cols-4">
            {a.facts.map((fact) => (
              <div key={fact.label} className="bg-white p-5">
                <dt className="text-[10px] uppercase tracking-widest2 text-stone-500">{fact.label}</dt>
                <dd className="display mt-2 text-lg leading-tight text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Quote band */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-ink text-white">
        <Image src={QUOTE_IMAGE} alt="" fill sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/80" />
        <div className="container-x relative py-24 text-center">
          <p className="display mx-auto max-w-3xl text-3xl leading-snug sm:text-4xl lg:text-5xl">“{a.quote}”</p>
          <p className="eyebrow mt-8 text-bronze-light">Forma Furniture</p>
        </div>
      </section>

      {/* Mission / vision / values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-px bg-stone-200 md:grid-cols-3">
          <div className="bg-white p-8 lg:p-10">
            <p className="eyebrow">{a.mission}</p>
            <p className="display mt-4 text-xl leading-snug text-ink">{a.missionText}</p>
          </div>
          <div className="bg-white p-8 lg:p-10">
            <p className="eyebrow">{a.vision}</p>
            <p className="display mt-4 text-xl leading-snug text-ink">{a.visionText}</p>
          </div>
          <div className="bg-white p-8 lg:p-10">
            <p className="eyebrow">{a.values}</p>
            <ul className="mt-4 space-y-2.5 text-stone-700">
              {a.valuesList.map((v) => (
                <li key={v} className="flex gap-3">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-bronze" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-center text-white">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">{t.home.ctaTitle}</h2>
          <Link href="/contact" className="btn-light mt-8">
            {t.home.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
