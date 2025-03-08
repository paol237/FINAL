async function generate() {
  const long = document.getElementById('longUrl').value;
  const apiurl = 'https://tinyurl.com/api-create.php?url=' + 
    encodeURIComponent(long)
  
  console.log(apiurl)

  try {
    const response = await fetch(apiurl)
    const shortUrl = await response.text()

    if (shortUrl) {
      document.getElementById('shortUrl').innerHTML=shortUrl
    } else {
      throw new ('Erreur')
    }
  } catch (error) {
    console.error("Erreur", error)
    document.getElementById('shortUrl').innerHTML='impossible'
  }
  
}


function copy() {
  const shortUrlElement = document.getElementById('shortUrl')
  const range = document.createRange();
  range.selectNode(shortUrlElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert("Lien copie: " + shortUrlElement.innerText)
}

{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link> */}