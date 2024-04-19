const Matematica = require('./matematica')

// console.log(Matematica.somar(1,2))

const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})


terminal.question('Insira o primeiro valor\n', v1 => {
    terminal.question('Insira o segundo valor\n', v2 => {
        terminal.question('Insira a operação\n', tipoOperacao => {
            const resultado = Matematica[tipoOperacao](
                Number(v1), Number(v2)
            )

            console.log(
                `A operação ${tipoOperacao} de ${v1} e ${v2} é ${resultado}`
            )
            terminal.close()
        })
    })
})

