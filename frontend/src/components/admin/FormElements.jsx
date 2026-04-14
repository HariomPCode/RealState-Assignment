export const FormField = ({ label, children }) => (
  <div className="mb-5">
    <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">{label}</label>
    {children}
  </div>
);

export const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full bg-dark-900 border border-white/10 text-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold-400/50 transition-colors placeholder:text-white/20"
  />
);

export const Textarea = ({ ...props }) => (
  <textarea
    {...props}
    className="w-full bg-dark-900 border border-white/10 text-white px-4 py-2.5 text-sm focus:outline-none focus:border-gold-400/50 transition-colors placeholder:text-white/20 resize-y min-h-[80px]"
  />
);

export const SaveButton = ({ loading, onClick }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className="mt-4 px-8 py-3 bg-gold-400 text-dark-900 text-sm tracking-[0.3em] uppercase font-semibold hover:bg-gold-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
  >
    {loading ? (
      <>
        <span className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
        Saving...
      </>
    ) : (
      'Save Changes'
    )}
  </button>
);

export const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 pb-6 border-b border-white/8">
    <h2 className="font-display text-2xl text-white">{title}</h2>
    {subtitle && <p className="text-white/40 text-sm mt-1">{subtitle}</p>}
  </div>
);
