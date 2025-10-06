import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Lock, FileText, Calendar, Image, Mail, BookOpen, Download, AlertCircle } from 'lucide-react';

const EspaceParents = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Authentification simple (à remplacer par une vraie authentification en production)
    if (credentials.username === 'parent' && credentials.password === 'parent2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Identifiants incorrects');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <PageHeader 
          title="Espace Parents" 
          subtitle="Accédez aux ressources et informations de votre enfant"
        />

        <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="card shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="text-white" size={40} />
                  </div>
                  <h2 className="text-3xl font-elegant font-bold text-night-blue-900 mb-2">
                    Connexion
                  </h2>
                  <p className="text-gray-600">
                    Entrez vos identifiants pour accéder à l'espace parents
                  </p>
                </div>

                {error && (
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <div className="flex items-center">
                      <AlertCircle className="text-red-500 mr-3" size={20} />
                      <p className="text-red-700">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                      Identifiant
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={credentials.username}
                      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                      placeholder="Votre identifiant"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                      placeholder="Votre mot de passe"
                      required
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    Se connecter
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-2">Identifiants oubliés ?</p>
                  <a href="/contact" className="text-gold-600 hover:text-gold-700 font-medium text-sm">
                    Contactez l'administration
                  </a>
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-sm text-gray-800">
                    <strong className="text-blue-700">Pour tester :</strong><br />
                    Identifiant : <code className="bg-white px-2 py-1 rounded">parent</code><br />
                    Mot de passe : <code className="bg-white px-2 py-1 rounded">parent2025</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Espace Parents" 
        subtitle="Bienvenue dans votre espace personnel"
      />

      {/* Section Tableau de bord */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-elegant font-bold text-night-blue-900">
                Tableau de bord
              </h2>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Se déconnecter
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: FileText, title: 'Documents', count: '12', color: 'from-blue-500 to-blue-600' },
                { icon: Calendar, title: 'Événements', count: '3', color: 'from-gold-500 to-gold-600' },
                { icon: Image, title: 'Photos', count: '48', color: 'from-earth-green-500 to-earth-green-600' },
                { icon: Mail, title: 'Messages', count: '2', color: 'from-purple-500 to-purple-600' },
              ].map((item, index) => (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-night-blue-900">{item.count}</h3>
                  <p className="text-gray-600">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Documents récents */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-night-blue-900 mb-6">Documents récents</h3>
              <div className="space-y-4">
                {[
                  { name: 'Bulletin T1 - 2025', date: '15 Déc 2024', type: 'PDF' },
                  { name: 'Calendrier scolaire 2025-2026', date: '1 Sep 2024', type: 'PDF' },
                  { name: 'Règlement intérieur', date: '1 Sep 2024', type: 'PDF' },
                  { name: 'Autorisation sortie scolaire', date: '20 Nov 2024', type: 'PDF' },
                ].map((doc, index) => (
                  <div key={index} className="card hover:shadow-lg transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <FileText className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-night-blue-900">{doc.name}</h4>
                        <p className="text-sm text-gray-600">{doc.date} • {doc.type}</p>
                      </div>
                    </div>
                    <button className="btn-primary flex items-center">
                      <Download size={18} className="mr-2" />
                      Télécharger
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Prochains événements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-night-blue-900 mb-6">Prochains événements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Réunion parents-professeurs', date: '10 Mars 2025', time: '18h00' },
                  { title: 'Spectacle de printemps', date: '25 Avril 2025', time: '15h00' },
                  { title: 'Sortie pédagogique - Musée', date: '15 Mai 2025', time: '9h00' },
                ].map((event, index) => (
                  <div key={index} className="card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="text-white" size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-night-blue-900 mb-2">{event.title}</h4>
                        <p className="text-sm text-gray-700">📅 {event.date}</p>
                        <p className="text-sm text-gray-700">🕐 {event.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Galerie photos */}
            <div>
              <h3 className="text-2xl font-bold text-night-blue-900 mb-6">Albums photos récents</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
                  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
                  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
                  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
                ].map((img, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <img src={img} alt={`Album ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a href="/galerie" className="btn-primary inline-block">
                  Voir toutes les photos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EspaceParents;