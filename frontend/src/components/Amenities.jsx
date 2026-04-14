import { useContent } from '../context/ContentContext';

const Amenities = () => {
  const { content } = useContent();
  const amenities = content?.amenities;

  return (
    <section id="amenities" className="py-28 bg-dark-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #d4aa5a 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gold-400/80 mb-4">Lifestyle</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            {amenities?.heading || 'World-Class Amenities'}
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
          {amenities?.items?.map((item, i) => (
            <div
              key={i}
              className="bg-dark-900 p-8 flex flex-col items-center text-center group hover:bg-dark-700 transition-colors duration-300 cursor-default"
            >
              <div className="w-16 h-16 rounded-full border border-gold-400/20 flex items-center justify-center mb-4 group-hover:border-gold-400/60 group-hover:bg-gold-400/10 transition-all duration-300">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <p className="text-white/70 text-sm tracking-wider group-hover:text-white transition-colors duration-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
