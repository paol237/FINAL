let h, mn, s, ms, t, btn_stop, btn_start, sp, btn_reset;
// const active = document.querySelector(');



// active.addEventListener('click', () => {
//   active.classList.toggle("active")
// })

//fonction pour initialiser les variables quand la page se charge

window.onload = function () {
  sp = document.getElementsByTagName('span');
  btn_start = document.getElementById('Start');
  btn_stop = document.getElementById('Stop');
  btn_reset = document.getElementById('Reset');
  t;
  ms = 0, s = 0, mn = 0, h = 0;
}

console.log(typeof sp);


//mettre en place le compteur

function chrono() {
  ms += 1;

  if (ms == 10) {
    ms = 1;
    s += 1;
  }

  if (s == 60){
    s = 0;
    mn += 1;
  }

  if (mn == 60) {
    mn = 0;
    h += 1;
  }
// insertion des valeurs dans les spans

sp[0].innerHTML = h;
sp[1].innerHTML = mn ;
sp[2].innerHTML = s  ;
sp[3].innerHTML = ms ;
}
//btn start
function start() {
  //execute la fonction chrono
  
  t = setInterval(chrono, 100);
  btn_start.disabled = true;
  btn_start.style.background = "#FF5733"
  btn_stop.style.background = "transparent";
  btn_reset.style.background = "transparent"
  
}

//btn stop
function stop() {
  clearInterval(t); //suprime l'intervale t defini plus haut
  btn_start.disabled = false;
  btn_start.style.background = "transparent"
  btn_stop.style.background = "#FF5733";
  btn_reset.style.background = "transparent"


}

//renitialiser le chrono

function reset() {
  clearInterval(t);
  btn_start.disabled = false;
  ms = 0, s = 0, mn = 0, h = 0;
  btn_stop.style.background = "transparent";
  btn_start.style.background = "transparent"
  btn_reset.style.background = "#FF5733"


  sp[0].innerHTML = 0;
sp[1].innerHTML = 0 ;
sp[2].innerHTML = 0;
sp[3].innerHTML = 0;
}





