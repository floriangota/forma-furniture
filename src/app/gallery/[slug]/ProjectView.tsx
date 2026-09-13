'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects, getProject, coverOf } from '@/data/projects';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectCard from '@/components/projects/ProjectCard';
import { ArrowIcon } from '@/components/ui/SocialIcons';

export default function ProjectView({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const project = getProject(slug);
  if (!project) return null;

  const cover = coverOf(project);
  const location = project.location[language];
  const description = project.description?.[language];
  const groups = project.sections
    ? project.sections.map((s) => ({ label: s.label[language], images: s.images }))
    : [{ images: project.images }];

  // three other projects of the same category first, then anything else
  const others = [...projects]
    .filter((p) => p.slug !== slug)
    .sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
    .slice(0, 3);

  return (
    <>
      {/* Cover */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink text-white">
        {cover && <Image src={cover.src} alt="" fill priority sizes="100vw" className="object-cover opacity-70" />}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
        <div className="container-x relative pb-14 pt-32">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-stone-300 hover:text-white"
          >
            <ArrowIcon className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            {t.common.backToProjects}
          </Link>
          <h1 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">{project.name[language]}</h1>
          {location && <p className="mt-3 text-sm uppercase tracking-widest2 text-stone-200">{location}</p>}
        </div>
      </section>

      {/* Facts + description */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container-x grid gap-10 py-12 lg:grid-cols-12 lg:gap-16">
          <dl className={`grid grid-cols-3 gap-6 text-sm lg:grid-cols-1 ${description ? 'lg:col-span-4' : 'lg:col-span-12 lg:grid-cols-3'}`}>
            {location && (
              <div>
                <dt className="eyebrow">{t.project.location}</dt>
                <dd className="mt-2 text-ink">{location}</dd>
              </div>
            )}
            <div>
              <dt className="eyebrow">{t.project.category}</dt>
              <dd className="mt-2 text-ink">{t.common[project.category]}</dd>
            </div>
            <div>
              <dt className="eyebrow">{t.project.photos}</dt>
              <dd className="mt-2 text-ink">{project.images.length}</dd>
            </div>
          </dl>
          {description && <p className="max-w-2xl text-lg leading-relaxed text-stone-700 lg:col-span-8">{description}</p>}
        </div>
      </section>

      {/* Photos */}
      <section className="container-x py-16 lg:py-20">
        <ProjectGallery groups={groups} alt={project.name[language]} />
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="border-t border-stone-200 bg-white py-20 lg:py-24">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <h2 className="display text-4xl text-ink">{t.project.otherProjects}</h2>
              <Link href="/gallery" className="group hidden items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink sm:inline-flex">
                {t.common.allProjects}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
