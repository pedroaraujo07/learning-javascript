let amigo = {nome: 'Pedro',
sexo: 'M',
peso: 64.2, 
engordar(p=0){
    console.log(`${this.nome} ganhou ${p}kg.`)
    this.peso += p
    console.log(`Peso atual: ${this.peso}kg.`)
}}

console.log(amigo.engordar(10))