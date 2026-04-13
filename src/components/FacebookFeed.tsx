import type { FacebookPost } from '@/types/facebook';
import { COMPANY } from '@/lib/constants';

interface FacebookFeedProps {
  posts: FacebookPost[];
}

export default function FacebookFeed({ posts }: FacebookFeedProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500">
        <p>Momenteel geen berichten beschikbaar.</p>
        <a
          href={COMPANY.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline mt-2 inline-block"
        >
          Bekijk onze Facebook-pagina →
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <FacebookPostCard key={post.id} post={post} featured={index === 0} />
      ))}
    </div>
  );
}

function FacebookPostCard({
  post,
  featured,
}: {
  post: FacebookPost;
  featured: boolean;
}) {
  const date = new Date(post.created_time);
  const formattedDate = date.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <a
      href={post.permalink_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {post.full_picture && (
        <div className="aspect-video bg-slate-100 overflow-hidden">
          <img
            src={post.full_picture}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900">{COMPANY.shortName}</p>
            <time className="text-xs text-slate-500" dateTime={post.created_time}>
              {formattedDate}
            </time>
          </div>
        </div>
        {post.message && (
          <p className="text-sm text-slate-600 line-clamp-4 leading-relaxed">
            {post.message}
          </p>
        )}
        <span className="inline-block mt-3 text-xs font-medium text-blue-800 group-hover:underline">
          Bekijk op Facebook →
        </span>
      </div>
    </a>
  );
}
