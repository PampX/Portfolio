// Traducteur pour les données dynamiques du JSON
// Utilisé pour traduire titles, descriptions, etc. des projets, hobbies, et expériences

const dataTranslations = {
  fr: {
    projects: {
      "conference-ia-2026": {
        title: "Conférence IA — Semaine des Mathématiques",
        tagline: "Collège Jean-Monnet à Yssingeaux — Le cerveau humain vs l'intelligence artificielle",
        description: "Le 20 mars 2026, j'ai animé une conférence au collège Jean-Monnet à Yssingeaux pour clôturer la Semaine des mathématiques, placée sous le signe de l'égalité. Environ 40 personnes (élèves, familles, enseignants) ont participé à une réflexion accessible sur les liens entre le cerveau humain et l'intelligence artificielle. La conférence a retracé l'histoire de l'IA, distingué les différents types et leurs usages, tout en ouvrant des pistes de réflexion sur l'accès, la responsabilité et les biais. Elle s'est conclue par une citation d'Alan Turing : « Est-ce que simuler l'intelligence c'est être intelligent ? »"
      },
      "oceanpiscine": {
        title: "Océanpiscine",
        tagline: "Site interne né d'une blague, devenu une vraie plateforme communautaire",
        description: "Tout a commencé par une blague : beaucoup d'eau s'accumulait, on a fait des montages IA. J'ai créé un petit site pour partager ça avec les collègues. Puis j'ai ajouté un classement Mario Kart, des stats, une roulette de casino. Le site ayant bien plu, j'ai ajouté un backend, une base de données et un système complet d'authentification JWT. En quelques semaines, la plateforme est devenue un vrai mini-réseau interne : casino (roulette, slots, machine infernale, jeu des couleurs), marché entre joueurs (LeBonCoin), système de succès/badges, cagnottes, tickets/bugs, Doodle God, page admin… Le tout avec sa propre monnaie : l'Oke (Ω)."
      }
    },
    hobbies: {
      gaming: {
        title: "Gaming",
        description: "Passion pour les jeux vidéo immersifs et innovants"
      },
      sport: {
        title: "Sport",
        description: "Sportif régulier passionné par la compétition"
      },
      cinema: {
        title: "Cinéma",
        description: "Cinéphile passionné par le storytelling et la direction visuelle"
      },
      automotive: {
        title: "Passion Automobile",
        description: "Passion pour l'ingénierie automobile et les voitures de prestige"
      }
    },
    hobbyLabels: {
      sports: "Sports",
      mainActivity: "Discipline",
      favorites: "Favoris",
      favoriteModels: "Modèles favoris"
    }
  },
  en: {
    projects: {
      "conference-ia-2026": {
        title: "AI Conference — Mathematics Week",
        tagline: "Jean-Monnet College in Yssingeaux — Human brain vs artificial intelligence",
        description: "On March 20, 2026, I hosted a conference at Jean-Monnet College in Yssingeaux to close Mathematics Week, placed under the sign of equality. About 40 people (students, families, teachers) participated in an accessible reflection on the links between the human brain and artificial intelligence. The conference traced the history of AI, distinguished different types and their uses, while opening avenues for thought on access, responsibility and biases. It concluded with a quote from Alan Turing: 'Does simulating intelligence mean being intelligent?'"
      },
      "oceanpiscine": {
        title: "Oceanpiscine",
        tagline: "Internal site born from a joke, became a real community platform",
        description: "It all started as a joke: water was accumulating, so we made AI montages. I created a small site to share it with colleagues. Then I added Mario Kart rankings, stats, a casino roulette. Since the site was popular, I added a backend, database and complete JWT authentication system. Within weeks, the platform became a real internal mini-network: casino (roulette, slots, infernal machine, color game), player market (LeBonCoin), achievement/badge system, pools, tickets/bugs, Doodle God, admin page… All with its own currency: Oke (Ω)."
      }
    },
    hobbies: {
      gaming: {
        title: "Gaming",
        description: "Passion for immersive and innovative video games"
      },
      sport: {
        title: "Sport",
        description: "Regular athlete passionate about competition"
      },
      cinema: {
        title: "Cinema",
        description: "Movie enthusiast passionate about storytelling and visual direction"
      },
      automotive: {
        title: "Automotive Passion",
        description: "Passion for automotive engineering and prestige cars"
      }
    },
    hobbyLabels: {
      sports: "Sports",
      mainActivity: "Discipline",
      favorites: "Favorites",
      favoriteModels: "Favorite models"
    }
  }
};

export function translateData(language, type, key, field) {
  return dataTranslations[language]?.[type]?.[key]?.[field];
}

export function translateHobbyLabel(language, labelKey) {
  return dataTranslations[language]?.hobbyLabels?.[labelKey];
}
