import { COMPANY } from '@/lib/constants';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://josheerschop.nl',
    name: COMPANY.name,
    description: `${COMPANY.tagline} in ${COMPANY.address.city}. Vakkundig schildersbedrijf voor binnenschilderwerk, buitenschilderwerk, glaswerk en wandafwerking.`,
    url: 'https://josheerschop.nl',
    telephone: COMPANY.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.province,
      postalCode: COMPANY.address.postalCode,
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.5537,
      longitude: 5.9118,
    },
    sameAs: [COMPANY.social.facebook],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMPANY.reviews.score,
      reviewCount: COMPANY.reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: COMPANY.address.city,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Binnenschilderwerk',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buitenschilderwerk',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Glaswerk',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wandafwerking',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Onderhoudsschilderwerk',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
