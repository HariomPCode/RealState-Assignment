import { createContext, useContext, useState, useEffect } from 'react';
import { getAllContent } from '../services/api';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const res = await getAllContent();
      setContent(res.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchContent(); }, []);

  const updateContent = (section, newData) => {
    setContent((prev) => ({ ...prev, [section]: newData }));
  };

  return (
    <ContentContext.Provider value={{ content, loading, error, fetchContent, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
