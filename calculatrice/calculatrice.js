// const btn = parseInt(document.querySelectorAll('button'));
// const rslt = document.getElementsByClassName('result');
// let tipe = document.getElementById('type');
// const validSelections = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// console.log(btn);
// console.log(rslt);
// console.log(tipe);
// console.log(typeof validSelections)

// let userSelect;

// btn.forEach(btn => btn.addEventListener('click', (e) => {
//   // alert(btn.id);
//   userSelect = e.target.innerHTML;
//   claculate();
//   alert(userSelect);
// }))

// function claculate() {
//   if (validSelections.includes(userSelect)) {
//     tipe.innerHTML = userSelect;
//   }
// }

const ecran = document.getElementById("ecran"); // Récupère l'écran d'affichage
const boutons = document.querySelectorAll("button"); // Récupère tous les boutons

boutons.forEach(bouton => {
  bouton.addEventListener("click", () => { // Écoute le clic sur chaque bouton
    const valeur = bouton.textContent; // Récupère la valeur du bouton

    switch (valeur) {
      case "=":
        try {
          ecran.value = eval(ecran.value); // Calcule le résultat
        } catch (error) {
          ecran.value = "Erreur"; // Gère les erreurs de calcul
        }
        break;
      case "C":
        ecran.value = ""; // Efface l'écran
        break;
      default:
        ecran.value += valeur; // Ajoute la valeur à l'écran
    }
  });
});

