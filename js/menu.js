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

