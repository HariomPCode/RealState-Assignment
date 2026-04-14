import { createContext, useContext, useState, useEffect } from 'react';
import { checkSession, login as apiLogin, logout as apiLogout } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    checkSession()
      .then((res) => setIsAdmin(res.data.isAdmin))
      .catch(() => setIsAdmin(false))
      .finally(() => setAuthLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await apiLogin({ email, password });
    if (res.data.success) setIsAdmin(true);
    return res;
  };

  const logout = async () => {
    await apiLogout();
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, authLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
