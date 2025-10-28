export const categoriesKeywords = [
   { 
    name: "Culture & Spectacles", 
    keywords: [
      "spectacle", "théâtre", "danse", "humour", "one-man-show",
      "concert", "musique", "orchestre", "chant", "festival", "opéra",
      "culture", "patrimoine", "tradition", "histoire", "commémoration",
      "visite", "performance", "compagnie", "chorale", "violon", "piano", "classique"
    ]
  },
    { 
    name: "Jeux & Expériences immersives", 
    keywords: [
      "escape", "immersif", "aventure", "jeu", "piste", "mission", "rôle", "enquête"
    ]
  },
    { 
    name: "Sport & Bien-être", 
    keywords: [
      "sport", "yoga", "fitness", "marche", "rugby", "course", "kung-fu",
      "wing-tsun", "eskrima", "zumba", "self-défense", "multisport"
    ]
  },
   { 
    name: "Famille & Loisirs", 
    keywords: [
      "famille", "enfants", "parents", "jeunes", "baby", "ados", "atelier",
      "ludique", "brocante", "marché", "vide-grenier", "stands", "exposants", "partager"
    ]
  }

];


export function detectCategory(description,title =" ") {
    const text = (description +" "+title).toLocaleLowerCase();
    for (const category of categoriesKeywords) {
        for (const words of category.keywords) {
            if (text.includes(words.toLocaleLowerCase())){
                return category.name;
            }
}}    return "Autres";
}
