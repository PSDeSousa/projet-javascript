let lifePoint = prompt("Combien te reste t'il de points de vie ?");
let experience = 0;
while(lifePoint > 0){
    let combat = prompt("Veux tu combattre ?");
    if (combat === "oui"){
        if (lifePoint > 50) {
            alert("Tu attaques avec toute ta puissance");
        } else if (lifePoint > 20 && lifePoint <= 50) {
            alert("Tu attaques faiblement");
        } else if (lifePoint > 0 && lifePoint <= 20) {
            alert("Tu es trop faible, tu dois fuir !");
        } else if (lifePoint <= 0) {
            alert("Désolé, tu es décédé !");
        }
        let lifePoint = lifePoint + (math.round(math.random() * 10));
        experience = experience + (math.round(math.random() * 10));
        alert("Bravo : tu as " + experience +" XP !");
    } else {
        alert("Tu ne gagneras pas d'expérience comme ça !");
        alert("Ton expérience : " + experience + "XP");
        alert("Tes points de vie : " + lifePoint + "PV");
    }
}
