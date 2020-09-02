const fs = require ("fs");


fs.writeFile("./texto.txt"," Hola a todos gracias por estar aca ", function (error) {
  if(error){
    console.log(error);
  }
    console.log("Archivo creado");
  
});



















/* const resultado = require("./JS.js");

console.log(resultado.suma2(50,50));

  console.log(suma(2,2))
console.log(resta(20,2))
console.log(multiplicar(5,5))
console.log(dividir(2,2))
console.log(dividir(2,0)) 

git clone https://gitlab.com/daniuf/uade-clase-31.git*/