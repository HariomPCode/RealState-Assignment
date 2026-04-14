const Spinner = ({ fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-dark-900 flex flex-col items-center justify-center z-50">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-gold-400/20 rounded-full" />
          <div className="absolute inset-0 border-t-2 border-gold-400 rounded-full animate-spin" />
        </div>
        <p className="mt-6 font-display text-2xl tracking-widest text-gold-400/80">INFINITY</p>
        <p className="mt-2 text-xs tracking-widest text-white/30 uppercase">Loading Experience</p>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-8 h-8 border-2 border-gold-400/20 border-t-gold-400 rounded-full animate-spin" />
    </div>
  );
};

export default Spinner;
