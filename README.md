# Schildersbedrijf Jos Heerschop V.O.F. — Website

Professionele website voor Schildersbedrijf Jos Heerschop V.O.F., gespecialiseerd in glas, schilder en wandafwerking in Kampen.

## Tech stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **React 19**

## Installatie

```bash
# Installeer dependencies
npm install

# Kopieer environment variabelen
cp .env.example .env.local
```

## Lokaal starten

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Build voor productie

```bash
npm run build
npm start
```

## Projectstructuur

```
src/
├── app/                    # Next.js App Router pagina's
│   ├── layout.tsx          # Root layout met Header, Footer, SEO
│   ├── page.tsx            # Homepage
│   ├── over-ons/page.tsx   # Over ons pagina
│   ├── diensten/page.tsx   # Diensten overzicht
│   ├── reviews/page.tsx    # Reviews & ervaringen
│   └── contact/page.tsx    # Contactpagina met formulier
├── components/             # Herbruikbare React-componenten
│   ├── Header.tsx          # Navigatie met mobile menu
│   ├── Footer.tsx          # Footer met bedrijfsinfo
│   ├── FacebookFeed.tsx    # Facebook-posts component
│   ├── ServiceCard.tsx     # Dienstkaart component
│   ├── ReviewCard.tsx      # Review testimonial card
│   ├── GoogleReviewBadge.tsx # Google review score badge
│   ├── ContactForm.tsx     # Contactformulier met validatie
│   └── StructuredData.tsx  # JSON-LD structured data
├── lib/                    # Utilities en services
│   ├── constants.ts        # Bedrijfsgegevens, diensten, reviews
│   └── facebook.ts         # Facebook feed service (Graph API + fallback)
└── types/                  # TypeScript type definities
    └── facebook.ts         # Facebook post interfaces
```

## Environment variabelen

| Variabele | Beschrijving | Verplicht |
|-----------|-------------|-----------|
| `FACEBOOK_PAGE_ID` | Facebook Page ID | Ja |
| `FACEBOOK_ACCESS_TOKEN` | Facebook Graph API Page Access Token | Nee (fallback naar mock) |
| `USE_MOCK_FACEBOOK_DATA` | `true` voor mock data, `false` voor live API | Nee (default: `true`) |

## Facebook-feed integratie

### Hoe het werkt

De Facebook-feed gebruikt een abstractielaag in `src/lib/facebook.ts`:

1. **Met live API**: Haalt de laatste 5 posts op via de Meta Graph API v19.0
2. **Zonder API token**: Valt automatisch terug op realistische mock data
3. **Bij API-fouten**: Valt graceful terug op mock data met console warning

### Live koppeling activeren

1. Ga naar [Meta for Developers](https://developers.facebook.com/)
2. Maak een Facebook App aan (type: Business)
3. Voeg het product "Facebook Login" toe
4. Genereer een **Page Access Token** met de permissie `pages_read_content`
5. Verleng de token naar een **long-lived token** (60 dagen geldig):
   ```
   GET /oauth/access_token?grant_type=fb_exchange_token
     &client_id={app-id}
     &client_secret={app-secret}
     &fb_exchange_token={short-lived-token}
   ```
6. Vul de token in `.env.local`:
   ```
   FACEBOOK_ACCESS_TOKEN=je_long_lived_token
   USE_MOCK_FACEBOOK_DATA=false
   ```

### Token verlenging

Long-lived tokens verlopen na 60 dagen. Overweeg:
- Een serverless function (cron) die de token automatisch vernieuwt
- Een System User token via Facebook Business Manager (verloopt niet)

### Fallback data

De mock data in `src/lib/facebook.ts` bevat 5 realistische posts die worden getoond wanneer:
- `USE_MOCK_FACEBOOK_DATA=true` (standaard)
- Er geen `FACEBOOK_ACCESS_TOKEN` is ingesteld
- De Facebook API een fout geeft

## Architectuurkeuzes

- **Server-side rendering**: Alle pagina's worden server-side gerenderd voor optimale SEO en performance.
- **Facebook feed als server component**: Posts worden server-side opgehaald met 1 uur cache (`revalidate: 3600`).
- **Centraal gegevensbeheer**: Alle bedrijfsgegevens staan in `constants.ts` — wijzig op een plek, werkt overal door.
- **Mobile-first design**: Alle componenten zijn eerst ontworpen voor mobile, daarna uitgebreid voor tablet en desktop.
- **Semantische HTML**: Correcte heading-structuur, landmarks, ARIA-labels en formulierlabels.
- **Lokale SEO**: JSON-LD structured data, Open Graph tags, en keyword-geoptimaliseerde meta descriptions.
- **Geen extra dependencies**: Alleen Next.js, React en Tailwind. Geen UI-libraries of icon-packs.

## SEO

- JSON-LD `LocalBusiness` structured data met adres, telefoon, diensten en reviews
- Open Graph meta tags op elke pagina
- Semantische heading-structuur (h1-h4)
- Keyword-focus op lokale zoektermen (schilder Kampen, schildersbedrijf Kampen, etc.)
- Crawlbare content zonder JavaScript-afhankelijkheden

## Deploy

De site kan worden gedeployed op Vercel, Netlify, of elke andere Node.js hosting:

```bash
npm run build
npm start
```

Of deploy naar Vercel met een klik via [vercel.com](https://vercel.com).
