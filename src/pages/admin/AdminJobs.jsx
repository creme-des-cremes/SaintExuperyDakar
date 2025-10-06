import React, { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Plus, Edit, Trash2, Save, X, Briefcase } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminJobs = () => {
  const { jobs, addJob, updateJob, deleteJob } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    type: 'CDI',
    location: 'Dakar, Sénégal',
    category: 'Enseignement',
    description: '',
    requirements: '',
    responsibilities: '',
    postedDate: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      ...formData,
      requirements: formData.requirements.split('\n').filter(r => r.trim()),
      responsibilities: formData.responsibilities.split('\n').filter(r => r.trim()),
    };

    if (editingJob) {
      updateJob(editingJob.id, jobData);
    } else {
      addJob(jobData);
    }

    resetForm();
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      type: job.type,
      location: job.location,
      category: job.category,
      description: job.description,
      requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : job.requirements,
      responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities.join('\n') : job.responsibilities,
      postedDate: job.postedDate || new Date().toISOString().split('T')[0],
    });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette offre d\'emploi ?')) {
      deleteJob(id);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      type: 'CDI',
      location: 'Dakar, Sénégal',
      category: 'Enseignement',
      description: '',
      requirements: '',
      responsibilities: '',
      postedDate: new Date().toISOString().split('T')[0],
    });
    setIsEditing(false);
    setEditingJob(null);
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-elegant font-bold text-night-blue-900 mb-2">
            Gestion des offres d'emploi
          </h1>
          <p className="text-gray-600">Ajoutez, modifiez ou supprimez des offres d'emploi</p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Nouvelle offre
          </button>
        )}
      </div>

      {/* Formulaire */}
      {isEditing && (
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-night-blue-900">
              {editingJob ? 'Modifier l\'offre' : 'Nouvelle offre d\'emploi'}
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
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Titre du poste *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                  placeholder="Ex: Professeur des écoles"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de contrat *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                  required
                >
                  <option value="CDI">CDI</option>
                  <option value="CDD">CDD</option>
                  <option value="Temps partiel">Temps partiel</option>
                  <option value="Stage">Stage</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Localisation *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                  placeholder="Ex: Dakar, Sénégal"
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
                  <option value="Enseignement">Enseignement</option>
                  <option value="Langues">Langues</option>
                  <option value="Administration">Administration</option>
                  <option value="Activités">Activités</option>
                  <option value="Service">Service</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date de publication
                </label>
                <input
                  type="date"
                  value={formData.postedDate}
                  onChange={(e) => setFormData({ ...formData, postedDate: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description du poste *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200 resize-none"
                rows="4"
                placeholder="Décrivez brièvement le poste..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Profil recherché (une exigence par ligne)
              </label>
              <textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200 resize-none"
                rows="6"
                placeholder="Diplôme requis&#10;Expérience souhaitée&#10;Compétences attendues&#10;..."
              />
              <p className="text-sm text-gray-500 mt-1">Chaque ligne sera affichée comme un point distinct</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Missions (une mission par ligne)
              </label>
              <textarea
                value={formData.responsibilities}
                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200 resize-none"
                rows="6"
                placeholder="Enseigner une classe&#10;Préparer les cours&#10;Évaluer les élèves&#10;..."
              />
              <p className="text-sm text-gray-500 mt-1">Chaque ligne sera affichée comme un point distinct</p>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="btn-primary flex items-center"
              >
                <Save size={20} className="mr-2" />
                {editingJob ? 'Mettre à jour' : 'Publier l\'offre'}
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

      {/* Liste des offres */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-night-blue-900 mb-6">
          Offres publiées ({jobs.length})
        </h2>

        {jobs.length === 0 ? (
          <div className="text-center py-12">
            <Briefcase className="text-gray-300 mx-auto mb-4" size={64} />
            <p className="text-gray-500 text-lg">Aucune offre d'emploi publiée</p>
            <p className="text-gray-400 mt-2">Cliquez sur "Nouvelle offre" pour commencer</p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-gold-300 transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-night-blue-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-earth-green-100 text-earth-green-700 text-sm font-medium rounded-full">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full">
                        {job.category}
                      </span>
                    </div>
                    <p className="text-gray-700 line-clamp-2">{job.description}</p>
                    {job.postedDate && (
                      <p className="text-sm text-gray-500 mt-2">
                        Publié le {new Date(job.postedDate).toLocaleDateString('fr-FR')}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(job)}
                      className="w-10 h-10 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                      title="Modifier"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="w-10 h-10 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {(job.requirements || job.responsibilities) && (
                  <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                    {job.requirements && Array.isArray(job.requirements) && job.requirements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Profil recherché:</h4>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                          {job.requirements.length > 3 && (
                            <li className="text-sm text-gray-500 italic">
                              +{job.requirements.length - 3} autres...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {job.responsibilities && Array.isArray(job.responsibilities) && job.responsibilities.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Missions:</h4>
                        <ul className="space-y-1">
                          {job.responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-earth-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                          {job.responsibilities.length > 3 && (
                            <li className="text-sm text-gray-500 italic">
                              +{job.responsibilities.length - 3} autres...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminJobs;