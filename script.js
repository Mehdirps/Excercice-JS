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

// Bonne facon d'afficher les multiples
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

// DIAPORAMA
// variable globales
// compteur qui permet de savoir sur quelle image nous sommes
let compteur = 0;
// 
let timer, elements, slides;

window.onload = () => {
    //  recuperer le diapo
    const diapo = document.querySelector(".diapo");

    elements = document.querySelector(".elements");

    slides = Array.from(elements.children)
    
    // on récupère la largeur d'une slide
    slideWidth = diapo.getBoundingClientRect().width;
    // on récupère les flèches
    let next = document.querySelector("#nav-droite");
    let next2 = document.querySelector("#nav-gauche")

    // on gère le click
    next.addEventListener("click", slideNext)
    next2.addEventListener("click",slideNext2)
}

/**
 * Faire défiler le diapo vers la droite
 */
function slideNext(){
    // on incrémente le compteur
    compteur++;
    elements.style.transform = "translateX(-100%)"
}

function slideNext2(){
    // on incrémente le compteur
    compteur++;
    elements.style.transform = "translateX(0%)"
}
