const coputerChoice = document.getElementById("computerchoice");
const userChoice = document.getElementById("userchoice");
const result = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button');
let userChoose;
let computerChoose;
let results

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  // alert(e.target.id);
  userChoose = e.target.id;
  userChoice.innerHTML = `<img src="./${userChoose}.jpg">`;
  userChoice.classList.add("style");
  computerChooses();
  verification();
}));

function computerChooses() {
  randome = Math.floor(Math.random() * 3) + 1;

  if (randome === 1) {
    computerChoose = "Pierre"
  }

  if (randome === 2) {
    computerChoose = "Papier"
  }
  if (randome === 3) {
    computerChoose = "Ciseaux"
  }

  coputerChoice.innerHTML = `<img src="./${computerChoose}.jpg">`;
  coputerChoice.classList.add("style");
}

function verification() {
  if (userChoose == computerChoose) {
    results = "egalité!";
    result.style.color = "white";
  }

  if (userChoose == "Pierre" && computerChoose =="Papier") {
    results = "perdue";
    result.style.color = "red";
  }

  if (userChoose == "Papier" && computerChoose =="Ciseaux") {
    results = "perdue";
    result.style.color = "red";
  }

  if (userChoose == "Ciseaux" && computerChoose =="Pierre") {
    results = "perdue";
    result.style.color = "red";
  }
  //joueur gagne

  if (userChoose == "Pierre" && computerChoose =="Ciseaux") {
    results = "gagné";
    result.style.color = "rgb(123, 187, 27)";
  }

  if (userChoose == "Ciseaux" && computerChoose =="Papier") {
    results = "gagné";
    result.style.color = "rgb(123, 187, 27)";
  }

  if (userChoose == "Papier" && computerChoose =="Pierre") {
    results = "gagné";
    result.style.color = "rgb(123, 187, 27)";
  }

  result.innerHTML = `<p>${results}</p>`;
  result.classList.add("resulta");
}