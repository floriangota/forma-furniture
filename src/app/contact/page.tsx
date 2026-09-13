'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { site } from '@/lib/site';
import PageHero from '@/components/ui/PageHero';
import { ArrowIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';

const HERO_IMAGE = '/images/projects/coffee-house-zenn/06.jpg';

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} text={c.description} image={HERO_IMAGE} />

      <section className="container-x grid gap-16 py-20 lg:grid-cols-12 lg:py-28">
        {/* Info */}
        <div className="lg:col-span-5">
          <h2 className="eyebrow">{c.info}</h2>
          <dl className="mt-8 space-y-7">
            <div>
              <dt className="text-[11px] uppercase tracking-widest2 text-stone-500">{c.address}</dt>
              <dd className="display mt-1 text-2xl text-ink">{c.addressValue}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest2 text-stone-500">{c.phone}</dt>
              <dd className="display mt-1 text-2xl text-ink">
                <a href={site.phoneHref} className="hover:text-bronze">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest2 text-stone-500">{c.email}</dt>
              <dd className="display mt-1 break-all text-2xl text-ink">
                <a href={`mailto:${site.email}`} className="hover:text-bronze">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-widest2 text-stone-500">{c.hours}</dt>
              <dd className="mt-2 space-y-1 text-stone-700">
                <p className="flex justify-between border-b border-stone-200 pb-1">
                  <span>{c.weekdays}</span>
                  <span>{c.weekdaysHours}</span>
                </p>
                <p className="flex justify-between pt-1">
                  <span>{c.sunday}</span>
                  <span>{c.closed}</span>
                </p>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex items-center gap-4 text-stone-500">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-ink">
              <FacebookIcon />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-ink">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col justify-between bg-ink p-8 text-white lg:col-span-7 lg:p-12">
          <div>
            <WhatsAppIcon className="h-10 w-10 text-bronze-light" />
            <h2 className="display mt-6 text-3xl sm:text-4xl">{c.whatsappTitle}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-stone-300">{c.whatsappText}</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-light bg-white text-ink hover:bg-transparent hover:text-white">
              <WhatsAppIcon className="h-4 w-4" />
              {c.whatsappButton}
            </a>
            <a href={site.phoneHref} className="btn border-white/40 text-white hover:border-white">
              {c.callButton}
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="container-x flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="eyebrow">{c.mapTitle}</h2>
            <p className="display mt-3 text-3xl text-ink">{c.addressValue}</p>
            <p className="mt-3 text-stone-600">{c.mapText}</p>
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink"
          >
            {c.directions}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <iframe
          title="Forma Furniture on Google Maps"
          src={site.mapEmbed}
          className="h-[480px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
