interface Props {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, className = '' }: Props) {
  const center = align === 'center';
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <p className={`eyebrow ${light ? 'text-bronze-light' : ''}`}>{eyebrow}</p>}
      <h2 className={`display mt-3 text-4xl sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-relaxed ${light ? 'text-stone-300' : 'text-stone-600'}`}>{text}</p>}
    </div>
  );
}
