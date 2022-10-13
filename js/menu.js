function mostrarMenu() {
   //Si el checkbox del menu no esta chequeado.
   if (!document.getElementById('menu-bar').checked) {
      // muestro el menu.  
      document.getElementById('seccionmenu').style.transform = "translateX(0%)";
   }else{
      //el menu esta a la vista, lo oculta.  
      document.getElementById('seccionmenu').style.transform = "translateX(-100%)"; 
   }
}

function cargarContenido(url) {
   let contenedor = document.getElementById('principal')

   fetch(url)
   .then(response=> response.text())
   .then(text=> contenedor.innerHTML = text)

}

document.addEventListener('DOMContentLoaded', (event) => {
   cargarContenido('./home.html');
 });

//document.onload(cargarContenido('./home.html'))

function cargarContenidoJS(url) {
   let contenedor = document.getElementById('principal')
   setInnerHTML(contenedor, url);

}

var setInnerHTML = function(elm, html) {
   fetch(html)
   .then(response=> response.text())
   .then(text=> elm.innerHTML = text)
   //elm.innerHTML = html;
   .then(Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes)
         .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
   }));
}

 //$0.innerHTML = HTML;    // does *NOT* run <script> tags in HTML
 //setInnerHTML($0, HTML); // does run <script> tags in HTML
 
