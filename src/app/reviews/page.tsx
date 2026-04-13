import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY, REVIEWS } from '@/lib/constants';
import ReviewCard from '@/components/ReviewCard';
import GoogleReviewBadge from '@/components/GoogleReviewBadge';

export const metadata: Metadata = {
  title: 'Reviews',
  description: `Lees wat klanten zeggen over ${COMPANY.name}. ${COMPANY.reviews.score}/5 op Google met ${COMPANY.reviews.count} reviews. Betrouwbaar schildersbedrijf in ${COMPANY.address.city}.`,
  openGraph: {
    title: `Reviews — ${COMPANY.name}`,
    description: `${COMPANY.reviews.score}/5 op Google. Lees ervaringen van klanten over ons schilderwerk in ${COMPANY.address.city}.`,
  },
};

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold">Reviews & ervaringen</h1>
          <p className="mt-3 text-blue-200 text-lg max-w-2xl">
            Lees wat onze klanten over ons zeggen. Wij zijn trots op onze beoordeling.
          </p>
        </div>
      </section>

      {/* Beoordeling overzicht */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center">
            <p className="text-6xl font-bold text-slate-900">{COMPANY.reviews.score}</p>
            <div className="flex gap-1 mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${i < Math.floor(COMPANY.reviews.score) ? 'text-amber-400' : 'text-amber-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-500 mt-2">
              Op basis van {COMPANY.reviews.count} {COMPANY.reviews.platform} reviews
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>

        {/* Meer reviews */}
        <div className="text-center mt-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Bekijk al onze reviews
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            Wilt u meer ervaringen lezen? Bekijk al onze reviews op Google.
          </p>
          <p className="text-sm text-slate-500">
            Zoek op Google naar &ldquo;{COMPANY.name}&rdquo; voor alle beoordelingen.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Overtuigd? Neem contact op
          </h2>
          <p className="mt-3 text-blue-200 max-w-xl mx-auto">
            Vraag vandaag nog een vrijblijvende offerte aan en ervaar zelf onze kwaliteit.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Offerte aanvragen
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Bel: {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
