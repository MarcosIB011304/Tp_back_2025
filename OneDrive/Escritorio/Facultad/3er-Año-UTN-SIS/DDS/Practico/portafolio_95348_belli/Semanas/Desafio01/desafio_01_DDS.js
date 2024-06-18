const seedrandom = require("seedrandom");

var random = seedrandom(1763519);

let numerosAleatorios = Array.from({ length:1000000 } , () => random.int32())

// Consigna 1 -- funcion cantidad de positivos y negativos
function esPositivo(lista) {
    let cont_Positivos = 0;
    let cont_Negativos = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > 0) {
            cont_Positivos +=1;
        } 
        else {
            cont_Negativos +=1;
        }
    };
    return {cont_Positivos,cont_Negativos};

}

let { cont_Positivos , cont_Negativos } = esPositivo(numerosAleatorios);
console.log(`contador de numeros positivos: ${cont_Positivos}`);
console.log(`contador de numeros Negativos: ${cont_Negativos}`);
//---------------------------------------------------------------------------------------------------------------------

// Consigna 2 -- funcion del resto de 7
function resto_7(lista) {
    let contResto_7 = 0;
    for (let i = 0; i <= 1000000; i++) {
        if (lista[i] % 7 == (0 || 3 || 5 || 6)) {
            contResto_7 +=1;
        }
    }
    return contResto_7
}
let resto = resto_7(numerosAleatorios)
console.log(`Contador de restos de 7: ${resto} `)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// Consigna 3 --contar cantidad de numeros por decenas 
function contadores(lista) {
    let conteo = Array.from({ length: 10 }, () => 0); // Inicializa un array de 10 elementos con valores 0

    for (let i = 0; i < lista.length; i++) {
        let numero = (lista[i] % 100) / 10;
        let abs = Math.abs(numero);
        let dec = Math.floor(abs);
        conteo[dec] +=1;
    }
    
    return conteo

}
let conteo = contadores(numerosAleatorios);
let resultado = `{${conteo.join(',')}}`;

console.log(resultado)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Consigna 4 -- funcion del numero menor de la lista
function menorNumero(lista) {
    let menor = lista[0];
    let posicion = 1;

    for (let i = 0; i <= 1000000;i++) {
        if (lista[i] < menor ) {
            menor = lista[i]
            posicion = i + 1
        }
    }
    return {menor , posicion};
}

let { menor , posicion } = menorNumero(numerosAleatorios);
console.log(`El menor valor del Array es: ${menor}`);
console.log(`La posicion del menor valor del Array es: ${posicion}`);

//---------------------------------------------------------------------------------------------------------
// Consigna 5 -Cantidad de numeros cuyo signo sea igual al anterior 
function numerosSigAnt(lista) {
    let contSignos = 0;

    for (let i = 1; i < lista.length; i++) {
        if ((lista[i] >= 0 && lista[i - 1] >= 0) || (lista[i] < 0 && lista[i - 1] < 0)) {
            contSignos +=1;
        }
    }

    return contSignos
}

let cantSignos = numerosSigAnt(numerosAleatorios);
console.log("Cantidad de numeros que le antecede un signo: ", cantSignos)

//-------------------------------------------------------------------------------------

// Consigna 6 -- Funcion promedio 
function promedio(lista) {
    let total = 0
    let cantidad = 0
    for (let i = 0; i <= lista.length; i++) {
        let num = lista[i]
        if (Math.abs(num).toString().length === 6) {
        total += num
        cantidad +=1
    }
}
    return {total,cantidad};
}

let {total,cantidad} = promedio(numerosAleatorios);
let suma_promedio = total / cantidad;
console.log(`La suma promedio de numeros con 6 dijitos es: ${Math.round(suma_promedio)}`);


