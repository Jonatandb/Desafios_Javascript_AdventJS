/*
https://adventjs.dev/challenges/03

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅
"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/

function isValid(letter) {
  const regex = /\([\wñáéíóú\s ]+\).+/gi
  return regex.test(letter)
}

console.clear()

let letter = 'bici coche (balón) bici coche peluche'
console.log(letter, isValid(letter) ? '✅' : '❌')

letter = '(muñeca) consola bici'
console.log(letter, isValid(letter) ? '✅' : '❌')

letter = 'bici coche (balón bici coche'
console.log(letter, isValid(letter) ? '✅' : '❌')

letter = 'peluche (bici [coche) bici coche balón'
console.log(letter, isValid(letter) ? '✅' : '❌')

letter = '(peluche {) bici'
console.log(letter, isValid(letter) ? '✅' : '❌')

letter = '() bici'
console.log(letter, isValid(letter) ? '✅' : '❌')
