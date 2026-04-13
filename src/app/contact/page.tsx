import type { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Neem contact op met ${COMPANY.name} voor een vrijblijvende offerte. Bel ${COMPANY.phone} of vul ons contactformulier in. Schilder in ${COMPANY.address.city}.`,
  openGraph: {
    title: `Contact — ${COMPANY.name}`,
    description: `Neem contact op voor schilderwerk in ${COMPANY.address.city}. Bel ${COMPANY.phone} of vraag online een offerte aan.`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-serif">Contact</h1>
          <p className="mt-3 text-brand-100 text-lg max-w-2xl">
            Neem vrijblijvend contact met ons op voor advies, een offerte of vragen over
            uw schilderproject.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar contactinfo — shown first on mobile, second on desktop */}
          <aside className="space-y-6 lg:order-2">
            <div className="bg-brand-800 rounded-lg p-6 text-white">
              <h3 className="font-bold mb-2">Liever direct bellen?</h3>
              <p className="text-brand-100 text-sm mb-4">
                Bel ons gerust voor een vrijblijvend gesprek over uw schilderproject.
              </p>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center w-full gap-2 bg-white text-brand-900 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {COMPANY.phone}
              </a>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Contactgegevens</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-800 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Adres</p>
                    <p className="text-sm text-slate-600">{COMPANY.address.street}</p>
                    <p className="text-sm text-slate-600">
                      {COMPANY.address.postalCode} {COMPANY.address.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-800 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Telefoon</p>
                    <a href={COMPANY.phoneHref} className="text-sm text-brand-800 hover:underline font-medium">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-800 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Facebook</p>
                    <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-800 hover:underline">
                      Volg ons op Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Formulier — shown second on mobile, first on desktop */}
          <div className="lg:col-span-2 lg:order-1">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              Stuur ons een bericht
            </h2>
            <p className="text-slate-600 mb-8">
              Vertel ons over uw project en wij nemen zo snel mogelijk contact met u op
              voor een vrijblijvende offerte.
            </p>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Kaart sectie */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-6">Onze locatie</h2>
          <div className="rounded-lg overflow-hidden border border-slate-200 aspect-[16/7]">
            <iframe
              title="Locatie Schildersbedrijf Jos Heerschop"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.5!2d5.9118!3d52.5537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDe+Omloop+16%2C+8261+LP+Kampen!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-3">
            {COMPANY.address.full}
          </p>
        </div>
      </section>
    </>
  );
}
