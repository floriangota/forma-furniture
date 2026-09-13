'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { site } from '@/lib/site';
import { FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { language, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/gallery', label: t.nav.projects },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="hidden border-b border-stone-200 bg-stone-100 md:block">
        <div className="container-x flex h-9 items-center justify-between text-[12px] text-stone-600">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="hover:text-ink">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={toggleLanguage}
              className="uppercase tracking-widest2 text-[11px] hover:text-ink"
              aria-label="Switch language"
            >
              <span className={language === 'en' ? 'text-ink' : ''}>EN</span>
              <span className="mx-1.5 text-stone-300">|</span>
              <span className={language === 'sq' ? 'text-ink' : ''}>SQ</span>
            </button>
            <span className="h-3 w-px bg-stone-300" />
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-ink">
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-ink">
              <InstagramIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-stone-200">
        <nav className="container-x flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Forma Furniture home">
            <Image src="/images/logo.png" alt="" width={44} height={36} className="h-9 w-auto" priority />
            <span className="font-display text-[26px] font-semibold uppercase leading-none tracking-[0.18em] text-ink">
              Forma
              <span className="ml-2 font-sans text-[11px] font-normal normal-case tracking-widest2 text-stone-500">
                Furniture
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" data-active={isActive(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="-mr-2 p-2 text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col bg-stone-50 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="container-x flex flex-1 flex-col justify-between py-10">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`display block text-4xl ${isActive(item.href) ? 'text-bronze' : 'text-ink'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4 border-t border-stone-200 pt-6 text-sm text-stone-600">
            <button onClick={toggleLanguage} className="btn-outline w-full">
              {t.common.language}
            </button>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
