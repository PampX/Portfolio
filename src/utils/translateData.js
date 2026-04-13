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
      },
      "wawedo": {
        title: "Wawedo",
        tagline: "Communauté pour lancer des projets innovants",
        description: "Wawedo est un projet lancé sur TikTok pour rassembler des personnes motivées et créatives, afin de former une communauté capable de participer à des idées et de lancer des projets innovants."
      },
      "unknown": {
        title: "Unknown",
        tagline: "Jeu vidéo secret en cours de développement",
        description: "Unknown est un projet de jeu vidéo actuellement en cours de développement. Le projet reste volontairement discret pour le moment, mais l'objectif est de construire une expérience originale, avec une forte direction créative et une progression pensée sur le long terme."
      },
      "pinkcc": {
        title: "PINKCC Challenge 2025",
        tagline: "IA & imagerie médicale pour améliorer le diagnostic du cancer de l'ovaire",
        description: "Participation au PINKCC Challenge 2025, un challenge scientifique international visant à mettre l'intelligence artificielle au service de la santé des femmes."
      },
      "pxl": {
        title: "PXL",
        tagline: "Ateliers et parcours pour rendre l'informatique accessible",
        description: "PXL est une initiative pensée pour transmettre le savoir et rendre l'informatique plus accessible à tous, notamment aux jeunes."
      },
      "duaphin": {
        title: "Duaphin",
        tagline: "Collection de modèles 3D interactifs avec système de rareté",
        description: "Duaphin est un projet imaginé pour explorer Three.js et créer une collection de créations 3D interactives."
      },
      "plush-n-peek": {
        title: "Plush 'n' Peek",
        tagline: "Jeu coopératif asymétrique basé sur la communication",
        description: "Plush 'n' Peek est un projet de jeu vidéo coopératif asymétrique nécessitant une communication active entre les joueurs."
      },
      "decblender": {
        title: "DecBlender",
        tagline: "Calendrier de créations 3D jusqu'à Noël",
        description: "DecBlender est un projet créatif similaire à OctoBlender, mené durant le mois de décembre avec des créations 3D quotidiennes."
      },
      "octoblender": {
        title: "OctoBlender",
        tagline: "Challenge créatif 3D quotidien sur Instagram",
        description: "OctoBlender est un challenge créatif mené sur Instagram durant tout le mois d'octobre avec des créations 3D quotidiennes."
      },
      "unity-learn": {
        title: "Unity Learn",
        tagline: "Parcours de formation Unity (Game Dev)",
        description: "Unity Learn est la plateforme officielle de formation Unity dédiée au game development."
      },
      "huggingface-rl-course": {
        title: "Reinforcement Learning",
        tagline: "Apprentissage par renforcement avec Hugging Face",
        description: "Cours officiel de Hugging Face dédié au Reinforcement Learning avec une approche pratique."
      },
      "fun-mooc-ml": {
        title: "Machine Learning",
        tagline: "Fondamentaux du machine learning supervisé",
        description: "Cours FUN MOOC consacré aux bases du machine learning avec Python et scikit-learn."
      },
      "hector-linfluenceur": {
        title: "Hector l'influenceur",
        tagline: "Les aventures d'Hector Junior, alpaga arc-en-ciel",
        description: "Hector l'influenceur est un compte Instagram qui partage les aventures adorables d'un alpaga."
      },
      "grimoire": {
        title: "Grimoire",
        tagline: "Catalogue digital connecté aux outils métiers",
        description: "Grimoire est une application pensée pour aider les entreprises à présenter leurs produits et services."
      },
      "tlc": {
        title: "Trouve le code",
        tagline: "Remake web du jeu de société Decrypto",
        description: "TLC est un remake en version web du jeu de société Decrypto avec les mêmes mécaniques."
      },
      "hexa": {
        title: "Hexa",
        tagline: "Jeu web pour apprendre les couleurs en hexadécimal",
        description: "Hexa est une application web ludique qui permet de s'entraîner à deviner des couleurs en retrouvant leurs codes hexadécimaux."
      },
      "threejs-journey": {
        title: "Three.js Journey",
        tagline: "Formation Three.js / R3F pour créer des expériences 3D sur le web",
        description: "Three.js Journey est la formation de Bruno Simon dédiée à la création d'expériences 3D interactives sur le web."
      },
      "chaud-devant": {
        title: "Chaud Devant",
        tagline: "Overcooked à la première personne, coop et chaos en cuisine",
        description: "Chaud Devant est un jeu vidéo inspiré du concept de Overcooked, mais en vue à la première personne."
      },
      "samaritain": {
        title: "Samaritain",
        tagline: "Réseau social de bonnes actions avec système de récompense",
        description: "Samaritain est une idée d'application visant à encourager les bonnes actions via un système de récompense."
      },
      "formation-blender": {
        title: "Formation Blender",
        tagline: "Formations pour devenir autonome en création 3D",
        description: "Formation Blender que je propose pour accompagner des débutants dans la découverte et la prise en main."
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
        description: "On March 20, 2026, I hosted a conference at Jean-Monnet College in Yssingeaux to close Mathematics Week, placed under the sign of equality. About 40 people (students, families, teachers) participated in an accessible reflection on the links between the human brain and artificial intelligence."
      },
      "oceanpiscine": {
        title: "Oceanpiscine",
        tagline: "Internal site born from a joke, became a real community platform",
        description: "It all started as a joke: water was accumulating, so we made AI montages. I created a small site to share it with colleagues. Then I added Mario Kart rankings, stats, a casino roulette. Since the site was popular, I added a backend, database and complete JWT authentication system."
      },
      "wawedo": {
        title: "Wawedo",
        tagline: "Community to launch innovative projects",
        description: "Wawedo is a project launched on TikTok to bring together motivated and creative people to form a community capable of participating in ideas and launching innovative projects."
      },
      "unknown": {
        title: "Unknown",
        tagline: "Secret video game in development",
        description: "Unknown is a video game project currently in development. The project remains intentionally discreet for now, but the goal is to build an original experience with strong creative direction."
      },
      "pinkcc": {
        title: "PINKCC Challenge 2025",
        tagline: "AI & medical imaging to improve ovarian cancer diagnosis",
        description: "Participation in the PINKCC Challenge 2025, an international scientific challenge to put artificial intelligence at the service of women's health."
      },
      "pxl": {
        title: "PXL",
        tagline: "Workshops and courses to make computing accessible",
        description: "PXL is an initiative designed to share knowledge and make computing more accessible to everyone, especially young people."
      },
      "duaphin": {
        title: "Duaphin",
        tagline: "Collection of interactive 3D models with rarity system",
        description: "Duaphin is a project imagined to explore Three.js and create a collection of interactive 3D creations."
      },
      "plush-n-peek": {
        title: "Plush 'n' Peek",
        tagline: "Asymmetric cooperative game based on communication",
        description: "Plush 'n' Peek is an asymmetric cooperative video game requiring active communication between players."
      },
      "decblender": {
        title: "DecBlender",
        tagline: "3D creations calendar until Christmas",
        description: "DecBlender is a creative project similar to OctoBlender, conducted during December with daily 3D creations."
      },
      "octoblender": {
        title: "OctoBlender",
        tagline: "Daily 3D creative challenge on Instagram",
        description: "OctoBlender is a creative challenge held on Instagram throughout October with daily 3D creations."
      },
      "unity-learn": {
        title: "Unity Learn",
        tagline: "Unity training course (Game Dev)",
        description: "Unity Learn is Unity's official training platform dedicated to game development."
      },
      "huggingface-rl-course": {
        title: "Reinforcement Learning",
        tagline: "Reinforcement learning with Hugging Face",
        description: "Hugging Face's official course dedicated to Reinforcement Learning with a hands-on approach."
      },
      "fun-mooc-ml": {
        title: "Machine Learning",
        tagline: "Fundamentals of supervised machine learning",
        description: "FUN MOOC course dedicated to machine learning basics with Python and scikit-learn."
      },
      "hector-linfluenceur": {
        title: "Hector the Influencer",
        tagline: "Adventures of Hector Junior, a rainbow alpaca",
        description: "Hector the Influencer is an Instagram account that shares the adorable adventures of an alpaca."
      },
      "grimoire": {
        title: "Grimoire",
        tagline: "Digital catalog connected to business tools",
        description: "Grimoire is an application designed to help companies present their products and services."
      },
      "tlc": {
        title: "Find the Code",
        tagline: "Web remake of the Decrypto board game",
        description: "TLC is a web remake of the Decrypto board game with the same mechanics."
      },
      "hexa": {
        title: "Hexa",
        tagline: "Web game to learn hexadecimal colors",
        description: "Hexa is a fun web application that allows you to practice guessing colors by finding their hexadecimal codes."
      },
      "threejs-journey": {
        title: "Three.js Journey",
        tagline: "Three.js / R3F course to create 3D web experiences",
        description: "Three.js Journey is Bruno Simon's course dedicated to creating interactive 3D experiences on the web."
      },
      "chaud-devant": {
        title: "Chaud Devant",
        tagline: "Overcooked in first person, coop and kitchen chaos",
        description: "Chaud Devant is a video game inspired by the Overcooked concept, but in first-person view."
      },
      "samaritain": {
        title: "Samaritain",
        tagline: "Social network of good actions with reward system",
        description: "Samaritain is an app idea designed to encourage good actions through a reward system."
      },
      "formation-blender": {
        title: "Blender Training",
        tagline: "Training to become autonomous in 3D creation",
        description: "Blender training that I offer to help beginners discover and master 3D creation."
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
