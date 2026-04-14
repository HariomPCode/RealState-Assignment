import { Link } from 'react-router-dom';
import { useContent } from '../../context/ContentContext';

const cards = [
  { label: 'Hero Section', path: 'hero', icon: '🏠', desc: 'Title, tagline, pricing cards, CTA' },
  { label: 'About Section', path: 'about', icon: '📖', desc: 'Project overview and brochure' },
  { label: 'Amenities', path: 'amenities', icon: '✨', desc: 'Facilities and lifestyle features' },
  { label: 'Connectivity', path: 'nearby', icon: '📍', desc: 'Nearby schools, hospitals, transport' },
  { label: 'Construction', path: 'construction', icon: '🏗️', desc: 'Build progress timeline' },
  { label: 'FAQ', path: 'faq', icon: '❓', desc: 'Common questions and answers' },
  { label: 'Buildings', path: 'buildings', icon: '🏢', desc: 'Portfolio property cards' },
];

const DashboardOverview = () => {
  const { content } = useContent();

  return (
    <div>
      <div className="mb-10">
        <p className="text-xs tracking-widest uppercase text-gold-400/70 mb-2">Welcome back</p>
        <h1 className="font-display text-3xl text-white">Dashboard</h1>
        <p className="text-white/40 text-sm mt-2">Select a section to edit its content. Changes reflect instantly on the website.</p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Sections', value: '7' },
          { label: 'Amenities', value: content?.amenities?.items?.length || '—' },
          { label: 'FAQ Items', value: content?.faq?.items?.length || '—' },
          { label: 'Properties', value: content?.buildings?.items?.length || '—' },
        ].map((stat) => (
          <div key={stat.label} className="bg-dark-800 border border-white/8 p-5">
            <p className="font-display text-3xl text-gold-400">{stat.value}</p>
            <p className="text-white/40 text-xs tracking-wider mt-1 uppercase">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Link
            key={card.path}
            to={`/admin/dashboard/${card.path}`}
            className="group bg-dark-800 border border-white/8 p-6 hover:border-gold-400/30 hover:bg-dark-700 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{card.icon}</span>
              <span className="text-gold-400/0 group-hover:text-gold-400/60 transition-all text-xs tracking-wider uppercase">
                Edit →
              </span>
            </div>
            <h3 className="text-white font-medium mb-1 group-hover:text-gold-400 transition-colors">
              {card.label}
            </h3>
            <p className="text-white/30 text-xs leading-relaxed">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
