const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da Compra R$: "))
const aux = Math.floor(valor / 20)      // aux = nº de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux   // operador ternário
const valorParcela = valor / parcelas   // cálculo do valor da parcela

console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)

/*
    O operador ternário pode ser substituído por:

    let parcelas
    if (aux == 0) {
        parcelas = 1
    } else if (aux > 6) {
        parcelas = 6
    } else {
        parcelas = aux 
    }
*/