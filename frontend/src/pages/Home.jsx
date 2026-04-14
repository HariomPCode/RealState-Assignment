import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Amenities from '../components/Amenities';
import Nearby from '../components/Nearby';
import Buildings from '../components/Buildings';
import Construction from '../components/Construction';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import { useContent } from '../context/ContentContext';

const Home = () => {
  const { loading, error } = useContent();

  if (loading) return <Spinner fullScreen />;
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="text-center">
        <p className="text-red-400 mb-2">Failed to load content</p>
        <p className="text-white/40 text-sm">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 border border-gold-400 text-gold-400 text-sm hover:bg-gold-400 hover:text-dark-900 transition-all"
        >
          Retry
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-dark-900">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Nearby />
      <Buildings />
      <Construction />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
