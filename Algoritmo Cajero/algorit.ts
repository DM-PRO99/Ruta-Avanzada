import * as readline from 'readline';

let saldo: number = 1000000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu(): void {
  console.log('\n--- Cajero Automático ---');
  console.log('1. Consultar saldo');
  console.log('2. Depositar dinero');
  console.log('3. Retirar dinero');
  console.log('4. Salir');
  console.log('5. Avance de dinero');
  rl.question('Elige una opción: ', manejarOpcion);
}

function manejarOpcion(opcion: string): void {
  switch (opcion.trim()) {
    case '1':
      console.log(`Tu saldo actual es: $${saldo}`);
      mostrarMenu();
      break;
    case '2':
      rl.question('¿Cuánto deseas depositar? ', (monto) => {
        const deposito = parseInt(monto);
        if (isNaN(deposito) || deposito <= 0) {
          console.log('Monto inválido.');
        } else {
          saldo += deposito;
          console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
        }
        mostrarMenu();
      });
      break;
    case '3':
      rl.question('¿Cuánto deseas retirar? ', (monto) => {
        const retiro = parseInt(monto);
        if (isNaN(retiro) || retiro <= 0) {
          console.log('Monto inválido.');
        } else if (retiro > saldo) {
          console.log('Fondos insuficientes.');
        } else {
          saldo -= retiro;
          console.log(`Retiro exitoso. Nuevo saldo: $${saldo}`);
        }
        mostrarMenu();
      });
      break;
    case '4':
      console.log('¡Gracias por usar el cajero automático!');
      rl.close();
      break;
        case '5':
      rl.question('¿Cuánto deseas pedir como avance? ', (monto) => {
        const avance = parseInt(monto);
        if (isNaN(avance) || avance <= 0) {
          console.log('Monto inválido.');
        } else {
          saldo += avance; // Sumar el avance al saldo
          console.log(`Avance exitoso. Nuevo saldo: $${saldo}`);
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