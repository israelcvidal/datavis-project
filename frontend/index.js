var context = 'senado'
//initing first option
window.onload = function(){
  document.getElementById("panel").getElementsByClassName("button")[0].classList.add('clicked')
  senateGen(document.getElementById("content"))
}

function changeContent(cont ,callback ,element){
  if (context == cont ) return      
  //Cleaning content tag
  var content = document.getElementById("content")
  content.innerHTML = ''
  //Removing class of clicked
  var buttons = document.getElementById("panel").getElementsByClassName("button")
  for (let i=0; i < buttons.length ; i++){
    buttons[i].classList.remove("clicked")
  }
  //add clicked for the button who deserve
  element.classList.add('clicked')
  callback(content)
}

function senateGen(tag){
  console.log("Introduzir html do senado");

  var html = ""
  
  html +='<div id="senado">'
         + '<div class="card -large">'
         + '</div>'
         + '<div class="card">'
         + '</div>'
         + '<div class="card">'
         + '</div>'
       + '</div>'

  tag.innerHTML = html

  context = 'senado'
}


function chamberGen(tag){
  console.log("Introduzir html da camara")
  var html = ""
  
  html +='<div id="camara">'
         + '<div class="card -large">'
         + '</div>'
         + '<div class="card">'
         + '</div>'
         + '<div class="card">'
         + '</div>'
       + '</div>'

  tag.innerHTML = html

  context = 'camara'
}