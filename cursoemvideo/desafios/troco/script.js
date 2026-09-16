

function troco() {
    let produto = window.prompt('Que produto você está comprando?')
    let precoProduto = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let precoDado = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))

    let troco = precoDado - precoProduto

    let precoProdForm = precoProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let precoDadoForm = precoDado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let trocoForm = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    window.alert(`Você comprou ${produto} que custou ${precoProdForm}. \nVocê deu ${precoDadoForm} em dinheiro e vai receber ${trocoForm} de troco. \nVolte sempre!`)
}