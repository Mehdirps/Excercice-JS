// Declarer des nombres
// let nombre1 = 127;
// let nombre2 = 250;
// // Opération de base +,-,+,/
// let nombre = nombre1 + nombre2

// // ecrire dans la console
// console.log(nombre);

// // demander un texte à l'utilisateur
// console.log(prompt("Comment va-tu-bien?"));

// demander un nombre
// let nombres = 0;
// nombres = prompt("choisissez un nombre");
// console.log(nombres)
// if(nombres < 0)
// console.log("Négatif");
// else
// console.log("Positif ou nul");

// afficher les multiples dans la console
// let nb = 1;
// nb = prompt("nombre");
// if (nb != 0) {
//     for (let compteur = 1;
//         (compteur * nb) <= 1000; compteur += 1) {
//         console.log(compteur * nb);
//     }
// }

// afficher les multiples dans la page
// let sect = document.querySelector("section");
// let input = document.querySelector(".nombre");
// let butt = document.querySelector(".calculez");

// result.textContent = "compteur * inp";
// let inp = 1;
// let result = document.querySelector(".resultat")
// if (inp != 0) {
//     for (let compteur = 1;
//         (compteur * inp) <= 1000; compteur += 1) {
//             let baliseP = document.createElement("p")
//             baliseP.textContent = compteur * inp;
//             result.appendChild(baliseP)
//     }
// }
// essaie affiche mutliples
// calculez.addEventListener("input", function () {
//     result.textContent = compteur * calc;

//     let cal = 1;
//     if (calc != 0) {
//         for (let compteur = 1;
//             (compteur * calc) <= 1000; compteur += 1) {
//             let calculez = document.querySelector("#calcul");
//             let result = document.querySelector(".resusltat");

//         }

//     }
// })


// let cal = 1;
// if (calc != 0) {
//     for (let compteur = 1;
//         (compteur * calc) <= 1000; compteur += 1) {
//         let calcul = document.querySelector("input")
//         let valid = document.querySelector("button")
//         let result = document.querySelector("div")


//         valid.addEventListener("onclick", function () {

//         })
//         result.addEventListener("input", function () {

//         })
//     }
// }

// // Bonne facon d'afficher les multiples
// let valid = document.querySelector("button");
// let result = document.querySelector("div")

// valid.addEventListener("click", function () {
//     let nombre = Number(valid.previousElementSibling.value)
//     result.textContent = "";
//     if (nombre != 0) {
//         for (let compteur = 1;
//             (compteur * nombre) <= 1000; compteur += 1) {
//             let baliseP = document.createElement("p")
//             baliseP.textContent = compteur * nombre;
//             result.appendChild(baliseP)
//         }
//     }
// });

// // DIAPORAMA
// // variable globales
// // compteur qui permet de savoir sur quelle image nous sommes
// let compteur = 0;
// // 
// let timer, elements, slides, slideWidth, speed;

// window.onload = () => {
//     //  recuperer le diapo
//     const diapo = document.querySelector(".diapo");
//     // on récupère le data-speed
//     speed = diapo.dataset.speed

//     elements = document.querySelector(".elements");

//     // on clone la premiere image
//     let firstimage = elements.firstElementChild.cloneNode(true);

//     // on injecte le clone a la fin du diapo
//     elements.appendChild(firstimage);


//     slides = Array.from(elements.children)

//     // on récupère la largeur d'une slide
//     slideWidth = diapo.getBoundingClientRect().width;
//     // on récupère les flèches
//     let next = document.querySelector("#nav-droite");
//     let prev = document.querySelector("#nav-gauche");

//     // on gère le click
//     next.addEventListener("click", slideNext)
//     prev.addEventListener("click", slidePrev)

//     // on automatise le défilement
//     timer = setInterval(slideNext, speed);
// }

// /**
//  * Faire défiler le diapo vers la droite
//  */
// function slideNext() {
//     // on incrémente le compteur
//     compteur++;
//     elements.style.transition = "1s linear";

//     let decal = -slideWidth * compteur;
//     elements.style.transform = `translateX(${decal}px)`;

//     // on attend la fin de la transition et on rembobine de facon caché
//     setTimeout(function () {
//         if (compteur >= slides.length - 1) {
//             compteur = 0;
//             elements.style.transition = "unset";
//             elements.style.transform = "translateX(0)";
//         }
//     }, 1000)
// }

