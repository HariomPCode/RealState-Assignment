import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = ['About', 'Amenities', 'Connectivity', 'Updates', 'FAQ'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold tracking-widest text-gold-400">
          INFINITY
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm tracking-wider text-white/70 hover:text-gold-400 transition-colors duration-300 uppercase"
            >
              {l}
            </a>
          ))}
          <Link
            to="/admin"
            className="text-sm tracking-wider px-5 py-2 border border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-dark-900 transition-all duration-300 uppercase"
          >
            Admin
          </Link>
        </div>
        <button
          className="md:hidden text-white/80"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-dark-800/98 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm tracking-wider text-white/70 uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <Link to="/admin" className="text-sm text-gold-400 uppercase" onClick={() => setMenuOpen(false)}>
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
