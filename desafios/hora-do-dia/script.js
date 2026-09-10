

var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()

var horario = document.getElementById('horario')
var body = document.getElementsByTagName('body')[0]
var imagem = document.getElementById('imagem')

horario.innerHTML = `${horas}:${minutos}`


if (horas < 10 && minutos < 10) {
    horario.innerHTML = `0${horas}:0${minutos}`
}

else if (minutos < 10) {
    horario.innerHTML = `${horas}:0${minutos}`
}

else if (horas < 10) {
    horario.innerHTML = `0${horas}:${minutos}`
}


if (horas >= 12 && horas < 19) {
    body.style.background = '#ffa537'
    imagem.style.backgroundImage = 'url("imgs/tarde.jpg")'
}

else if (horas >= 19 || horas < 5) {
    body.style.background = '#0b0f41'
    imagem.style.backgroundImage = 'url("imgs/noite.jpg")'
}