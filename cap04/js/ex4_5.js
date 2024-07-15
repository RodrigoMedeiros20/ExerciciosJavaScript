const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)          // calcula a raiz quadrada do número

    if (Number.isInteger(raiz)) {           // se a raiz do número for inteiro
        resp.innerText = `Raiz: ${raiz}`    // ...mostra a raiz
    } else {                                // senão,
        resp.innerText = `Não há raiz exata para ${numero}` // ...mostra mensagem
    }

    /*
    O if pode ser substituído por: if (raiz % 1 == 0) {...}
    */
})