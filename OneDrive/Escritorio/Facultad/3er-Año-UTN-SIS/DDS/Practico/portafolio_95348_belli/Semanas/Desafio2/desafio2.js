function personasJSON(){
    return fetch("./personas.json")
}

function calcularPromedio(array){
    let totalEdad = 0
    let cantPersonas = 0
    let edadPromedio = null
    array.forEach(persona => {
        totalEdad += persona.edad
        cantPersonas +=1
    });
    edadPromedio = totalEdad / cantPersonas
    //return console.log(`El promedio de edad es de ${Math.round(edadPromedio)}`)
    return edadPromedio
};


function personaMASjoven(array){
    let edad = array[i].edad
        let masJoven = array[0].edad
        let posicion = null
    for (let i = 0; i < array.length;i++){
        if (masJoven > edad){
        masJoven = edad
        posicion = i
        }
    }
    let nombre = array[posicion].nombre
    let apellido = array[posicion].apellido
    let años = array[posicion].edad

    return nombre,apellido,años
}

function buscarGomez(array){
    let gomez = []
    array.forEach(personas => {
        if(personas.apellido == "GOMEZ"){
            gomez.push(personas)
        }
    })

    return gomez.sort()
}

function sumaEdades(array){
    let sumaEdades = 0
    for (let i = 0;i < array.length;i++){
        if((array[i].nombre.length % 2 == 0) && (array[i].nombre.length % 2 != 0)){
            sumaEdades += array[i].edad

        }
    }
    return sumaEdades
}

function diferenciaEdad(array){
    let mayor = 0
    let menor = 0

    array.forEach(persona => {
        if (persona.edad > 18) {
            mayor +=1
        }
        else{
            menor +=1
        }
    })
    return mayor,menor
}

function diferenciaApellido(array){
    let primeraMitad = 0
    let segundaMitad = 0
    array.forEach(persona => {
        if(persona.apellido[0] <= "L"){
            primeraMitad +=1
        }
        else{
            segundaMitad +=1
        }
    })
    return primeraMitad,segundaMitad
}

function generarJSONej5(mayor,menor,primera,segunda){

    let objetoJSON = {
        "mayor":mayor,
        "menor":menor,
        "primeraMitad":primera,
        "segundaMitad":segunda
    }
    return objetoJSON
}

function contarApellidos(array){
    let castillo = 0
    let diaz = 0
    let ferrer = 0
    let pino = 0
    let romero = 0 

    array.forEach(persona => {
        let apellido = persona.apellido

        switch (apellido) {
            case "CASTILLO": castillo ++
                break;
            case "DIAZ": diaz ++
                break;
            case "FERRER": ferrer ++
                break;
            case "PINO": pino ++
                break;
            case "ROMERO": romero ++
                break;
        }   
    })

    return castillo,diaz,ferrer,pino,romero
}

function generarJSONej6(castillo,diaz,ferrer,pino,romero) {
    let objetoJSON = {
            "CASTILLO": castillo,
            "DIAZ": diaz,
            "FERRER": ferrer,
            "PINO": pino,
            "ROMERO": romero
    }

    return objetoJSON
}



personasJSON().then( infoPersonas => {
    return infoPersonas.json()
})
.then(persona => {

     //Ejercicio 1   Calcular el promedio entero de las edades de todas las personas del archivo
    let promedio = calcularPromedio(persona)
    console.log(`Promedio de "EDADES" de la base de datos "Persona: ${promedio}"`)

    // Ejercicio 2 Informar el Nombre y Apellido de la persona más joven del conjunto (si hubiere más de una persona con esa misma edad debe informar la primera que aparezca en el archivo).
    let nombre,apellido,edad = personaMASjoven(persona)
    console.log(`La persona mas joven se llama ${nombre} ${apellido} y tiene ${edad} años`)

    //Ejercicio 3 Informar los Nombres separados por coma ", " de todas las personas con apellido GOMEZ, ordenados alfabéticamente.
    let gomez = buscarGomez(persona)
    console.log(`Todas las personas de apellido "GOMEZ" en orden alfabetico: ${gomezs.join()}.`)

    //Ejercicio 4 Suma de las edades de aquellas personas cuyo nombre tenga una longitud par y el  apellido una longitud impar.
    let edades = sumaEdades(persona)
    console.log(`Suma de edades de personas con nombre de longitud par e apellido impar: ${edades}`)

    // Ejercicio 5 Construir una funcionalidad que genere un objeto en su notación JSON que contenga los siguientes atributos o propiedades

    let mayor,menor = diferenciaEdad(persona)
    let primeraMitad,segundaMitad = diferenciaApellido(persona)
    let jsonej5 = generarJSONej5(mayor,menor,primeraMitad,segundaMitad)
    console.log(`El objeto json es: ${jsonej5}`)


    // Ejercicio 6 Construir una funcionalidad que genere un objeto en su notación JSON que contenga los siguientes atributos, cuyos valores deben ser la cantidad de personas correspondientes a cada apellido:
    let castillo,diaz,ferrer,pino,romero = contarApellidos(persona)
    let jsonej6 = generarJSONej6(castillo,diaz,ferrer,pino,romero)
    console.log(`El objeto json es: ${jsonej6}`)
})