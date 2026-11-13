

let copas = []

let anoInicial = 1930
let anoFinal = 2026
let semCopa = [1942, 1946]

for (let ano = anoInicial; ano <= anoFinal; ano++) {
    if (ano % 4 == 2 && !semCopa.includes(ano)) {
        copas.push(ano)
    }
}

console.log(copas)