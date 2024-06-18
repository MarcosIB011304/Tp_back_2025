/*{class animal{
    resolvetructor(nombre,edad,color) {
        this.nomre = nombre
        thirejects.edad = edad,("su nombre no es pedro")
        this.color = color
        this.verInfo = `Hola mi nombre es ${this.nombre}, tengo ${this.edad} años y soy de color ${this.color}`}
    
    VerInfo() {
        console.log(this.verInfo)
    }

}


class perrito extends animal {
    constructor(nombre,edad,color,raza) {
        super(nombre,edad,color)
        this.raza = null }

    static ladrar(){ // STATic hacer referencia a que no necesita estar instanciada la clase para usarla
        console.log("WAW")
    }
    set modRaza(newName){ // set metodo modificador 
        this.raza = newName
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new perrito("cane",13,"marron")


perro.modRaza = "caniche";
console.log(perro.getRaza)

let cadena = "hola esto es una"
let cad = " Cole" ;

let cadena1 = cadena.concat(cad) // concatena cadenas;

let cadena2 = cadena.startsWith(cad); // verifca si comienza con un espacio

let cadena3 = cadena1.endsWith(cad); // verifca si termina con la misma cadena

let cadena4 = cadena1.includes("esto"); // dice si la cadena esta dentro de otra cadena

let cadena5 = cadena1.indexOf("es") // devuelve la posicion de la primer letra de la palabra añadida. lastIndexOf es lo mismo ulitmam posi

let cadena6 = cad.padStart(10,"k"); //rellena el principio con esa catidad y valor de carac, k cantidad de caracteres

// cad.repeat(2) repite cadenas 

console.log(cadena1)
console.log(cadena2)
console.log(cadena3)
console.log(cadena4)
console.log(cadena5)
console.log(cadena6)
*/

// document.getElementById("Contenido")

//document.getElementsByTagName("C")

//document.querySelector("#Contenido")
//document.querySelectorAll() // lo mismo pero todos 

// const boton = document.querySelector("#boton1")

// boton.addEventListener("click", saludar) //escucha de eventos, no aplica funcion flecha.||   

// function saludar () {
//     alert("hola")
// }


// let boton2 = document.querySelector("#boton2")

// boton2.addEventListener("dblclick",(e) =>{ // el e funciona para guardar datos del evento podemos usar sus propiedades
//     alert("hellous")})


//     let h2 = document.querySelector("h2")

// h2.addEventListener("mouseenter",(e) => { // mouseover se ejecuta cuando esta el cursor adentro, el mouseout cuando sale del evento , mouseenter parecido mouseover
//     alert("trolo")
// })

// // contextmenu ocurre cuando apreto y suelto. siempre adentro del evento

// let input = document.querySelector(".prueba")

// input.addEventListener("keydown",(e) => { // keydown tecla se deja de prsionar, keypress cuando se presiona y suelta. onkeyup ocurre luego que ocurren los otros dos 
//     console.log("tecla presionada")}) 


//     /*
// setInterval(()=> {
// document.write("hola")
// },2000) // en milisegundos*/


let expr = "manzana"
switch(expr) {
    case "banana": console.log("es banana");break
    case "manzana": console.log("es manzana");break;
}


// try {
//     lkasjdaksld //con esta formula evitamos que salte un error
// }
// catch(error){ // se pueden poner condicion catch condicional 
//     console.log("error")
// }
// finally { // se ejecuta pase lo que pase

// function prueba(callback){
//     callback("roberto")
// }

// prueba(nombre => console.log(nombre))


// PROMESAS

// let nombre = "pdro";

// const promesa = new Promise((resolve, reject) => {
//     if (nombre === "pedro") {
//         resolve(`su nombre es ${nombre}`);
//     } else {
//         reject("su nombre no es pedro");
//     }
// });

// // promesa.then((resultado) => {
// //     console.log(resultado);
// // }).catch(error => {
// //     console.log(error)
// // });

// async function prom(){
//     try {
//         let resultado = await promesa
//         console.log(resultado)}
//     catch(error) {
//         console.log(error)
//     }
//     }
    
// prom()

// async function resultado(){
//     try{
//         const result = await promesa; // permite que primero se ejecute la promesa para despues ejecutar lo demas 
//         console.log(result)
//     }
//   catch(error){

// }
// }


let deserializado = {"nombre": "Pedro","apellido": "Pérez","edad": 30,"genero": "masculino"} // deserializado es cuando esta todo en la misma linea       // secerealizado cuando es un string 

const secerealizado = JSON.stringify(deserializado) //stringify serealiza
console.log(secerealizado)
let serializado = '{"nombre": "Pedro","apellido": "Pérez","edad": 30,"genero": "masculino"}'

const descerealizado = JSON.parse(serializado)
console.log(descerealizado)
