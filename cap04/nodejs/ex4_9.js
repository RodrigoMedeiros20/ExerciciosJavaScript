const prompt = require("prompt-sync")()

const numero = Number(prompt("Número (centena): "))

if (numero < 100 || numero >= 1000) {
    console.log("Erro... deve ser uma centena")
    return
}

const num1 = Math.floor(numero / 100)   // obtém o 1º número
const sobra = numero % 100              // o que sobra (dezena)
console.log(sobra)
const num2 = Math.floor(sobra / 10)     // obtém o 2º número
console.log(num2)
const num3 = sobra % 10                 // obtém o 3º número
console.log(num3)

console.log(`Invertido: ${num3}${num2}${num1}`) // exibe o número invertido