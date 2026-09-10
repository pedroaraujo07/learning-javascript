function parImpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let num = parImpar(11)

console.log(num)