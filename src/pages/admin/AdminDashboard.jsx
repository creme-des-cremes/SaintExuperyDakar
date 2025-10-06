import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { FileText, Briefcase, Newspaper, Image, Users, TrendingUp } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

const AdminDashboard = () => {
  const { jobs, news, gallery } = useAdmin();

  const stats = [
    {
      icon: Briefcase,
      label: 'Offres d\'emploi',
      value: jobs.length,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/jobs'
    },
    {
      icon: Newspaper,
      label: 'Actualités',
      value: news.length,
      color: 'from-gold-500 to-gold-600',
      link: '/admin/news'
    },
    {
      icon: Image,
      label: 'Photos',
      value: gallery.length,
      color: 'from-earth-green-500 to-earth-green-600',
      link: '/admin/gallery'
    },
    {
      icon: FileText,
      label: 'Pages',
      value: 12,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/pages'
    },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-elegant font-bold text-night-blue-900 mb-2">
          Tableau de bord
        </h1>
        <p className="text-gray-600">Bienvenue dans l'interface d'administration</p>
      </div>

      {/* Statistiques */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <a
            key={index}
            href={stat.link}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="text-white" size={28} />
              </div>
              <TrendingUp className="text-green-500" size={20} />
            </div>
            <h3 className="text-3xl font-bold text-night-blue-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </a>
        ))}
      </div>

      {/* Actions rapides */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-night-blue-900 mb-4">Actions rapides</h3>
          <div className="space-y-3">
            {[
              { label: 'Ajouter une offre d\'emploi', link: '/admin/jobs', color: 'blue' },
              { label: 'Publier une actualité', link: '/admin/news', color: 'gold' },
              { label: 'Ajouter des photos', link: '/admin/gallery', color: 'green' },
              { label: 'Modifier une page', link: '/admin/pages', color: 'purple' },
            ].map((action, index) => (
              <a
                key={index}
                href={action.link}
                className={`block px-4 py-3 bg-${action.color}-50 hover:bg-${action.color}-100 rounded-lg transition-colors duration-200`}
              >
                <span className="text-gray-800 font-medium">{action.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gold-50 to-white rounded-xl p-6 shadow-lg border-2 border-gold-200">
          <h3 className="text-xl font-bold text-night-blue-900 mb-4">Informations importantes</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2"></span>
              <span className="text-gray-700">Toutes les modifications sont sauvegardées automatiquement</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2"></span>
              <span className="text-gray-700">Les données sont stockées localement dans le navigateur</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2"></span>
              <span className="text-gray-700">Pensez à sauvegarder régulièrement votre travail</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Activités récentes */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-night-blue-900 mb-4">Activités récentes</h3>
        <div className="space-y-3">
          {[
            { action: 'Modification de la page Accueil', time: 'Il y a 2 heures', user: 'Admin' },
            { action: 'Ajout d\'une nouvelle offre d\'emploi', time: 'Il y a 5 heures', user: 'Admin' },
            { action: 'Publication d\'une actualité', time: 'Hier', user: 'Admin' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">Par {activity.user}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;