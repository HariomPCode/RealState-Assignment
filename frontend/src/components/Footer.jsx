const Footer = () => (
  <footer className="bg-dark-800 border-t border-white/5 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <p className="font-display text-3xl tracking-widest text-gold-400 mb-4">INFINITY</p>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Redefining luxury living with thoughtfully designed residences that combine contemporary architecture with unparalleled amenities.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/60 mb-5">Quick Links</p>
          <ul className="space-y-3">
            {['About', 'Amenities', 'Connectivity', 'Updates', 'FAQ'].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-white/40 text-sm hover:text-gold-400 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-white/60 mb-5">Contact</p>
          <ul className="space-y-3 text-white/40 text-sm">
            <li>📞 +91 98765 43210</li>
            <li>✉️ sales@infinity.in</li>
            <li>📍 Business Bay, Pune, Maharashtra</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-xs tracking-wider">
          © {new Date().getFullYear()} Infinity Realty. RERA Reg: MH/12345/2023
        </p>
        <p className="text-white/20 text-xs tracking-wider">
          Privacy Policy · Terms of Use · Disclaimer
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
