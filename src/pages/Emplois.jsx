import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Briefcase, MapPin, Clock, Calendar, Award, Send, FileText } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const Emplois = () => {
  const { jobs } = useAdmin();
  const [selectedJob, setSelectedJob] = useState(null);

  // Offres d'emploi par défaut
  const defaultJobs = [
    {
      id: 1,
      title: 'Professeur des écoles',
      type: 'CDI',
      location: 'Dakar, Sénégal',
      description: 'Nous recherchons un professeur des écoles passionné pour rejoindre notre équipe pédagogique.',
      requirements: [
        'Diplôme d\'enseignement (CRPE ou équivalent)',
        'Expérience en enseignement primaire souhaitée',
        'Maîtrise du français (langue maternelle ou niveau C2)',
        'Capacité à travailler en équipe',
        'Connaissance des programmes français',
      ],
      responsibilities: [
        'Assurer l\'enseignement d\'une classe de primaire',
        'Préparer et animer les cours selon les programmes',
        'Évaluer les progrès des élèves',
        'Participer aux réunions pédagogiques',
        'Collaborer avec les parents',
      ],
      postedDate: '2025-01-15',
      category: 'Enseignement'
    },
    {
      id: 2,
      title: 'Assistant(e) Maternel(le)',
      type: 'CDD',
      location: 'Dakar, Sénégal',
      description: 'Nous cherchons un(e) assistant(e) maternel(le) bienveillant(e) pour accompagner nos plus jeunes élèves.',
      requirements: [
        'Formation petite enfance ou expérience équivalente',
        'Patience et sens de l\'écoute',
        'Capacité à gérer un groupe d\'enfants',
        'Bonne communication',
      ],
      responsibilities: [
        'Accompagner l\'enseignant en classe de maternelle',
        'Veiller au bien-être des enfants',
        'Participer aux activités pédagogiques',
        'Assurer la surveillance pendant les récréations',
      ],
      postedDate: '2025-02-01',
      category: 'Enseignement'
    },
    {
      id: 3,
      title: 'Intervenant(e) Anglais',
      type: 'Temps partiel',
      location: 'Dakar, Sénégal',
      description: 'Intervenant(e) anglophone pour animer des ateliers d\'anglais ludiques et interactifs.',
      requirements: [
        'Anglais langue maternelle ou niveau bilingue',
        'Expérience avec les enfants',
        'Créativité et dynamisme',
        'Capacité à adapter son enseignement',
      ],
      responsibilities: [
        'Animer des ateliers d\'anglais par niveau',
        'Créer des activités ludiques et pédagogiques',
        'Évaluer la progression des élèves',
        'Participer aux événements de l\'école',
      ],
      postedDate: '2024-12-10',
      category: 'Langues'
    },
  ];

  const allJobs = jobs.length > 0 ? jobs : defaultJobs;

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Offres d'Emploi" 
        subtitle="Rejoignez notre équipe pédagogique"
      />

      {/* Section Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-elegant font-bold text-night-blue-900 mb-6">
              Pourquoi travailler à <span className="gold-text">Saint-Exupéry ?</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Notre école offre un environnement de travail stimulant et bienveillant où chaque membre 
              de l'équipe contribue à la réussite et l'épanouissement de nos élèves.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Excellence pédagogique',
                  description: 'Formation continue et accompagnement professionnel'
                },
                {
                  icon: Briefcase,
                  title: 'Équipe engagée',
                  description: 'Collaboration et esprit d\'équipe au quotidien'
                },
                {
                  icon: '🌍',
                  title: 'Diversité culturelle',
                  description: 'Environnement international enrichissant'
                },
              ].map((benefit, index) => (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  {typeof benefit.icon === 'string' ? (
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="text-white" size={28} />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-night-blue-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Offres disponibles */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                Postes <span className="gold-text">disponibles</span>
              </h2>
              <p className="text-xl text-gray-600">
                {allJobs.length} offre{allJobs.length > 1 ? 's' : ''} d'emploi actuellement
              </p>
            </div>

            {allJobs.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="text-gray-400" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aucune offre disponible pour le moment</h3>
                <p className="text-gray-600 mb-6">
                  Nous publierons prochainement de nouvelles opportunités. Revenez bientôt !
                </p>
                <p className="text-gray-600">
                  Vous pouvez également nous envoyer une candidature spontanée à{' '}
                  <a href="mailto:ecolesaintexuperydedakar@gmail.com" className="text-gold-600 hover:text-gold-700 font-medium">
                    ecolesaintexuperydedakar@gmail.com
                  </a>
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {allJobs.map((job) => (
                  <div 
                    key={job.id}
                    className="card hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-grow">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="text-white" size={28} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-night-blue-900 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-3">
                              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                                <Clock className="mr-1" size={14} />
                                {job.type}
                              </span>
                              <span className="inline-flex items-center px-3 py-1 bg-earth-green-100 text-earth-green-700 text-sm font-medium rounded-full">
                                <MapPin className="mr-1" size={14} />
                                {job.location}
                              </span>
                              <span className="inline-flex items-center px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full">
                                <FileText className="mr-1" size={14} />
                                {job.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          {job.requirements && (
                            <div>
                              <h4 className="font-bold text-night-blue-900 mb-3">Profil recherché :</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start text-sm text-gray-700">
                                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {job.responsibilities && (
                            <div>
                              <h4 className="font-bold text-night-blue-900 mb-3">Missions :</h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex items-start text-sm text-gray-700">
                                    <span className="w-1.5 h-1.5 bg-earth-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                    {resp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 md:min-w-[200px]">
                        {job.postedDate && (
                          <div className="text-sm text-gray-600 flex items-center">
                            <Calendar className="mr-2" size={16} />
                            Publié le {new Date(job.postedDate).toLocaleDateString('fr-FR')}
                          </div>
                        )}
                        <button
                          onClick={() => handleApply(job)}
                          className="btn-primary flex items-center justify-center"
                        >
                          <Send className="mr-2" size={18} />
                          Postuler
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Candidature spontanée */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-elegant font-bold text-night-blue-900 mb-4">
                  Candidature <span className="gold-text">spontanée</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Vous ne trouvez pas l'offre qui vous correspond ? Envoyez-nous votre candidature spontanée. 
                  Nous serons ravis de découvrir votre profil et de vous contacter si une opportunité se présente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:ecolesaintexuperydedakar@gmail.com?subject=Candidature spontanée"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    <Send className="mr-2" size={18} />
                    Envoyer ma candidature
                  </a>
                  <a 
                    href="/contact"
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de candidature */}
      {selectedJob && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in"
          onClick={() => setSelectedJob(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-night-blue-900 mb-2">{selectedJob.title}</h3>
                  <p className="text-gray-600">{selectedJob.type} • {selectedJob.location}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
                >
                  ×
                </button>
              </div>

              <div className="bg-gold-50 border-l-4 border-gold-500 p-4 rounded-r-lg mb-6">
                <p className="text-gray-800">
                  <strong className="text-gold-700">Pour postuler :</strong> Envoyez votre CV et lettre de motivation à{' '}
                  <a 
                    href={`mailto:ecolesaintexuperydedakar@gmail.com?subject=Candidature - ${selectedJob.title}`}
                    className="text-gold-600 hover:text-gold-700 font-medium underline"
                  >
                    ecolesaintexuperydedakar@gmail.com
                  </a>
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-night-blue-900 mb-3 text-lg">Description du poste</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
                </div>

                {selectedJob.requirements && (
                  <div>
                    <h4 className="font-bold text-night-blue-900 mb-3 text-lg">Profil recherché</h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedJob.responsibilities && (
                  <div>
                    <h4 className="font-bold text-night-blue-900 mb-3 text-lg">Vos missions</h4>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
                <a
                  href={`mailto:ecolesaintexuperydedakar@gmail.com?subject=Candidature - ${selectedJob.title}`}
                  className="flex-grow btn-primary text-center flex items-center justify-center"
                >
                  Envoyer ma candidature
                </a>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Emplois;