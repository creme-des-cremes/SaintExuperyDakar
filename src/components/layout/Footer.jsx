import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative starry-background text-white pt-16 pb-8 overflow-hidden">
      {/* Étoiles décoratives */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Section 1 : À propos */}
<div>
  <div className="flex items-center space-x-3 mb-6">
    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
      {/* Image 2 du Petit Prince en petit */}
       <img 
        src="/images/petit-prince-silhouette.jpg" 
        alt="Le Petit Prince" 
        className="w-10 h-10 object-contain brightness-0 invert"
        style={{ filter: 'drop-shadow(0 0 2px rgba(251, 191, 36, 0.5))' }}
      />
    </div>
    <div>
      <h3 className="text-xl font-elegant font-bold gold-text">Saint-Exupéry</h3>
      <p className="text-xs text-earth-green-400">Dakar</p>
    </div>
  </div>
  <p className="text-gray-300 text-sm leading-relaxed mb-4">
    École française homologuée AEFE, offrant un enseignement d'excellence de la TPS au CM2 dans un cadre bienveillant et stimulant.
  </p>
  <div className="flex space-x-3">
    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
      <Facebook size={18} />
    </a>
    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
      <Instagram size={18} />
    </a>
    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
      <Linkedin size={18} />
    </a>
  </div>
</div>

          {/* Section 2 : Liens rapides */}
          <div>
            <h3 className="text-xl font-elegant font-bold gold-text mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ecole" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  L'École
                </Link>
              </li>
              <li>
                <Link to="/inscriptions" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Inscriptions
                </Link>
              </li>
              <li>
                <Link to="/pedagogie" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Pédagogie
                </Link>
              </li>
              <li>
                <Link to="/vie-scolaire" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Vie Scolaire
                </Link>
              </li>
              <li>
                <Link to="/emplois" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Offres d'emploi
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3 : Informations pratiques */}
          <div>
            <h3 className="text-xl font-elegant font-bold gold-text mb-6">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/actualites" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Galerie Photos
                </Link>
              </li>
              <li>
                <Link to="/activites" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Activités Périscolaires
                </Link>
              </li>
              <li>
                <Link to="/espace-parents" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Espace Parents
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-2 group-hover:w-4 transition-all duration-200" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4 : Contact */}
          <div>
            <h3 className="text-xl font-elegant font-bold gold-text mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  Route de N'gor - Almadies<br />
                  (face Université Internationale)<br />
                  Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold-400 flex-shrink-0" />
                <a href="tel:+221777956111" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm">
                  +221 77 795 61 11
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:ecolesaintexuperydedakar@gmail.com" className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm break-all">
                  ecolesaintexuperydedakar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur décoratif */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-8" />

        {/* Section bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>&copy; {currentYear} École Saint-Exupéry de Dakar. Tous droits réservés.</p>
            <p className="mt-1">
              Établissement partenaire de l'
              <a href="https://www.aefe.fr" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors duration-200 ml-1">
                AEFE
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/mentions-legales" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>

        {/* Citation du Petit Prince */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gold-400 font-elegant italic text-lg">
            "L'essentiel est invisible pour les yeux"
          </p>
          <p className="text-gray-400 text-sm mt-2">
            - Antoine de Saint-Exupéry, Le Petit Prince
          </p>
        </div>
      </div>

      {/* Globe terrestre décoratif */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-earth-green-500 opacity-5 blur-3xl" />
    </footer>
  );
};

export default Footer;