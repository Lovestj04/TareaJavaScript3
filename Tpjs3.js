/*Manipulación de un array

Tome el siguiente array:

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

Manipule su array utilizando varios métodos, como pop(), push(), shift() y unshift(), y transfórmelo en lo siguiente:

["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

El método unshift() agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.

sugerencia

• Eliminar el primer elemento y el último elemento.
• Agregue FIRST al inicio de la matriz.
• Asigne hola mundo al valor del cuarto elemento.
• Asigne MEDIO al tercer valor de índice.
• Agregue ÚLTIMO a la última posición en la matriz.
• Enviarlo a la consola.*/

//• Eliminar el primer elemento y el último elemento.

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];
theList.pop()
theList.shift()
theList.unshift("FIRST") //• Agregue FIRST al inicio de la matriz.
theList[3] = "Hola Ninjas!" //• Asigne hola mundo al valor del cuarto elemento.
theList.splice(2, 1 , "MEDIO")  //• Asigne MEDIO al tercer valor de índice.
theList.splice(4, 2)
theList.push("LAST") //• Agregue ÚLTIMO a la última posición en la matriz.

console.log(theList);