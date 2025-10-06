import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Briefcase, Newspaper, Image, LogOut } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAdmin();

  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Tableau de bord' },
    { path: '/admin/pages', icon: FileText, label: 'Gestion des pages' },
    { path: '/admin/jobs', icon: Briefcase, label: 'Offres d\'emploi' },
    { path: '/admin/news', icon: Newspaper, label: 'Actualités' },
    { path: '/admin/gallery', icon: Image, label: 'Galerie' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="w-64 bg-gradient-to-b from-night-blue-900 to-night-blue-800 text-white h-screen fixed left-0 top-0 overflow-y-auto shadow-2xl">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
            <span className="text-xl font-elegant font-bold text-night-blue-900">SE</span>
          </div>
          <div>
            <h1 className="text-lg font-elegant font-bold gold-text">Saint-Exupéry</h1>
            <p className="text-xs text-gray-400">Administration</p>
          </div>
        </Link>
      </div>

      {/* Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gold-500 text-white shadow-lg'
                      : 'hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg w-full hover:bg-red-500/20 text-gray-300 hover:text-red-300 transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium">Déconnexion</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;