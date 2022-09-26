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