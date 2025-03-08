let addToButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToButton.onclick = function (){
  
  if (inputField.value != "") {
    var paragrap = document.createElement('p')
  };

  paragrap.innerText = inputField.value;
  paragrap.classList.add('p');

  toDoContainer.appendChild(paragrap);

  inputField.value = "";

  paragrap.addEventListener('click', ()  => {
    paragrap.classList.add('pclick');
  })

  paragrap.addEventListener('click', ()  => {
    toDoContainer.removeChild(paragrap);
  })
}
