Math.PI;

const beganegrond =  80
const verdieping = 120

let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = parseInt(prompt("Hoeveel autos wilt u kwijt in de parkeergarage?"));
// Berekenen hier het aantal verdiepingen
let verdiepingen = 1;
gewenste_aantal_autos -= beganegrond;
if (gewenste_aantal_autos > 0) {
    verdiepingen += gewenste_aantal_autos / verdieping;
}


let antwoord = "er moeten" + " " + Math.ceil(verdiepingen) + " " + "verdiepingen komen voor je autos";
document.getElementById("antwoord").innerText = antwoord;

console.log("Om het gewenste aantal autos kwijt te kunnen heb ik" + " " + verdiepingen + " " + "verdiepingen nodig.")
