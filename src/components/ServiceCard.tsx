import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  icon: string;
  slug: string;
}

export default function ServiceCard({ title, shortDescription, slug }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all">
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{shortDescription}</p>
      <Link
        href={`/diensten#${slug}`}
        className="inline-flex items-center text-sm font-semibold text-brand-800 hover:text-brand-900 transition-colors"
      >
        Meer informatie
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}
