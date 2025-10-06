export const SCHOOL_INFO = {
  name: 'École Saint-Exupéry de Dakar',
  address: 'Route de N\'gor - Almadies (face Université Internationale)',
  city: 'Dakar, Sénégal',
  phone: '+221 77 795 61 11',
  email: 'ecolesaintexuperydedakar@gmail.com',
  website: 'https://ecolesaintexupery1.wixsite.com/dakar',
};

export const TARIFS_2025_2026 = {
  inscription: 200000,
  scolariteAnnuelle: 2000000,
  tranches: [
    { mois: 'Septembre', montant: 800000 },
    { mois: 'Janvier', montant: 600000 },
    { mois: 'Avril', montant: 600000 },
  ],
};

export const HORAIRES = {
  lundi: { debut: '9h', fin: '13h' },
  mardiVendredi: { debut: '8h', fin: '13h' },
  cantine: { debut: '13h', fin: '14h' },
  periscolaire: { debut: '14h', fin: '15h' },
};

export const CALENDRIER_2025_2026 = [
  {
    titre: 'Rentrée des élèves',
    date: '2025-09-02',
    description: 'Rentrée échelonnée à partir du mardi 2 septembre 2025',
  },
  {
    titre: 'Jour férié (Maouloud)',
    date: '2025-09-05',
    description: 'Vendredi 5 septembre 2025',
  },
  {
    titre: 'Vacances de la Toussaint',
    dateDebut: '2025-10-17',
    dateFin: '2025-11-03',
    description: 'Du vendredi 17 octobre au soir au lundi 3 novembre au matin',
  },
  {
    titre: 'Vacances de Noël',
    dateDebut: '2025-12-19',
    dateFin: '2026-01-05',
    description: 'Du vendredi 19 décembre au soir au lundi 5 janvier au matin',
  },
  {
    titre: 'Vacances de février',
    dateDebut: '2026-02-20',
    dateFin: '2026-03-09',
    description: 'Du vendredi 20 février au soir au lundi 9 mars au matin',
  },
  {
    titre: 'Jour férié (Korité)',
    date: '2026-03-20',
    description: 'Vendredi 20 mars 2026',
  },
  {
    titre: 'Jour férié (lundi de Pâques)',
    date: '2026-04-06',
    description: 'Lundi 6 avril 2026',
  },
  {
    titre: 'Vacances de Pâques',
    dateDebut: '2026-04-17',
    dateFin: '2026-05-04',
    description: 'Du vendredi 17 avril au soir au lundi 4 mai au matin',
  },
  {
    titre: 'Pont de l\'Ascension',
    dateDebut: '2026-05-14',
    dateFin: '2026-05-15',
    description: 'Jeudi et vendredi 14 et 15 mai 2026',
  },
  {
    titre: 'Pont de la Pentecôte et de la Tabaski',
    dateDebut: '2026-05-25',
    dateFin: '2026-05-27',
    description: 'Lundi, mardi et mercredi 25, 26 et 27 mai 2026',
  },
  {
    titre: 'Fin des cours',
    date: '2026-07-07',
    description: 'Mardi 7 juillet 2026 au soir',
  },
];

export const FOURNITURES_INFO = `À l'école Saint-Exupéry, toutes les fournitures scolaires, de la TPS au CM2, sont prises en charge par l'établissement. Du cahier aux manuels, en passant par les crayons et l'ensemble du petit matériel, tout est fourni à chaque élève. Ce choix garantit l'égalité entre tous les enfants et permet de sensibiliser chacun au respect du matériel, en cohérence avec le projet éducatif de l'école.

Seuls un cartable (pas de sacs à dos), une boîte à goûter et une gourde sont demandés aux familles.`;

export const INSCRIPTION_URL = 'https://www.efsenegal-ifs.org/20252026/';

export const NIVEAUX_CLASSES = [
  'TPS (Toute Petite Section)',
  'PS (Petite Section)',
  'MS (Moyenne Section)',
  'GS (Grande Section)',
  'CP (Cours Préparatoire)',
  'CE1 (Cours Élémentaire 1)',
  'CE2 (Cours Élémentaire 2)',
  'CM1 (Cours Moyen 1)',
  'CM2 (Cours Moyen 2)',
];