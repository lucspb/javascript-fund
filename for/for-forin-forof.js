// const textoPar = "par"
// const textoImpar = "impar"

// for(let i = 0; i < 10; i++){
//     const decisao = i % 2 === 0 ? textoPar : textoImpar
//     console.log(`O numero ${i} é ${decisao}`)
// }

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Ze',
        superPoder: 'fazer raiva'        
    },
    {
        id: Math.random(),
        nome: 'Maria',
        superPoder: 'chutar forte pra fora'
    }
]

for(let i = 0; i <minhaListaDeTarefas.length; i++){
    const item = minhaListaDeTarefas[i]
    console.log(
        `id: ${item.id}
        nome: ${item.nome}
        
        `
    )
}

// for in

for(const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log('Nome', item.nome)
}

// for of

for(const item of minhaListaDeTarefas) {
    console.log('super poder', item.superPoder)
}