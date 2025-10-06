import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { 
      name: 'L\'École', 
      path: '/ecole',
      submenu: [
        { name: 'Présentation', path: '/ecole#presentation' },
        { name: 'Équipe pédagogique', path: '/ecole#equipe' },
        { name: 'Projet éducatif', path: '/ecole#projet' },
      ]
    },
    { name: 'Inscriptions', path: '/inscriptions' },
    { name: 'Pédagogie', path: '/pedagogie' },
    { name: 'Vie Scolaire', path: '/vie-scolaire' },
    { name: 'Activités', path: '/activites' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
    { name: 'Emplois', path: '/emplois' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-night-blue-900 shadow-2xl py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg group-hover:shadow-gold-500/50 transition-all duration-300">
                <span className="text-2xl font-elegant font-bold text-night-blue-900">SE</span>
              </div>
              {/* Petite étoile décorative */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-300 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-elegant font-bold gold-text leading-tight">
                Saint-Exupéry
              </h1>
              <p className="text-xs text-earth-green-400 font-medium">Dakar</p>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="px-4 py-2 text-white hover:text-gold-400 transition-colors duration-200 flex items-center space-x-1 font-medium">
                      <span>{item.name}</span>
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-night-blue-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-2 border-gold-500/20">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className="block px-4 py-3 text-white hover:bg-gold-500/10 hover:text-gold-400 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                      location.pathname === item.path
                        ? 'text-gold-400 bg-gold-500/10'
                        : 'text-white hover:text-gold-400 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Bouton spécial Espace Parents */}
            <Link
              to="/espace-parents"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-gold-500/50"
            >
              Espace Parents
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gold-400 transition-colors duration-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-night-blue-800 rounded-lg shadow-2xl border-2 border-gold-500/20 overflow-hidden animate-slide-up">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                      className="w-full text-left px-4 py-3 text-white hover:bg-gold-500/10 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          dropdownOpen === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {dropdownOpen === item.name && (
                      <div className="bg-night-blue-900">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-8 py-2 text-gray-300 hover:text-gold-400 hover:bg-gold-500/5 transition-colors duration-200"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-gold-400 bg-gold-500/10'
                        : 'text-white hover:bg-gold-500/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/espace-parents"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-center font-semibold"
            >
              Espace Parents
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;