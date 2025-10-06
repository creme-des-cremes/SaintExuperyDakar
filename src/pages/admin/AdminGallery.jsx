import React, { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Plus, Trash2, Image as ImageIcon, X } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminGallery = () => {
  const { gallery, addGalleryItem, deleteGalleryItem } = useAdmin();
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    category: 'Événements',
    date: new Date().toISOString().split('T')[0],
  });
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Événements', 'Pédagogie', 'Activités', 'Infrastructures'];

  const handleSubmit = (e) => {
    e.preventDefault();
    addGalleryItem(formData);
    resetForm();
  };

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette photo ?')) {
      deleteGalleryItem(id);
    }
  };

  const resetForm = () => {
    setFormData({
      url: '',
      title: '',
      category: 'Événements',
      date: new Date().toISOString().split('T')[0],
    });
    setIsAdding(false);
  };

  const filteredGallery = selectedCategory === 'Tous'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-elegant font-bold text-night-blue-900 mb-2">
            Gestion de la galerie
          </h1>
          <p className="text-gray-600">Ajoutez ou supprimez des photos</p>
        </div>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Ajouter une photo
          </button>
        )}
      </div>

      {/* Formulaire d'ajout */}
      {isAdding && (
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-night-blue-900">
              Ajouter une photo
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  URL de l'image *
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    className="flex-grow px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                  {formData.url && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200">
                      <img src={formData.url} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Utilisez une image depuis Unsplash (https://source.unsplash.com/800x600/?school) ou votre propre serveur
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Titre *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                  placeholder="Titre de la photo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Catégorie *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                  required
                >
                  <option value="Événements">Événements</option>
                  <option value="Pédagogie">Pédagogie</option>
                  <option value="Activités">Activités</option>
                  <option value="Infrastructures">Infrastructures</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="btn-primary flex items-center"
              >
                <Plus size={20} className="mr-2" />
                Ajouter la photo
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filtres */}
      <div className="bg-white rounded-xl p-4 shadow-lg mb-8">
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

      {/* Galerie */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-night-blue-900 mb-6">
          Photos ({filteredGallery.length})
        </h2>

        {filteredGallery.length === 0 ? (
          <div className="text-center py-12">
            <ImageIcon className="text-gray-300 mx-auto mb-4" size={64} />
            <p className="text-gray-500 text-lg">Aucune photo dans cette catégorie</p>
            <p className="text-gray-400 mt-2">Cliquez sur "Ajouter une photo" pour commencer</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-gold-300 transition-all duration-300"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white font-bold text-center mb-2 text-sm">
                    {item.title}
                  </h3>
                  <span className="text-xs bg-gold-500 text-white px-2 py-1 rounded-full mb-3">
                    {item.category}
                  </span>
                  {item.date && (
                    <p className="text-xs text-gray-300 mb-3">
                      {new Date(item.date).toLocaleDateString('fr-FR')}
                    </p>
                  )}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminGallery;