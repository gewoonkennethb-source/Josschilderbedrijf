import Link from 'next/link';
import { COMPANY, SERVICES, REVIEWS } from '@/lib/constants';
import { getFacebookPosts } from '@/lib/facebook';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import GoogleReviewBadge from '@/components/GoogleReviewBadge';
import FacebookFeed from '@/components/FacebookFeed';

export default async function HomePage() {
  const facebookPosts = await getFacebookPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-brand-100 font-medium text-sm sm:text-base mb-3">
              {COMPANY.tagline} — {COMPANY.address.city}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
              Vakkundig schilderwerk
              <br />
              <span className="text-brand-100">in Kampen en omgeving</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Al jaren uw betrouwbare partner voor schilderwerk, glaswerk en wandafwerking.
              Wij leveren kwaliteit met oog voor detail, eerlijk advies en uitstekende nazorg.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Bel direct: {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Vraag een offerte aan
              </Link>
            </div>
            <div className="mt-8">
              <GoogleReviewBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Vertrouwenselementen */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Ervaren vakmensen</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Eerlijk advies</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Nette afwerking</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-brand-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Uitstekende nazorg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Over ons kort */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-900">
            Uw schilder in Kampen
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Schildersbedrijf Jos Heerschop is een vakkundig en betrouwbaar schildersbedrijf
            gevestigd in Kampen. Wij zijn gespecialiseerd in binnenschilderwerk, buitenschilderwerk,
            glaswerk en wandafwerking voor zowel particulieren als bedrijven in Kampen en omgeving.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Met jarenlange ervaring en een oog voor detail zorgen wij voor een strak en duurzaam
            resultaat. Wij staan bekend om onze nette werkwijze, eerlijke prijzen en persoonlijke
            aanpak.
          </p>
          <Link
            href="/over-ons"
            className="inline-flex items-center mt-5 text-brand-800 font-semibold hover:text-brand-900 transition-colors"
          >
            Meer over ons
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Diensten */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-slate-900">Onze diensten</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Van binnenschilderwerk tot glaswerk — wij bieden een compleet pakket aan schilder-
              en afwerkingsdiensten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate-900">
              Wat onze klanten zeggen
            </h2>
            <div className="mt-3">
              <GoogleReviewBadge />
            </div>
          </div>
          <Link
            href="/reviews"
            className="text-brand-800 font-semibold hover:text-brand-900 transition-colors text-sm"
          >
            Bekijk alle reviews →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>
      </section>

      {/* Facebook Feed */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-slate-900">
                Laatste berichten
              </h2>
              <p className="mt-2 text-slate-600">
                Volg ons op{' '}
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-800 hover:underline"
                >
                  Facebook
                </a>{' '}
                voor het laatste nieuws en projecten.
              </p>
            </div>
          </div>
          <FacebookFeed posts={facebookPosts} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-brand-800 rounded-2xl px-6 sm:px-12 py-12 sm:py-16 text-white">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl">
              Klaar voor een frisse start?
            </h2>
            <p className="mt-3 text-brand-100">
              Neem vandaag nog contact op voor een vrijblijvende offerte. Wij denken graag
              met u mee over de beste oplossing voor uw schilderwerk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Bel: {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
