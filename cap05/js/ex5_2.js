const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = `Entre ${numero} e 1: `

    for (let i = numero; i > 0; i = i - 1) {      // cria um for decrescente (pode utilizar a abreviação i--)
        resposta = resposta + i + ", "       // resposta acumula números (e vírgulas)
    }
    resp.innerText = resposta
})