import { useState } from 'react';
import { useContent } from '../context/ContentContext';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className={`border-b border-white/8 transition-colors duration-300 ${isOpen ? 'border-gold-400/20' : ''}`}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left group"
    >
      <span className={`text-sm md:text-base tracking-wide transition-colors duration-300 ${isOpen ? 'text-gold-400' : 'text-white/70 group-hover:text-white'}`}>
        {question}
      </span>
      <span className={`ml-4 flex-shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
        isOpen ? 'border-gold-400 text-gold-400 rotate-45' : 'border-white/20 text-white/40'
      }`}>
        +
      </span>
    </button>
    <div
      className="overflow-hidden transition-all duration-400 ease-in-out"
      style={{ maxHeight: isOpen ? '200px' : '0' }}
    >
      <p className="pb-6 text-white/50 text-sm leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const { content } = useContent();
  const faq = content?.faq;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-28 bg-dark-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gold-400/80 mb-4">Support</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            {faq?.heading || 'Frequently Asked Questions'}
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto" />
        </div>

        <div>
          {faq?.items?.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
