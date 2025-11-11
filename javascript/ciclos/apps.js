let numero;

do {
  numero = Number(prompt("Digite um número (digite 0 para parar):"));
  console.log(`Você digitou: ${numero}`);
} while (numero !== 0);

console.log("Programa encerrado!");
