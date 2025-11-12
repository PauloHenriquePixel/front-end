function pessoa (nm,ap ,tlf){
    this.nome = nm
    this.apelido = ap
    this.telefone = tlf
}
const p1 = new pessoa ("paulo", "Henrique", "98 98777-7810")
console.log(p1.nome)
console.log(p1.apelido)
console.log(p1.telefone)


function pessoa2 (nm,ap ,tlf){
    this.nome = nm
    this.apelido = ap 
    this.telefone = tlf
}
const p2 = new pessoa2 ("Ana", "Castela", "11 1847294-1010" )
console.log(p2.nome)
console.log(p2.apelido)
console.log(p2.telefone)