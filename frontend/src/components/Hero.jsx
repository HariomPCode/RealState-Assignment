import { useContent } from '../context/ContentContext';

const Hero = () => {
  const { content } = useContent();
  const hero = content?.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
          alt="Luxury Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/50 to-dark-900" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-8 top-1/4 w-px h-40 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute right-8 top-1/4 w-px h-40 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-gold-400/80 mb-6 fade-up">
          Premium Residences
        </p>
        <h1 className="font-display text-7xl md:text-9xl font-light text-white tracking-wider mb-4 fade-up"
          style={{ animationDelay: '0.1s' }}>
          {hero?.title || 'INFINITY'}
        </h1>
        <div className="w-24 h-px bg-gold-400 mx-auto mb-6" />
        <p className="font-display text-xl md:text-2xl italic text-gold-300/90 mb-3 fade-up"
          style={{ animationDelay: '0.2s' }}>
          {hero?.tagline}
        </p>
        <p className="text-white/50 text-sm tracking-wider mb-14 fade-up"
          style={{ animationDelay: '0.3s' }}>
          {hero?.subtitle}
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 fade-up" style={{ animationDelay: '0.4s' }}>
          {hero?.pricingCards?.map((card, i) => (
            <div
              key={i}
              className={`relative border p-6 text-left transition-all duration-300 hover:bg-gold-400/10 group ${
                i === 1
                  ? 'border-gold-400 bg-gold-400/5'
                  : 'border-white/10 bg-white/3'
              }`}
            >
              {card.tag && (
                <span className="absolute -top-3 left-4 text-[10px] tracking-widest uppercase bg-gold-400 text-dark-900 px-3 py-1 font-semibold">
                  {card.tag}
                </span>
              )}
              <p className="font-display text-3xl font-semibold text-white mb-1">{card.config}</p>
              <p className="text-white/40 text-xs tracking-wider mb-4">{card.area}</p>
              <p className="text-gold-400 font-display text-xl font-light">{card.price}</p>
              <p className="text-white/30 text-xs mt-1">onwards</p>
            </div>
          ))}
        </div>

        <button
          className="fade-up px-10 py-4 bg-gold-400 text-dark-900 text-sm tracking-[0.3em] uppercase font-semibold hover:bg-gold-300 transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ animationDelay: '0.5s' }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {hero?.ctaText || 'Book Site Visit'}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
