import { useContent } from '../context/ContentContext';

const categoryIcons = {
  Education: '🎓',
  Healthcare: '🏥',
  Transport: '🚇',
  Shopping: '🛍️',
};

const Nearby = () => {
  const { content } = useContent();
  const nearby = content?.nearby;

  return (
    <section id="connectivity" className="py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gold-400/80 mb-4">Location</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            {nearby?.heading || 'Prime Connectivity'}
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {nearby?.items?.map((cat, i) => (
            <div
              key={i}
              className="border border-white/8 p-6 hover:border-gold-400/30 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{categoryIcons[cat.category] || '📍'}</span>
                <h3 className="font-display text-lg text-gold-400 font-medium">{cat.category}</h3>
              </div>
              <ul className="space-y-3">
                {cat.places?.map((place, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold-400/60 mt-2 flex-shrink-0" />
                    <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                      {place}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-12 relative overflow-hidden h-64 border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80"
            alt="Map area"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-gold-400 text-4xl">📍</span>
              <p className="text-white/60 text-sm mt-2 tracking-wider">Strategic Location — Prime City Center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nearby;
