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
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-medium text-sm sm:text-base mb-3">
              {COMPANY.tagline} — {COMPANY.address.city}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Vakkundig schilderwerk
              <br />
              <span className="text-blue-300">in Kampen en omgeving</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Al jaren uw betrouwbare partner voor schilderwerk, glaswerk en wandafwerking.
              Wij leveren kwaliteit met oog voor detail, eerlijk advies en uitstekende nazorg.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Vraag een offerte aan
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Bel direct: {COMPANY.phone}
              </a>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Ervaren vakmensen', icon: '🎨' },
              { label: 'Eerlijk advies', icon: '🤝' },
              { label: 'Nette afwerking', icon: '✓' },
              { label: 'Uitstekende nazorg', icon: '⭐' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Over ons kort */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
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
            className="inline-flex items-center mt-5 text-blue-800 font-semibold hover:text-blue-900 transition-colors"
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
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Onze diensten</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
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
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Wat onze klanten zeggen
          </h2>
          <div className="mt-4 flex justify-center">
            <GoogleReviewBadge />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/reviews"
            className="text-blue-800 font-semibold hover:text-blue-900 transition-colors"
          >
            Bekijk alle reviews →
          </Link>
        </div>
      </section>

      {/* Facebook Feed */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Laatste berichten
            </h2>
            <p className="mt-3 text-slate-600">
              Volg ons op{' '}
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline"
              >
                Facebook
              </a>{' '}
              voor het laatste nieuws en projecten.
            </p>
          </div>
          <FacebookFeed posts={facebookPosts} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-blue-800 rounded-3xl px-6 sm:px-12 py-12 sm:py-16 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Klaar voor een frisse start?
          </h2>
          <p className="mt-3 text-blue-200 max-w-xl mx-auto">
            Neem vandaag nog contact op voor een vrijblijvende offerte. Wij denken graag
            met u mee over de beste oplossing voor uw schilderwerk.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
