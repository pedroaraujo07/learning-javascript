

let olimpiadas = []

for (let ano = 1896; ano <= 2026; ano += 4) {
    if (ano != 1916 && ano != 1940 && ano != 1944) {
        olimpiadas.push(ano)
    }
}

console.log(olimpiadas)