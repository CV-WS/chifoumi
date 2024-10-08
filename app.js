const choiceChifoumi = document.querySelector('.choice-main');
const chifoumi = ['pierre', 'feuille', 'ciseau'];

let form = document.querySelector('#form');
let htmlChoiceMain = '';
let h1 = document.querySelector('.title');

    h1.innerText = `Chifoumi` ;
    choiceChifoumi.style.display = 'none';
document.addEventListener('DOMContentLoaded', () => {
    // 1 recupere les infos du formulaire
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const pseudo = e.target['name'].value
        displayTitle(pseudo)
        form.remove();
    })
})

    // 2 afficher le bonjour avec les resultat de l'input
    function displayTitle(pseudo){
        h1.innerText = `Bonjour ${pseudo}, Veuillez choisir votre coup:`;
        choiceChifoumi.style.display = 'flex';
    }

    chifoumi.forEach((element, index) => {
        htmlChoiceMain += `<button class="button-chifoumi" data-id="${index}">${element}</button>`;
    })

    choiceChifoumi.innerHTML = htmlChoiceMain;

const buttons = document.querySelectorAll('.button-chifoumi');
const joueur = buttons['element'];
const robot = buttons[Math.floor(Math.random() * buttons.length)];
let resultat = "";

        resultat.forEach (joueur, robot => {
    buttons.addEventListener('click', function() {

        if (joueur===robot) {
            resultat = "Egalité";
        }
        else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Ciseaux" && robot === "Feuilles") || (joueur === "Feuilles") && (robot === "Pierre")) {
            resultat = "Gagné";
        }
        else {
            resultat = "Perdu";
        }
        resultat.document.querySelector(".resultats").innerHTML = `
                  Joueur = ${joueur} </br>
                  Robot = ${robot} <br/>
                  Résultat = ${resultat}
                `  ;
        console.log(resultat);
    });


})