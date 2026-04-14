import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { updateSection } from '../../services/api';
import { FormField, Input, Textarea, SaveButton, SectionHeader } from './FormElements';
import toast from 'react-hot-toast';

const EditBuildings = () => {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content?.buildings) setForm(JSON.parse(JSON.stringify(content.buildings)));
  }, [content]);

  if (!form) return <div className="text-white/40 text-sm">Loading...</div>;

  const handleItemChange = (i, field, value) => {
    const items = [...form.items];
    items[i] = { ...items[i], [field]: value };
    setForm({ ...form, items });
  };

  const addItem = () => {
    setForm({
      ...form,
      items: [
        ...form.items,
        {
          title: 'New Building',
          description: 'Description here...',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
        },
      ],
    });
  };

  const removeItem = (i) => {
    setForm({ ...form, items: form.items.filter((_, idx) => idx !== i) });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateSection('buildings', form);
      updateContent('buildings', form);
      toast.success('Buildings section updated!');
    } catch {
      toast.error('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeader title="Explore Buildings" subtitle="Manage the portfolio cards" />
      <FormField label="Section Heading">
        <Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
      </FormField>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <label className="text-xs tracking-widest uppercase text-white/40">Building Cards</label>
          <button
            onClick={addItem}
            className="text-xs text-gold-400 border border-gold-400/30 px-3 py-1.5 hover:bg-gold-400/10 transition-colors"
          >
            + Add Building
          </button>
        </div>
        <div className="space-y-5">
          {form.items?.map((item, i) => (
            <div key={i} className="bg-dark-900 border border-white/8 p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/40 text-xs tracking-wider">Building {i + 1}</span>
                <button
                  onClick={() => removeItem(i)}
                  className="text-red-400/60 hover:text-red-400 text-xs transition-colors"
                >
                  ✕ Remove
                </button>
              </div>
              {/* Preview */}
              {item.image && (
                <div className="mb-4 h-28 overflow-hidden border border-white/5">
                  <img src={item.image} alt="" className="w-full h-full object-cover opacity-60" />
                </div>
              )}
              <FormField label="Title">
                <Input value={item.title} onChange={(e) => handleItemChange(i, 'title', e.target.value)} />
              </FormField>
              <FormField label="Description">
                <Textarea
                  rows={2}
                  value={item.description}
                  onChange={(e) => handleItemChange(i, 'description', e.target.value)}
                />
              </FormField>
              <FormField label="Image URL (Unsplash)">
                <Input
                  value={item.image}
                  onChange={(e) => handleItemChange(i, 'image', e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                />
              </FormField>
            </div>
          ))}
        </div>
      </div>
      <SaveButton loading={loading} onClick={handleSave} />
    </div>
  );
};

export default EditBuildings;
