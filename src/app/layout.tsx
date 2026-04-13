import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { COMPANY } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline} in ${COMPANY.address.city}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `${COMPANY.name} is uw betrouwbare schilder in ${COMPANY.address.city}. Vakkundig binnenschilderwerk, buitenschilderwerk, glaswerk en wandafwerking. Vraag vrijblijvend een offerte aan.`,
  keywords: [
    'schilder Kampen',
    'schildersbedrijf Kampen',
    'binnenschilderwerk Kampen',
    'buitenschilderwerk Kampen',
    'glaswerk Kampen',
    'wandafwerking Kampen',
    'schilder Overijssel',
    COMPANY.name,
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: `Vakkundig schildersbedrijf in ${COMPANY.address.city}. Binnenschilderwerk, buitenschilderwerk, glaswerk en wandafwerking. ${COMPANY.reviews.score}/5 op Google.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://josheerschop.nl',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
