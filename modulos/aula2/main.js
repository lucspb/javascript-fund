window.onload = () => {
    console.log('tela carregou')
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function obterValor(id) {
        const item = document.getElementById(id)
        return item.value
    }

    function click() {
        const tipoOperacao = obterValor('tipoOperacao')
        const valor1 = obterValor('valor1')
        const valor2 = obterValor('valor2')
        const resultado = Matematica[tipoOperacao](
            valor1, valor2
        )
        console.log('resultado', resultado)
        document.getElementById('resultado')
            .innerText = `A operação de ${tipoOperacao}, ${valor1} por ${valor2} é : ${resultado}`
    }
}