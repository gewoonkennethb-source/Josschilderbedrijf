import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY, SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Diensten',
  description: `Onze diensten: binnenschilderwerk, buitenschilderwerk, glaswerk, wandafwerking en onderhoudsschilderwerk in ${COMPANY.address.city} en omgeving.`,
  openGraph: {
    title: `Diensten — ${COMPANY.name}`,
    description: `Complete schildersdiensten in ${COMPANY.address.city}: binnenschilderwerk, buitenschilderwerk, glaswerk en wandafwerking.`,
  },
};

export default function DienstenPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-serif">Onze diensten</h1>
          <p className="mt-3 text-brand-100 text-lg max-w-2xl">
            Een compleet pakket aan schilder-, glas- en afwerkingsdiensten voor particulieren
            en bedrijven in {COMPANY.address.city} en omgeving.
          </p>
        </div>
      </section>

      {/* Diensten */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="space-y-16">
          {SERVICES.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Tekst */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    Voordelen
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-5 h-5 text-brand-800 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-brand-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-900 transition-colors"
                  >
                    Offerte aanvragen voor {service.title.toLowerCase()}
                  </Link>
                </div>

                {/* Info card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
                  <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-800 mb-5">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Wanneer heeft u dit nodig?
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.whenNeeded}
                  </p>
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <p className="text-sm text-slate-500 mb-2">
                      Wilt u weten wat wij voor u kunnen betekenen?
                    </p>
                    <a
                      href={COMPANY.phoneHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Bel {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>

              {index < SERVICES.length - 1 && (
                <hr className="mt-16 border-slate-200" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Vrijblijvend advies of offerte?
          </h2>
          <p className="mt-3 text-brand-100 max-w-xl mx-auto">
            Wij komen graag langs voor een vrijblijvende inspectie en offerte op maat.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-brand-900 px-6 py-3 rounded-xl font-semibold hover:bg-brand-50 transition-colors"
            >
              Contact opnemen
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
