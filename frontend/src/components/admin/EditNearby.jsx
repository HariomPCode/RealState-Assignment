import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { updateSection } from '../../services/api';
import { FormField, Input, SaveButton, SectionHeader } from './FormElements';
import toast from 'react-hot-toast';

const EditNearby = () => {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content?.nearby) setForm(JSON.parse(JSON.stringify(content.nearby)));
  }, [content]);

  if (!form) return <div className="text-white/40 text-sm">Loading...</div>;

  const handleCategoryChange = (i, value) => {
    const items = [...form.items];
    items[i] = { ...items[i], category: value };
    setForm({ ...form, items });
  };

  const handlePlaceChange = (catIdx, placeIdx, value) => {
    const items = JSON.parse(JSON.stringify(form.items));
    items[catIdx].places[placeIdx] = value;
    setForm({ ...form, items });
  };

  const addPlace = (catIdx) => {
    const items = JSON.parse(JSON.stringify(form.items));
    items[catIdx].places.push('New Place - 0 km');
    setForm({ ...form, items });
  };

  const removePlace = (catIdx, placeIdx) => {
    const items = JSON.parse(JSON.stringify(form.items));
    items[catIdx].places.splice(placeIdx, 1);
    setForm({ ...form, items });
  };

  const addCategory = () => {
    setForm({
      ...form,
      items: [...form.items, { category: 'New Category', places: ['Place - 0 km'] }],
    });
  };

  const removeCategory = (i) => {
    setForm({ ...form, items: form.items.filter((_, idx) => idx !== i) });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateSection('nearby', form);
      updateContent('nearby', form);
      toast.success('Connectivity section updated!');
    } catch {
      toast.error('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeader title="Nearby Connectivity" subtitle="Manage nearby places by category" />
      <FormField label="Section Heading">
        <Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
      </FormField>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <label className="text-xs tracking-widest uppercase text-white/40">Categories</label>
          <button
            onClick={addCategory}
            className="text-xs text-gold-400 border border-gold-400/30 px-3 py-1.5 hover:bg-gold-400/10 transition-colors"
          >
            + Add Category
          </button>
        </div>
        <div className="space-y-5">
          {form.items?.map((cat, catIdx) => (
            <div key={catIdx} className="bg-dark-900 border border-white/8 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1">
                  <Input
                    value={cat.category}
                    onChange={(e) => handleCategoryChange(catIdx, e.target.value)}
                    placeholder="Category name"
                  />
                </div>
                <button
                  onClick={() => removeCategory(catIdx)}
                  className="text-red-400/60 hover:text-red-400 text-sm px-2 flex-shrink-0 transition-colors"
                >
                  ✕ Remove
                </button>
              </div>
              <div className="space-y-2 ml-3">
                {cat.places?.map((place, placeIdx) => (
                  <div key={placeIdx} className="flex items-center gap-2">
                    <span className="text-gold-400/40 text-xs">–</span>
                    <div className="flex-1">
                      <Input
                        value={place}
                        onChange={(e) => handlePlaceChange(catIdx, placeIdx, e.target.value)}
                      />
                    </div>
                    <button
                      onClick={() => removePlace(catIdx, placeIdx)}
                      className="text-red-400/40 hover:text-red-400 text-xs px-2 flex-shrink-0"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addPlace(catIdx)}
                  className="text-xs text-white/30 hover:text-gold-400 transition-colors mt-1 ml-4"
                >
                  + Add place
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SaveButton loading={loading} onClick={handleSave} />
    </div>
  );
};

export default EditNearby;
