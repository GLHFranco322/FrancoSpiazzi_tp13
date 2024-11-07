let nombre = "Pepito";
let apellido = "Fuentes";
let montoInicial = 200000;

// Inicializar la matriz de 10x2 con ceros y valores aleatorios de depósitos y retiros
function iniciarMatriz(matriz) {
    for (let f = 0; f < 10; f++) {
        matriz[f] = [];
        for (let c = 0; c < 2; c++) {
            matriz[f][c] = 0;
        }
    }

    // Agregar 10 movimientos positivos en la columna 0 (depósitos)
    for (let i = 0; i < 10; i++) {
        let rnd = Math.floor(Math.random() * 2000) + 1;
        matriz[i][0] = rnd;
    }

    // Agregar 10 movimientos negativos en la columna 1 (retiros)
    for (let i = 0; i < 10; i++) {
        let rnd_neg = Math.floor(Math.random() * 50000) + 1;
        matriz[i][1] = -rnd_neg;
    }
}

// Función para calcular los saldos totales de depósitos, retiros y saldo actual
function calculateBalances(operaciones) {
    let totalDepositos = 0;
    let totalRetiros = 0;

    for (let i = 0; i < operaciones.length; i++) {
        totalDepositos += operaciones[i][0]; // Sumar depósitos (columna 0)
        totalRetiros += operaciones[i][1];   // Sumar retiros (columna 1)
    }

    // Calcular el saldo actual
    let saldoActual = montoInicial + totalDepositos + totalRetiros;

    // Retorna los resultados
    return {
        totalDepositos: totalDepositos,
        totalRetiros: totalRetiros,
        saldoActual: saldoActual
    };
}

// Función para mostrar el balance bancario del cliente con su nombre y apellidos
function bankBalance(nombre, apellido, operaciones) {
    let balances = calculateBalances(operaciones); // Llamar a calculateBalances para obtener los saldos

    return {
        nombreCompleto: `${nombre} ${apellido}`,
        totalDepositos: balances.totalDepositos,
        totalRetiros: balances.totalRetiros,
        saldoActual: balances.saldoActual
    };
}

// Crear la matriz y pasarla como parámetro
let matriz = [];
iniciarMatriz(matriz);

// Mostrar la matriz en una tabla
console.table(matriz);

// Llamada a la función bankBalance y mostrar el resultado
let resultadoBalance = bankBalance(nombre, apellido, matriz);

console.log(`Estimado ${resultadoBalance.nombreCompleto}`);
console.log(`Su monto total de los depósitos es de: ${resultadoBalance.totalDepositos}`);
console.log(`Su monto total de los retiros es de: ${resultadoBalance.totalRetiros}`);
console.log(`Su saldo actual es de: ${resultadoBalance.saldoActual}`);

module.exports = bankBalance