'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { coverOf, type Project } from '@/data/projects';
import { ArrowIcon } from '@/components/ui/SocialIcons';

interface Props {
  project: Project;
  priority?: boolean;
  /** larger card (used for the first card on the projects page) */
  featured?: boolean;
}

/** The "folder" box: cover photo + project name + location. */
export default function ProjectCard({ project, priority = false, featured = false }: Props) {
  const { language, t } = useLanguage();
  const cover = coverOf(project);

  return (
    <Link
      href={`/gallery/${project.slug}`}
      className="group block"
      aria-label={`${project.name[language]}, ${project.location[language]}`}
    >
      <div className={`relative overflow-hidden bg-stone-200 ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        {cover && (
          <Image
            src={cover.src}
            alt={project.name[language]}
            fill
            priority={priority}
            sizes={featured ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest2 text-ink">
          {t.common[project.category]}
        </span>
        <span className="absolute bottom-4 right-4 text-[11px] uppercase tracking-widest2 text-white/80">
          {project.images.length} {t.common.photos}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 border-b border-stone-200 py-5">
        <div>
          <h3 className={`display text-ink ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[28px]'}`}>
            {project.name[language]}
          </h3>
          <p className="mt-1 text-[12px] uppercase tracking-widest2 text-stone-500">{project.location[language]}</p>
        </div>
        <span className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-300 text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
