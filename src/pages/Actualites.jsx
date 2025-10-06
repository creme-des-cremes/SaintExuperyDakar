import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const Actualites = () => {
  const { news } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Actualités par défaut si aucune n'a été ajoutée
  const defaultNews = [
    {
      id: 1,
      title: 'Rentrée scolaire 2025-2026',
      excerpt: 'La rentrée des élèves se fera de manière échelonnée à partir du mardi 2 septembre 2025. Nous sommes impatients d\'accueillir tous nos élèves pour cette nouvelle année riche en apprentissages et découvertes.',
      content: 'Détails complets sur la rentrée...',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      date: '2025-08-15',
      category: 'Vie scolaire',
      createdAt: '2025-08-15'
    },
    {
      id: 2,
      title: 'Inscriptions ouvertes !',
      excerpt: 'Les inscriptions pour l\'année scolaire 2025-2026 sont ouvertes. Prenez rendez-vous dès maintenant pour visiter notre école et rencontrer notre équipe pédagogique.',
      content: 'Plus d\'informations...',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      date: '2025-04-07',
      category: 'Inscriptions',
      createdAt: '2025-04-07'
    },
    {
      id: 3,
      title: 'Semaine des sciences',
      excerpt: 'Du 10 au 14 mars, nos élèves participeront à la semaine des sciences avec des expériences passionnantes, des démonstrations et des ateliers pratiques pour tous les niveaux.',
      content: 'Programme détaillé...',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
      date: '2025-03-01',
      category: 'Événements',
      createdAt: '2025-03-01'
    },
    {
      id: 4,
      title: 'Journée internationale de la francophonie',
      excerpt: 'Célébration de la diversité linguistique et culturelle avec des ateliers, spectacles et dégustations du monde entier. Une journée pour valoriser le plurilinguisme.',
      content: 'Au programme...',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
      date: '2025-03-20',
      category: 'Événements',
      createdAt: '2025-03-20'
    },
    {
      id: 5,
      title: 'Nouveau partenariat avec l\'Institut Français',
      excerpt: 'L\'école Saint-Exupéry est fière d\'annoncer un nouveau partenariat avec l\'Institut Français de Dakar pour enrichir notre offre culturelle et linguistique.',
      content: 'Détails du partenariat...',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
      date: '2025-02-15',
      category: 'Partenariats',
      createdAt: '2025-02-15'
    },
    {
      id: 6,
      title: 'Spectacle de fin d\'année : Un succès !',
      excerpt: 'Le spectacle de fin d\'année a rassemblé plus de 300 personnes. Nos élèves ont brillé sur scène avec des performances musicales, théâtrales et artistiques exceptionnelles.',
      content: 'Retour en images...',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      date: '2024-07-05',
      category: 'Événements',
      createdAt: '2024-07-05'
    },
  ];

  const allNews = news.length > 0 ? news : defaultNews;

  const categories = ['Tous', 'Vie scolaire', 'Événements', 'Inscriptions', 'Partenariats', 'Pédagogie'];

  // Filtrage des actualités
  const filteredNews = allNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Tri par date décroissante
  const sortedNews = [...filteredNews].sort((a, b) => new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt));

  // Article à la une (le plus récent)
  const featuredArticle = sortedNews[0];
  const otherArticles = sortedNews.slice(1);

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Actualités" 
        subtitle="Toute l'actualité de l'école Saint-Exupéry"
      />

      {/* Section Recherche et Filtres */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Barre de recherche */}
              <div className="relative flex-grow max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une actualité..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Filtres par catégorie */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {sortedNews.length === 0 ? (
        /* Message si aucune actualité */
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-gray-400" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Aucune actualité trouvée</h3>
              <p className="text-gray-600">
                {searchTerm || selectedCategory !== 'Tous'
                  ? 'Essayez de modifier vos critères de recherche'
                  : 'Les actualités seront bientôt disponibles'}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Article à la une */}
          {featuredArticle && (
            <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-elegant font-bold text-night-blue-900 mb-2">
                      À la <span className="gold-text">une</span>
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center card hover:shadow-2xl transition-all duration-300">
                    <div className="h-96 rounded-xl overflow-hidden">
                      <img 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-semibold rounded-full">
                          {featuredArticle.category}
                        </span>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {new Date(featuredArticle.date || featuredArticle.createdAt).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-night-blue-900 mb-4">{featuredArticle.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">{featuredArticle.excerpt}</p>
                      <button className="btn-primary flex items-center group">
                        Lire la suite
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Autres actualités */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-elegant font-bold text-night-blue-900 mb-2">
                    Toutes les <span className="gold-text">actualités</span>
                  </h2>
                  <p className="text-gray-600">Restez informé de la vie de notre école</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherArticles.map((article) => (
                    <div 
                      key={article.id}
                      className="card hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden p-0"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full">
                            {article.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Calendar size={14} className="mr-1" />
                            {new Date(article.date || article.createdAt).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-night-blue-900 mb-3 line-clamp-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                        <button className="text-gold-600 hover:text-gold-700 font-medium flex items-center group">
                          Lire plus
                          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Section Newsletter */}
      <section className="py-20 bg-gradient-to-br from-night-blue-900 to-night-blue-800 text-white relative overflow-hidden">
        {/* Étoiles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
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
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tag className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-elegant font-bold mb-4">
              Restez <span className="gold-text">informé</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir toutes nos actualités directement dans votre boîte mail
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S'inscrire
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              Nous respectons votre vie privée. Pas de spam, désinscription facile.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;