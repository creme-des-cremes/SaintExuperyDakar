import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { ExternalLink, FileText, CheckCircle, Calendar, DollarSign, Phone, Mail, AlertCircle } from 'lucide-react';
import { TARIFS_2025_2026, INSCRIPTION_URL, SCHOOL_INFO } from '../utils/constants';

const Inscriptions = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Inscriptions 2025-2026" 
        subtitle="Rejoignez la famille Saint-Exupéry"
      />

      {/* Section Pré-inscription */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-night-blue-900 mb-4">
                Comment <span className="gold-text">s'inscrire ?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Suivez ces étapes simples pour inscrire votre enfant
              </p>
            </div>

            {/* Alerte info */}
            <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-xl mb-12">
              <div className="flex items-start">
                <AlertCircle className="text-gold-600 flex-shrink-0 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gold-900 text-lg mb-2">Inscriptions ouvertes</h3>
                  <p className="text-gray-800">
                    Les inscriptions via le SCAC ont débuté le <strong>lundi 7 avril 2025</strong>. 
                    Les places sont limitées, ne tardez pas !
                  </p>
                </div>
              </div>
            </div>

            {/* Étapes d'inscription */}
            <div className="space-y-6 mb-12">
              {[
                {
                  number: 1,
                  title: 'Pré-inscription en ligne',
                  description: 'Remplissez le formulaire de pré-inscription via le portail SCAC',
                  action: 'Accéder au formulaire',
                  link: INSCRIPTION_URL,
                  icon: FileText,
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  number: 2,
                  title: 'Constitution du dossier',
                  description: 'Préparez les documents nécessaires : certificat de naissance, carnet de santé, justificatif de domicile, photos d\'identité',
                  icon: FileText,
                  color: 'from-gold-500 to-gold-600'
                },
                {
                  number: 3,
                  title: 'Dépôt du dossier',
                  description: 'Envoyez les pièces par email ou déposez-les directement à l\'école',
                  icon: CheckCircle,
                  color: 'from-earth-green-500 to-earth-green-600'
                },
                {
                  number: 4,
                  title: 'Visite de l\'école (optionnel)',
                  description: 'Prenez rendez-vous pour rencontrer la directrice et visiter l\'établissement',
                  icon: Calendar,
                  color: 'from-purple-500 to-purple-600'
                },
              ].map((step, index) => (
                <div key={index} className="card hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-night-blue-900 mb-2 flex items-center">
                        {step.title}
                        {step.icon && <step.icon className="ml-2 text-gray-400" size={20} />}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>
                      {step.link && (
                        <a 
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center btn-primary"
                        >
                          {step.action}
                          <ExternalLink className="ml-2" size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="py-20 bg-gradient-to-br from-night-blue-900 to-night-blue-800 text-white relative overflow-hidden">
        {/* Étoiles décoratives */}
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-elegant font-bold mb-4">
              <span className="gold-text">Tarifs</span> 2025-2026
            </h2>
            <p className="text-xl text-gray-300">
              Des frais transparents pour un enseignement de qualité
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Frais d'inscription */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-gold-500/30 hover:border-gold-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mr-4">
                  <DollarSign className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold gold-text">Frais d'inscription</h3>
              </div>
              <div className="text-center py-8 bg-white/5 rounded-xl mb-4">
                <div className="text-5xl font-bold text-gold-400 mb-2">
                  {TARIFS_2025_2026.inscription.toLocaleString()}
                </div>
                <div className="text-xl text-gray-300">FCFA</div>
              </div>
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                <p className="text-sm text-red-200 flex items-start">
                  <AlertCircle className="flex-shrink-0 mr-2 mt-0.5" size={16} />
                  <span><strong>Important :</strong> Ces frais ne sont pas remboursables</span>
                </p>
              </div>
            </div>

            {/* Frais de scolarité */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-earth-green-500/30 hover:border-earth-green-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-earth-green-500 to-earth-green-600 flex items-center justify-center mr-4">
                  <Calendar className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-earth-green-400">Frais de scolarité</h3>
              </div>
              <div className="text-center py-8 bg-white/5 rounded-xl mb-4">
                <div className="text-sm text-gray-400 mb-2">Montant annuel</div>
                <div className="text-5xl font-bold text-earth-green-400 mb-2">
                  {TARIFS_2025_2026.scolariteAnnuelle.toLocaleString()}
                </div>
                <div className="text-xl text-gray-300">FCFA</div>
              </div>
              <div className="space-y-3">
                {TARIFS_2025_2026.tranches.map((tranche, index) => (
                  <div key={index} className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                    <span className="text-gray-300">{tranche.mois}</span>
                    <span className="font-bold text-white">{tranche.montant.toLocaleString()} FCFA</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ce qui est inclus */}
          <div className="mt-12 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold gold-text mb-6 text-center">
              Ce qui est inclus dans les frais de scolarité
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Toutes les fournitures scolaires',
                'Tous les manuels et livres',
                'Le matériel pédagogique complet',
                'Les cahiers et supports d\'exercices',
                'Les crayons et petit matériel',
                'L\'accès à la bibliothèque scolaire',
                'Les activités pédagogiques',
                'Les sorties scolaires organisées',].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-center text-lg text-gray-300">
                <strong className="text-gold-400">À prévoir uniquement :</strong> Un cartable, une boîte à goûter et une gourde
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Documents requis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-night-blue-900 mb-4">
                Documents <span className="gold-text">requis</span>
              </h2>
              <p className="text-xl text-gray-600">
                Préparez ces pièces pour constituer votre dossier d'inscription
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: 'Documents administratifs',
                  items: [
                    'Formulaire de pré-inscription complété',
                    'Copie de l\'acte de naissance de l\'enfant',
                    'Copie des pièces d\'identité des parents',
                    'Justificatif de domicile récent',
                    'Attestation d\'assurance scolaire',
                  ],
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  category: 'Documents scolaires',
                  items: [
                    'Dossier scolaire de l\'année précédente',
                    'Bulletins de notes (si applicable)',
                    'Certificat de radiation (si changement d\'école)',
                    'Certificat de scolarité',
                  ],
                  color: 'from-gold-500 to-gold-600'
                },
                {
                  category: 'Documents médicaux',
                  items: [
                    'Carnet de santé à jour',
                    'Certificat médical d\'aptitude',
                    'Copie des vaccinations obligatoires',
                    'Fiche d\'urgence médicale',
                  ],
                  color: 'from-earth-green-500 to-earth-green-600'
                },
                {
                  category: 'Autres documents',
                  items: [
                    '4 photos d\'identité récentes',
                    'RIB pour les prélèvements (optionnel)',
                    'Autorisation de sortie du territoire (si applicable)',
                    'Tout document spécifique à la situation',
                  ],
                  color: 'from-purple-500 to-purple-600'
                },
              ].map((doc, index) => (
                <div key={index} className="card hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${doc.color} flex items-center justify-center mr-3`}>
                      <FileText className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-night-blue-900">{doc.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {doc.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-gray-800">
                <strong className="text-blue-700">Note :</strong> Tous les documents doivent être fournis 
                en copies certifiées conformes. Les originaux pourront être demandés lors de l'entretien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact pour inscription */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-night-blue-900 mb-4">
                Besoin <span className="gold-text">d'aide ?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Notre équipe est à votre disposition pour vous accompagner
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <a 
                href={`tel:${SCHOOL_INFO.phone}`}
                className="card hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night-blue-900">Appelez-nous</h3>
                    <p className="text-gray-600 text-sm">Lundi - Vendredi, 9h - 17h</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gold-600">{SCHOOL_INFO.phone}</p>
              </a>

              <a 
                href={`mailto:${SCHOOL_INFO.email}`}
                className="card hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-earth-green-500 to-earth-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night-blue-900">Écrivez-nous</h3>
                    <p className="text-gray-600 text-sm">Réponse sous 24-48h</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-earth-green-600 break-all">{SCHOOL_INFO.email}</p>
              </a>
            </div>

            <div className="mt-8 card bg-gradient-to-br from-gold-50 to-white border-2 border-gold-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-night-blue-900 mb-2">
                    Prenez rendez-vous pour visiter l'école
                  </h3>
                  <p className="text-gray-700 mb-4">
                    N'hésitez pas à appeler pour venir rencontrer la directrice et visiter l'établissement. 
                    Nous serons ravis de vous accueillir et de répondre à toutes vos questions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="btn-primary">
                      Prendre rendez-vous
                    </a>
                    <a href="/contact" className="btn-secondary">
                      Formulaire de contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-night-blue-900 mb-4">
                Questions <span className="gold-text">fréquentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'Quand commencent les inscriptions ?',
                  answer: 'Les inscriptions ont débuté le lundi 7 avril 2025 via le portail SCAC. Nous conseillons de s\'inscrire rapidement car les places sont limitées.'
                },
                {
                  question: 'Mon enfant peut-il être accepté en cours d\'année ?',
                  answer: 'Les inscriptions en cours d\'année sont possibles sous réserve de places disponibles. Contactez-nous pour connaître les disponibilités.'
                },
                {
                  question: 'Acceptez-vous les enfants de toutes nationalités ?',
                  answer: 'Oui, nous accueillons des élèves de toutes nationalités. Notre école est ouverte à la diversité culturelle et compte actuellement plus de 10 nationalités différentes.'
                },
                {
                  question: 'Proposez-vous des facilités de paiement ?',
                  answer: 'Oui, les frais de scolarité sont répartis en 3 tranches (septembre, janvier et avril) pour faciliter le paiement des familles.'
                },
                {
                  question: 'Faut-il acheter les fournitures scolaires ?',
                  answer: 'Non ! Toutes les fournitures scolaires sont fournies par l\'école, de la TPS au CM2. Vous devez uniquement prévoir un cartable, une boîte à goûter et une gourde.'
                },
                {
                  question: 'Y a-t-il un service de cantine ?',
                  answer: 'Oui, nous proposons un service de cantine de 13h à 14h avec des repas équilibrés et adaptés aux enfants.'
                },
              ].map((faq, index) => (
                <div key={index} className="card hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-bold text-night-blue-900 mb-2 flex items-start">
                    <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                      ?
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 ml-9 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inscriptions;