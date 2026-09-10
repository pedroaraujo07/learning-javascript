

let numeros = document.getElementById('numeros')
let lista = []
let info = document.querySelector('#info')

function adicionar() {

    info.innerHTML = ''

    let inputN = document.getElementById('numero')
    let n = Number(inputN.value)

    if ((n >= 1 && n <= 100) && lista.indexOf(n) == -1) {

        lista.push(n)

        let option = document.createElement('option')
        option.text = `Valor ${n} adicionado.`
        numeros.appendChild(option)
        
    }

    else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    inputN.value = ''
    inputN.focus()

}

function finalizar() {

    if (lista.length > 0) {

        info.innerHTML = ''

        let totalN = document.createElement('p')
        totalN.innerText = `Ao todo, temos ${lista.length} números cadastrados.`
        info.appendChild(totalN)

    
        let maiorN = document.createElement('p')
        let maior = 0
        for (let c in lista) {
            if (lista[c] > maior) {
                maior = lista[c]
            }
        }
        maiorN.innerText = `O maior valor informado foi ${maior}.`
        info.appendChild(maiorN)

    
        let menorN = document.createElement('p')
        let menor = 101
        for (let c in lista) {
            if (lista[c] < menor) {
                menor = lista[c]
            }
        }
        menorN.innerText = `O menor valor informado foi ${menor}.`
        info.appendChild(menorN)
    
        let somaN = document.createElement('p')
        let soma = 0
        for (let c in lista) {
            soma += lista[c]
        }
        somaN.innerText = `Somando todos os valores, temos ${soma}.`
        info.appendChild(somaN)
    
        let mediaN = document.createElement('p')
        mediaN.innerText = `A média dos valores digitados é ${soma / lista.length}.`
        info.appendChild(mediaN)
    }   
    else {
        window.alert('Adicione valores antes de finalizar.')
    }
}