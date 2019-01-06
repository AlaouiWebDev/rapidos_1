//Bouton
let btn = document.getElementById('btn')
btn.addEventListener("click", function() {
  container1.style.display = "none";
  container2.style.display = "block";

  document.body.addEventListener("keydown", function(e) { //ajoute écouteur évènement
    if (etatdujeu == true) {
      if (e.key.toUpperCase() == random) // condition qui verifie si la touche préssé correspond à la lettre
      //aléatoire et si le jeu est en cours
      {
        random = alphabet[getRandomInt(alphabet.length)] //génère nvl lettre aléatoire
        lettre.textContent = random //afiche la nvl lettre aléatoire
        width = 100 //rénialise le tps quand tu trouve la lettre

        score++ //incrémentation du score
        scorefinal.textContent = "Score " + score //affichage du score
        if (score == 10) { // si score = 10
          clearInterval(id) // arrête l'interval
          id = setInterval(frame, 40) // la relance en aug la vitesse
        } else if (score == 20) {
          clearInterval(id)
          id = setInterval(frame, 30)

        } else if (score == 30) {
          clearInterval(id)
          id = setInterval(frame, 20)
        } else if (score == 40) {
          clearInterval(id)
          id = setInterval(frame, 10)
        }


      } else { // si faux
        nbcoeurvie-- // -- = -1
        nbcoeurplein[nbcoeurvie].style.display = "none" // coeur plein à l'interface
        nbcoeurvide[nbcoeurvie].style.display = "inline" // coeur vide à l'interface

        if (nbcoeurvie == 0) { // condition quand plus de coeur
          etatdujeu = false
          lettre.textContent = 'GAME OVER'
          clearInterval(id)
        } // arrête le timer
      }

    }
  })

  id = setInterval(frame, 50); // lance la barre de progression
})


function frame() { // fonction qui reduit ma barre de progression
  if (width <= 0) { // si le tps est écoulé
    clearInterval(id); // arrête mon timer
    lettre.textContent = 'GAME OVER'
    etatdujeu = false
  } else { // sie tps pas écoulé
    width--; // on réduit la barre
    elem.style.width = width + '%'; // visible à l'écran : elem nm de ma barre / je fais appel au css avc style / % de ma barre
  }
}
let nbcoeurvie = 3;
let nbcoeurplein = document.getElementsByClassName('heartFull');
let nbcoeurvide = document.getElementsByClassName('heartEmpty');
var elem = document.getElementById("myBar");
var width = 100;
let id; // variable qui va stocker les id de setInterval qui va me permettre à clearInterval d'arrêter le setInterval

let etatdujeu = true //jeu actifs

let time = 6; // initialise le tps restant
let timeleft = document.getElementById('timeleft') //création de la variable qui stock la balise qui affiche le tps
let timemax = 6; // tps max dont je dispose à chaque lettre
let score = 0 //initialisation du score
let scorefinal = document.getElementById('scorefinal') //stockage de la baslise


//Ecran 1
let container1 = document.getElementById('container1')

//Ecran 2
let container2 = document.getElementById('container2')

//Création tableau lettre
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
let lettre = document.getElementById('lettre')
//Déclaration de fonction renvoi un nb entre 0 et un max aléatoirement
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//Générer et stocker la lettre aléatoire
let random = alphabet[getRandomInt(alphabet.length)]
//Affichage
lettre.textContent = random
