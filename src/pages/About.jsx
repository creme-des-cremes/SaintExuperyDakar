import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Award, Users, Globe, Heart, BookOpen, Target, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="L'École Saint-Exupéry" 
        subtitle="Un établissement d'excellence au cœur de Dakar"
      />

      {/* Section Présentation */}
      <section id="presentation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-night-blue-900 mb-4">
                Bienvenue à <span className="gold-text">Saint-Exupéry</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-earth-green-500 mx-auto mb-6"></div>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gradient-to-br from-night-blue-50 to-gold-50 p-8 rounded-2xl mb-8 border-2 border-gold-200">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  L'<strong className="text-gold-700">École française Saint-Exupéry de Dakar</strong> est un établissement 
                  d'enseignement français à l'étranger, partenaire de l'<strong>AEFE</strong> (Agence pour l'Enseignement 
                  Français à l'Étranger). Nous accueillons actuellement <strong>166 élèves</strong> de la Toute Petite 
                  Section au CM2.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Notre école internationale représente la diversité avec des élèves de multiples nationalités : 
                  sénégalaise, française, belge, libanaise, marocaine, brésilienne, hollandaise, suisse et bien d'autres. 
                  Cette richesse culturelle fait de Saint-Exupéry un lieu d'apprentissage unique où chaque enfant 
                  s'épanouit dans le respect et l'ouverture au monde.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-gold-100 hover:border-gold-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-night-blue-900 mb-2">Homologation AEFE</h3>
                  <p className="text-gray-600">Établissement reconnu et partenaire</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-earth-green-100 hover:border-earth-green-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-earth-green-500 to-earth-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-night-blue-900 mb-2">166 Élèves</h3>
                  <p className="text-gray-600">De la TPS au CM2</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-night-blue-900 mb-2">10+ Nationalités</h3>
                  <p className="text-gray-600">Diversité culturelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projet éducatif */}
      <section id="projet" className="py-20 bg-gradient-to-br from-night-blue-900 to-night-blue-800 text-white relative overflow-hidden">
        {/* Étoiles décoratives */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
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
              Notre <span className="gold-text">Projet Éducatif</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une pédagogie centrée sur l'enfant et ses besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Bienveillance',
                description: 'Un environnement sécurisant où chaque enfant est écouté, respecté et encouragé à donner le meilleur de lui-même.',
                color: 'from-pink-500 to-red-500'
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'Des exigences pédagogiques élevées pour permettre à chaque élève d\'atteindre son plein potentiel académique.',
                color: 'from-gold-500 to-gold-600'
              },
              {
                icon: Globe,
                title: 'Ouverture',
                description: 'Une éducation internationale qui prépare nos élèves à devenir des citoyens du monde responsables.',
                color: 'from-earth-green-500 to-earth-green-600'
              },
              {
                icon: Users,
                title: 'Inclusion',
                description: 'Le respect de la diversité et l\'égalité des chances pour tous les enfants, quelle que soit leur origine.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: BookOpen,
                title: 'Innovation',
                description: 'Des méthodes pédagogiques modernes et adaptées aux besoins de chaque élève pour favoriser l\'apprentissage.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Sparkles,
                title: 'Créativité',
                description: 'Encourager l\'expression artistique et la créativité à travers diverses activités culturelles et sportives.',
                color: 'from-yellow-500 to-orange-500'
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold gold-text mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30">
            <h3 className="text-2xl font-bold gold-text mb-4 text-center">Notre Mission</h3>
            <p className="text-lg text-gray-200 leading-relaxed text-center">
              Offrir un enseignement de qualité dans un environnement bienveillant et stimulant, 
              qui permet à chaque enfant de développer ses compétences, sa confiance en soi et son 
              ouverture au monde. Nous préparons nos élèves à devenir des citoyens responsables, 
              créatifs et respectueux de la diversité.
            </p>
          </div>
        </div>
      </section>

      {/* Section Équipe pédagogique */}
      <section id="equipe" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
              Notre <span className="gold-text">Équipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels passionnés au service de la réussite de vos enfants
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mr-4">
                  <Users className="text-white" size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-night-blue-900">Direction</h3>
                  <p className="text-gray-600">Mme Nadège MATTHIEU - Directrice</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Notre directrice, avec son équipe pédagogique qualifiée et dévouée, assure un 
                encadrement de qualité pour tous nos élèves. Chaque enseignant est sélectionné 
                pour ses compétences et sa passion pour l'enseignement.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Professeurs des écoles',
                description: 'Enseignants qualifiés diplômés de l\'Éducation Nationale française',
                icon: BookOpen,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Assistants maternels',
                description: 'Personnel attentionné pour accompagner nos plus jeunes élèves',
                icon: Heart,
                color: 'from-pink-500 to-red-500'
              },
              {
                title: 'Intervenants spécialisés',
                description: 'Professeurs de langues, sport, musique et arts plastiques',
                icon: Sparkles,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Personnel administratif',
                description: 'Une équipe administrative à votre écoute au quotidien',
                icon: Users,
                color: 'from-earth-green-500 to-earth-green-600'
              },
              {
                title: 'Équipe de cantine',
                description: 'Des repas équilibrés et adaptés préparés avec soin',
                icon: Award,
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Personnel d\'entretien',
                description: 'Un environnement propre et sécurisé pour nos élèves',
                icon: Globe,
                color: 'from-teal-500 to-teal-600'
              },
            ].map((team, index) => (
              <div 
                key={index}
                className="card hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${team.color} flex items-center justify-center mb-4`}>
                  <team.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-night-blue-900 mb-3">{team.title}</h3>
                <p className="text-gray-600 leading-relaxed">{team.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-gold-50 to-earth-green-50 px-8 py-6 rounded-2xl border-2 border-gold-200">
              <p className="text-lg text-gray-800 font-medium">
                <span className="gold-text font-bold">Rejoignez notre équipe !</span> 
                <br />Consultez nos offres d'emploi
              </p>
              <a 
                href="/emplois"
                className="mt-4 inline-block btn-primary"
              >
                Voir les opportunités
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Infrastructures */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
              Nos <span className="gold-text">Infrastructures</span>
            </h2>
            <p className="text-xl text-gray-600">
              Des équipements modernes pour un apprentissage optimal
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Salles de classe climatisées',
                items: ['Espaces lumineux et aérés', 'Mobilier adapté à chaque âge', 'Tableaux numériques interactifs']
              },
              {
                title: 'Équipements pédagogiques',
                items: ['Bibliothèque scolaire riche', 'Matériel didactique varié', 'Classes informatiques mobiles']
              },
              {
                title: 'Espaces de vie',
                items: ['Cour de récréation sécurisée', 'Cantine avec repas équilibrés', 'Espaces verts et ombragés']
              },
              {
                title: 'Ressources numériques',
                items: ['Environnement numérique de travail', 'Tablettes pour les élèves', 'Connexion internet sécurisée']
              },
            ].map((infra, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-night-blue-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center mr-3 text-sm font-bold">
                    {index + 1}
                  </span>
                  {infra.title}
                </h3>
                <ul className="space-y-2">
                  {infra.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Localisation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
              Où <span className="gold-text">nous trouver ?</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-earth-green-50 to-white border-2 border-earth-green-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-earth-green-500 flex items-center justify-center flex-shrink-0">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-night-blue-900 mb-2">Adresse</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Route de N'gor - Almadies<br />
                    Face à l'Université Internationale<br />
                    Dakar, Sénégal
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-earth-green-100 mt-6">
                <h4 className="font-bold text-night-blue-900 mb-3">Accès</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                    Quartier des Almadies, près de la plage de N'gor
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                    Accessible en transport en commun (lignes 3, 14, 47, 49, 61)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                    Parking disponible pour les parents
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;