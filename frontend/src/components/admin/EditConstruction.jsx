import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { updateSection } from '../../services/api';
import { FormField, Input, Textarea, SaveButton, SectionHeader } from './FormElements';
import toast from 'react-hot-toast';

const EditConstruction = () => {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content?.construction) setForm(JSON.parse(JSON.stringify(content.construction)));
  }, [content]);

  if (!form) return <div className="text-white/40 text-sm">Loading...</div>;

  const handleUpdateChange = (i, field, value) => {
    const updates = [...form.updates];
    updates[i] = { ...updates[i], [field]: value };
    setForm({ ...form, updates });
  };

  const addUpdate = () => {
    setForm({
      ...form,
      updates: [
        ...form.updates,
        { date: 'Month YYYY', title: 'New Update', description: 'Description here...' },
      ],
    });
  };

  const removeUpdate = (i) => {
    setForm({ ...form, updates: form.updates.filter((_, idx) => idx !== i) });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateSection('construction', form);
      updateContent('construction', form);
      toast.success('Construction updates saved!');
    } catch {
      toast.error('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeader title="Construction Updates" subtitle="Manage timeline milestones" />
      <FormField label="Section Heading">
        <Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
      </FormField>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <label className="text-xs tracking-widest uppercase text-white/40">Timeline Updates</label>
          <button
            onClick={addUpdate}
            className="text-xs text-gold-400 border border-gold-400/30 px-3 py-1.5 hover:bg-gold-400/10 transition-colors"
          >
            + Add Update
          </button>
        </div>
        <div className="space-y-4">
          {form.updates?.map((update, i) => (
            <div key={i} className="bg-dark-900 border border-white/8 p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/40 text-xs tracking-wider">Update {i + 1}</span>
                <button
                  onClick={() => removeUpdate(i)}
                  className="text-red-400/60 hover:text-red-400 text-xs transition-colors"
                >
                  ✕ Remove
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <FormField label="Date">
                  <Input
                    value={update.date}
                    onChange={(e) => handleUpdateChange(i, 'date', e.target.value)}
                    placeholder="January 2024"
                  />
                </FormField>
                <FormField label="Title">
                  <Input
                    value={update.title}
                    onChange={(e) => handleUpdateChange(i, 'title', e.target.value)}
                  />
                </FormField>
              </div>
              <FormField label="Description">
                <Textarea
                  rows={2}
                  value={update.description}
                  onChange={(e) => handleUpdateChange(i, 'description', e.target.value)}
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

export default EditConstruction;
