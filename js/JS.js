function suma (x1,x2){
    return(x1+x2);
}

function resta (x1,x2){
    return(x1-x2);
}

function multiplicar (x1,x2){
    return(x1*x2);
}

function dividir (x1,x2){
    if(x2==0){console.log("No se puede dividir por 0");
}
    return(x1/x2);
}

exports.suma2=suma; 