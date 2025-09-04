"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var saldo = 1000000;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mostrarMenu() {
    console.log('\n--- Cajero Automático ---');
    console.log('1. Consultar saldo');
    console.log('2. Depositar dinero');
    console.log('3. Retirar dinero');
    console.log('4. Salir');
    console.log('5. Avance de dinero');
    rl.question('Elige una opción: ', manejarOpcion);
}
function manejarOpcion(opcion) {
    switch (opcion.trim()) {
        case '1':
            console.log("Tu saldo actual es: $".concat(saldo));
            mostrarMenu();
            break;
        case '2':
            rl.question('¿Cuánto deseas depositar? ', function (monto) {
                var deposito = parseInt(monto);
                if (isNaN(deposito) || deposito <= 0) {
                    console.log('Monto inválido.');
                }
                else {
                    saldo += deposito;
                    console.log("Dep\u00F3sito exitoso. Nuevo saldo: $".concat(saldo));
                }
                mostrarMenu();
            });
            break;
        case '3':
            rl.question('¿Cuánto deseas retirar? ', function (monto) {
                var retiro = parseInt(monto);
                if (isNaN(retiro) || retiro <= 0) {
                    console.log('Monto inválido.');
                }
                else if (retiro > saldo) {
                    console.log('Fondos insuficientes.');
                }
                else {
                    saldo -= retiro;
                    console.log("Retiro exitoso. Nuevo saldo: $".concat(saldo));
                }
                mostrarMenu();
            });
            break;
        case '4':
            console.log('¡Gracias por usar el cajero automático!');
            rl.close();
            break;
        case '5':
            rl.question('¿Cuánto deseas pedir como avance? ', function (monto) {
                var avance = parseInt(monto);
                if (isNaN(avance) || avance <= 0) {
                    console.log('Monto inválido.');
                }
                else {
                    saldo += avance; // Sumar el avance al saldo
                    console.log("Avance exitoso. Nuevo saldo: $".concat(saldo));
                    if (saldo < 0) {
                        console.log('Saldo negativo, recuerda pagar el avance anteriormente realizado');
                    }
                }
                mostrarMenu();
            });
            break;
        default:
            console.log('Opción inválida.');
            mostrarMenu();
    }
}
mostrarMenu();
