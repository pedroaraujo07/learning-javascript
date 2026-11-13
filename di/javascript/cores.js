

const prompt = require('prompt-sync')()

let cor = prompt('Digite uma cor: ')

let sinal = cor.toUpperCase().trim()

if (sinal == 'VERDE') {
    console.log('SIGA')
} else if (sinal == 'AMARELO') {
    console.log('ATENÇÃO')
} else if (sinal == 'VERMELHO') {
    console.log('PARE')
} else {
    console.log('COR INVÁLIDA')
}


