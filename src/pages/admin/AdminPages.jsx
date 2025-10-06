import React, { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { FileText, Edit, Save, X } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminPages = () => {
  const { pages, updatePage } = useAdmin();
  const [selectedPage, setSelectedPage] = useState(null);
  const [editContent, setEditContent] = useState('');

  const pagesList = [
    { id: 'home', name: 'Accueil', description: 'Page d\'accueil du site' },
    { id: 'about', name: 'L\'École', description: 'Présentation de l\'école' },
    { id: 'inscriptions', name: 'Inscriptions', description: 'Informations sur les inscriptions' },
    { id: 'pedagogie', name: 'Pédagogie', description: 'Méthodes pédagogiques' },
    { id: 'vie-scolaire', name: 'Vie Scolaire', description: 'Horaires et organisation' },
    { id: 'activites', name: 'Activités', description: 'Activités périscolaires' },
    { id: 'contact', name: 'Contact', description: 'Coordonnées de l\'école' },
  ];

  const handleEdit = (page) => {
    setSelectedPage(page);
    setEditContent(pages[page.id] || '');
  };

  const handleSave = () => {
    if (selectedPage) {
      updatePage(selectedPage.id, editContent);
      setSelectedPage(null);
      setEditContent('');
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-elegant font-bold text-night-blue-900 mb-2">
          Gestion des pages
        </h1>
        <p className="text-gray-600">Modifiez le contenu des pages du site</p>
      </div>

      {selectedPage ? (
        /* Éditeur de page */
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-night-blue-900">
                Modifier : {selectedPage.name}
              </h2>
              <p className="text-gray-600 text-sm">{selectedPage.description}</p>
            </div>
            <button
              onClick={() => {
                setSelectedPage(null);
                setEditContent('');
              }}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
            <p className="text-sm text-gray-800">
              <strong className="text-yellow-700">Note :</strong> Cette fonctionnalité permet d'ajouter des contenus personnalisés. 
              Pour des modifications structurelles, il faudra modifier directement les fichiers React.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contenu personnalisé
              </label>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200 resize-none font-mono text-sm"
                rows="15"
                placeholder="Ajoutez du contenu HTML ou texte personnalisé..."
              />
              <p className="text-sm text-gray-500 mt-2">
                Vous pouvez utiliser du HTML pour formatter le contenu
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="btn-primary flex items-center"
              >
                <Save size={20} className="mr-2" />
                Enregistrer les modifications
              </button>
              <button
                onClick={() => {
                  setSelectedPage(null);
                  setEditContent('');
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
              >
                Annuler
              </button>
            </div>
          </div>

          {editContent && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-night-blue-900 mb-3">Aperçu</h3>
              <div 
                className="prose max-w-none bg-gray-50 p-6 rounded-lg border-2 border-gray-200"
                dangerouslySetInnerHTML={{ __html: editContent }}
              />
            </div>
          )}
        </div>
      ) : (
        /* Liste des pages */
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-night-blue-900 mb-6">
            Pages du site
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {pagesList.map((page) => (
              <div
                key={page.id}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-gold-300 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-grow">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="text-white" size={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-night-blue-900 mb-1">
                        {page.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {page.description}
                      </p>
                      {pages[page.id] && (
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                          Contenu personnalisé ajouté
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleEdit(page)}
                    className="ml-4 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg font-medium transition-colors duration-200 flex items-center flex-shrink-0"
                  >
                    <Edit size={16} className="mr-1" />
                    Modifier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminPages;