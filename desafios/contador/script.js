
function contar() {

    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var resultado = document.getElementById('resultado')

    if (inicio < fim && passo > 0) {

        resultado.innerHTML = 'Contando:'

        var contador = document.createElement('p')
        resultado.append(contador)

        for (var c = inicio; c <= fim; c += passo) {
            contador.innerHTML += `${c} \u{1F449} `
        }

        contador.innerHTML += '\u{1F3C1}'
    }

    else if (inicio > fim && passo < 0) {
        
        resultado.innerHTML = 'Contando:'

        var contador = document.createElement('p')
        resultado.append(contador)

        for (var c = inicio; c >= fim; c += passo) {
            contador.innerHTML += `${c} \u{1F449} `
        }

        contador.innerHTML += '\u{1F3C1}'
    }

    else if (passo == 0 && inicio < fim) {

        window.alert('Passo inválido. Considerando PASSO 1')
        passo = 1

        resultado.innerHTML = 'Contando:'

        var contador = document.createElement('p')
        resultado.append(contador)

        for (var c = inicio; c <= fim; c += passo) {
            contador.innerHTML += `${c} \u{1F449} `
        }

        contador.innerHTML += '\u{1F3C1}'
    }

    else if (passo == 0 && inicio > fim) {

        window.alert('Passo inválido. Considerando PASSO -1')
        passo = -1

        resultado.innerHTML = 'Contando:'

        var contador = document.createElement('p')
        resultado.append(contador)

        for (var c = inicio; c >= fim; c += passo) {
            contador.innerHTML += `${c} \u{1F449} `
        }

        contador.innerHTML += '\u{1F3C1}'
    }

    else {
        window.alert('Erro: confira os dados e tente novamente.')
    }

}