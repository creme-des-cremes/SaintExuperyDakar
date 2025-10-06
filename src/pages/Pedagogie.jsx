import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { BookOpen, Globe, Users, Award, Languages, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { NIVEAUX_CLASSES } from '../utils/constants';

const Pedagogie = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Notre Pédagogie" 
        subtitle="Un enseignement d'excellence adapté à chaque enfant"
      />

      {/* Section Programme français */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                Programme <span className="gold-text">Français</span> Homologué
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un enseignement conforme aux programmes de l'Éducation Nationale française, 
                reconnu par l'AEFE
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4">
                    <Award className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-night-blue-900">Homologation AEFE</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Notre école est homologuée par l'<strong>Agence pour l'Enseignement Français à l'Étranger</strong>, 
                  garantissant un enseignement de qualité conforme aux exigences de l'Éducation Nationale française.
                </p>
                <ul className="space-y-2">
                  {[
                    'Programmes officiels français',
                    'Certification reconnue internationalement',
                    'Continuité pédagogique assurée',
                    'Équipe enseignante qualifiée',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mr-4">
                    <BookOpen className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-night-blue-900">Niveaux proposés</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  De la Toute Petite Section au CM2, nous accompagnons vos enfants dans leur parcours scolaire.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {NIVEAUX_CLASSES.slice(0, 6).map((niveau, i) => (
                    <div key={i} className="bg-white p-2 rounded-lg border border-gold-200 text-sm text-gray-700 text-center">
                      {niveau.split(' ')[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Méthodes pédagogiques */}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-elegant font-bold mb-4">
              Nos <span className="gold-text">Méthodes</span> Pédagogiques
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des approches innovantes pour favoriser l'apprentissage et l'épanouissement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: 'Pédagogie différenciée',
                description: 'Adaptation des méthodes d\'enseignement aux besoins spécifiques de chaque élève pour assurer la réussite de tous.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Users,
                title: 'Apprentissage collaboratif',
                description: 'Travaux de groupe et projets collectifs pour développer l\'esprit d\'équipe et les compétences sociales.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Target,
                title: 'Pédagogie par objectifs',
                description: 'Des objectifs clairs et mesurables pour suivre la progression de chaque élève tout au long de l\'année.',
                color: 'from-gold-500 to-gold-600'
              },
              {
                icon: Globe,
                title: 'Ouverture au monde',
                description: 'Projets interculturels et échanges pour développer la curiosité et l\'ouverture d\'esprit des élèves.',
                color: 'from-earth-green-500 to-earth-green-600'
              },
              {
                icon: BookOpen,
                title: 'Manipulation et expérimentation',
                description: 'Apprentissage par la pratique avec du matériel pédagogique adapté et des expériences concrètes.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: TrendingUp,
                title: 'Évaluation positive',
                description: 'Une évaluation bienveillante qui valorise les progrès et encourage les efforts de chaque élève.',
                color: 'from-pink-500 to-red-500'
              },
            ].map((method, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                  <method.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold gold-text mb-3">{method.title}</h3>
                <p className="text-gray-300 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Apprentissage des langues */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                Apprentissage des <span className="gold-text">Langues</span>
              </h2>
              <p className="text-xl text-gray-600">
                Une ouverture linguistique dès le plus jeune âge
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  flag: '🇫🇷',
                  language: 'Français',
                  level: 'Langue principale',
                  description: 'Enseignement en français selon les programmes de l\'Éducation Nationale avec un accent sur la maîtrise de la langue écrite et orale.',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  flag: '🇬🇧',
                  language: 'Anglais',
                  level: 'Dès la maternelle',
                  description: 'Initiation à l\'anglais dès la maternelle avec des activités ludiques, puis enseignement renforcé en élémentaire.',
                  color: 'from-red-500 to-red-600'
                },
                {
                  flag: '🇸🇳',
                  language: 'Wolof',
                  level: 'Langue locale',
                  description: 'Découverte et apprentissage du wolof pour favoriser l\'intégration et la connaissance de la culture sénégalaise.',
                  color: 'from-earth-green-500 to-earth-green-600'
                },
              ].map((lang, index) => (
                <div key={index} className="card hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="text-6xl mb-4 text-center">{lang.flag}</div>
                  <h3 className="text-2xl font-bold text-night-blue-900 text-center mb-2">{lang.language}</h3>
                  <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${lang.color} text-white text-sm font-semibold mb-4 mx-auto block text-center`}>
                    {lang.level}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-center">{lang.description}</p>
                </div>
              ))}
            </div>

            <div className="card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0">
                  <Languages className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-night-blue-900 mb-3">Approche multilingue</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Notre approche multilingue prépare les élèves à évoluer dans un monde globalisé. 
                    L'apprentissage des langues se fait de manière progressive et ludique, en respectant 
                    le rythme de chaque enfant.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      'Méthodes d\'enseignement adaptées à l\'âge',
                      'Jeux et activités en langues étrangères',
                      'Chants et comptines multilingues',
                      'Projets culturels et échanges',
                      'Supports numériques interactifs',
                      'Certification en langues',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Domaines d'apprentissage */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                Domaines <span className="gold-text">d'Apprentissage</span>
              </h2>
              <p className="text-xl text-gray-600">
                Un enseignement complet et équilibré
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Français',
                  subjects: ['Lecture et compréhension', 'Expression écrite', 'Grammaire et orthographe', 'Littérature'],
                  icon: '📚',
                  color: 'border-blue-200 bg-blue-50'
                },
                {
                  title: 'Mathématiques',
                  subjects: ['Numération et calcul', 'Géométrie', 'Mesures et grandeurs', 'Résolution de problèmes'],
                  icon: '🔢',
                  color: 'border-gold-200 bg-gold-50'
                },
                {
                  title: 'Sciences et Technologie',
                  subjects: ['Sciences de la vie', 'Sciences physiques', 'Technologie', 'Développement durable'],
                  icon: '🔬',
                  color: 'border-earth-green-200 bg-earth-green-50'
                },
                {
                  title: 'Histoire-Géographie',
                  subjects: ['Histoire de France', 'Géographie mondiale', 'Éducation civique', 'Culture générale'],
                  icon: '🌍',
                  color: 'border-purple-200 bg-purple-50'
                },
                {
                  title: 'Arts et Culture',
                  subjects: ['Arts plastiques', 'Éducation musicale', 'Histoire des arts', 'Expression artistique'],
                  icon: '🎨',
                  color: 'border-pink-200 bg-pink-50'
                },
                {
                  title: 'Éducation Physique',
                  subjects: ['Sports collectifs', 'Athlétisme', 'Expression corporelle', 'Jeux et activités'],
                  icon: '⚽',
                  color: 'border-orange-200 bg-orange-50'
                },
              ].map((domain, index) => (
                <div key={index} className={`card ${domain.color} border-2 hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{domain.icon}</span>
                    <h3 className="text-2xl font-bold text-night-blue-900">{domain.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {domain.subjects.map((subject, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Suivi et évaluation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                Suivi et <span className="gold-text">Évaluation</span>
              </h2>
              <p className="text-xl text-gray-600">
                Un accompagnement personnalisé pour chaque élève
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Évaluation continue',
                  description: 'Suivi régulier des acquis et des progrès de chaque élève tout au long de l\'année scolaire.',
                  icon: TrendingUp,
                },
                {
                  title: 'Bulletins trimestriels',
                  description: 'Bilans détaillés remis trois fois par an avec commentaires personnalisés des enseignants.',
                  icon: BookOpen,
                },
                {
                  title: 'Rencontres parents-enseignants',
                  description: 'Entretiens individuels réguliers pour échanger sur la progression et le bien-être de l\'enfant.',
                  icon: Users,
                },
                {
                  title: 'Soutien personnalisé',
                  description: 'Accompagnement adapté pour les élèves en difficulté ou à haut potentiel.',
                  icon: Award,
                },
              ].map((item, index) => (
                <div key={index} className="card hover:shadow-xl transition-all duration-300 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 card bg-gradient-to-br from-earth-green-50 to-white border-2 border-earth-green-200">
              <h3 className="text-2xl font-bold text-night-blue-900 mb-4 text-center">
                Communication avec les familles
              </h3>
              <p className="text-gray-700 leading-relaxed text-center mb-6">
                Nous croyons en une collaboration étroite entre l'école et les familles. 
                Un dialogue constant permet d'assurer le meilleur accompagnement possible pour chaque enfant.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Cahier de liaison',
                  'Plateforme numérique',
                  'Réunions de classe',
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-earth-green-200 text-center">
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pedagogie;