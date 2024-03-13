//alert("Hola este es mi javascript")
//let nombre1="Arturo";
//var nombre2="Rodrigo";
//const nombre3="Daniel";

//console.log(nombre1);
//console.log(nombre2);
//console.log(nombre3);

//let contenidoTitulo="Inicio";
//let titulo = document.querySelector(".prueba");
//titulo.innerHTML =contenidoTitulo;

//let textoTitulo=titulo.innerText;
//console.log(textoTitulo);
let nombre5 ="Idelfonso";
let ciudad5 ="Villa Primavera";
let gusto5 ="leer";

let parrafo = document.querySelector(".parrafo-2");

function cambiarTexto(nombre5, ciudad5, gusto5) {
    let contenido =  `Me llamo ${nombre5}, nací en ${ciudad5}, Piura, Perú, donde actualmente vivo. Me gusta ${gusto5} y leer libros. Me encanta programar para poder ayudar a las personas en sus proyectos.`;

    return contenido;
}
console.log(nombre5);

parrafo.innerText = cambiarTexto(nombre5, ciudad5, gusto5);