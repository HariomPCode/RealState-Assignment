import axios from "axios";

const api = axios.create({
  baseURL: "https://real-state-assignment-vrzg.vercel.app/api",
  withCredentials: true,
});

export const login = (data) => api.post("/auth/login", data);
export const logout = () => api.post("/auth/logout");
export const checkSession = () => api.get("/auth/session");
export const getAllContent = () => api.get("/content");
export const updateSection = (section, content) =>
  api.put(`/content/${section}`, { content });

export default api;
