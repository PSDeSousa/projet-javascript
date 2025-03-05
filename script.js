//let lifePoint = prompt("Combien te reste t'il de points de vie ?");
let recommencer = prompt("Continuer la partie ?");
if (recommencer === "oui"){
    let lifePoint = 100;
    let experience = 0;
} else {
    alert("Let's go !");
}
let combat = prompt("Veux tu combattre ?");
if (combat === "oui"){
    let lifePoint = lifePoint + (math.round(math.random() * 10));
    experience = experience + 10;
    alert("Tu ne gagnera pas d'expérience !");
} else {
    alert("Ton expérience " + experience + "XP");
    alert("Tes points de vie " + lifePoint + "XP");
}
if (lifePoint > 50) {
    alert("Tu attaques avec toute ta puissance");
} else if (lifePoint > 20 && lifePoint <= 50) {
    alert("Tu attaques faiblement");
} else if (lifePoint > 0 && lifePoint <= 20) {
    alert("Tu es trop faible, tu dois fuir !");
} else if (lifePoint <= 0) {
    alert("Désolé, tu es décédé !");
} else {
    //Copyright Antoine !
    alert("entre un nombre de points supérieur ou égal à 0");
}
alert("Ton expérience " + experience + "XP");