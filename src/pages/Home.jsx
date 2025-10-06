import React from 'react';
import { Link } from 'react-router-dom';
import { Star as StarIcon, Globe, BookOpen, Users, Award, Calendar, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import Star from '../components/common/Star';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec effet WOW */}
      <section className="relative starry-background min-h-screen flex items-center justify-center overflow-hidden">
        {/* Étoiles animées */}
        {[...Array(50)].map((_, i) => (
          <Star 
            key={i} 
            size={i % 4 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small'} 
            delay={i * 0.1} 
          />
        ))}

        {/* Globe terrestre animé */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-earth-green-500 opacity-10 blur-3xl animate-float" />
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gold-500 opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        {/* Contenu principal */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-gold-500/30 mb-8">
              <Sparkles className="text-gold-400" size={20} />
              <span className="text-white font-medium">Établissement homologué AEFE</span>
            </div>
{/* Image du Petit Prince en cercle */}
<div className="mb-12">
  <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-gold-500 shadow-2xl animate-float">
    <img 
      src="/images/petit-prince-globe.jpg" 
      alt="Le Petit Prince" 
      className="w-full h-full object-cover"
    />
  </div>
</div>
{/* Titre principal */}
<h1 className="text-6xl md:text-8xl font-elegant font-bold mb-6 animate-slide-up">
  <span className="gold-text block mb-2">École Saint-Exupéry</span>
  <span className="text-4xl md:text-5xl text-white font-normal flex items-center justify-center gap-3">
    de 
    <span className="text-earth-green-400">Dakar</span>
  </span>
</h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Un enseignement d'excellence de la TPS au CM2, 
              où chaque enfant s'épanouit et construit son avenir
            </p>

            {/* Citation */}
            <div className="bg-white/5 backdrop-blur-sm border-l-4 border-gold-500 p-6 max-w-2xl mx-auto mb-12 rounded-r-xl">
              <p className="text-gold-300 font-elegant italic text-lg mb-2">
                "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux."
              </p>
              <p className="text-gray-400 text-sm">- Le Petit Prince</p>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/inscriptions" 
                className="group relative px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-xl overflow-hidden shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  S'inscrire pour 2025-2026
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
              
              <Link 
                to="/ecole" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-gold-500 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Découvrir l'école
              </Link>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Users, label: 'Élèves', value: '166' },
                { icon: BookOpen, label: 'Classes', value: 'TPS-CM2' },
                { icon: Award, label: 'Homologation', value: 'AEFE' },
                { icon: Globe, label: 'Nationalités', value: '10+' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <stat.icon className="text-gold-400 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Section : Pourquoi Saint-Exupéry */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="gold-text">Pourquoi</span> Saint-Exupéry ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une école où l'excellence pédagogique rencontre la bienveillance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Excellence Académique',
                description: 'Programme français homologué AEFE avec des méthodes pédagogiques innovantes adaptées à chaque enfant.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Équipe Dévouée',
                description: 'Enseignants qualifiés et passionnés, attentifs au développement global de chaque élève.',
                color: 'from-gold-500 to-gold-600'
              },
              {
                icon: Globe,
                title: 'Ouverture Internationale',
                description: 'Un environnement multiculturel qui prépare nos élèves à devenir des citoyens du monde.',
                color: 'from-earth-green-500 to-earth-green-600'
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="card group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-night-blue-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Informations importantes */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gold-500/20">
            <div className="bg-gradient-to-r from-night-blue-800 to-night-blue-900 p-8 text-center">
              <h2 className="text-4xl font-elegant font-bold text-white mb-2">
                <span className="gold-text">Tout</span> est fourni !
              </h2>
              <div className="flex items-center justify-center gap-2 text-gold-400">
                <Sparkles size={20} />
                <p className="text-lg">L'égalité pour tous nos élèves</p>
                <Sparkles size={20} />
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-xl mb-8">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <strong className="text-gold-700">À l'école Saint-Exupéry</strong>, toutes les fournitures scolaires, 
                    de la TPS au CM2, sont <strong>prises en charge par l'établissement</strong>. 
                    Du cahier aux manuels, en passant par les crayons et l'ensemble du petit matériel, 
                    tout est fourni à chaque élève.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-earth-green-50 p-6 rounded-xl border border-earth-green-200">
                    <h3 className="text-xl font-bold text-earth-green-800 mb-3 flex items-center">
                      <Award className="mr-2" size={24} />
                      Notre engagement
                    </h3>
                    <p className="text-gray-700">
                      Ce choix garantit <strong>l'égalité entre tous les enfants</strong> et permet de 
                      sensibiliser chacun au respect du matériel, en cohérence avec le projet éducatif de l'école.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                      <BookOpen className="mr-2" size={24} />
                      À prévoir
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        Un cartable (pas de sacs à dos)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        Une boîte à goûter
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        Une gourde
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Inscriptions 2025-2026 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">
                Inscriptions <span className="gold-text">2025-2026</span>
              </h2>
              <p className="text-xl text-gray-600">
                Rejoignez notre communauté éducative d'excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tarifs */}
              <div className="card bg-gradient-to-br from-night-blue-900 to-night-blue-800 text-white">
                <h3 className="text-2xl font-bold gold-text mb-6">Tarifs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Frais d'inscription</span>
                    <span className="text-2xl font-bold text-gold-400">200 000 FCFA</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">Frais de scolarité annuels</div>
                    <div className="text-3xl font-bold text-gold-400 mb-4">2 000 000 FCFA</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>1ère tranche (septembre)</span>
                        <span className="font-semibold">800 000 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2ème tranche (janvier)</span>
                        <span className="font-semibold">600 000 FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>3ème tranche (avril)</span>
                        <span className="font-semibold">600 000 FCFA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modalités */}
              <div className="card">
                <h3 className="text-2xl font-bold text-night-blue-900 mb-6">Modalités d'inscription</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-night-blue-900 mb-1">Pré-inscription en ligne</h4>
                      <p className="text-gray-600 text-sm">Via le portail SCAC</p>
                      <a 
                        href="https://www.efsenegal-ifs.org/20252026/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium mt-2 text-sm"
                      >
                        Accéder au portail
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-night-blue-900 mb-1">Dépôt du dossier</h4>
                      <p className="text-gray-600 text-sm">Envoyez les pièces par mail ou déposez-les à l'école</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-night-blue-900 mb-1">Visite de l'école</h4>
                      <p className="text-gray-600 text-sm">Prenez rendez-vous avec la directrice</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link 
                    to="/inscriptions"
                    className="w-full btn-primary text-center block"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Horaires et Calendrier */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">
                <span className="gold-text">Organisation</span> Scolaire
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Horaires */}
              <div className="card bg-white">
                <div className="flex items-center mb-6">
                  <Calendar className="text-gold-500 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-night-blue-900">Horaires</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-night-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-night-blue-900 mb-2">Temps scolaires</h4><ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        Lundi : 9h - 13h
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        Mardi au vendredi : 8h - 13h
                      </li>
                    </ul>
                  </div>

                  <div className="bg-earth-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-earth-green-900 mb-2">Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-3"></span>
                        Cantine : 13h - 14h
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-3"></span>
                        Activités périscolaires : 14h - 15h
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dates importantes */}
              <div className="card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200">
                <div className="flex items-center mb-6">
                  <StarIcon className="text-gold-500 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-night-blue-900">Dates Clés 2025-2026</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-24 font-semibold text-gold-700 flex-shrink-0">2 sept.</div>
                    <div className="text-gray-700">Rentrée des élèves</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-semibold text-gold-700 flex-shrink-0">17 oct. - 3 nov.</div>
                    <div className="text-gray-700">Vacances de la Toussaint</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-semibold text-gold-700 flex-shrink-0">19 déc. - 5 janv.</div>
                    <div className="text-gray-700">Vacances de Noël</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-semibold text-gold-700 flex-shrink-0">20 fév. - 9 mars</div>
                    <div className="text-gray-700">Vacances de février</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-semibold text-gold-700 flex-shrink-0">17 avr. - 4 mai</div>
                    <div className="text-gray-700">Vacances de Pâques</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-semibold text-gold-700 flex-shrink-0">7 juillet</div>
                    <div className="text-gray-700">Fin des cours</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    to="/vie-scolaire"
                    className="text-gold-600 hover:text-gold-700 font-medium flex items-center"
                  >
                    Voir le calendrier complet
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Actualités */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Nos <span className="gold-text">Actualités</span>
            </h2>
            <p className="text-xl text-gray-600">Découvrez la vie de notre école</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500',
                title: 'Rentrée scolaire 2025',
                date: '2 septembre 2025',
                excerpt: 'Préparez-vous pour une nouvelle année remplie de découvertes et d\'apprentissages...'
              },
              {
                image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500',
                title: 'Semaine des sciences',
                date: 'Mars 2025',
                excerpt: 'Une semaine dédiée aux expériences scientifiques et à la découverte...'
              },
              {
                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500',
                title: 'Spectacle de fin d\'année',
                date: 'Juin 2025',
                excerpt: 'Les élèves présenteront leurs talents lors de notre spectacle annuel...'
              }
            ].map((article, index) => (
              <div key={index} className="card group overflow-hidden p-0 hover:transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gold-600 font-medium mb-2">{article.date}</div>
                  <h3 className="text-xl font-bold text-night-blue-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link 
                    to="/actualites"
                    className="text-gold-600 hover:text-gold-700 font-medium flex items-center"
                  >
                    Lire la suite
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/actualites"
              className="btn-primary inline-block"
            >
              Toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Section : Contact rapide */}
      <section className="py-20 starry-background relative overflow-hidden">
        {/* Étoiles */}
        {[...Array(30)].map((_, i) => (
          <Star key={i} size="small" delay={i * 0.15} />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-white mb-4">
                <span className="gold-text">Contactez-nous</span>
              </h2>
              <p className="text-xl text-gray-200">
                Notre équipe est à votre écoute pour répondre à toutes vos questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href="tel:+221777956111"
                className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-all duration-300 border border-white/20 hover:border-gold-500"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Appelez-nous</div>
                  <div className="text-xl font-bold text-white">+221 77 795 61 11</div>
                </div>
              </a>

              <a 
                href="mailto:ecolesaintexuperydedakar@gmail.com"
                className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-all duration-300 border border-white/20 hover:border-gold-500"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-earth-green-500 to-earth-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Écrivez-nous</div>
                  <div className="text-lg font-bold text-white break-all">ecolesaintexuperydedakar@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center">
              <Link 
                to="/contact"
                className="btn-primary inline-block"
              >
                Formulaire de contact
              </Link>
            </div>
          </div>
        </div>

        {/* Globe décoratif */}
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-earth-green-500 opacity-10 blur-3xl" />
      </section>
    </div>
  );
};

export default Home;