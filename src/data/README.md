# 📊 Data Structure Documentation

## Overview
Ce dossier contient tous les données du portfolio, structurées en fichiers JSON pour une mise à jour facile.

---

## 📁 Files

### 1. `portfolio.json`
**Contient:** Projets, tags et technologies
- `tags`: Définition des tags disponibles (couleurs, labels)
- `projects`: Liste des projets avec descriptions, médias, liens

**À modifier pour:** Ajouter/modifier un projet

---

### 2. `experiences.json`
**Contient:** Expériences professionnelles, formation et tags technos
- `tags`: Tags des technologies (React, Node, Python, etc.)
- `experiences`: Liste des expériences pro avec dates, descriptions, highlights
- `education`: Formation(s) académique(s)

**Structure d'une expérience:**
```json
{
  "title": "Titre du poste",
  "company": "Nom entreprise",
  "date": "YYYY-MM",
  "endDate": null,  // null = actuellement en cours
  "status": "in_progress|done|paused",
  "location": "Localisation",
  "description": "Description courte (1 ligne)",
  "longDescription": "Description longue (plusieurs lignes)",
  "tags": ["react", "nodejs"],
  "highlights": [
    "Point clé 1",
    "Point clé 2"
  ]
}
```

**À modifier pour:** Ajouter/modifier une expérience pro ou formation

---

### 3. `hobbies.json`
**Contient:** Passions, loisirs, hobbies avec images et achievement majeur
- `hobbies`: 4 catégories (gaming, sport, cinema, automotive)

**Structure d'un hobby:**
```json
{
  "id": "gaming",
  "title": "Gaming",
  "icon": "🎮",
  "description": "Description courte de ta passion",
  "image": "/images/hobbies/gaming.png",
  "achievement": {
    "icon": "🏁",
    "title": "100% Hollow Knight & Silksong",
    "description": "Tous les succès débloqués"
  },
  "favorites": ["Game 1", "Game 2", "Game 3"]
}
```

**À modifier pour:**
- Changer l'achievement majeur
- Mettre à jour les favoris
- Ajouter des images (quand disponibles)

**Structure d'un hobby:**
```json
{
  "id": "gaming",
  "title": "Gaming",
  "icon": "🎮",
  "description": "Description courte",
  "image": "/images/hobbies/gaming.svg",
  
  // Contenu spécifique au hobby
  "favorites": [...],
  "activities": [...],
  
  "achievements": [
    {
      "title": "Badge title",
      "description": "Description du badge",
      "unlocked": true|false,
      "icon": "✓|🔒"
    }
  ]
}
```

**À modifier pour:**
- Ajouter/modifier favoris
- Modifier statut des achievements (unlocked/locked)
- Ajouter nouvelles passions (dupliquer structure)

---

## 🎯 Format des dates

**Format accepté:** `YYYY-MM` (ex: `2025-11`)
- Utilisé pour le tri automatique (plus récent en premier)
- Accepte aussi `YYYY-YYYY` pour les périodes (ex: `2024-2025`)

**Pour endDate:**
- `null` = toujours en cours
- `"YYYY-MM"` = date de fin

---

## 🎨 Couleurs et Icons

### Tags Colors
```json
{
  "react": "#61DAFB",
  "nodejs": "#68A063",
  "python": "#3776AB",
  "ia": "#78F6FF",
  // ...
}
```

### Icons (Emoji ou SVG)
- Hobby icons: Emoji simple (🎮, 🏆, etc.)
- Achievement icons: `✓` (unlocked) ou `🔒` (locked)

---

## 📝 Tips pour mise à jour

### Ajouter une nouvelle expérience:
1. Copier la structure d'une expérience existante
2. Remplir tous les champs
3. Ajouter les `tags` existants (ou créer nouveaux tags)
4. Sauvegarder

### Ajouter un nouveau hobby:
1. Copier la structure d'un hobby existant
2. Modifier `id`, `title`, `icon`, `description`
3. Ajouter `favorites` ou `activities`
4. Définir les `achievements` (unlocked/locked)
5. Sauvegarder

### Débloquer un achievement:
- Changer `"unlocked": false` → `true`
- Optionnellement changer l'icon `"icon": "🔒"` → `"✓"`

---

## ⚡ Notes importantes

- **ID unique:** Chaque expérience/hobby doit avoir un ID unique (kebab-case)
- **Tags:** Utiliser les tags existants, créer des nouveaux si nécessaire
- **Dates:** Format strict `YYYY-MM` pour le tri automatique
- **Colors:** Codes hex valides (#XXXXXX)

---

## 🔧 Validation

Les fichiers JSON doivent être valides (testable sur https://jsonlint.com/)
- Pas de trailing commas
- Guillemets doubles pour les strings
- Objets fermés correctement