// /**
//  * Cette fonction fait défiler vers la gauche
//  */
// function slidePrev() {
//     // On décremente le compteur
//     compteur--;
//     elements.style.transform = "1s linear";

//     if (compteur < 0) {
//         compteur = slides.length - 1;
//         let decal = -slideWidth * compteur;
//         elements.style.transition = "unset";
//         elements.style.transform = `translateX(${decal}px)`;
//         slidePrev(slidePrev, 1);

//     }

//     let decal = -slideWidth * compteur;
//     elements.style.transform = `translateX(${decal}px)`;
// }

// Verification longueur de mdp

// let form = document.querySelector("form")
// let motdepasse = document.querySelector("input");
// let barre = document.querySelector("p");
// motdepasse.length = 0;

// motdepasse.addEventListener("input", function () {

//     if (motdepasse.value.length < 5) {
//         barre.textContent = "Mot de passe faible";
//         barre.style.color = "red";
//     } else if (motdepasse.value.length < 10) {
//         barre.textContent = "Mot de passe moyen";
//         barre.style.color = "orange";


//     } else if (motdepasse.value.length > 10) {
//         barre.textContent = "Mot de passe fort";
//         barre.style.color = "green";
//     }

// })

// CALCULATRICE

// *************Variables globales******************//
// Eléments mémoires et écran
const memoireElt = document.querySelector("#memoire");
const ecranElt = document.querySelector("#ecran");

// On stocke la valeur de l'écran précédent
let precedent = 0;

// On stocke l'affichage
let affichage = "";

// On stocke l'opération
let operation = null;

// On initialise la mémoire
let memoire;

window.onload = () => {
    // On écoute les click sur les touches
    let touches = document.querySelectorAll("span");

    for (let touche of touches) {
        touche.addEventListener("click", gererTouches);
    }
    // Récupérer de la mémoire depuis le stockage local
    memoire = (localStorage.memoire) ? parseFloat(localStorage.memoire) : 0;
    if (memoire != 0) memoireElt.style.display = "initial";


}

// cette fonction réagit au click sur les touches
function gererTouches() {
    let touche = this.innerText;
    /**
     * A vérifier, pas plusieurs point dans l'affichage
     */
    // On vérifie si c'est un chiffre ou .
    if (parseFloat(touche) >= 0 || touche === ".") {
        // On met à jour la valeur d'affichage et on l'affiche sur l'écran
        affichage = (affichage === "") ? touche.toString() : affichage + touche.toString();
        ecranElt.innerText = affichage;
    } else {
        switch (touche) {
            // Touche C réinitialise tout
            case "C":
                precedent = 0;
                affichage = "";
                operation = null
                ecranElt.innerText = 0;
                break;
                // calcules
            case "+":
            case "-":
            case "x":
            case "/":
                // On calcule la valeur resultat de l'etape précédente
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
                // On met à jour l'écran
                ecranElt.innerText = precedent;
                // On stock l'opération
                operation = touche;
                // On réinitialise la variable d'affichage
                affichage = "";
                break;
            case "=":
                // On calcule la valeur resultat de l'etape précédente
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
                // On met à jour l'écran
                ecranElt.innerText = precedent;
                // On stock le resutlat dans  d'affichage
                affichage = precedent;
                // On réinitialise précédent
                precedent = 0;
                break;
                // On gère la mémoire
            case "M+":
                // On stock en additionnant à la valeur déjà en mémoire
                localStorage.memoire = (localStorage.memoire) ? parseFloat(localStorage.memoire) + parseFloat(affichage) : parseFloat(affichage);
                // affiché le M
                memoireElt.style.display = "initial";
                break;
            case "MC":
                // On efface la mémoire
                localStorage.memoire = 0;
                // On efface le M
                memoireElt.style.display = "none";
                break;
            case "MR":
                //  On récupere la valeur stocker
                memoire = (localStorage.memoire) ? parseFloat(localStorage.memoire) : 0;
                affichage = memoire;
                ecranElt.innerText = memoire;
                break;
            
        }
    }
}

/**
 * Affectue le calcul
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {string} operation
 * @returns number
 */
function calculer(nb1, nb2, operation) {
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    if (operation === "+") return nb1 + nb2;
    if (operation === "-") return nb1 - nb2;
    if (operation === "x") return nb1 * nb2;
    if (operation === "/") return nb1 / nb2;
}

// 57.40