const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)   // obtém número digitado no form

    /*
    if (numero % 2 == 0) {                      // se o número dividido por 2, tiver resto 0
        resp.innerText = `${numero} é par`      // ...número é par
    } else {                                    // senão
        resp.innerText = `${numero} é ímpar`    // ...é ímpar
    }
    */

    const resposta = numero % 2 ? "é impar" : "é par"

    resp.innerText = `${numero} ${resposta}`
})