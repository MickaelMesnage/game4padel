// export type Category = {
//   name: string;
//   questions: Question[];
// };

// export type Question = {
//   id: number;
//   text: string;
//   answers: string[];
// };

// export const categories: Category[] = [
//   {
//     name: "Expérience et Pratique",
//     questions: [
//       {
//         id: 1,
//         text: "Depuis combien de temps pratiques-tu le padel ?",
//         answers: ["Jamais", "Quelques mois", "1 an ou plus"],
//       },
//       {
//         id: 2,
//         text: "Combien de fois par semaine joues-tu au padel ?",
//         answers: [
//           "Moins d'une fois par mois",
//           "1 fois par semaine",
//           "2-3 fois par semaine",
//           "4 fois ou plus",
//         ],
//       },
//       {
//         id: 3,
//         text: "As-tu déjà pris des cours avec un coach ?",
//         answers: ["Oui, régulièrement", "Oui, mais rarement", "Non, jamais"],
//       },
//       {
//         id: 4,
//         text: "As-tu déjà participé à des tournois officiels ?",
//         answers: ["Oui, plusieurs", "Oui, un ou deux", "Non, jamais"],
//       },
//     ],
//   },
//   {
//     name: "Technique Individuelle",
//     questions: [
//       {
//         id: 5,
//         text: "Peux-tu tenir un échange du fond de court sans faire de fautes directes ?",
//         answers: [
//           "Non, je fais souvent des erreurs",
//           "Oui, mais je joue défensivement",
//           "Oui, et je peux accélérer le jeu au bon moment",
//         ],
//       },
//       {
//         id: 6,
//         text: "Es-tu capable de jouer une balle basse en coup droit et revers ?",
//         answers: [
//           "Non, je joue trop haut et subis l’échange",
//           "Oui, mais sans consistance",
//           "Oui, avec contrôle et précision",
//         ],
//       },
//       {
//         id: 7,
//         text: "Peux-tu enchaîner plusieurs volées avec contrôle et sans perdre l’échange ?",
//         answers: [
//           "Non, j’ai du mal à gérer les volées",
//           "Oui, mais avec une volée à la fois",
//           "Oui, et je peux ajuster la puissance et la direction",
//         ],
//       },
//     ],
//   },
//   {
//     name: "Jeu Tactique",
//     questions: [
//       {
//         id: 8,
//         text: "Arrives-tu à adapter ton jeu en fonction de l’adversaire ?",
//         answers: [
//           "Non, je joue toujours de la même façon",
//           "Oui, mais avec des difficultés",
//           "Oui, j’adapte mon jeu en fonction des faiblesses adverses",
//         ],
//       },
//       {
//         id: 9,
//         text: "Sais-tu utiliser les vitres efficacement pour défendre ?",
//         answers: [
//           "Non, je suis perdu avec les rebonds",
//           "Oui, mais je manque de régularité",
//           "Oui, et je peux attaquer après un rebond vitre",
//         ],
//       },
//       {
//         id: 10,
//         text: "Es-tu à l’aise pour monter au filet au bon moment ?",
//         answers: [
//           "Non, je reste souvent au fond",
//           "Oui, mais sans trop de contrôle",
//           "Oui, et je sais quand attaquer ou temporiser",
//         ],
//       },
//     ],
//   },
//   {
//     name: "Condition Physique et Mentale",
//     questions: [
//       {
//         id: 11,
//         text: "As-tu une bonne endurance pour tenir un match de 1h30 à haute intensité ?",
//         answers: [
//           "Non, je fatigue rapidement",
//           "Oui, mais je ralentis en fin de match",
//           "Oui, je reste performant tout au long du match",
//         ],
//       },
//       {
//         id: 12,
//         text: "Es-tu capable de rester concentré et gérer la pression en match ?",
//         answers: [
//           "Non, je perds mes moyens sous pression",
//           "Oui, mais avec des fluctuations",
//           "Oui, je garde mon calme et joue stratégiquement",
//         ],
//       },
//     ],
//   },
// ];

