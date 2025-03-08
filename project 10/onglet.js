function openTab(x){
  let contents = document.querySelectorAll(".tab-content");
  let btns = document.querySelectorAll('button');
  for (let i = 0; i < contents.length; i++){
    contents[i].style.display = "none";
    btns[i].classList.remove("active")
  }

    btns[x].classList.add("active")
    contents[x].style.display = "block";

  console.log(contents);
}
