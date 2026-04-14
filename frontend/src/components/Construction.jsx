import { useContent } from '../context/ContentContext';

const Construction = () => {
  const { content } = useContent();
  const construction = content?.construction;

  return (
    <section id="updates" className="py-28 bg-dark-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gold-400/80 mb-4">Progress</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            {construction?.heading || 'Construction Updates'}
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/50 via-gold-400/20 to-transparent" />

          <div className="space-y-12">
            {construction?.updates?.map((update, i) => (
              <div
                key={i}
                className={`relative flex gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-gold-400/20 z-10" />

                {/* Spacer for alternating */}
                <div className="hidden md:block md:w-1/2" />

                <div
                  className={`ml-14 md:ml-0 md:w-1/2 border border-white/8 p-6 hover:border-gold-400/30 transition-all duration-300 ${
                    i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                  }`}
                >
                  <span className="text-[10px] tracking-widest uppercase text-gold-400/70">{update.date}</span>
                  <h3 className="font-display text-xl text-white mt-1 mb-2">{update.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{update.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construction;
