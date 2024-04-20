const fs = require('fs')
// fs.readFile('./arq.txt', (error, resposta) => {
//     if(error) {
//         console.error('Deu error**', error.stack)
//         return;
//     }

//     console.log('resposta', resposta.toString())
// })

fs.readFile('./test1.txt', (errorTest1, responseTest1) => {
    if(errorTest1) {
        console.error('Deu error**', errorTest1)
        return;
    }
    fs.readFile('./test2.txt', (errorTest2, responseTest2) => {
        if(errorTest2) {
            console.error('Deu error**', errorTest2)
            return;
        }
        fs.readFile('./test3.txt', (errorTest3, responseTest3) => {
            if(errorTest3) {
                console.error('Deu error**', errorTest3)
                return;
            }
            const conteudo = `${responseTest1}\n${responseTest2}\n${responseTest3}`
            fs.writeFile('./final.txt', conteudo, (errorWrite, responseWrite) => {
                if(errorWrite) {
                    console.error('Deu ruim na gravacao', errorWrite)
                    return;
                }
                console.log('Arquivo salvo com sucesso!')
            })
        })
    })

    

    
})

