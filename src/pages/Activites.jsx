import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Music, Palette, Trophy, Globe, BookOpen, Users, Sparkles, Heart } from 'lucide-react';

const Activites = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Activités Périscolaires" 
        subtitle="Des activités variées pour l'épanouissement de chaque enfant"
      />

      {/* Section Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-elegant font-bold text-night-blue-900 mb-6">
              Découvrez nos <span className="gold-text">Activités</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              De 14h à 15h, après la cantine, nous proposons des activités périscolaires variées 
              qui permettent aux enfants de développer leurs talents, leur créativité et leurs 
              compétences sociales dans un environnement ludique et bienveillant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Épanouissement',
                description: 'Des activités qui favorisent le bien-être et la confiance en soi',
                color: 'from-pink-500 to-red-500'
              },
              {
                icon: Users,
                title: 'Socialisation',
                description: 'Apprendre à travailler en groupe et créer des liens d\'amitié',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Sparkles,
                title: 'Découverte',
                description: 'Explorer de nouveaux domaines et révéler des talents cachés',
                color: 'from-gold-500 to-gold-600'
              },
            ].map((benefit, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 mx-auto`}>
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-night-blue-900 text-center mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Activités proposées */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
              Nos <span className="gold-text">Ateliers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Un large choix d'activités pour tous les goûts
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: 'Musique',
                description: 'Éveil musical, chant choral, découverte des instruments',
                activities: ['Chorale', 'Percussions', 'Initiation piano', 'Rythme et mouvement'],
                color: 'from-purple-500 to-purple-600',
                image: '🎵'
              },
              {
                icon: Palette,
                title: 'Arts Plastiques',
                description: 'Peinture, dessin, sculpture et créations artistiques',
                activities: ['Peinture', 'Modelage', 'Arts créatifs', 'Collage'],
                color: 'from-pink-500 to-red-500',
                image: '🎨'
              },
              {
                icon: Trophy,
                title: 'Sports',
                description: 'Activités sportives variées pour se dépenser et s\'amuser',
                activities: ['Football', 'Basketball', 'Athlétisme', 'Danse'],
                color: 'from-green-500 to-green-600',
                image: '⚽'
              },
              {
                icon: BookOpen,
                title: 'Bibliothèque',
                description: 'Lecture plaisir, contes et découverte de la littérature',
                activities: ['Lecture libre', 'Contes', 'Club lecture', 'BD et mangas'],
                color: 'from-blue-500 to-blue-600',
                image: '📚'
              },
              {
                icon: Globe,
                title: 'Langues',
                description: 'Renforcement linguistique de façon ludique',
                activities: ['Anglais ludique', 'Wolof', 'Jeux linguistiques', 'Théâtre en langues'],
                color: 'from-earth-green-500 to-earth-green-600',
                image: '🌍'
              },
              {
                icon: Sparkles,
                title: 'Sciences & Nature',
                description: 'Expériences scientifiques et découverte de l\'environnement',
                activities: ['Expériences', 'Jardinage', 'Observation nature', 'Robotique'],
                color: 'from-orange-500 to-yellow-500',
                image: '🔬'
              },
            ].map((activity, index) => (
              <div 
                key={index} 
                className="card hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${activity.color}`}></div>
                <div className="p-6">
                  <div className="text-6xl text-center mb-4">{activity.image}</div>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center mr-3`}>
                      <activity.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-night-blue-900">{activity.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{activity.description}</p>
                  <div className="space-y-2">
                    {activity.activities.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Cantine */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                <span className="gold-text">Cantine</span> Scolaire
              </h2>
              <p className="text-xl text-gray-600">
                Des repas équilibrés préparés avec soin
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
                <div className="text-6xl text-center mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-night-blue-900 mb-4 text-center">Notre Cantine</h3>
                <ul className="space-y-3">
                  {[
                    'Service de 13h à 14h',
                    'Menus équilibrés et variés',
                    'Produits frais et de qualité',
                    'Adaptation aux régimes alimentaires',
                    'Encadrement par du personnel qualifié',
                    'Éducation au goût et à la nutrition',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-gradient-to-br from-earth-green-50 to-white border-2 border-earth-green-200">
                <div className="text-6xl text-center mb-4">🥗</div>
                <h3 className="text-2xl font-bold text-night-blue-900 mb-4 text-center">Nos Engagements</h3>
                <ul className="space-y-3">
                  {[
                    'Hygiène et sécurité alimentaire',
                    'Repas préparés sur place',
                    'Menu affiché à l\'avance',
                    'Respect des traditions culinaires',
                    'Moment convivial et éducatif',
                    'Lutte contre le gaspillage alimentaire',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200">
              <h3 className="text-2xl font-bold text-night-blue-900 mb-4 text-center">
                Exemple de Menu Hebdomadaire
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { day: 'Lundi', meal: 'Poulet rôti, riz et légumes' },
                  { day: 'Mardi', meal: 'Poisson grillé, couscous' },
                  { day: 'Mercredi', meal: 'Spaghetti bolognaise' },
                  { day: 'Jeudi', meal: 'Thiéboudienne (plat local)' },
                  { day: 'Vendredi', meal: 'Pizza maison, salade' },
                ].map((menu, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border-2 border-gold-100 text-center">
                    <div className="font-bold text-gold-700 mb-2">{menu.day}</div>
                    <div className="text-sm text-gray-700">{menu.meal}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                * Dessert et fruit inclus chaque jour
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Événements et Sorties */}
      <section className="py-20 bg-gradient-to-br from-night-blue-900 to-night-blue-800 text-white relative overflow-hidden">
        {/* Étoiles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(40)].map((_, i) => (
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
              Événements & <span className="gold-text">Sorties</span>
            </h2>
            <p className="text-xl text-gray-300">
              Des moments forts tout au long de l'année
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎭',
                title: 'Spectacle de fin d\'année',
                description: 'Présentation théâtrale, musicale et artistique des élèves devant les familles',
                period: 'Juin'
              },
              {
                icon: '📚',
                title: 'Semaine de la lecture',
                description: 'Dédicaces d\'auteurs, concours de lecture, ateliers d\'écriture',
                period: 'Mars'
              },
              {
                icon: '🔬',
                title: 'Fête de la science',
                description: 'Expériences, démonstrations et ateliers scientifiques',
                period: 'Novembre'
              },
              {
                icon: '🌍',
                title: 'Journée internationale',
                description: 'Célébration de la diversité culturelle avec stands, danses et gastronomie',
                period: 'Mai'
              },
              {
                icon: '🏃',
                title: 'Olympiades sportives',
                description: 'Compétitions sportives amicales entre les classes',
                period: 'Avril'
              },
              {
                icon: '🎨',
                title: 'Exposition artistique',
                description: 'Présentation des œuvres réalisées par les élèves',
                period: 'Décembre'
              },
              {
                icon: '🚌',
                title: 'Sorties pédagogiques',
                description: 'Visites de musées, parcs naturels et sites culturels',
                period: 'Toute l\'année'
              },
              {
                icon: '🎄',
                title: 'Fêtes traditionnelles',
                description: 'Célébration des fêtes (Noël, Tabaski, Korité, etc.)',
                period: 'Selon calendrier'
              },
            ].map((event, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{event.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold gold-text">{event.title}</h3>
                      <span className="text-xs bg-gold-500/20 px-3 py-1 rounded-full text-gold-300 flex-shrink-0 ml-2">
                        {event.period}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-gold-500/30 rounded-2xl p-8">
              <Sparkles className="text-gold-400 mx-auto mb-4" size={48} />
              <p className="text-xl text-gray-200 leading-relaxed">
                Retrouvez toutes les photos de nos événements dans la <a href="/galerie" className="text-gold-400 hover:text-gold-300 font-bold underline">galerie</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Inscription aux activités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                Comment <span className="gold-text">s'inscrire ?</span>
              </h2>
            </div>

            <div className="card bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
              <div className="space-y-6">
                {[
                  {
                    number: 1,
                    title: 'Choix des activités',
                    description: 'En début d\'année, un formulaire est remis aux familles pour choisir les activités souhaitées.'
                  },
                  {
                    number: 2,
                    title: 'Inscription',
                    description: 'Les inscriptions se font par trimestre, avec possibilité de changer d\'activité à chaque période.'
                  },
                  {
                    number: 3,
                    title: 'Participation',
                    description: 'Les activités sont optionnelles et gratuites (incluses dans les frais de scolarité pour certaines).'
                  },
                  {
                    number: 4,
                    title: 'Suivi',
                    description: 'Un compte-rendu régulier est communiqué aux familles sur la participation de l\'enfant.'
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-night-blue-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-blue-200 text-center">
                <p className="text-gray-700 mb-4">
                  Pour plus d'informations sur les activités périscolaires, n'hésitez pas à nous contacter.
                </p>
                <a href="/contact" className="btn-primary inline-block">
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activites;