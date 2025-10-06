import React, { useState, useRef } from 'react';
import PageHeader from '../components/common/PageHeader';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SCHOOL_INFO, HORAIRES } from '../utils/constants';
import { EMAILJS_CONFIG } from '../utils/emailConfig';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Envoyer l'email via EmailJS
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );

      setSuccess(true);
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Erreur lors de l\'envoi:', err);
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Contactez-nous" 
        subtitle="Nous sommes à votre écoute"
      />

      {/* Section Informations de contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: MapPin,
                  title: 'Adresse',
                  content: [SCHOOL_INFO.address, SCHOOL_INFO.city],
                  color: 'from-blue-500 to-blue-600',
                  link: 'https://maps.google.com'
                },
                {
                  icon: Phone,
                  title: 'Téléphone',
                  content: [SCHOOL_INFO.phone],
                  color: 'from-gold-500 to-gold-600',
                  link: `tel:${SCHOOL_INFO.phone}`
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: [SCHOOL_INFO.email],
                  color: 'from-earth-green-500 to-earth-green-600',
                  link: `mailto:${SCHOOL_INFO.email}`
                },
                {
                  icon: Clock,
                  title: 'Horaires',
                  content: ['Lun: 9h-13h', 'Mar-Ven: 8h-13h'],
                  color: 'from-purple-500 to-purple-600',
                },
              ].map((info, index) => (
                <div key={index} className="card hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-night-blue-900 mb-3">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gold-600 transition-colors duration-200"
                    >
                      {info.content.map((line, i) => (
                        <div key={i} className="leading-relaxed">{line}</div>
                      ))}
                    </a>
                  ) : (
                    info.content.map((line, i) => (
                      <div key={i} className="text-gray-700 leading-relaxed">{line}</div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire */}
      <section className="py-20 bg-gradient-to-br from-night-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                Envoyez-nous un <span className="gold-text">message</span>
              </h2>
              <p className="text-xl text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <div className="card shadow-2xl">
              {success && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg animate-slide-up">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={24} />
                    <div>
                      <h4 className="font-bold text-green-900">Message envoyé avec succès !</h4>
                      <p className="text-green-700 text-sm">Nous vous répondrons dans les 24-48 heures.</p>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="from_email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Inscription">Inscription</option>
                      <option value="Informations générales">Informations générales</option>
                      <option value="Rendez-vous">Demande de rendez-vous</option>
                      <option value="Pédagogie">Question pédagogique</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2"></label><label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-500 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full btn-primary flex items-center justify-center ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-elegant font-bold text-night-blue-900 mb-4">
                Comment <span className="gold-text">nous trouver ?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Notre école est située dans le quartier des Almadies à Dakar
              </p>
            </div>

            <div className="card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-night-blue-100 to-earth-green-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gold-500 mx-auto mb-4" size={64} />
                  <p className="text-xl font-bold text-night-blue-900 mb-2">{SCHOOL_INFO.address}</p>
                  <p className="text-gray-600 mb-6">{SCHOOL_INFO.city}</p>
                  <a 
                    href="https://maps.google.com/?q=Ecole+Saint-Exupery+Dakar+Almadies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-earth-green-50 to-white">
                <h3 className="text-xl font-bold text-night-blue-900 mb-4">Accès et transport</h3>
                <ul className="space-y-3">
                  {[
                    'Quartier des Almadies, face à l\'Université Internationale',
                    'Accessible en transport en commun : lignes 3, 14, 47, 49, 61',
                    'Parking disponible pour les parents',
                    'À proximité de la plage de N\'gor',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-earth-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ Contact */}
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold mb-4">
                Questions <span className="gold-text">fréquentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'Quel est le meilleur moment pour vous contacter ?',
                  answer: 'Nous sommes disponibles du lundi au vendredi, de 8h à 13h. Le lundi, nous ouvrons à 9h. Vous pouvez également nous envoyer un email à tout moment.'
                },
                {
                  question: 'Puis-je visiter l\'école avant l\'inscription ?',
                  answer: 'Absolument ! Nous encourageons les visites. Appelez-nous au +221 77 795 61 11 pour prendre rendez-vous avec la directrice.'
                },
                {
                  question: 'Combien de temps faut-il pour recevoir une réponse ?',
                  answer: 'Nous nous engageons à répondre à tous les emails dans un délai de 24 à 48 heures ouvrées. Pour les demandes urgentes, privilégiez le téléphone.'
                },
                {
                  question: 'Proposez-vous des rendez-vous en ligne ?',
                  answer: 'Pour le moment, nous privilégions les rendez-vous physiques pour permettre une visite de l\'établissement. Contactez-nous pour planifier votre venue.'
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold gold-text mb-2">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;