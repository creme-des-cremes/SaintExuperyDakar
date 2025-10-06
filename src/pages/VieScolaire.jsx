import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Calendar, Clock, Package, Coffee, BookOpen, AlertCircle } from 'lucide-react';
import { HORAIRES, CALENDRIER_2025_2026, FOURNITURES_INFO } from '../utils/constants';

const VieScolaire = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Vie Scolaire" 
        subtitle="Organisation et informations pratiques"
      />

      {/* Section Horaires */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                <span className="gold-text">Horaires</span> de l'École
              </h2>
              <p className="text-xl text-gray-600">
                Organisation de la journée scolaire
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Temps scolaires */}
              <div className="card bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4">
                    <Clock className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-night-blue-900">Temps scolaires</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-blue-700">Lundi</span>
                      <span className="text-gray-700">Après-midi</span>
                    </div>
                    <div className="text-3xl font-bold text-night-blue-900">
                      {HORAIRES.lundi.debut} - {HORAIRES.lundi.fin}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-blue-700">Mardi au Vendredi</span>
                      <span className="text-gray-700">Matin</span>
                    </div>
                    <div className="text-3xl font-bold text-night-blue-900">
                      {HORAIRES.mardiVendredi.debut} - {HORAIRES.mardiVendredi.fin}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mr-4">
                    <Coffee className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-night-blue-900">Services</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-gold-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gold-700">🍽️ Cantine</span>
                      <span className="text-sm bg-gold-100 px-3 py-1 rounded-full text-gold-700">Service proposé</span>
                    </div>
                    <div className="text-2xl font-bold text-night-blue-900">
                      {HORAIRES.cantine.debut} - {HORAIRES.cantine.fin}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Repas équilibrés et adaptés</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-gold-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gold-700">🎨 Activités périscolaires</span>
                      <span className="text-sm bg-gold-100 px-3 py-1 rounded-full text-gold-700">Optionnel</span>
                    </div>
                    <div className="text-2xl font-bold text-night-blue-900">
                      {HORAIRES.periscolaire.debut} - {HORAIRES.periscolaire.fin}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Sports, arts, musique...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <div className="flex items-start">
                <AlertCircle className="text-blue-600 flex-shrink-0 mr-3 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Information importante</h4>
                  <p className="text-gray-800">
                    Les portes de l'école ouvrent 15 minutes avant le début des cours. 
                    Nous vous remercions de respecter les horaires pour le bon déroulement des activités.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Calendrier */}
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
              Calendrier <span className="gold-text">2025-2026</span>
            </h2>
            <p className="text-xl text-gray-300">
              Toutes les dates importantes de l'année scolaire
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {CALENDRIER_2025_2026.map((event, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-white" size={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold gold-text mb-2">{event.titre}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                      {event.date && (
                        <div className="mt-2 inline-block bg-white/10 px-3 py-1 rounded-full text-xs text-white">
                          {new Date(event.date).toLocaleDateString('fr-FR', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30 text-center">
              <Calendar className="text-gold-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold gold-text mb-3">Planifiez votre année</h3>
              <p className="text-gray-300 leading-relaxed">
                Téléchargez le calendrier scolaire complet pour ne manquer aucune date importante. 
                Un calendrier détaillé sera également disponible dans l'espace parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fournitures */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                <span className="gold-text">Fournitures</span> Scolaires
              </h2>
              <p className="text-xl text-gray-600">
                Tout est fourni par l'école !
              </p>
            </div>

            <div className="card bg-gradient-to-br from-gold-50 to-white border-4 border-gold-300 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mr-4">
                  <Package className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-night-blue-900">Tout Inclus !</h3>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center">
                  {FOURNITURES_INFO}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-earth-green-50 p-6 rounded-xl border-2 border-earth-green-200">
                    <h4 className="text-xl font-bold text-earth-green-800 mb-4 flex items-center">
                      <BookOpen className="mr-2" size={24} />
                      Fourni par l'école
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Tous les cahiers',
                        'Tous les manuels scolaires',
                        'Crayons, stylos et gommes',
                        'Feutres et crayons de couleur',
                        'Matériel de géométrie',
                        'Classeurs et pochettes',
                        'Supports pédagogiques',
                        'Livres de bibliothèque',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                    <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      <Package className="mr-2" size={24} />
                      À prévoir par les familles
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <div className="font-bold text-blue-700 mb-2">1. Un cartable</div>
                        <p className="text-sm text-gray-600">
                          ⚠️ Pas de sacs à dos - Un cartable traditionnel uniquement
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <div className="font-bold text-blue-700 mb-2">2. Une boîte à goûter</div>
                        <p className="text-sm text-gray-600">
                          Pour le goûter du matin ou de l'après-midi
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <div className="font-bold text-blue-700 mb-2">3. Une gourde</div>
                        <p className="text-sm text-gray-600">
                          Pour s'hydrater tout au long de la journée
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gold-100 to-earth-green-100 p-6 rounded-xl border-2 border-gold-300">
                  <h4 className="text-xl font-bold text-night-blue-900 mb-3 text-center">
                    Pourquoi ce choix ?
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: '🤝',
                        title: 'Égalité',
                        text: 'Tous les enfants ont le même matériel'
                      },
                      {
                        icon: '♻️',
                        title: 'Respect',
                        text: 'Sensibilisation au respect du matériel'
                      },
                      {
                        icon: '💰',
                        title: 'Économie',
                        text: 'Un budget simplifié pour les familles'
                      },
                    ].map((reason, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">{reason.icon}</div>
                        <div className="font-bold text-night-blue-900 mb-1">{reason.title}</div>
                        <div className="text-sm text-gray-600">{reason.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Règlement intérieur */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                <span className="gold-text">Règlement</span> Intérieur
              </h2>
              <p className="text-xl text-gray-600">
                Vivre ensemble dans le respect et la bienveillance
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Respect et bienveillance',
                  items: [
                    'Respect de tous les membres de la communauté scolaire',
                    'Langage poli et courtois en toutes circonstances',
                    'Aucune forme de violence (physique, verbale ou psychologique)',
                    'Entraide et solidarité entre élèves',
                  ],
                  color: 'from-pink-500 to-red-500'
                },
                {
                  title: 'Assiduité et ponctualité',
                  items: [
                    'Présence obligatoire à tous les cours',
                    'Respect des horaires d\'arrivée et de sortie',
                    'Justification de toute absence',
                    'Participation active aux activités scolaires',
                  ],
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'Tenue et matériel',
                  items: [
                    'Tenue vestimentaire propre et appropriée',
                    'Port du cartable obligatoire (pas de sac à dos)',
                    'Respect du matériel de l\'école',
                    'Objets personnels sous la responsabilité des familles',
                  ],
                  color: 'from-earth-green-500 to-earth-green-600'
                },
                {
                  title: 'Sécurité',
                  items: [
                    'Respect des consignes de sécurité',
                    'Interdiction d\'objets dangereux',
                    'Surveillance aux entrées et sorties',
                    'Accès à l\'école réservé aux personnes autorisées',
                  ],
                  color: 'from-orange-500 to-red-600'
                },
              ].map((section, index) => (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center mr-4`}>
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-night-blue-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-xl">
              <p className="text-gray-800">
                <strong className="text-gold-700">Note :</strong> Le règlement intérieur complet 
                est remis à toutes les familles lors de l'inscription et disponible dans l'espace parents. 
                Son respect est essentiel pour garantir un environnement d'apprentissage serein et épanouissant pour tous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Santé */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                <span className="gold-text">Santé</span> et Sécurité
              </h2>
              <p className="text-xl text-gray-600">
                Le bien-être de vos enfants est notre priorité
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
                <h3 className="text-xl font-bold text-night-blue-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🏥</span>
                  Suivi médical
                </h3>
                <ul className="space-y-3">
                  {[
                    'Fiche médicale d\'urgence obligatoire',
                    'Vaccinations à jour requises',
                    'Protocole d\'urgence en place',
                    'Contact immédiat des familles si besoin',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-gradient-to-br from-earth-green-50 to-white border-2 border-earth-green-200">
                <h3 className="text-xl font-bold text-night-blue-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🛡️</span>
                  Sécurité
                </h3>
                <ul className="space-y-3">
                  {[
                    'Locaux sécurisés et surveillés',
                    'Accès contrôlé à l\'établissement',
                    'Exercices d\'évacuation réguliers',
                    'Personnel formé aux premiers secours',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-3 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex items-start">
                <AlertCircle className="text-red-600 flex-shrink-0 mr-3 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Médicaments</h4>
                  <p className="text-gray-800">
                    Aucun médicament ne peut être administré sans ordonnance médicale et autorisation écrite des parents. 
                    En cas de traitement médical, merci de contacter la direction pour mettre en place un protocole adapté.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VieScolaire;