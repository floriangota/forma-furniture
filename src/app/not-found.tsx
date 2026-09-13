import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">Page not found</h1>
      <Link href="/" className="btn-outline mt-10">
        Back to home
      </Link>
    </section>
  );
}
