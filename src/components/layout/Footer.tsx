'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { site } from '@/lib/site';
import { FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/gallery', label: t.nav.projects },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-ink text-stone-300">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:gap-8 lg:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-3xl font-semibold uppercase tracking-[0.18em] text-white">Forma</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">{f.tagline}</p>
          <div className="mt-6 flex items-center gap-4">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-400 transition-colors hover:text-white">
              <FacebookIcon />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-400 transition-colors hover:text-white">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow text-bronze-light">{f.navigation}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow text-bronze-light">{f.contact}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>{t.contact.addressValue}</li>
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow text-bronze-light">{f.hours}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>{f.weekdays}</li>
            <li>{f.sunday}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-stone-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. {f.rights}
          </p>
          <p>Muhoc, Ferizaj · Kosovo</p>
        </div>
      </div>
    </footer>
  );
}
