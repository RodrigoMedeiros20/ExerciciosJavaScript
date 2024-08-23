const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = ""       // variável do tipo String, para cocatenar a resposta
    
    // cria um laço de repetição (i começa com 1 e é incrementado até 10)
    for (let i = 1; i <=10; i++) {
        // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        
        // resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }
    // o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})