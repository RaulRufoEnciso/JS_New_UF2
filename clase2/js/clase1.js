function arrays() {
    

    // at() Returns an indexed element of an array
    let numeros = [10, 11, 12, 13, 14]
    let index = 2;
    let numero = numeros.at(index);
    document.write(`<h3>at()</h3>`);
    document.write(`<p>array ${numeros}</p>`);
    document.write(`<p>let numero = numeros.at(index);</p>`);
    document.write(`<p>Este es el numero 2 de la array${numero}</p>`);

    // concat() Joins arrays and returns an array with the joined arrays
    let nenes1 = ["Cecilie", "Lone"];
    let nenes2 = ["Emil", "Tobias", "Linus"];
    let grupo = nenes1.concat(nenes2);
    document.write(`<h3>concat()</h3>`);
    document.write(`<p>Arrays: nenes1 -> ${nenes1} nenes2 -> ${nenes2}</p>`);
    document.write(`<p>let grupo = nenes1.concat(nenes2);</p>`);
    document.write(`<p>Arrays de niños concatenadas ${grupo}</p>`);

    // constructor Returns the function that created the Array object's prototype
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = fruits.constructor;
    document.write(`<h3>constructr</h3>`);
    document.write(`<p>Array: ${fruits}</p>`);
    document.write(`<p>let text = fruits.constructor;</p>`);
    document.write(`<p>Array object's prototype ${text}</p>`);

    // copyWithin() Copies array elements within the array, to and from specified positions
    let coches = ["Audi", "Citroen", "Tesla", "BMW"];
    coches.copyWithin(2, 0);
    document.write(`<h3>copyWithin()</h3>`);
    document.write(`<p>Array: ${coches}</p>`);
    document.write(`<p>coches.copyWithin(2, 0);</p>`);
    document.write(`<p>Coches ${coches}</p>`);

    // entries() Returns a key/value pair Array Iteration Object
    let canciones = ["MyWay", "FlyMeToTheMoon", "PartOfMe", "Levitation"];
    let c = canciones.entries();
    document.write(`<h3>entries()</h3>`);
    document.write(`<p>Array: ${canciones}</p>`);
    document.write(`<p>let c = canciones.entries();</p>`);
    document.write("<p> for (let x of c) { document.write('${x}'); }</p>")
    for (let x of c) {
        document.write(`<p>${x}</p>`); 
    }

    // every() Checks if every element in an array pass a test
    let pesos = [32, 33, 16, 40];

    document.write(`<h3>every()</h3>`);
    document.write(`<p>Array: ${pesos}</p>`);
    document.write('<p>if (pesos.every(checkKg)){</p>');
    document.write('<p>document.write("<p>todos los pesos son mayores que 18<p>");</p>');
    document.write('<p>}else{</p>');
    document.write('<p>document.write("<p>no son todos los pesos mayores a 18<p>")</p>');
    document.write('<p>}</p>');
    document.write('<p>function checkKg(peso) {</p>');
    document.write('<p>return peso > 18;</p>');
    document.write('<p>}</p>');

    if (pesos.every(checkKg)){
        document.write("<p>todos los pesos son mayores que 18<p>");
    }else{
        document.write("<p>no son todos los pesos mayores a 18<p>")
    }
    function checkKg(peso) {
    return peso > 18;
    }

    // fill() Fill the elements in an array with a static value
    let compas = ["Tripys", "Lucho", "PadreDeFamilia", "Rufo"];
    document.write(`<h3>fill()</h3>`);
    document.write(`<p>Array: ${compas}</p>`);
    document.write(`<p>compas.fill("JuanMaa");</p>`);
    document.write(`<p>Antes del Fill: ${compas}</p>`);
    compas.fill("JuanMaa");
    document.write(`<p>Despues del Fill: ${compas}</p>`);
    
    // filter() Creates a new array with every element in an array that pass a test
    let edad = [32, 33, 16, 40];
    let result = edad.filter(checkAdulto);

    document.write(`<h3>filter()</h3>`);
    document.write(`<p>Array=${edad}</p>`);
    document.write(`<p>let result = edad.filter(checkAdulto);</p>`);
    document.write("<p>function checkAdulto(edad) {</p>");
    document.write("<p>return edad >= 18;</p>");
    document.write("<p>}</p>");
    document.write("<p>document.write(`<p>Edades: ${result}</p>`);</p>");

    function checkAdulto(edad) {
      return edad >= 18;
    }
    document.write(`<p>Edades: ${result}</p>`);

    // Array
    let arr = [1, 2, 3, 4, 5];

    // find() Returns the value of the first element in an array that pass a test
    let primerElementoPar = arr.find(numero => numero % 2 === 0);
    document.write(`<h3>find()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let primerElementoPar = arr.find(numero => numero % 2 === 0);</p>`);
    document.write(`<p>${primerElementoPar}</p>`);
    
    // findIndex() Returns the index of the first element in an array that pass a test
    let indicePrimerElementoPar = arr.findIndex(numero => numero % 2 === 0);
    document.write(`<h3>findIndex()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let indicePrimerElementoPar = arr.findIndex(numero => numero % 2 === 0);</p>`);
    document.write(`<p>${indicePrimerElementoPar}</p>`);

    // flat() Concatenates sub-array elements
    let arrayAnidado = [[1, 2], [3, 4]];
    let arrayAplanado = arrayAnidado.flat();
    document.write(`<h3>flat()</h3>`);
    document.write(`<p>Array: ${arrayAnidado}</p>`);
    document.write(`<p>let arrayAplanado = arrayAnidado.flat();</p>`);
    document.write(`<p>${arrayAplanado}</p>`);

    // flatMap() Maps all array elements and creates a new flat array
    let arrayDuplicado = arr.flatMap(numero => [numero, numero]);
    document.write(`<h3>flatMap()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let arrayDuplicado = arr.flatMap(numero => [numero, numero]);</p>`);
    document.write(`<p>${arrayDuplicado}</p>`);

    // forEach() Calls a function for each array element
    document.write(`<h3>forEach()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write("<p>arr.forEach(numero =>  document.write('<p>${numero}</p>'));</p>");
    arr.forEach(numero =>  document.write(`<p>${numero}</p>`));

    // from() Creates an array from an object
    let objetoConvertido = Array.from({ length: 5 }, (_, index) => index + 1);
    document.write(`<h3>from()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let objetoConvertido = Array.from({ length: 5 }, (_, index) => index + 1);</p>`);
    document.write(`<p>${objetoConvertido}</p>` );

    // includes() Check if an array contains the specified element
    let contieneTres = arr.includes(3);
    document.write(`<h3>includes()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let contieneTres = arr.includes(3);</p>`);
    document.write(`<p>${contieneTres}</p>` );

    // indexOf() Search the array for an element and returns its position
    let indiceDeCinco = arr.indexOf(5);
    document.write(`<h3>indexOf()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let indiceDeCinco = arr.indexOf(5);</p>`);
    document.write(`<p>${indiceDeCinco}</p>` );

    // isArray() Checks whether an object is an array
    let esArray = Array.isArray(arr);
    document.write(`<h3>isArray()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let esArray = Array.isArray(arr);</p>`);
    document.write(`<p>${esArray}</p>` );

    // join() Joins all elements of an array into a string
    let arrayComoCadena = arr.join('-');
    document.write(`<h3>join()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let arrayComoCadena = arr.join('-');</p>`);
    document.write(`<p>${arrayComoCadena}</p>`);

    // keys() Returns a Array Iteration Object, containing the keys of the original array
    let keys = Array.from(arr.keys());
    document.write(`<h3>keys()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let keys = Array.from(arr.keys());</p>`);
    document.write(`<p>${keys}</p>`);

    // lastIndexOf() Search the array for an element, starting at the end, and returns its position
    let ultimoIndiceDeDos = arr.lastIndexOf(2);
    document.write(`<h3>lastIndexOf()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let ultimoIndiceDeDos = arr.lastIndexOf(2);</p>`);
    document.write(`<p>${ultimoIndiceDeDos}</p>`);

    // length Sets or returns the number of elements in an array
    let longitudDelArray = arr.length;
    document.write(`<h3>length()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let longitudDelArray = arr.length;</p>`);
    document.write(`<p>${longitudDelArray}</p>`);

    // map() Creates a new array with the result of calling a function for each array element
    let arrayDuplicadoPorDos = arr.map(numero => numero * 2);
    document.write(`<h3>map()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let arrayDuplicadoPorDos = arr.map(numero => numero * 2);</p>`);
    document.write(`<p>${arrayDuplicadoPorDos}</p>`);

    // pop() Removes the last element of an array, and returns that element
    let ultimoElementoEliminado = arr.pop();
    document.write(`<h3>pop()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let ultimoElementoEliminado = arr.pop();</p>`);
    document.write(`<p>${ultimoElementoEliminado}</p>`);

    // prototype Allows you to add properties and methods to an Array object
    document.write(`<h3>prototype()</h3>`);
    document.write(`<p>No se puede demostrar directamente en la función</p>`);
    // prototype (No se puede demostrar directamente en la función)
    
    // push() Adds new elements to the end of an array, and returns the new length
    let nuevoLength = arr.push(10);
    document.write(`<h3>pop()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let nuevoLength = arr.push(10);</p>`);
    document.write(`<p>${nuevoLength}</p>`);

    // reduce() Reduce the values of an array to a single value (going left-to-right)
    let sumaDeElementos = arr.reduce((acumulador, numero) => acumulador + numero, 0);
    document.write(`<h3>reduce()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let sumaDeElementos = arr.reduce((acumulador, numero) => acumulador + numero, 0);</p>`);
    document.write(`<p>${sumaDeElementos}</p>`);

    // reduceRight() Reduce the values of an array to a single value (going right-to-left)
    let restaDeElementosDesdeLaDerecha = arr.reduceRight((acumulador, numero) => acumulador - numero, 0);
    document.write(`<h3>reduceRight()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let restaDeElementosDesdeLaDerecha = arr.reduceRight((acumulador, numero) => acumulador - numero, 0);</p>`);
    document.write(`<p>${restaDeElementosDesdeLaDerecha}</p>`);

    // reverse() Reverses the order of the elements in an array
    let arrayRevertido = arr.reverse();
    document.write(`<h3>reverse()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let arrayRevertido = arr.reverse();</p>`);
    document.write(`<p>${arrayRevertido}</p>`);

    // shift() Removes the first element of an array, and returns that element
    let primerElementoEliminado = arr.shift();
    document.write(`<h3>shift()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let primerElementoEliminado = arr.shift();</p>`);
    document.write(`<p>${primerElementoEliminado}</p>`);

    // slice() Selects a part of an array, and returns the new array
    let subArray = arr.slice(1, 3);
    document.write(`<h3>slice()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let subArray = arr.slice(1, 3);</p>`);
    document.write(`<p>${subArray}</p>`);

    // some() Checks if any of the elements in an array pass a test
    let algunElementoMayorA5 = arr.some(numero => numero > 5);
    document.write(`<h3>some()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let algunElementoMayorA5 = arr.some(numero => numero > 5);</p>`);
    document.write(`<p>${algunElementoMayorA5}</p>`);

    // sort() Sorts the elements of an array
    let arrayOrdenado = arr.sort((a, b) => a - b);
    document.write(`<h3>sort()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let arrayOrdenado = arr.sort((a, b) => a - b);</p>`);
    document.write(`<p>${arrayOrdenado}</p>`);

    // splice() Adds/Removes elements from an array
    let elementosEliminados = arr.splice(1, 2);
    document.write(`<h3>splice()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let elementosEliminados = arr.splice(1, 2);</p>`);
    document.write(`<p>${elementosEliminados}</p>`);

    // toString() Converts an array to a string, and returns the result
    let arrayComoCadena2 = arr.toString();
    document.write(`<h3>toString()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let arrayComoCadena2 = arr.toString();</p>`);
    document.write(`<p>${arrayComoCadena2}</p>`);

    // unshift() Adds new elements to the beginning of an array, and returns the new length
    let nuevoLengthDespuesUnshift = arr.unshift(0);
    document.write(`<h3>unshift()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let nuevoLengthDespuesUnshift = arr.unshift(0);</p>`);
    document.write(`<p>${nuevoLengthDespuesUnshift}</p>`);

    // valueOf() Returns the primitive value of an array
    let valorPrimitivoDelArray = arr.valueOf();
    document.write(`<h3>valueOf()</h3>`);
    document.write(`<p>Array: ${arr}</p>`);
    document.write(`<p>let valorPrimitivoDelArray = arr.valueOf();</p>`);
    document.write(`<p>${valorPrimitivoDelArray}</p>`);
      
}