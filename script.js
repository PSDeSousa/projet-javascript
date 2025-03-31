const nbCombatTotal=3;
const maxEnergieCombat=10;
const pointEnergieDepart=10;
const pointEntrainement=2;
//1. Entrainement
//- Demander à l’utilisateur le nombre d’entrainements à faire.
let nbEntrainement=prompt("🏋️‍♂️ Combien d'entrainements souhaitez vous faire ?");
//- Initialiser le nombre de points d’énergie.
let pointEnergie=pointEnergieDepart;
//- Faire valider par l’utilisateur chaque entrainement qu’il aura fait.
for (let i = 1; i <= nbEntrainement; i++){
    alert("💪 Bravo c'est l'entrainement n° " + i + " du héro");
    pointEnergie = pointEnergie + pointEntrainement;
}
//- A la fin du nombre d’entrainements : afficher que l’entrainement et fini ainsi que les points d’énergie gagnés.
alert("✅ L'entrainement est terminé");
//1. Combats
//- Initialiser le nombre de combats (3) à terminer.
let nbCombat = nbCombatTotal;
let choix = "Paschoix";
//- Annoncer que le combat commence.
alert("⚔️ Le combat commence !!");
//- à chaque combat on décrémente le nombre de combats restants.
//- à chaque combat on diminue l’énergie restante du héro.
//- lister après chaque combat combien il en reste à faire et l’annoncer ainsi que l’énergie restante.
while ((pointEnergie > 0) && (nbCombat > 0)){
    choix = "Paschoix";
    while ((choix !== "a") && (choix !== "f")){
        choix = prompt("🔥 Un ennemie est devant toi ! Il te reste " + pointEnergie + " points d'énergie. Que fais tu ? (attaque : a / fuite : f)");
    }
    if (choix === "f"){
        alert("🏃‍♂️ Le héro prend la fuite !");
        break;
    } else if (choix === "a"){
        alert("⚔️ Le héro attaque un ennemie et il a " + pointEnergie + " points d'énergie");
        nbCombat--;
        pointEnergie = pointEnergie - Math.round((Math.random() * maxEnergieCombat));
        if (pointEnergie>0){
            alert("⚠️ Après l'attaque de l'Ennemie, il reste " + nbCombat + " combats à faire et le héro a encore " + pointEnergie + " points d'énergie");
        }
    }
}
//- quand il n’y a plus de combat à faire, on affiche que les ennemis sont vaincus.
if (choix === "f"){
    alert("🛑 Fin du combat : la quète est inachevée mais le héro a survécu");
} else if (pointEnergie <= 0){
    alert("Le héro est mort")
} else {
    alert("🎉  Le héro a vaincu tous ses ennemis");
    //1. Quête des trésors 
    //2. annoncer que le héro ouvre le coffre aux trésors
    alert("🎁 Le héro a trouvé le coffre aux trésors")
    //- enregistrer les différents trésors à gagner
    let tresors = ["Épée légendaire", "Potion magique", "Bouclier en or"];
    //- annoncer le trésor gagné à chaque trésor
    let n=1;
    let butin = "Le trésor est composé de : "
    tresors.forEach(function(objet){
        butin = butin + (" " + n + ". " + objet);
        n++;
    })
    alert("✨  " + butin);
    let rep = 0;
    while ((rep > 3) || (rep < 1) || (isNaN(rep) === true)){
        rep = prompt("quel trésor veux-tu prendre ? (1, 2 ou 3) ?");
        if ((rep > 3) || (rep < 1) || (isNaN(rep) === true)) {
            alert("Choisi un nombre entre 1 et 3 !");
        } else {
            alert("🎊 Tu as pris : " + tresors[rep - 1]);
        }
    }
//- quand tous les trésors sont gagnés, afficher que l’aventure est terminée.
    alert("🏆 L'aventure du héros est terminée !");

}