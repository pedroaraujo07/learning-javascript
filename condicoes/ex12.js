var data = new Date()
var hora = data.getHours()

console.log(`Agora são ${hora} horas.`)

if (hora < 12 && hora >= 5) {
    console.log(`Faltam ${12 - hora} horas para meio-dia.`)
} else if (hora < 19 && hora >= 12) {
    console.log(`Faltam ${19 - hora} horas para a noite.`)
} else if (hora < 24 && hora >= 19) {
    console.log(`Faltam ${24 - hora} horas para meia-noite.`)
} else {
    console.log(`Faltam ${5 - hora} horas para o amanhecer.`)
}