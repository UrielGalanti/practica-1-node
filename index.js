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

//4
// import fs from 'fs'
// function copiar(archivoOrigen, archivoDestino) {
//     fs.readFile(archivoOrigen, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('Error al leer el archivo:', err);
//             return;
//         }
//         fs.writeFile(archivoDestino, data, (err) => {
//             if (err) {
//                 console.error('Error al escribir el archivo:', err);
//                 return;
//             }

//             console.log('Archivo copiado correctamente');
//         });
//     });
// }
// copiar('./entrada.txt', './salida.txt');

//5
// import descomponerUrl from './src/modules/parsearUrl.js';

// let objeto = descomponerUrl(
//     "http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"
// );

// console.log(objeto);

//7
