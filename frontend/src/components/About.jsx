import { useContent } from '../context/ContentContext';

const About = () => {
  const { content } = useContent();
  const about = content?.about;

  return (
    <section id="about" className="py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Collage */}
        <div className="relative h-[500px] flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
            alt="Building interior"
            className="absolute top-0 left-0 w-3/5 h-3/5 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80"
            alt="Living room"
            className="absolute bottom-0 right-0 w-3/5 h-3/5 object-cover border-4 border-dark-800"
          />
          <div className="absolute bottom-14 left-8 w-28 h-28 rounded-full bg-gold-400/10 border border-gold-400/30 flex flex-col items-center justify-center">
            <span className="font-display text-3xl text-gold-400 font-semibold">15+</span>
            <span className="text-[10px] tracking-wider text-white/50 uppercase">Years</span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold-400 flex items-center justify-center">
            <span className="text-dark-900 text-2xl">⬧</span>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold-400/80 mb-4">About The Project</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-2 leading-tight">
            {about?.heading || 'A New Standard of Living'}
          </h2>
          <div className="w-16 h-px bg-gold-400 mb-8" />
          <p className="text-white/60 leading-relaxed text-base mb-10">
            {about?.paragraph}
          </p>
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Units', value: '320' },
              { label: 'Towers', value: '3' },
              { label: 'Acres', value: '4.5' },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-gold-400/30 pl-4">
                <p className="font-display text-3xl text-gold-400 font-semibold">{stat.value}</p>
                <p className="text-white/40 text-xs tracking-wider uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <button className="px-8 py-3 border border-gold-400 text-gold-400 text-sm tracking-[0.3em] uppercase hover:bg-gold-400 hover:text-dark-900 transition-all duration-300">
            {about?.brochureText || 'Download Brochure'} ↓
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
