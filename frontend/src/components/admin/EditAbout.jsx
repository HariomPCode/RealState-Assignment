import { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { updateSection } from '../../services/api';
import { FormField, Input, Textarea, SaveButton, SectionHeader } from './FormElements';
import toast from 'react-hot-toast';

const EditAbout = () => {
  const { content, updateContent } = useContent();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content?.about) setForm({ ...content.about });
  }, [content]);

  if (!form) return <div className="text-white/40 text-sm">Loading...</div>;

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateSection('about', form);
      updateContent('about', form);
      toast.success('About section updated!');
    } catch {
      toast.error('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SectionHeader title="About Section" subtitle="Edit the project overview content" />
      <FormField label="Heading">
        <Input value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
      </FormField>
      <FormField label="Paragraph">
        <Textarea rows={5} value={form.paragraph} onChange={(e) => setForm({ ...form, paragraph: e.target.value })} />
      </FormField>
      <FormField label="Brochure Button Text">
        <Input value={form.brochureText} onChange={(e) => setForm({ ...form, brochureText: e.target.value })} />
      </FormField>
      <SaveButton loading={loading} onClick={handleSave} />
    </div>
  );
};

export default EditAbout;
