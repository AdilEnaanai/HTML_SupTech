import * as readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nom = await rl.question(
  "Quel est votre nom ? "
);

console.log(`Bonjour ${nom} !`);

rl.close();