export type Category = {
  name: string;
  questions: Question[];
};

export type Question = {
  text: string;
  answers: string[];
};

export const categories: Category[] = [
  {
    name: "Techniques de base",
    questions: [
      {
        text: "Es-tu capable de renvoyer une balle de manière régulière sans faute ?",
        answers: [
          "Non, je rate souvent",
          "Oui, mais je manque de contrôle",
          "Oui, avec précision et consistance",
        ],
      },
      {
        text: "Peux-tu exécuter un coup droit avec puissance et contrôle ?",
        answers: [
          "Non, je n'arrive pas à bien le frapper",
          "Oui, mais sans précision",
          "Oui, avec effet et placement",
        ],
      },
      {
        text: "Comment est ton revers au padel ?",
        answers: [
          "Faible et incertain",
          "Correct mais améliorable",
          "Solide et précis",
        ],
      },
    ],
  },
  {
    name: "Jeu défensif",
    questions: [
      {
        text: "Sais-tu bien défendre en utilisant les vitres ?",
        answers: [
          "Non, je les évite",
          "Oui, mais avec difficulté",
          "Oui, et je les utilise à mon avantage",
        ],
      },
      {
        text: "Peux-tu récupérer une balle difficile après un rebond sur la vitre arrière ?",
        answers: [
          "Non, je perds souvent le point",
          "Parfois, si j'anticipe bien",
          "Oui, j'en fais une arme défensive",
        ],
      },
    ],
  },
  {
    name: "Jeu offensif et filet",
    questions: [
      {
        text: "Peux-tu réaliser une volée efficace et placée ?",
        answers: [
          "Non, je suis en difficulté au filet",
          "Oui, mais je manque de précision",
          "Oui, et je peux attaquer efficacement",
        ],
      },
      {
        text: "Sais-tu smasher pour conclure un point ?",
        answers: [
          "Non, mon smash est inefficace",
          "Oui, mais il est souvent retourné",
          "Oui, je gagne des points avec",
        ],
      },
      {
        text: "Peux-tu effectuer une bandeja pour garder l’attaque ?",
        answers: [
          "Non, je ne maîtrise pas ce coup",
          "Oui, mais avec un contrôle limité",
          "Oui, et je sais quand l'utiliser",
        ],
      },
    ],
  },
  {
    name: "Stratégie et intelligence de jeu",
    questions: [
      {
        text: "Es-tu capable d’anticiper le coup adverse et bien te placer ?",
        answers: [
          "Non, je réagis toujours en retard",
          "Oui, parfois, mais je manque de régularité",
          "Oui, je lis bien le jeu",
        ],
      },
      {
        text: "Peux-tu adapter ton jeu en fonction des forces et faiblesses de ton adversaire ?",
        answers: [
          "Non, je joue toujours de la même manière",
          "Oui, mais j’ai du mal à ajuster rapidement",
          "Oui, et j’en fais un atout",
        ],
      },
    ],
  },
  {
    name: "Niveau avancé et maîtrise du jeu",
    questions: [
      {
        text: "Peux-tu exécuter un service avec effet (lifté ou coupé) et avec précision ?",
        answers: [
          "Non, je sers juste pour mettre la balle en jeu",
          "Oui, mais il est souvent inefficace",
          "Oui, je sais varier les effets et le placement",
        ],
      },
      {
        text: "Es-tu capable de frapper une volée profonde et agressive ?",
        answers: [
          "Non, je renvoie juste la balle",
          "Oui, mais je manque de puissance et précision",
          "Oui, et je sais choisir la bonne volée",
        ],
      },
      {
        text: "Sais-tu exécuter un smash gagnant qui sort du terrain ?",
        answers: [
          "Non, je ne smashe jamais",
          "Oui, mais je n'arrive pas à sortir la balle",
          "Oui, et je l’utilise efficacement",
        ],
      },
    ],
  },
];

export const allQuestions = categories
  .flatMap((category) =>
    category.questions.map((question) => ({
      ...question,
      category: category.name,
    }))
  )
  .map((question, index) => ({ ...question, index }));
