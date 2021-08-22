// 1) Hacer un codigo que recorra el array numeros y muestre en consola 
//la suma de todos ellos. El resultado deberia ser 24.

// const numeros = [5, 7, 8, 4]

// let suma = 0
// for (let i = 0; i < numeros.length; i++) {
//     suma = suma + numeros[i]    
// }
// console.log(suma)

// 2) Dado el siguiente array de nombres, hacer un codigo que recorra 
// todos los nombres y muestre en consola el mensaje
const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]

let acc = ""
for (let i = 0; i < nombres.length; i++) {
    acc = acc + nombres[i] + "-"
}
console.log(acc)

// Dado el mismo array, hacer un codigo que muestre en consola 
// el siguiente mensaje: <li>Ana</li><li>Elsa</li><li>Ana</li><li>Olaf</li><li>Sven</li><li>Hans</li>

let acc2 = ""
for (let i = 0; i < nombres.length; i++) {
    acc2 = acc2 + `
    <li> ${nombres[i]} </li>
    `    
}
console.log(acc2)

// Dado el mismo array, hacer un codigo que muestre en el HTML de la 
// pagina una lista ordenada con todos los nombres. El "ul" ya deberia 
// estar en el HTML. El resto se debe hacer con javascript.
const lista = document.querySelector(".ejercicio")

let acc3 = ""
for (let i = 0; i < nombres.length; i++) {
    acc3 = acc3 + `
    <li>${nombres[i]}</li>
    `    
}
lista.innerHTML = acc3