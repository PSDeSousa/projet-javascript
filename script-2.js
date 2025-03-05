let sticker = prompt("quelle est la couleur du sticker de l'article  : vert, orange ou rouge ?");
if (sticker === "vert") {
    let reducSupplementaire = 10;
} else if (sticker === "orange") {
    let reducSupplementaire = 20;
} else if (sticker === "rouge") {
    let reducSupplementaire = 30;
} else {
    let reducSupplementaire = 0;
}
let prix = prompt("quel est le prix de l'article ?");
if (prix <= 0 || isNaN(prix) === true) {
    alert("Le prix doit être un nombre supérieur à 0");
} else {
    let reduction = prompt("quel est le taux de réduction appliqué ?");
    if (reduction < 0 || reduction >100 ||  isNaN(reduction) === true) {
        alert("Le taux de réduction doit être un nombre entre 0 et 100");
    } else {
        let prixReduit = (prix - (prix * ((reduction + reducSupplementaire) / 100)));
        alert("Après une réduction de " + reduction + "%, le prix final est de " + prixReduit + " euros.");
    }
}