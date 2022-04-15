/*
https://adventjs.dev/challenges/04

¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:
__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  const arrayImpares = Array.from(Array(200).keys()).filter(x => x % 2 !== 0)
  const asteriscosUltimaFila = arrayImpares[height - 1]
  let arbol = ''
  for (let fila = 0; fila < height; fila++) {
    const asteriscosFilaActual = arrayImpares[fila]
    const guiones = asteriscosUltimaFila - asteriscosFilaActual
    if (guiones) {
      arbol += '_'.repeat(guiones / 2) + '*'.repeat(asteriscosFilaActual) + '_'.repeat(guiones / 2)
    } else {
      arbol += '*'.repeat(asteriscosFilaActual)
    }
    arbol += '\n'
  }
  for (let base = 0; base < 2; base++) {
    arbol += '_'.repeat(asteriscosUltimaFila / 2) + '#' + '_'.repeat(asteriscosUltimaFila / 2)
    base === 0 ? (arbol += '\n') : ''
  }
  return arbol
}
console.clear()
console.log('createXmasTree(5):')
console.log(createXmasTree(5))
