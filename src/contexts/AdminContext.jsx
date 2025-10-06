import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pages, setPages] = useState({});
  const [jobs, setJobs] = useState([]);
  const [news, setNews] = useState([]);
  const [gallery, setGallery] = useState([]);

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const authStatus = localStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    // Charger les données depuis localStorage
    loadData();
  }, []);

  const loadData = () => {
    const savedPages = localStorage.getItem('admin_pages');
    const savedJobs = localStorage.getItem('admin_jobs');
    const savedNews = localStorage.getItem('admin_news');
    const savedGallery = localStorage.getItem('admin_gallery');

    if (savedPages) setPages(JSON.parse(savedPages));
    if (savedJobs) setJobs(JSON.parse(savedJobs));
    if (savedNews) setNews(JSON.parse(savedNews));
    if (savedGallery) setGallery(JSON.parse(savedGallery));
  };

  const login = (username, password) => {
    // IMPORTANT : En production, utilisez une vraie authentification
    // Ceci est juste pour la démonstration
    if (username === 'admin' && password === '@NadegeStExup2025') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
  };

  // Gestion des pages
  const updatePage = (pageName, content) => {
    const updatedPages = { ...pages, [pageName]: content };
    setPages(updatedPages);
    localStorage.setItem('admin_pages', JSON.stringify(updatedPages));
  };

  // Gestion des offres d'emploi
  const addJob = (job) => {
    const newJob = { ...job, id: Date.now(), createdAt: new Date().toISOString() };
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem('admin_jobs', JSON.stringify(updatedJobs));
  };

  const updateJob = (jobId, updatedJob) => {
    const updatedJobs = jobs.map(job => 
      job.id === jobId ? { ...job, ...updatedJob, updatedAt: new Date().toISOString() } : job
    );
    setJobs(updatedJobs);
    localStorage.setItem('admin_jobs', JSON.stringify(updatedJobs));
  };

  const deleteJob = (jobId) => {
    const updatedJobs = jobs.filter(job => job.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem('admin_jobs', JSON.stringify(updatedJobs));
  };

  // Gestion des actualités
  const addNews = (newsItem) => {
    const newNewsItem = { ...newsItem, id: Date.now(), createdAt: new Date().toISOString() };
    const updatedNews = [...news, newNewsItem];
    setNews(updatedNews);
    localStorage.setItem('admin_news', JSON.stringify(updatedNews));
  };

  const updateNews = (newsId, updatedNewsItem) => {
    const updatedNewsList = news.map(item => 
      item.id === newsId ? { ...item, ...updatedNewsItem, updatedAt: new Date().toISOString() } : item
    );
    setNews(updatedNewsList);
    localStorage.setItem('admin_news', JSON.stringify(updatedNewsList));
  };

  const deleteNews = (newsId) => {
    const updatedNews = news.filter(item => item.id !== newsId);
    setNews(updatedNews);
    localStorage.setItem('admin_news', JSON.stringify(updatedNews));
  };

  // Gestion de la galerie
  const addGalleryItem = (item) => {
    const newItem = { ...item, id: Date.now(), createdAt: new Date().toISOString() };
    const updatedGallery = [...gallery, newItem];
    setGallery(updatedGallery);
    localStorage.setItem('admin_gallery', JSON.stringify(updatedGallery));
  };

  const deleteGalleryItem = (itemId) => {
    const updatedGallery = gallery.filter(item => item.id !== itemId);
    setGallery(updatedGallery);
    localStorage.setItem('admin_gallery', JSON.stringify(updatedGallery));
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    pages,
    updatePage,
    jobs,
    addJob,
    updateJob,
    deleteJob,
    news,
    addNews,
    updateNews,
    deleteNews,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};