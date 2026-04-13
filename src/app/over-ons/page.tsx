import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/constants';
import GoogleReviewBadge from '@/components/GoogleReviewBadge';

export const metadata: Metadata = {
  title: 'Over ons',
  description: `Leer meer over ${COMPANY.name}. Uw betrouwbare schilder in ${COMPANY.address.city} voor vakkundig binnenschilderwerk, buitenschilderwerk, glaswerk en wandafwerking.`,
  openGraph: {
    title: `Over ons — ${COMPANY.name}`,
    description: `Vakkundig schildersbedrijf in ${COMPANY.address.city}. Jarenlange ervaring, eerlijk advies en uitstekende nazorg.`,
  },
};

export default function OverOnsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-serif">Over ons</h1>
          <p className="mt-3 text-brand-100 text-lg max-w-2xl">
            Vakmanschap, betrouwbaarheid en persoonlijke aandacht — daar staan wij voor.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              Uw schilder in Kampen
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Schildersbedrijf Jos Heerschop V.O.F. is al jaren een vertrouwd adres voor
              schilderwerk, glaswerk en wandafwerking in Kampen en omgeving. Als lokaal
              bedrijf kennen wij de regio goed en weten wij wat er nodig is om panden in
              Kampen en omstreken in topconditie te houden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ons team bestaat uit ervaren vakmensen die hun vak verstaan. Of het nu gaat
              om een complete renovatie of een klein onderhoudsklusje — wij behandelen elk
              project met dezelfde zorgvuldigheid en aandacht voor detail. Wij werken netjes,
              houden ons aan afspraken en leveren altijd een strak eindresultaat.
            </p>

            <h3 className="text-xl font-bold text-slate-900 pt-4">Waar wij voor staan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Vakmanschap',
                  text: 'Ervaren schilders die hun vak verstaan en met de juiste technieken en materialen werken.',
                },
                {
                  title: 'Betrouwbaarheid',
                  text: 'Wij doen wat we zeggen. Afspraken worden nagekomen, deadlines gehaald.',
                },
                {
                  title: 'Net werken',
                  text: 'Wij letten op een nette werkplek en laten alles achter zoals u het verwacht.',
                },
                {
                  title: 'Advies en nazorg',
                  text: 'Eerlijk advies vooraf en goede nazorg na afronding van het werk.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-5">
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 pt-4">Werkgebied</h3>
            <p className="text-slate-600 leading-relaxed">
              Wij zijn gevestigd in Kampen en werken in de hele regio. Onze klanten komen
              uit Kampen, IJsselmuiden, Zwolle, Dronten, Elburg en andere plaatsen in
              Overijssel en omgeving. Neem gerust contact op om te bespreken wat wij voor
              u kunnen betekenen.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-3">Bedrijfsgegevens</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-slate-500">Bedrijfsnaam</dt>
                  <dd className="font-medium text-slate-900">{COMPANY.name}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Specialisatie</dt>
                  <dd className="font-medium text-slate-900">{COMPANY.tagline}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Adres</dt>
                  <dd className="font-medium text-slate-900">{COMPANY.address.full}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Telefoon</dt>
                  <dd>
                    <a href={COMPANY.phoneHref} className="font-medium text-brand-800 hover:underline">
                      {COMPANY.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-3">Klantbeoordeling</h3>
              <GoogleReviewBadge />
            </div>

            <div className="bg-brand-800 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Offerte nodig?</h3>
              <p className="text-brand-100 text-sm mb-4">
                Neem vrijblijvend contact op voor een offerte op maat.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full bg-white text-brand-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-50 transition-colors"
              >
                Contact opnemen
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
