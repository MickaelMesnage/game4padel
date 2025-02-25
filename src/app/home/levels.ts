export interface Level {
  level: number;
  title: string;
  criteria: string[];
  color: string;
  competition: string[];
}

export const levels: Level[] = [
  {
    level: 1,
    title: "DÉBUTANT",
    criteria: ["Je commence à jouer", "J’apprends les coups de base"],
    color: "bg-emerald-50 dark:bg-emerald-950",
    competition: [],
  },
  {
    level: 2,
    title: "PERFECTIONNEMENT",
    criteria: [
      "Je joue les coups de base",
      "Je joue lentement des échanges courts",
      "Je commence à volleyer",
    ],
    color: "bg-teal-50 dark:bg-teal-950", // couleur personnalisable
    competition: [],
  },
  {
    level: 3,
    title: "ÉLÉMENTAIRE",
    criteria: [
      "Je joue en loisir",
      "Je sais servir et je joue des matches avec échanges en essayant de garder la balle en jeu",
    ],
    color: "bg-blue-50 dark:bg-blue-950", // couleur personnalisable
    competition: [],
  },
  {
    level: 4,
    title: "INTERMÉDIAIRE",
    criteria: [
      "Je joue des matches avec de longs échanges et montées-descentes répétées au filet",
      "Je monte au filet au service et après un lob",
      "Je redescends en défense sur lob adverse pour renvoyer la balle",
      "Je joue la balle après rebond sur la vitre",
      "Je maîtrise le placement, notamment en fonction de mon partenaire, que j’accompagne au filet ou en recul au fond de court",
    ],
    color: "bg-yellow-50 dark:bg-yellow-950", // couleur personnalisable
    competition: [
      "Matches gagnés en P25 et P100 avec classement en fin de tableau de P100",
      "Moyenne de points par tournoi joué : de 5 à 25 points",
      "Joueurs hors compétition : niveau moyen égal au niveau 4",
    ],
  },
  {
    level: 5,
    title: "CONFIRMÉ",
    criteria: [
      "Je maîtrise mon jeu, avec service-volée, repli sur les lobs, remontée en contre-attaque, coups avec effets, retours de service en lob et dans les pieds, et placement en phase avec mon partenaire",
      "Je monte toujours au filet après un lob",
      "Je finis des points à la volée et en smash",
      "Je joue avec les vitres en défense, et je remets la balle en jeu sur 360 et doubles vitres",
    ],
    color: "bg-orange-50 dark:bg-orange-950", // couleur personnalisable
    competition: [
      "Joueuse confirmée : top 1.500 française (jusqu’à 900e)",
      "Joueur confirmé : top 10.000 français (jusqu’à 6.000e)",
      "P100 : classement en milieu de tableau, avec 50% de victoires",
      "P250 : classement en fin de tableau",
      "Si - de 12 tournois joués = moyenne points/tournoi : 25 à 50 pts",
      "Joueurs hors compétition : niveau moyen égal au niveau 5",
    ],
  },
  {
    level: 6,
    title: "AVANCÉ",
    criteria: [
      "Je maîtrise le jeu rapide et les effets, au service ou dans le jeu",
      "Je varie les zones et vitesses de mes volées",
      "Je défends les doubles vitres",
      "Je maîtrise parfaitement le 360",
      "Je contre-attaque les smashs de l’adversaire",
    ],
    color: "bg-red-50 dark:bg-red-950", // couleur personnalisable
    competition: [
      "Joueuse avancée : top 900 française (jusqu’à 450e)",
      "Joueur avancé : top 6.000 français (jusqu’à 3.000e)",
      "P100 : tournoi(s) remporté(s), top 4 régulier, en étant tête de série",
      "P250 : classement en milieu de tableau, avec 50% de victoires",
      "P500 : classement en fin de tableau",
      "Si - de 12 tournois joués = moyenne points/tournoi : 50 pts et +",
      "Joueurs hors compétition : niveau moyen égal au niveau 6",
    ],
  },
  {
    level: 7,
    title: "AVANCÉ +",
    criteria: [
      "Je maîtrise tous les aspects du jeu et tactiques du padel",
      "J’utilise un jeu avec des effets appuyés et bien maîtrisés, notamment la bandeja et la vibora",
      "Je termine les points par des coups gagnants face à une défense solide (même niveau)",
      "Je maîtrise parfaitement les doubles vitres et j’utilise les vitres en contre-attaque",
    ],
    color: "bg-purple-50 dark:bg-purple-950", // couleur personnalisable
    competition: [
      "Joueuse avancée + : top 450 française (jusqu’à 225e)",
      "Joueur avancé + : top 3.000 français (jusqu’à 1.500e)",
      "P250 : 1ère partie de tableau, en étant parfois tête de série",
      "P500 : matches gagnés, classement en fin ou milieu de tableau",
      "Si - de 12 tournois joués = moyenne points/tournoi : 100 pts et +",
      "Joueurs hors compétition : niveau moyen égal au niveau 7",
    ],
  },
  {
    level: 8,
    title: "EXPERT",
    criteria: [],
    color: "bg-indigo-50 dark:bg-indigo-950", // couleur personnalisable
    competition: [
      "Joueuse experte : top 225 française (jusqu’à 75e)",
      "Joueur expert : top 1.500 français (jusqu’à 500e)",
    ],
  },
  {
    level: 9,
    title: "EXPERT +",
    criteria: [],
    color: "bg-pink-50 dark:bg-pink-950", // couleur personnalisable
    competition: [
      "Joueuse experte + : top 75 français (jusqu’à 30e)",
      "Joueur expert + : top 500 français (jusqu’à 200e)",
    ],
  },
  {
    level: 10,
    title: "ÉLITE",
    criteria: [],
    color: "bg-gray-50 dark:bg-gray-950", // couleur personnalisable
    competition: [
      "Joueuse élite : top 30 français",
      "Joueur élite : top 200 français",
    ],
  },
];
