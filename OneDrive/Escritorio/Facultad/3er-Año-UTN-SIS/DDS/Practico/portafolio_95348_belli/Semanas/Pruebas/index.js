'use strict'



    //Capturar datos
    function getPersonas(){
        return fetch('./azulejo')
    }

    //Funciones
    //Punto 1
    function promedio(array){
        let cont = 0
        let sum = 0
        array.forEach(element => {
            sum += element.edad
            cont ++
        })
        let promedio= Math.round(sum/cont)
        return promedio
    }

    //Punto 2
    function joven(array){
        let nom = array[0].nombre
        let ape = array[0].apellido
        let ed = array[0].edad

        for( let i = 1; i < array.length; i++){

            if (array[i].edad < ed ){
                nom = array[i].nombre
                ape = array[i].apellido
                ed = array[i].edad
            }
        }
        return ('${nom} ${ape}')
    }
    
    //Punto3
    function gomez(array){
        let gomezs = []
        array.forEach(persona => {

            if (persona.apellido.toUpperCase() == 'GOMEZ')
                gomezs.push(persona.nombre)
        })
        return gomezs.sort()
    }
    
    //Punto4
    function parImpar(array){
        let suma = 0
        array.forEach(persona =>{
            let apel = persona.apellido
            let nom = persona.nombre
            
            if(nom.length % 2 == 0 && apel.length % 2 == 1)
            suma += persona.edad

        
        })
        return suma
    }
    
    //Punto5
    function crea_json(array){
        let may = 0
        let men = 0
        let prim = 0
        let seg = 0
        array.forEach(persona =>{

            if(persona.edad > 18){
                may ++
            }else{ men ++}

            if(persona.apellido.charAt(0).toUpperCase() >= 'A' && persona.apellido.charAt(0).toUpperCase() <= 'L'){
                prim ++
            }else{ seg ++}
        })

        let primDatos = {
            mayores: may,
            menores: men,
            primeraMitad: prim,
            segundaMitad:seg
        }
        return primDatos
    }
    //Punto 6
    function crea_json2(array){
        let cast = 0
        let di = 0
        let fe = 0
        let pin = 0
        let rom = 0
        array.forEach(persona =>{

            let ape = persona.apellido.toUpperCase()

            switch(ape){
                case 'CASTILLO':
                    cast ++
                    break;
                case 'DIAZ':
                    di ++
                    break;
                case 'FERRER':
                    fe ++
                    break;
                case 'PINO':
                    pin ++
                    break;
                case 'ROMERO':
                    rom ++
                    break;
            }
        })

    let segDatos = {
        CASTILLO: cast,
        DIAZ: di,
        FERRER: fe,
        PINO: pin,
        ROMERO: rom
    }
    return segDatos
    }

    //Promesas
    getPersonas()
    .then(data =>{
        return data.json()
    })
    .then(pers => {
        let personas = pers
        
        //Punto1
        let prom = promedio(pers)
        console.log('El promedio de edades es ${prom}')
        
        //Punto2
        let nom = joven(pers)
        console.log('El nombre de la persona mas joven es ${nom}')
    
        //Punto3
        let gomezs = gomez(pers)
        
        console.log('Todos los nombres con apellidos Gomez son: ${gomezs.join()}.')

        //Punto4
        let pI = parImpar(pers)
        console.log('Nombre par y apellido impar suma de edades: ${pI} ')
   
        //Punto5
        let objJas1 = crea_json(pers)
        console.log(objJas1)
   
        //Punto 6
        let objJas2 = crea_json2(pers)
        console.log(objJas2)
    })