let personne = document.querySelector(".walk");
let obstarcle = document.querySelector(".obstarcle");

console.log(personne)

// function sauter() {
//   alert("vous avez choisire de sauter en cliquant sur start")
// }

function sauter() {
  // alert("vous aves clicke sauter");

  if (personne.classList != "animation") {
    personne.classList.add('animation');
  }

  setTimeout(function(){
    personne.classList.remove('animation');
  },500)
  // let obsta = document.querySelector('.button');
  // obsta.addEventListener('click', () => {
  //   obsta.classList.add('.animation ');
  // });

};


let verification = setInterval(function() {
  let perstop = parseInt(window.getComputedStyle(personne).getPropertyValue("top"));
  let obstarcleLeft = parseInt(window.getComputedStyle(obstarcle).getPropertyValue("left"));
  let personneWidth = personne.offsetWidth;
  let obstarcleWidth = obstarcle.offsetWidth;

  // Collision Detection
  if (obstarcleLeft <= (personneWidth - (+27)) && obstarcleLeft >= 0 && perstop >= 105) {
    clearInterval(verification);
    obstarcle.style.animation = "none";
    alert("Game Over! You Lose");
  }
}, 10);

console.log(typeof verification);

//&& obstarcleLeft > 50 




