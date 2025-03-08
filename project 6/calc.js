let nb1 = document.querySelector('.nb1');
let nb2 = document.querySelector('.nb2');
let op = document.querySelector('.op');
let Message = document.querySelector('.Message');
let score = document.querySelector('.score');
let link = document.querySelector('.link');
let section = document.querySelector('section');
let sub = document.querySelector('.sub');
let compteur = 0;


random1 = Math.random() * 100 << 0;
random2 = Math.random() * 100 << 0;

nb1.innerHTML = random1;
nb2.innerHTML = random2;

function verification() {
  let res = document.querySelector('.res').value;

  if (random1 + random2 == res) {
    Message.style.backgroundColor = "green";
    Message.style.color = "white";
    Message.style.fontweight = "bold";
    Message.innerHTML = "Correcte";
    Message.classList.add("message")

        random1 = Math.random() * 100 << 0;
        random2 = Math.random() * 100 << 0;

        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        compteur += 1;
    
  } else {
    Message.style.backgroundColor = "red";
    Message.innerHTML = "Vous avez perdu";
    Message.classList.add("message")

    // section.innerHTML = " ";
    score.innerHTML = `<span>${compteur}</span> </br> Score`;
    sub.style.display ="none"
    link.style.display = "block";
    link.style.position = "absolute";
    // link.style.bottom= 300 +"px"
  }
}