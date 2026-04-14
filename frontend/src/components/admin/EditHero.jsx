import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { updateSection } from '../../services/api';
import { FormField, Input, Textarea, SaveButton, SectionHeader } from './FormElements';
import toast from 'react-hot-toast';

const EditHero = () => {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content?.hero) setForm(JSON.parse(JSON.stringify(content.hero)));
  }, [content]);

  if (!form) return <div className="text-white/40 text-sm">Loading...</div>;

  const handleCardChange = (i, field, value) => {
    const cards = [...form.pricingCards];
    cards[i] = { ...cards[i], [field]: value };
    setForm({ ...form, pricingCards: cards });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateSection('hero', form);
      updateContent('hero', form);
      toast.success('Hero section updated!');
    } catch {
      toast.error('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeader title="Hero Section" subtitle="Edit the main banner content and pricing cards" />
      <FormField label="Project Title">
        <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      </FormField>
      <FormField label="Tagline">
        <Input value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} />
      </FormField>
      <FormField label="Subtitle">
        <Input value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} />
      </FormField>
      <FormField label="CTA Button Text">
        <Input value={form.ctaText} onChange={(e) => setForm({ ...form, ctaText: e.target.value })} />
      </FormField>

      <div className="mb-5">
        <label className="block text-xs tracking-widest uppercase text-white/40 mb-4">Pricing Cards</label>
        <div className="space-y-4">
          {form.pricingCards?.map((card, i) => (
            <div key={i} className="bg-dark-900 border border-white/8 p-4">
              <p className="text-white/40 text-xs mb-3 tracking-wider">Card {i + 1}</p>
              <div className="grid grid-cols-2 gap-3">
                <FormField label="Config"><Input value={card.config} onChange={(e) => handleCardChange(i, 'config', e.target.value)} /></FormField>
                <FormField label="Area"><Input value={card.area} onChange={(e) => handleCardChange(i, 'area', e.target.value)} /></FormField>
                <FormField label="Price"><Input value={card.price} onChange={(e) => handleCardChange(i, 'price', e.target.value)} /></FormField>
                <FormField label="Tag"><Input value={card.tag} onChange={(e) => handleCardChange(i, 'tag', e.target.value)} /></FormField>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SaveButton loading={loading} onClick={handleSave} />
    </div>
  );
};

export default EditHero;
