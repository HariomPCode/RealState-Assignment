import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { updateSection } from '../../services/api';
import { FormField, Input, Textarea, SaveButton, SectionHeader } from './FormElements';
import toast from 'react-hot-toast';

const EditFAQ = () => {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content?.faq) setForm(JSON.parse(JSON.stringify(content.faq)));
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
      items: [...form.items, { question: 'New Question?', answer: 'Answer here...' }],
    });
  };

  const removeItem = (i) => {
    setForm({ ...form, items: form.items.filter((_, idx) => idx !== i) });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateSection('faq', form);
      updateContent('faq', form);
      toast.success('FAQ section updated!');
    } catch {
      toast.error('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeader title="FAQ Section" subtitle="Manage frequently asked questions" />
      <FormField label="Section Heading">
        <Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
      </FormField>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <label className="text-xs tracking-widest uppercase text-white/40">FAQ Items</label>
          <button
            onClick={addItem}
            className="text-xs text-gold-400 border border-gold-400/30 px-3 py-1.5 hover:bg-gold-400/10 transition-colors"
          >
            + Add Question
          </button>
        </div>
        <div className="space-y-4">
          {form.items?.map((item, i) => (
            <div key={i} className="bg-dark-900 border border-white/8 p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/40 text-xs tracking-wider">Q{i + 1}</span>
                <button
                  onClick={() => removeItem(i)}
                  className="text-red-400/60 hover:text-red-400 text-xs transition-colors"
                >
                  ✕ Remove
                </button>
              </div>
              <FormField label="Question">
                <Input
                  value={item.question}
                  onChange={(e) => handleItemChange(i, 'question', e.target.value)}
                />
              </FormField>
              <FormField label="Answer">
                <Textarea
                  rows={3}
                  value={item.answer}
                  onChange={(e) => handleItemChange(i, 'answer', e.target.value)}
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

export default EditFAQ;
