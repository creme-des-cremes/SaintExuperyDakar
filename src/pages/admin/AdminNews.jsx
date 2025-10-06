import React, { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Plus, Edit, Trash2, Save, X, Newspaper, Image as ImageIcon } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminNews = () => {
  const { news, addNews, updateNews, deleteNews } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'Vie scolaire',
    date: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingNews) {
      updateNews(editingNews.id, formData);
    } else {
      addNews(formData);
    }

    resetForm();
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      excerpt: newsItem.excerpt,
      content: newsItem.content || newsItem.excerpt,
      image: newsItem.image,
      category: newsItem.category,
      date: newsItem.date || new Date().toISOString().split('T')[0],
    });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette actualité ?')) {
      deleteNews(id);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      category: 'Vie scolaire',
      date: new Date().toISOString().split('T')[0],
    });
    setIsEditing(false);
    setEditingNews(null);
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-elegant font-bold text-night-blue-900 mb-2">
            Gestion des actualités
          </h1>
          <p className="text-gray-600">Publiez, modifiez ou supprimez des actualités</p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Nouvelle actualité
          </button>
        )}
      </div>

      {/* Formulaire */}
      {isEditing && (
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-night-blue-900">
              {editingNews ? 'Modifier l\'actualité' : 'Nouvelle actualité'}
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
                  Titre *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                  placeholder="Titre de l'actualité"
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
                  <option value="Vie scolaire">Vie scolaire</option>
                  <option value="Événements">Événements</option>
                  <option value="Inscriptions">Inscriptions</option>
                  <option value="Partenariats">Partenariats</option>
                  <option value="Pédagogie">Pédagogie</option>
                  <option value="Sports">Sports</option>
                  <option value="Culture">Culture</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date de publication
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  URL de l'image *
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="flex-grow px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                  {formData.image && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200">
                      <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Utilisez une image depuis Unsplash, Pexels ou votre propre serveur
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Extrait (résumé) *
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200 resize-none"
                rows="3"
                placeholder="Court résumé de l'actualité (2-3 phrases)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contenu complet
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200 resize-none"
                rows="10"
                placeholder="Contenu détaillé de l'actualité..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="btn-primary flex items-center"
              >
                <Save size={20} className="mr-2" />
                {editingNews ? 'Mettre à jour' : 'Publier l\'actualité'}
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

      {/* Liste des actualités */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-night-blue-900 mb-6">
          Actualités publiées ({news.length})
        </h2>

        {news.length === 0 ? (
          <div className="text-center py-12">
            <Newspaper className="text-gray-300 mx-auto mb-4" size={64} />
            <p className="text-gray-500 text-lg">Aucune actualité publiée</p>
            <p className="text-gray-400 mt-2">Cliquez sur "Nouvelle actualité" pour commencer</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((newsItem) => (
              <div
                key={newsItem.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-gold-300 transition-all duration-200"
              >
                {newsItem.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={newsItem.image}
                      alt={newsItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full">
                      {newsItem.category}
                    </span>
                    {newsItem.date && (
                      <span className="text-xs text-gray-500">
                        {new Date(newsItem.date).toLocaleDateString('fr-FR')}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-night-blue-900 mb-2 line-clamp-2">
                    {newsItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {newsItem.excerpt}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(newsItem)}
                      className="flex-1 py-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                      <Edit size={16} className="mr-1" />
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(newsItem.id)}
                      className="flex-1 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                      <Trash2 size={16} className="mr-1" />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminNews;