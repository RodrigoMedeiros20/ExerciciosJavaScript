const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso
    if (masculino) {    // se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    /*
    Operador Ternário (pode substituir o if...else):
    const peso = masculino ? 22 * Math.pow(altura, 2): 21 * Math.pow(altura, 2)
    */

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`
})

frm.addEventListener("reset", () => {
    resp.innerText = "" // limpar o conteúdo do elemento h3 que exibe a resposta
})