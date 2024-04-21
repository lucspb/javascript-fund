const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = '';
let idade = ''

Promise.resolve()
    .then(() => questionAsync('Qual é o seu nome?'))
    .then(respostaNome => {
        if(!respostaNome) throw new Error('Campo vazio!')
        nome = respostaNome
    })
    .then(() => questionAsync('Qual é a sua idade?'))
    .then(respostaIdade => {
        if(!respostaIdade) throw new Error('Campo vazio!')
        idade = respostaIdade
    })
    .then(() => {
        console.log(
            `Nome: ${nome}`,
            `Idade: ${idade}`
        )
    })
    .catch(error => {
        console.log('Deu erro, craque', error)
    })
    .finally(() => terminal.close())