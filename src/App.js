import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Inscriptions from './pages/Inscriptions';
import Pedagogie from './pages/Pedagogie';
import VieScolaire from './pages/VieScolaire';
import Activites from './pages/Activites';
import Actualites from './pages/Actualites';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Emplois from './pages/Emplois';
import EspaceParents from './pages/EspaceParents';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPages from './pages/admin/AdminPages';
import AdminJobs from './pages/admin/AdminJobs';
import AdminNews from './pages/admin/AdminNews';
import AdminGallery from './pages/admin/AdminGallery';

function App() {
  return (
    <AdminProvider>
      <Router>
        <Routes>
          {/* Routes admin (sans Navbar/Footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/pages" element={<AdminPages />} />
          <Route path="/admin/jobs" element={<AdminJobs />} />
          <Route path="/admin/news" element={<AdminNews />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />

          {/* Routes publiques (avec Navbar/Footer) */}
          <Route
            path="/*"
            element={
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-20">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ecole" element={<About />} />
                    <Route path="/inscriptions" element={<Inscriptions />} />
                    <Route path="/pedagogie" element={<Pedagogie />} />
                    <Route path="/vie-scolaire" element={<VieScolaire />} />
                    <Route path="/activites" element={<Activites />} />
                    <Route path="/actualites" element={<Actualites />} />
                    <Route path="/galerie" element={<Galerie />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/emplois" element={<Emplois />} />
                    <Route path="/espace-parents" element={<EspaceParents />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;