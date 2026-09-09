

let num = [11, 7, 8, 10, 17]
num[5] = 20
num.push(14)



console.log(`Meus números de camisa:`)

/*
for (let pos = 0; pos < num.length; pos ++) {
    console.log(num[pos])
} */

for (let pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(7))
