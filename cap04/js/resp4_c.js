const frm = document.querySelector("form")
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    // Caso o valor seja insuficiente
    if (valor < 1.00) {
        alert("Valor Insuficiente")
        frm.inValor.focus()
        return
    }

    // Declara as variáveis
    let tempo
    let troco

    // Cria as condições para verificar tempo e troco
    if (valor >= 3.00) {
        tempo = 120
        troco = valor - 3.00
    } else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1.00
    }

    // Exibe as respostas
    resp1.innerText = `Tempo: ${tempo} min`
    if (troco > 0) {
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
    }
})