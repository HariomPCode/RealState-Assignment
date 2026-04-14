const Content = require('../models/Content');

const defaultContent = {
  hero: {
    title: 'Infinity',
    tagline: 'Where Luxury Meets the Sky',
    subtitle: 'Premium Residences in the Heart of the City',
    pricingCards: [
      { config: '2 BHK', area: '850 sq.ft', price: '₹85 Lakhs', tag: 'Most Popular' },
      { config: '3 BHK', area: '1200 sq.ft', price: '₹1.2 Cr', tag: 'Best Value' },
      { config: '4 BHK', area: '1800 sq.ft', price: '₹1.9 Cr', tag: 'Premium' },
    ],
    ctaText: 'Book Your Site Visit',
  },
  about: {
    heading: 'A New Standard of Living',
    paragraph:
      'Infinity redefines modern urban living with meticulously designed residences that blend contemporary architecture with thoughtful amenities. Nestled in a prime location, every detail has been crafted to provide an unparalleled lifestyle experience for you and your family.',
    brochureText: 'Download Brochure',
  },
  amenities: {
    heading: 'World-Class Amenities',
    items: [
      { icon: '🏊', title: 'Swimming Pool' },
      { icon: '🏋️', title: 'Fitness Center' },
      { icon: '🌳', title: 'Landscaped Gardens' },
      { icon: '🏸', title: 'Sports Court' },
      { icon: '🔒', title: '24/7 Security' },
      { icon: '🚗', title: 'Parking Facility' },
      { icon: '🛝', title: "Children's Play Area" },
      { icon: '🎭', title: 'Clubhouse' },
    ],
  },
  nearby: {
    heading: 'Prime Connectivity',
    items: [
      { category: 'Education', places: ['DPS School - 1.2 km', 'Symbiosis University - 3 km', 'IIT Campus - 5 km'] },
      { category: 'Healthcare', places: ['Apollo Hospital - 2 km', 'Ruby Hall Clinic - 3.5 km', 'Medipoint Hospital - 1.8 km'] },
      { category: 'Transport', places: ['Metro Station - 0.5 km', 'Airport - 18 km', 'Railway Station - 8 km'] },
      { category: 'Shopping', places: ['Phoenix Mall - 2.5 km', 'Reliance Smart - 1 km', 'Big Bazaar - 1.5 km'] },
    ],
  },
  construction: {
    heading: 'Construction Progress',
    updates: [
      { date: 'January 2024', title: 'Foundation Complete', description: 'Foundation work for all 3 towers successfully completed.' },
      { date: 'April 2024', title: 'Structure Up to 10th Floor', description: 'Structural work progressing rapidly — all towers at 10th floor.' },
      { date: 'August 2024', title: 'External Facade Work', description: 'External cladding and facade work commenced for Tower A.' },
      { date: 'December 2024', title: 'Interior Finishing', description: 'Interior work started in Tower A. Flooring and tiling in progress.' },
    ],
  },
  faq: {
    heading: 'Frequently Asked Questions',
    items: [
      { question: 'What is the possession date?', answer: 'Possession is expected by December 2025, subject to timely approvals.' },
      { question: 'Is there a bank loan facility available?', answer: 'Yes, we have tie-ups with leading banks including HDFC, SBI, and ICICI for home loans.' },
      { question: 'What are the available payment plans?', answer: 'We offer construction-linked plans, down-payment plans, and flexible EMI options.' },
      { question: 'Is there RERA registration?', answer: 'Yes, the project is RERA registered. Registration number: MH/12345/2023.' },
      { question: 'What is the maintenance charge?', answer: 'Maintenance is ₹3 per sq.ft per month, billed quarterly.' },
    ],
  },
  buildings: {
    heading: 'Explore Our Portfolio',
    items: [
      { title: 'Horizon Heights', description: '3 & 4 BHK premium residences with panoramic views', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600' },
      { title: 'Skyline Tower', description: 'Luxury apartments in the business district', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600' },
      { title: 'Emerald Estates', description: 'Tranquil living amidst lush greenery', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600' },
    ],
  },
};

const getAllContent = async (req, res) => {
  try {
    const sections = await Content.find({});
    if (sections.length === 0) {
      // Seed defaults
      const toInsert = Object.entries(defaultContent).map(([section, content]) => ({ section, content }));
      await Content.insertMany(toInsert);
      const seeded = await Content.find({});
      const result = {};
      seeded.forEach((s) => { result[s.section] = s.content; });
      return res.json({ success: true, data: result });
    }
    const result = {};
    sections.forEach((s) => { result[s.section] = s.content; });
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateSection = async (req, res) => {
  try {
    const { section } = req.params;
    const { content } = req.body;
    if (!content) return res.status(400).json({ success: false, message: 'Content is required' });

    const updated = await Content.findOneAndUpdate(
      { section },
      { content },
      { new: true, upsert: true }
    );
    res.json({ success: true, data: updated, message: `${section} updated successfully` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllContent, updateSection };
