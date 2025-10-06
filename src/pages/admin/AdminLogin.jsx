import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAdmin();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (login(credentials.username, credentials.password)) {
      navigate('/admin');
    } else {
      setError('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-night-blue-900 to-night-blue-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Étoiles décoratives */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
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

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Lock className="text-white" size={48} />
          </div>
          <h1 className="text-4xl font-elegant font-bold text-white mb-2">
            Administration
          </h1>
          <p className="text-gray-300 text-lg">École Saint-Exupéry de Dakar</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
          {error && (
            <div className="mb-6 bg-red-500/20 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div className="flex items-center">
                <AlertCircle className="text-red-300 mr-3" size={20} />
                <p className="text-red-200">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-white mb-2">
                Identifiant
              </label>
              <input
                type="text"
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-200"
                placeholder="Entrez votre identifiant"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors duration-200"
                  placeholder="Entrez votre mot de passe"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-lg font-bold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="bg-blue-500/20 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-sm text-blue-200">
                <strong className="text-blue-100">Identifiants de test :</strong><br />
                Identifiant : <code className="bg-white/10 px-2 py-1 rounded">admin</code><br />
                Mot de passe : <code className="bg-white/10 px-2 py-1 rounded">@NadegeStExup2025</code>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
            ← Retour au site
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;