

let btn = document.getElementById("btn");
let btn2 = document.getElementById('btn2');
let insidecontainer = document.querySelector(".inside-container");
let sidebar = document.querySelector(".sidebar");
let contentLoad = document.getElementById('contentload')

let projects = document.querySelectorAll('.project')

btn.onclick = function () {
    if (window.innerWidth <= 430+ "px") {
        insidecontainer.classList.toggle('actives')
    } else {
        insidecontainer.classList.toggle('active')  
    }

}

projects.forEach(function(project){
    project.addEventListener('click', function(){
        let textchange = this.getAttribute('tooltip')
        document.getElementById('change').innerText = textchange;

        let links = this.getAttribute("lien")
        let iframes = document.querySelector('iframe')

        iframes.classList.add('iframe-exit');
        contentLoad.style.opacity ="0"

        iframes.addEventListener('animationend', function(){
            iframes.classList.remove('iframe-exit');
            iframes.src = links;

            iframes.classList.add('iframe-translate');
        }, {once: true});
    });
});


