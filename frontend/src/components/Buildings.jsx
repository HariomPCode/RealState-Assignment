import { useContent } from '../context/ContentContext';

const Buildings = () => {
  const { content } = useContent();
  const buildings = content?.buildings;

  return (
    <section className="py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold-400/80 mb-4">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">
              {buildings?.heading || 'Explore Our Portfolio'}
            </h2>
          </div>
          <div className="w-16 h-px bg-gold-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {buildings?.items?.map((b, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden h-64 mb-5">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] tracking-widest uppercase text-gold-400/80">View Project</span>
                </div>
              </div>
              <h3 className="font-display text-xl text-white mb-2 group-hover:text-gold-400 transition-colors">
                {b.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Buildings;
