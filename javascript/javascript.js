const lord1 = document.querySelector(".lord1");
const lord2 = document.querySelector(".lord2");
const lord3 = document.querySelector(".lord3");
const characterKeuze = document.querySelector(".characterkeuze");
const gameSection = document.getElementById("gameSection");
const buttonA = document.querySelector(".buttona");
const buttonB = document.querySelector(".buttonb");
const buttonC = document.querySelector(".buttonc");
const buttonF = document.querySelector(".buttonf");
const buttonFis = document.querySelector(".buttonfis");
const gekozenLord = document.getElementById("gekozenLord");
const lordPlaatje = document.getElementById("lordPlaatje");
const aantalPunten = document.getElementById("aantalPunten");
const audioC = document.getElementById("audioc");
const audioD = document.getElementById("audiod");
const audioE = document.getElementById("audioe");
const audioF = document.getElementById("audiof");
const audioFis = document.getElementById("audiofis");
const nootImage = document.getElementById("nootImage");
const foutGeraden = document.querySelector(".foutGeraden");
const probeerOpnieuw = document.querySelector(".probeerOpnieuw")
const einde = document.querySelector(".einde");
let SpelerHealth = 100;
let aantalFouten = 0;                                 /* houd op de site bij hoeveel fout */
let aantalGoed = 0;                                   /* houd op de site bij hoeveel goed */
let welkeVraag = 0;                                   /* houd bij bij welke vraag de site nu is */

const vragenArray = [                                 /* lijst met vragen en antwoorden */ /* Lisette heeft geholpen met de code */
    {
        notenBalk: "images/notenbalkc.png",
        buttonA: "images/nootc.png",
        buttonB: "images/nootd.png",
        buttonC: "images/noote.png",
        correct: "a"
    },
    {
        notenBalk: "images/notenbalkd.png",
        buttonA: "images/nootc.png",
        buttonB: "images/nootd.png",
        buttonC: "images/noote.png",
        correct: "b"
    },
    {
        notenBalk: "images/notenbalke.png",
        buttonA: "images/nootc.png",
        buttonB: "images/nootd.png",
        buttonC: "images/noote.png",
        correct: "c"
    },
    {
        notenBalk: "images/notenbalkf.png",
        buttonA: "images/noote.png",
        buttonB: "images/nootf.png",
        buttonC: "images/nootfis.png",
        correct: "b"
    },
        {
        notenBalk: "images/notenbalkfis.png",
        buttonA: "images/nootc.png",
        buttonB: "images/nootf.png",
        buttonC: "images/nootfis.png",
        correct: "c"
    },
];

/* Character selectie */
function startGame(event) {                                  /* zorgt ervoor dat de classes verwisseld worden */
    characterKeuze.style.display = "none";
    gameSection.style.display = "block";
    gekozenLord.style.display = "block";
    const gekozenImg = event.currentTarget.querySelector("img");     /* zorgt ervoor dat het gekozen plaatje geselecteerd word */
    lordPlaatje.src = gekozenImg.src;
    document.querySelector(".healthbar").style.display = "block";
}

/* health bar */
function updateSpelerHealth(){                                       /*https://youtu.be/UI-Qa2-tY10?si=q0kFiEEIodpMQO3v*/
    let healthBar = document.getElementById("health")
    healthBar.value = SpelerHealth;
}

function toonVraag() {                                          /* zorgt ervoor dat de vragen op het scherm komen, hij haalt de plaatjes uit de array */
    nootImage.src = vragenArray[welkeVraag].notenBalk;          /* welke vraag laat zien bij welke vraag je bent, dus in de array vraag 0 tot 2 */
    buttonA.src = vragenArray[welkeVraag].buttonA;
    buttonB.src = vragenArray[welkeVraag].buttonB;
    buttonC.src = vragenArray[welkeVraag].buttonC;
}
toonVraag();

/* achtergrond kleuren */
function backgroundRood() {                           /*zorgt ervoor dat de achtergrond rood word wanneer je goed raad */
    document.body.style.backgroundColor = "red";
    aantalFouten++;                                         /* telt er +1 bij op */
    probeerOpnieuw.textContent = "Helaas, probeer opnieuw!";
    foutGeraden.textContent = aantalFouten;                 /* telt aantal keer fout geraden */
    SpelerHealth -=10;                                /* haalt 10 score van de healthbar af */                          
    updateSpelerHealth();
    setTimeout(() => {                                /* zorgt ervoor dat de achtergrond na 1 seconden weer naar default veranderd */
        document.body.style.backgroundColor = ""
        probeerOpnieuw.textContent = "Welke noot is dit?";
    }, 1000);
}

function backgroundGroen() {                          /*zorgt ervoor dat de achtergrond groen word wanneer je goed raad */
    document.body.style.backgroundColor = "green";
    aantalGoed++;
    probeerOpnieuw.textContent = "Goed gedaan!";
    aantalPunten.textContent = aantalGoed;
        setTimeout(() => {
        probeerOpnieuw.textContent = "Welke noot is dit?";
        document.body.style.backgroundColor = ""
    }, 1000);
}

function backgroundWin() {
    document.querySelector("#winScreen").style.display = "block";
    gameSection.style.display = "none";
}

function controleerAntwoord(gekozenAntwoord) {
    if (gekozenAntwoord === vragenArray[welkeVraag].correct) {
        backgroundGroen();
        welkeVraag++;

        if (welkeVraag >= vragenArray.length) {
            backgroundWin();
        } else {
            toonVraag();
        }
    } else {
        backgroundRood();
    }
}

buttonA.addEventListener("click", function() {               /* hierdoor kan er op de buttons geklikt worden, Verbindt elke knop met de bijbehorende actie plus audio */
    controleerAntwoord("a")
    if (audioC) audioC.play();                               /*.youtube.com/shorts/2DavN4kfKGE--> <!--https://youtu.be/r2gln-SX9lw?si=BjsseykiQ27Mpje--->*/
});

buttonB.addEventListener("click", function() {
    controleerAntwoord("b")
    if (audioD) audioD.play();
});

buttonC.addEventListener("click", function() {
    controleerAntwoord("c")
    if (audioE) audioE.play();
});

buttonF.addEventListener("click", function() {
    controleerAntwoord("f")
    if (audioF) audioF.play();;
});

buttonFis.addEventListener("click", function() {
    controleerAntwoord("fis")
    if (audioFis) audioFis.play();
});

lord1.addEventListener("click", startGame);             /* zorgt ervoor dat je op de buttons kan klikken en dat er dan iets gebeurd */
lord2.addEventListener("click", startGame);
lord3.addEventListener("click", startGame);