'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowIcon } from '@/components/ui/SocialIcons';

const HERO_IMAGE = '/images/projects/banesa/16.jpg';
const INTRO_IMAGE = '/images/projects/coffee-house-zenn/07.jpg';
const PILLAR_IMAGES = [
  '/images/projects/luzern-penthouse/09.jpg',
  '/images/projects/banesa/15.jpg',
  '/images/projects/coffee-house-zenn/04.jpg',
];

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-ink text-white">
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/30 to-ink/80" />
        <div className="container-x relative py-24 text-center sm:py-32">
          <p className="eyebrow animate-fade-up text-bronze-light">Ferizaj · Kosovo</p>
          <h1 className="display mx-auto mt-5 max-w-4xl animate-fade-up text-5xl sm:text-6xl lg:text-7xl [animation-delay:100ms]">
            {h.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-stone-200 sm:text-lg [animation-delay:200ms]">
            {h.heroSubtitle}
          </p>
          <div className="mt-10 animate-fade-up [animation-delay:300ms]">
            <Link href="/gallery" className="btn-light">
              {h.heroCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Three pillars overlapping the hero */}
      <section className="container-x relative z-10 -mt-16 sm:-mt-20">
        <div className="grid gap-px bg-stone-200 shadow-[0_20px_60px_-30px_rgba(27,26,23,0.35)] md:grid-cols-3">
          {h.pillars.map((pillar, i) => (
            <div key={pillar.title} className="flex gap-5 bg-white p-7 lg:p-8">
              <div className="relative hidden h-24 w-20 shrink-0 overflow-hidden bg-stone-200 sm:block">
                <Image src={PILLAR_IMAGES[i]} alt="" fill sizes="80px" className="object-cover" />
              </div>
              <div>
                <p className="text-[11px] text-bronze">0{i + 1}</p>
                <h3 className="mt-1 text-[13px] font-medium uppercase tracking-widest2 text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={h.introEyebrow} title={h.introTitle} text={h.introText} />
          <ul className="mt-8 space-y-3">
            {h.introPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-stone-700">
                <span className="mt-2 h-px w-5 shrink-0 bg-bronze" />
                {point}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-outline mt-10">
            {t.common.learnMore}
          </Link>
        </div>
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 sm:aspect-[5/4]">
            <Image src={INTRO_IMAGE} alt="" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden bg-bronze px-8 py-6 text-white lg:block">
            <p className="display text-5xl">100%</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest2">Made in Kosovo</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow={h.projectsEyebrow} title={h.projectsTitle} text={h.projectsText} />
            <Link href="/gallery" className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink">
              {t.common.allProjects}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow={h.sectorsEyebrow} title={h.sectorsTitle} align="center" />
        <div className="mt-14 grid gap-px bg-stone-200 md:grid-cols-3">
          {h.sectors.map((sector) => (
            <div key={sector.title} className="bg-stone-50 p-8 lg:p-10">
              <h3 className="display text-3xl text-ink">{sector.title}</h3>
              <ul className="mt-6 space-y-2.5 text-sm text-stone-600">
                {sector.items.map((item) => (
                  <li key={item} className="border-b border-stone-200 pb-2.5 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-white lg:py-28">
        <div className="container-x text-center">
          <h2 className="display text-4xl sm:text-5xl">{h.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-stone-300">{h.ctaText}</p>
          <Link href="/contact" className="btn-light mt-10">
            {h.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
