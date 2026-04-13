import Link from 'next/link';
import { COMPANY, NAV_ITEMS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Bedrijfsinfo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold text-lg">{COMPANY.shortName}</h3>
            <p className="text-sm text-slate-400 mt-1">{COMPANY.tagline}</p>
            <address className="not-italic mt-4 text-sm space-y-1">
              <p>{COMPANY.address.street}</p>
              <p>
                {COMPANY.address.postalCode} {COMPANY.address.city}
              </p>
            </address>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Navigatie
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Offerte aanvragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Volg ons
            </h4>
            <a
              href={COMPANY.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>
            &copy; {year} {COMPANY.name}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
