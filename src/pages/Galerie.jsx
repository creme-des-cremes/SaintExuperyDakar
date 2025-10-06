import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Image as ImageIcon, Video, X } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const Galerie = () => {
  const { gallery } = useAdmin();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Images par défaut
  const defaultGallery = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      title: 'Rentrée scolaire 2024',
      category: 'Événements',
      date: '2024-09-02'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      title: 'Cours de sciences',
      category: 'Pédagogie',
      date: '2024-10-15'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
      title: 'Atelier arts plastiques',
      category: 'Activités',
      date: '2024-11-20'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
      title: 'Bibliothèque',
      category: 'Infrastructures',
      date: '2024-09-10'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      title: 'Spectacle de fin d\'année',
      category: 'Événements',
      date: '2024-07-05'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      title: 'Salle de classe maternelle',
      category: 'Infrastructures',
      date: '2024-09-01'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800',
      title: 'Cours d\'anglais',
      category: 'Pédagogie',
      date: '2024-10-25'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      title: 'Activité musique',
      category: 'Activités',
      date: '2024-11-10'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1588072432904-7a6b39961027?w=800',
      title: 'Cour de récréation',
      category: 'Infrastructures',
      date: '2024-09-05'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      title: 'Journée internationale',
      category: 'Événements',
      date: '2024-05-15'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=800',
      title: 'Atelier sciences',
      category: 'Pédagogie',
      date: '2024-11-30'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800',
      title: 'Sport en plein air',
      category: 'Activités',
      date: '2024-10-20'
    },
  ];

  const allGallery = gallery.length > 0 ? gallery : defaultGallery;

  const categories = ['Tous', 'Événements', 'Pédagogie', 'Activités', 'Infrastructures'];

  // Filtrage par catégorie
  const filteredGallery = selectedCategory === 'Tous' 
    ? allGallery 
    : allGallery.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Galerie Photos" 
        subtitle="Découvrez la vie de notre école en images"
      />

      {/* Section Filtres */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredGallery.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ImageIcon className="text-gray-400" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aucune photo dans cette catégorie</h3>
                <p className="text-gray-600">Les photos seront bientôt disponibles</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item)}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="bg-gold-500/80 px-2 py-1 rounded text-xs">
                            {item.category}
                          </span>
                          {item.date && (
                            <span className="text-gray-200">
                              {new Date(item.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Vidéos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-night-blue-900 mb-4">
                Nos <span className="gold-text">Vidéos</span>
              </h2>
              <p className="text-xl text-gray-600">
                Revivez les moments forts de notre école
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Présentation de l\'école',
                  description: 'Découvrez notre établissement, nos valeurs et notre équipe pédagogique',
                  thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800'
                },
                {
                  title: 'Spectacle de fin d\'année 2024',
                  description: 'Les meilleurs moments du spectacle présenté par nos élèves',
                  thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800'
                },
              ].map((video, index) => (
                <div key={index} className="card hover:shadow-2xl transition-all duration-300 overflow-hidden p-0">
                  <div className="relative h-64 bg-gradient-to-br from-night-blue-900 to-night-blue-800">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 border-2 border-white/50">
                        <Video className="text-white ml-1" size={32} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-night-blue-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal d'image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white"
          >
            <X size={24} />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-xl shadow-2xl animate-slide-up"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold gold-text mb-2">{selectedImage.title}</h3>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <span className="bg-gold-500/20 px-4 py-1 rounded-full text-sm">
                  {selectedImage.category}
                </span>
                {selectedImage.date && (
                  <span className="text-sm">
                    {new Date(selectedImage.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Téléchargement */}
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
          <div className="max-w-3xl mx-auto text-center">
            <ImageIcon className="text-gold-400 mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-elegant font-bold mb-4">
              Vous souhaitez des <span className="gold-text">photos ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Les parents d'élèves peuvent accéder à l'ensemble de nos photos en haute qualité 
              via l'espace parents sécurisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/espace-parents" className="btn-primary">
                Accéder à l'espace parents
              </a>
              <a href="/contact" className="btn-secondary">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;