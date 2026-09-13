import Image from 'next/image';

interface Props {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  children?: React.ReactNode;
}

/** Full-width photo banner with centered text, used at the top of inner pages. */
export default function PageHero({ eyebrow, title, text, image, children }: Props) {
  return (
    <section className="relative flex min-h-[46vh] items-center justify-center overflow-hidden bg-ink text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/70" />
      <div className="container-x relative py-20 text-center">
        <p className="eyebrow text-bronze-light">{eyebrow}</p>
        <h1 className="display mx-auto mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">{text}</p>}
        {children}
      </div>
    </section>
  );
}
