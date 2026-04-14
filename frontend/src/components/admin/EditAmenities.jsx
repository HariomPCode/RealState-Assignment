import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { updateSection } from '../../services/api';
import { FormField, Input, SaveButton, SectionHeader } from './FormElements';
import toast from 'react-hot-toast';

const EditAmenities = () => {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content?.amenities) setForm(JSON.parse(JSON.stringify(content.amenities)));
  }, [content]);

  if (!form) return <div className="text-white/40 text-sm">Loading...</div>;

  const handleItemChange = (i, field, value) => {
    const items = [...form.items];
    items[i] = { ...items[i], [field]: value };
    setForm({ ...form, items });
  };

  const addItem = () => {
    setForm({ ...form, items: [...form.items, { icon: '🏠', title: 'New Amenity' }] });
  };

  const removeItem = (i) => {
    setForm({ ...form, items: form.items.filter((_, idx) => idx !== i) });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateSection('amenities', form);
      updateContent('amenities', form);
      toast.success('Amenities updated!');
    } catch {
      toast.error('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeader title="Amenities Section" subtitle="Manage the amenities grid items" />
      <FormField label="Section Heading">
        <Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
      </FormField>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <label className="text-xs tracking-widest uppercase text-white/40">Amenity Items</label>
          <button
            onClick={addItem}
            className="text-xs text-gold-400 border border-gold-400/30 px-3 py-1.5 hover:bg-gold-400/10 transition-colors"
          >
            + Add Item
          </button>
        </div>
        <div className="space-y-3">
          {form.items?.map((item, i) => (
            <div key={i} className="bg-dark-900 border border-white/8 p-4 flex items-center gap-3">
              <div className="w-24 flex-shrink-0">
                <Input
                  value={item.icon}
                  onChange={(e) => handleItemChange(i, 'icon', e.target.value)}
                  placeholder="🏊"
                />
              </div>
              <div className="flex-1">
                <Input
                  value={item.title}
                  onChange={(e) => handleItemChange(i, 'title', e.target.value)}
                  placeholder="Amenity name"
                />
              </div>
              <button
                onClick={() => removeItem(i)}
                className="text-red-400/60 hover:text-red-400 text-sm px-2 py-1 flex-shrink-0 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
      <SaveButton loading={loading} onClick={handleSave} />
    </div>
  );
};

export default EditAmenities;
