// funcion que ejecutara todas las opciones de una array
function main() {
    coloresArray();
}

function menorMarron(color) {
    return color<"marron";
}
function coloresArray(){
    let array = new Array("verde", "rojo", "amarillo", "azul", "negro", "blaco");
    
    // son todos los colores menores a marron ?
    document.write("<h1>Son todos los colores menores a marron ?</h1>");

    if (array.every(menorMarron)){
        document.write("<p>todos los colores son menores que marron<p>");
    }else{
        document.write("<p>no son todos los colores menores a marron<p>")
    }

    // Decir los colores que son menores a marron
    document.write("<h1>Colores menores a marron: </h1>");
    for (let i = 0; i < array.length; i++) {
        if (array[i]<"marron") {
            document.write(`<p>${array[i]}</p>`);
        }
    }

    // Devolver los dos ultimos valores de la array
    let ultimosValor = array.slice(4);
    document.write("<h1>Ultimos dos valores: </h1>");
    document.write(`<p>${ultimosValor}</p>`);

    // Añade el turquesa
    array.push("turquesa");
    document.write("<h1>Añadimos el turquesa a la array: </h1>");

    document.write(`<p>${array}</p>`);

    // Elimina el verde
    let palabraEliminar = "verde";
    let indice = array.indexOf(palabraEliminar);

    if(indice != -1){
        array.splice(indice, 1);
    }
    document.write("<h1>Eliminar el color verde: </h1>");
    document.write(`<p>${array[i]}</p>`);
}