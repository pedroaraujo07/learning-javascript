var data = new Date()
var anoAtual = data.getFullYear()


function verificar() {

    var ano = Number(window.document.getElementById('ano').value);
    var masc = window.document.getElementById('masculino')
    var fem = window.document.getElementById('feminino')
    var divImagem = window.document.getElementById('imagem');
    var divPessoa = window.document.getElementById('pessoa')
    var divAviso = window.document.getElementById('aviso')
    var spanIdade = window.document.getElementById('idade')
    var spanSexo = window.document.getElementById('sexo')
    var idade = anoAtual - ano


    if (ano <= 2026 && ano >= 1900 && (masc.checked || fem.checked)) {
        divAviso.style.display = 'none'
        divPessoa.style.display = 'flex'
        spanIdade.innerHTML = idade
    } else {
        window.alert('Erro: Verifique os dados e tente novamente.')
    }


    if (idade < 0) {

    }

    else if (idade <= 2 && masc.checked) {
        divImagem.style.backgroundImage = 'url(imgs/homem-bebe.jpg)'
        spanSexo.innerHTML = 'um homem'
    }
 
    else if (idade <= 10 && masc.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/homem-crianca.jpg)'
        spanSexo.innerHTML = 'um homem'
    }
 
    else if (idade <= 17 && masc.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/homem-teen.jpg)'
        spanSexo.innerHTML = 'um homem'
    }
 
    else if (idade <= 24 && masc.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/homem-jovem.jpg)'
        spanSexo.innerHTML = 'um homem'
    }
 
    else if (idade <= 35 && masc.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/homem-adulto.jpg)'
        spanSexo.innerHTML = 'um homem'
    }
 
    else if (idade <= 60 && masc.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/homem40.jpg)'
        spanSexo.innerHTML = 'um homem'
    }
 
    else if (idade <= 75 && masc.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/homem-velho.jpg)'
        spanSexo.innerHTML = 'um homem'
    }
 
    else if (masc.checked && idade <= 126) {
        divImagem.style.backgroundImage = 'url(imgs/homem-idoso.jpg)'
        spanSexo.innerHTML = 'um homem'
    }

    
    else if (idade <= 2 && fem.checked) {
        divImagem.style.backgroundImage = 'url(imgs/mulher-bebe.jpg)'
        spanSexo.innerHTML = 'uma mulher'
    }
 
    else if (idade <= 10 && fem.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/mulher-crianca.jpg)'
        spanSexo.innerHTML = 'uma mulher'
    }
 
    else if (idade <= 17 && fem.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/mulher-teen.jpg)'
        spanSexo.innerHTML = 'uma mulher'
    }
 
    else if (idade <= 24 && fem.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/mulher-jovem.jpg)'
        spanSexo.innerHTML = 'uma mulher'
    }
 
    else if (idade <= 35 && fem.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/mulher-adulta.jpg)'
        spanSexo.innerHTML = 'uma mulher'
    }
 
    else if (idade <= 60 && fem.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/mulher40.jpg)'
        spanSexo.innerHTML = 'uma mulher'
    }
 
    else if (idade <= 75 && fem.checked ) {
        divImagem.style.backgroundImage = 'url(imgs/mulher-velha.jpg)'
        spanSexo.innerHTML = 'uma mulher'
    }
 
    else if (fem.checked && idade <= 126) {
        divImagem.style.backgroundImage = 'url(imgs/mulher-idosa.jpg)'
        spanSexo.innerHTML = 'uma mulher'
    }
    
 
}