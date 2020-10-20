/* import React from "react";
import Formulario from "./formulario";


const app = () => {
  return ( 
    <div>
       <Formulario></Formulario>
    


    </div>
   );
}
 
export default app; */

/* MENU RESPONSIVE */

document.getElementById("icon-menu").addEventListener("click",mostrar_menu)
function mostrar_menu() {
    document.getElementById("move-content").classList.toggle("move-container-all")
    document.getElementById("show-menu").classList.toggle("show-lateral")
}

/*FIN MENU RESPONSIVE */

