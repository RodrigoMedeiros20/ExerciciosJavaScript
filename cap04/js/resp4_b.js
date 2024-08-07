const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    // obtém e converte conteúdo dos campos de Velocidade
    const velPermitida = Number(frm.inVelPermitida.value)
    const velCondutor = Number(frm.inVelCondutor.value)

    // cria as condições para verificar situação do condutor
    if (velCondutor <= velPermitida) {
        resp.innerText = `Situação: Sem Multa`
    } else if (velCondutor <= (velPermitida * 1.2)) {
        resp.innerText = `Situação: Multa leve`
    } else {
        resp.innerText = `Situação: Multa Grave`
    }
})