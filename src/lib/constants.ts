export const COMPANY = {
  name: 'Schildersbedrijf Jos Heerschop V.O.F.',
  shortName: 'Jos Heerschop',
  tagline: 'Glas, Schilder en Wandafwerking',
  phone: '038 331 9057',
  phoneHref: 'tel:0383319057',
  email: 'info@josheerschop.nl',
  address: {
    street: 'De Omloop 16',
    postalCode: '8261 LP',
    city: 'Kampen',
    province: 'Overijssel',
    full: 'De Omloop 16, 8261 LP Kampen',
  },
  social: {
    facebook: 'https://www.facebook.com/p/Schildersbedrijf-Jos-Heerschop-100054292670798',
  },
  reviews: {
    score: 4.7,
    count: 26,
    platform: 'Google',
  },
} as const;

export const SERVICES = [
  {
    slug: 'binnenschilderwerk',
    title: 'Binnenschilderwerk',
    shortDescription: 'Een fris en verzorgd interieur dankzij vakkundig schilderwerk.',
    description:
      'Geef uw woning of bedrijfspand een frisse uitstraling met professioneel binnenschilderwerk. Of het nu gaat om muren, plafonds, kozijnen of deuren — wij zorgen voor een strak en duurzaam resultaat. We adviseren u graag over de juiste kleuren en materialen.',
    benefits: [
      'Strakke, professionele afwerking',
      'Advies over kleuren en materialen',
      'Nette en schone werkwijze',
      'Geschikt voor woningen en bedrijfspanden',
    ],
    whenNeeded:
      'Wanneer uw binnenmuren, plafonds of houtwerk toe zijn aan een opknapbeurt, of bij verbouwing en renovatie.',
    icon: 'interior',
  },
  {
    slug: 'buitenschilderwerk',
    title: 'Buitenschilderwerk',
    shortDescription: 'Bescherm en verfraai de buitenkant van uw pand.',
    description:
      'Buitenschilderwerk beschermt uw pand tegen weersinvloeden en houdt het er mooi uit. Wij verzorgen het complete buitenschilderwerk, van kozijnen en ramen tot gevels en daklijsten. Met hoogwaardige verven en een gedegen voorbereiding garanderen wij een langdurig resultaat.',
    benefits: [
      'Bescherming tegen weer en wind',
      'Langdurig resultaat door goede voorbereiding',
      'Hoogwaardige verven en lakken',
      'Vakkundige afwerking tot in detail',
    ],
    whenNeeded:
      'Als de verflaag begint te bladderen, verkleuren of loslaten, of als u uw pand een andere uitstraling wilt geven.',
    icon: 'exterior',
  },
  {
    slug: 'glaswerk',
    title: 'Glaswerk',
    shortDescription: 'Vakkundig glaswerk voor reparatie, vervanging en nieuwbouw.',
    description:
      'Van enkele beglazing tot isolerend HR++ glas — wij verzorgen al uw glaswerk. Of het nu gaat om een gebroken ruit, een nieuw raam of het upgraden naar energiezuinig glas, u kunt op ons rekenen voor een snelle en nette afhandeling.',
    benefits: [
      'Alle soorten beglazing',
      'Snelle service bij glasschade',
      'Energiezuinige oplossingen',
      'Nette plaatsing en afwerking',
    ],
    whenNeeded:
      'Bij glasbreuk, renovatie, nieuwbouw of wanneer u wilt besparen op energie door betere beglazing.',
    icon: 'glass',
  },
  {
    slug: 'wandafwerking',
    title: 'Wandafwerking',
    shortDescription: 'Decoratieve en functionele wandafwerking naar uw wens.',
    description:
      'Naast traditioneel schilderwerk bieden wij diverse wandafwerkingen aan. Denk aan behangen, stucwerk, spachtelputz of andere decoratieve technieken. Wij adviseren u over de mogelijkheden en zorgen voor een prachtig eindresultaat.',
    benefits: [
      'Breed aanbod aan technieken',
      'Decoratief én functioneel',
      'Persoonlijk advies op maat',
      'Strak en professioneel resultaat',
    ],
    whenNeeded:
      'Wanneer u op zoek bent naar een bijzondere wandafwerking, bij renovatie of als u toe bent aan iets anders dan verf.',
    icon: 'wall',
  },
  {
    slug: 'onderhoudsschilderwerk',
    title: 'Onderhoudsschilderwerk',
    shortDescription: 'Regelmatig onderhoud voorkomt dure reparaties.',
    description:
      'Goed onderhoud verlengt de levensduur van uw schilderwerk en bespaart op de lange termijn kosten. Wij bieden onderhoudscontracten en periodieke inspecties aan, zodat uw pand er altijd verzorgd uitziet en goed beschermd blijft.',
    benefits: [
      'Voorkomt dure reparaties',
      'Verlengt levensduur van verflagen',
      'Periodieke inspectie mogelijk',
      'Zorgeloze oplossing voor uw pand',
    ],
    whenNeeded:
      'Als preventief onderhoud, bij zichtbare slijtage, of wanneer u een onderhoudscontract wilt afsluiten.',
    icon: 'maintenance',
  },
] as const;

export const REVIEWS = [
  {
    quote: 'Top schildersbedrijf; nette prijzen, goed advies en nazorg.',
    author: 'Tonny Duiveman',
    rating: 5,
  },
  {
    quote: 'De buitenkant van het huis laten schilderen, alles weer strak in de lak.',
    author: 'Onno Nipius',
    rating: 5,
  },
  {
    quote: 'Goede schilders. Verstaan hun vak. Werken netjes.',
    author: 'Ruben Hollander',
    rating: 5,
  },
] as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Diensten', href: '/diensten' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
] as const;
