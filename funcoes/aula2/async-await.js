const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O campo não pode ser vazio'))
        })
    })
}


async function main(){
    try{
        const nome = await questionAsync('Qual é o seu nome?')
        const idade = await questionAsync('Qual é a sua idade?')
        console.log(`Nome: ${nome}, Idade: ${idade}`)
    } catch(error) {
        console.log('deu errado, craque', error.stack)
    } finally {
        terminal.close()
    }
}

main()

