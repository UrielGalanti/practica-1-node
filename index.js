//1
// let nombre = "Messi"
// console.log("hola soy " + nombre)
// console.log(`hola soy ${nombre}`)

//2
// import * as matematica from './src/modules/matematica.js'
// console.log(matematica.resta(8, 3))
// console.log(matematica.division(8, 3))
// console.log(matematica.suma(8, 3))
// console.log(matematica.multiplicarPorPi(8))

//3
// import Alumno from './src/modules/alumno.js'
// const usuario1 = new Alumno("Juan", "12345678")
// const usuario2 = new Alumno("Sofia", "87654321")
// console.log(usuario1.username, usuario1.DNI)
// console.log(usuario2.username, usuario2.DNI)

//5
import {parsearUrl} from './src/modules/url.js'
let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"); 
console.log(objeto);