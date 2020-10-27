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



document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

                            //Buscador de contenido
//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if(inputSearch.value === ""){
        box_search.style.display ="none";
    }
}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display ="none";
}

//Filtrado de Busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

//Elementos a filtrar
for (i=0; i< li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.TextContent || a.innerText;

    if(textValue.toUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";
        box_search.style.display ="block";

        if(inputSearch.value === ""){
            box_search.style.display ="none";
        }   
    else{
       li[i].style.display = "none";
        }
    }    
   }
}

//Codigo con teclas
function presionar_tecla() {
    tecla_esc = event.keyCode;

    if(tecla_esc == 27){
        return ocultar_buscador();
    } 
}
window.onkeydown = presionar_tecla;



































































































/* Carolina Dobler18:39
carolinad@epidata.net
Carolina Dobler18:40
https://www.linkedin.com/in/carolina-dobler/ */