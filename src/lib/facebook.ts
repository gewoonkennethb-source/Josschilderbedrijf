/**
 * Facebook Feed Service
 *
 * Deze module beheert het ophalen van Facebook-posts via de Meta Graph API.
 *
 * CONFIGURATIE:
 * 1. Maak een Facebook App aan op https://developers.facebook.com/
 * 2. Voeg het product "Facebook Login" toe
 * 3. Genereer een Page Access Token met de permissie `pages_read_content`
 * 4. Verleng de token naar een long-lived token (60 dagen geldig)
 * 5. Vul FACEBOOK_ACCESS_TOKEN in je .env.local in
 * 6. Zet USE_MOCK_FACEBOOK_DATA op "false"
 *
 * AUTOMATISCH VERLENGEN:
 * Long-lived tokens verlopen na 60 dagen. Overweeg een cron job of
 * serverless function om tokens automatisch te vernieuwen via:
 * GET /oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}
 *   &client_secret={app-secret}&fb_exchange_token={short-lived-token}
 */

import type { FacebookPost } from '@/types/facebook';

const GRAPH_API_BASE = 'https://graph.facebook.com/v19.0';
const MAX_POSTS = 5;

const MOCK_POSTS: FacebookPost[] = [
  {
    id: 'mock_1',
    message:
      'Mooi project afgerond in het centrum van Kampen! De gevel is weer helemaal in orde na een grondige voorbereiding en twee lagen duurzame buitenverf. De bewoners zijn erg tevreden met het resultaat.',
    created_time: '2024-12-15T10:30:00+0100',
    full_picture: undefined,
    permalink_url: 'https://www.facebook.com/p/Schildersbedrijf-Jos-Heerschop-100054292670798',
  },
  {
    id: 'mock_2',
    message:
      'Binnenschilderwerk in een prachtige jaren-30 woning. Alle kozijnen, deuren en plinten weer strak in de lak. Vakwerk waar we trots op zijn!',
    created_time: '2024-12-01T14:00:00+0100',
    full_picture: undefined,
    permalink_url: 'https://www.facebook.com/p/Schildersbedrijf-Jos-Heerschop-100054292670798',
  },
  {
    id: 'mock_3',
    message:
      'HR++ beglazing geplaatst bij een klant in Kampen. Direct merkbaar verschil in comfort en energiebesparing. Neem contact op voor een vrijblijvende offerte!',
    created_time: '2024-11-20T09:00:00+0100',
    full_picture: undefined,
    permalink_url: 'https://www.facebook.com/p/Schildersbedrijf-Jos-Heerschop-100054292670798',
  },
  {
    id: 'mock_4',
    message:
      'Wandafwerking met spachtelputz in een modern appartement. Een prachtige structuur die het interieur compleet maakt.',
    created_time: '2024-11-10T11:30:00+0100',
    full_picture: undefined,
    permalink_url: 'https://www.facebook.com/p/Schildersbedrijf-Jos-Heerschop-100054292670798',
  },
  {
    id: 'mock_5',
    message:
      'Onderhoudsschilderwerk aan een woonblok in Kampen. Regelmatig onderhoud bespaart op de lange termijn en houdt uw pand in topconditie. Informeer naar onze onderhoudscontracten.',
    created_time: '2024-10-28T16:00:00+0100',
    full_picture: undefined,
    permalink_url: 'https://www.facebook.com/p/Schildersbedrijf-Jos-Heerschop-100054292670798',
  },
];

function useMockData(): boolean {
  return process.env.USE_MOCK_FACEBOOK_DATA === 'true' || !process.env.FACEBOOK_ACCESS_TOKEN;
}

/**
 * Haalt de laatste Facebook-posts op.
 * Gebruikt mock data als USE_MOCK_FACEBOOK_DATA=true of als er geen token is.
 */
export async function getFacebookPosts(): Promise<FacebookPost[]> {
  if (useMockData()) {
    return MOCK_POSTS.slice(0, MAX_POSTS);
  }

  try {
    const pageId = process.env.FACEBOOK_PAGE_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!pageId || !accessToken) {
      console.warn('Facebook credentials ontbreken, fallback naar mock data.');
      return MOCK_POSTS.slice(0, MAX_POSTS);
    }

    const fields = 'id,message,created_time,full_picture,permalink_url';
    const url = `${GRAPH_API_BASE}/${pageId}/posts?fields=${fields}&limit=${MAX_POSTS}&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache 1 uur
    });

    if (!response.ok) {
      console.error(`Facebook API fout: ${response.status} ${response.statusText}`);
      return MOCK_POSTS.slice(0, MAX_POSTS);
    }

    const data = await response.json();
    return (data.data as FacebookPost[]).slice(0, MAX_POSTS);
  } catch (error) {
    console.error('Fout bij ophalen Facebook-posts:', error);
    return MOCK_POSTS.slice(0, MAX_POSTS);
  }
}
