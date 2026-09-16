
function tabuada() {

    var numTxt = document.getElementById('numero').value
    var tabu = document.getElementById('tabu')

    if (numTxt.length == 0) {
        window.alert('Por favor, insira um número.')
    }

    else {
        var num = Number(numTxt)

        tabu.innerHTML = ''
        

        for (var c = 1; c <= 10; c ++) {

            var option = document.createElement('option')
            option.text = `${num} x ${c} = ${num * c}`
            tabu.appendChild(option)
            
        }
    }

}