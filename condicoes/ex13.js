var data = new Date()
var diaSemana = data.getDay()

/* 0 = domingo, 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sábado */

switch (diaSemana) {
    case 0:
        console.log('Você está no domingo, dia de relaxar.')
        break
        
    case 1:
        console.log('Você está na segunda-feira, dia de começar a semana.')
        break
        
    case 2:
        console.log('Você está na terça-feira, dia de continuar a semana.')
        break
        
    case 3:
        console.log('Você está na quarta-feira, dia de manter o ritmo.')
        break
        
    case 4:
        console.log('Você está na quinta-feira, dia de se esforçar.')
        break
        
    case 5:
        console.log('Você está na sexta-feira, dia de finalizar a semana.')
        break
        
    case 6:
        console.log('Você está no sábado, dia de desfrutar do final de semana.')
        break
    
    default:
        console.log('Dia inválido.')
        break
}