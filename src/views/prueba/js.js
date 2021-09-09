class humano{
    constructor(genero,nombre,edad,colorFav){
            this.genero=genero;
            this.edad=edad;
            this.colorFav=colorFav;
            this.nombre=nombre;
            this.info=`El humano es un/una ${genero}, se llama ${nombre} tiene una edad de ${edad}, y su color favorito es ${colorFav} `
    }

    nuevaInfo(){
        console.log(this.info);
    }
}

let persona = new humano("hombre","Lucio",34,"azul")

persona.nuevaInfo();