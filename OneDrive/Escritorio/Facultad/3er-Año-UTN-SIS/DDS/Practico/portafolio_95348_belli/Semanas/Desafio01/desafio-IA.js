// Importar la librería seedrandom
const seedrandom = require('seedrandom');

// Semilla para generar números aleatorios
const seed = 1763519;

// Inicializar el generador de números aleatorios con la semilla
const rng = seedrandom(seed.toString());

// Función para generar un número aleatorio utilizando el método int32
function generarNumeroAleatorio() {
    return rng.int32();
}

// Función para obtener la cantidad de números positivos y negativos
function contarPositivosYNegativos(numeros) {
    let positivos = 0;
    let negativos = 0;
    for (const num of numeros) {
        if (num > 0) {
            positivos++;
        } else if (num < 0) {
            negativos++;
        }
    }
    return { positivos, negativos };
}

// Función para contar números según el resto al dividirlos por 7
function contarRestos(numeros) {
    const restos = [0, 0, 0, 0]; // Índices representan el resto 0, 3, 5 y 6 respectivamente
    for (const num of numeros) {
        const resto = Math.abs(num) % 7;
        if (resto === 0 || resto === 3 || resto === 5 || resto === 6) {
            restos[resto]++;
        }
    }
    return restos;
}

// Función para contar números según el anteúltimo dígito
function contarAnteultimosDigitos(numeros) {
    const contadores = {};
    for (const num of numeros) {
        const anteultimoDigito = Math.floor(Math.abs(num / 10) % 10);
        contadores[anteultimoDigito] = (contadores[anteultimoDigito] || 0) + 1;
    }
    return contadores;
}

// Función para encontrar el valor y la posición del menor número
function encontrarMenorNumero(numeros) {
    let menor = numeros[0];
    let posicion = 1;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
            posicion = i + 1;
        }
    }
    return { valor: menor, posicion };
}

// Función para contar números cuyo signo sea igual al del anterior
function contarConSignoIgualAlAnterior(numeros) {
    let contador = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (Math.sign(numeros[i]) === Math.sign(numeros[i - 1])) {
            contador++;
        }
    }
    return contador;
}

// Función para calcular el promedio entero de números de 6 dígitos
function calcularPromedioDeSeisDigitos(numeros) {
    let suma = 0;
    let cantidad = 0;
    for (const num of numeros) {
        if (Math.abs(num) >= 100000 && Math.abs(num) < 1000000) {
            suma += num;
            cantidad++;
        }
    }
    return Math.round(suma / cantidad);
}

// Función para contar números según el signo del anteúltimo dígito
function contarSegunSignoDelAnteultimoDigito(numeros) {
    const contadores = { positivos: 0, negativos: 0 };
    for (const num of numeros) {
        const anteultimoDigito = Math.floor(Math.abs(num / 10) % 10);
        const signo = Math.sign(anteultimoDigito);
        if (signo === 1 || signo === 0) {
            contadores.positivos++;
        } else {
            contadores.negativos++;
        }
    }
    return contadores;
}

// Generar 1000000 de números aleatorios
const numerosAleatorios = Array.from({ length: 1000000 }, generarNumeroAleatorio);

// Obtener resultados
const positivosYNegativos = contarPositivosYNegativos(numerosAleatorios);
const restos = contarRestos(numerosAleatorios);
const anteultimosDigitos = contarAnteultimosDigitos(numerosAleatorios);
const menorNumero = encontrarMenorNumero(numerosAleatorios);
const cantidadConSignoIgualAlAnterior = contarConSignoIgualAlAnterior(numerosAleatorios);
const promedioDeSeisDigitos = calcularPromedioDeSeisDigitos(numerosAleatorios);
const signoDelAnteultimoDigito = contarSegunSignoDelAnteultimoDigito(numerosAleatorios);

// Mostrar resultados
console.log("Cantidad de números positivos:", positivosYNegativos.positivos);
console.log("Cantidad de números negativos:", positivosYNegativos.negativos);
console.log("Cantidad de números cuyo resto al dividirlos en 7 es 0, 3, 5 o 6:", restos);
console.log("Contadores según el anteúltimo dígito:", anteultimosDigitos);
console.log("Menor número y su posición:", menorNumero);
console.log("Cantidad de números cuyo signo es igual al del anterior:", cantidadConSignoIgualAlAnterior);
console.log("Promedio entero de números de 6 dígitos:", promedioDeSeisDigitos);
console.log("Cantidad de números con signo del anteúltimo dígito:", signoDelAnteultimoDigito);
