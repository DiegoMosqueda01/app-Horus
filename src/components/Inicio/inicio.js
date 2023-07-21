import React from "react";
import Logo from './LogoHorus.png';
import "../paginas/client/home"


function inicio(){
    <LogoHorus className="" src={Logo}/>
    window.addEventListener("load", function() {
        // Espera 3 segundos (3000 milisegundos) y luego oculta la presentación del logo
        setTimeout(function() {
          var logoPresentation = document.querySelector(".logo-presentation");
          logoPresentation.style.display = "none";
        }, 3000);
      });
      
    
}

