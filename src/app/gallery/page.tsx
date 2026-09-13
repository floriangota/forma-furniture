'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import PageHero from '@/components/ui/PageHero';

const HERO_IMAGE = '/images/projects/banesa/19.jpg';

export default function GalleryPage() {
  const { t } = useLanguage();
  const g = t.gallery;
  const [first, ...rest] = projects;

  return (
    <>
      <PageHero eyebrow={g.eyebrow} title={g.title} text={g.description} image={HERO_IMAGE} />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-x-8 gap-y-14 lg:grid-cols-3">
          {first && (
            <div className="lg:col-span-2">
              <ProjectCard project={first} priority featured />
            </div>
          )}
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
