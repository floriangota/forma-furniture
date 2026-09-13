'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects, type ProjectCategory } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import PageHero from '@/components/ui/PageHero';

const HERO_IMAGE = '/images/projects/banesa/19.jpg';
const FILTERS: Array<ProjectCategory | 'all'> = ['all', 'residential', 'hospitality', 'commercial'];

export default function GalleryPage() {
  const { t } = useLanguage();
  const g = t.gallery;
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const visible = projects.filter((p) => filter === 'all' || p.category === filter);
  const [first, ...rest] = visible;
  const totalPhotos = projects.reduce((n, p) => n + p.images.length, 0);

  return (
    <>
      <PageHero eyebrow={g.eyebrow} title={g.title} text={g.description} image={HERO_IMAGE} />

      <section className="container-x py-16 lg:py-24">
        {/* Filter bar */}
        <div className="flex flex-col gap-6 border-b border-stone-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className="nav-link pb-1"
                data-active={filter === f}
              >
                {f === 'all' ? t.common.allProjects : t.common[f]}
              </button>
            ))}
          </div>
          <p className="text-[11px] uppercase tracking-widest2 text-stone-500">
            {projects.length} {t.gallery.projectsLabel} · {totalPhotos} {t.common.photos}
          </p>
        </div>

        <div key={filter} className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-3">
          {first && (
            <div className="animate-fade-up lg:col-span-2">
              <ProjectCard project={first} priority featured />
            </div>
          )}
          {rest.map((project, i) => (
            <div key={project.slug} className="animate-fade-up" style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
