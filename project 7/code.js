let button_code_bar = document.getElementById('button_code_bar');
let text = document.getElementById('text');
let box = document.getElementById('box');
let pdf_box = document.getElementById('pdf_box');

console.log(text);

button_code_bar.onclick = function () {
  if (text.value.length > 0) {
    if (text.value.length < 50) { 
      //generer le code-barres
      box.innerHTML = "<svg id='barcode'></svg>";
      JsBarcode("#barcode", text.value);
      box.style.border = '1px solid #999';
      
      //creer un boutton pour telecharger le code bar
      pdf_box.innerHTML = "<button onclick= 'genererPdf()'>Telecharger le code bar</button>";
      //styliseer le boutton
      //voir css
    }else {
      box.style.border = "0";
      box.innerHTML = "<p class = 'error'>le text est trop long! </p>";
      pdf_box.style.display = "none";
    }

  }else{
    box.style.border = "0";
    box.innerHTML = "<p class = 'error'> Remplissez le champ! </p>";
    pdf_box.style.display = "none";
  }
}

function genererPdf(){
var opt = {
  margin:       1,
  filename:     `${text.value}.pdf`,
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: '1' }
};

// New Promise-based usage:
html2pdf().set(box).from(box).save();

// Old monolithic-style usage:
html2pdf(box, opt);
};





