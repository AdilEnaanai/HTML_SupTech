const etudiants = [
 { id: 1, nom: "Amine", filiere: "Info", note: 14, matieres: ["JS", "SQL"] },
 { id: 2, nom: "Sara", filiere: "Data", note: 17, matieres: ["Python", "SQL"] },
 { id: 3, nom: "Youssef", filiere: "Info", note: 9, matieres: ["JS"] },
 { id: 4, nom: "Lina", filiere: "Data", note: 12, matieres: ["Python", "JS"] },
 { id: 5, nom: "Omar", filiere: "Info", note: 16, matieres: ["SQL", "JS"] },
];
//Ex1
filtredEtudiants = etudiants.filter((etudiant) => etudiant.note >= 12);
console.log(filtredEtudiants)

//Ex2
etudiantsChaine= etudiants.map(etudiant=>etudiant.nom+" ("+etudiant.filiere+") "+etudiant.note+"/20")
console.log(etudiantsChaine)