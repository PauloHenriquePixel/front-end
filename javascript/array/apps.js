// // let cliente = [
// //     { nome: 'Carlos', idade: 27, telefone: '98984714141' },
// //      { nome: 'Paulo', idade: 18, telefone: '98987777810' },
// //       { nome: 'João', idade: 19, telefone: '98981748204' },
// // ]


// // cliente.forEach(function(item){
// //     console.log(`O(A) cleinet ${item.nome} tem ${item.idade} anos e o telefone de contato é ${item.telefone}`)
// // })

// let cliente2 =[
//     { nome: 'Henrique', idade: 25, telefone: '98984714141' },
//      { nome: 'Ana', idade: 22, telefone: '98987777810' },
//       { nome: 'Mariana', idade: 20, telefone: '98981748204' },
// ]

// cliente2.forEach(function(item){
//     console.log(`Elu clientez ${item.nome} tem ${item.idade} anos e o telefone de contato é ${item.telefone}`)
// })

// // Um array é uma lista que guarda vários valores dentro de uma mesma variável.
// // Esses valores ficam organizados em ordem, e cada um tem uma posição chamada índice (index).

// //as duas formas de definirmos um array

// // let nomes1 = new Array()
// // let nomes2 = []


// let nomes = ['carlos', 'ana', 'bia']

// // para apresentar um valor do array usamos seu indice
// console.log(nomes[0])

// // podemos alterar um valor do array, recorendo ao indice
// nomes[0] = 'fernanda'
// console.log(nomes[0])

// //para saber o total do valores de um array, usamos a propriedades length
// console.log(nomes.length)

// //um array pode conter qualquer tipo de valor
// // o mais comum é ver eles com valores do mesmo tipo
// let valores = [
//     'joão',
//     100,
//     true,
//     10.25
// ]

// console.log(valores)

// // mais também podemos conter objetos
// let clientes = [
//     { nome: 'carlos', idade: 22, telefone: 13235235 },
//     { nome: 'maria', idade: 22, telefone: 13235235 },
//     { nome: 'fernanda', idade: 22, telefone: 13235235 }
// ]
// console.log(clientes)

// // se eu quiser apresentar os dados de somentes 1 cliente
// console.log(clientes[1].nome)


// // se eu quiser iterar por todos os valores do array

// // clientes.forEach(cliente => {
// //     console.log(O(A) cliente ${cliente.nome} tem ${cliente.idade} anos de idade)
// // })

// // ou

// for(i = 0; i < clientes.length; i++) {
//     console.log(O(A) cliente ${clientes[i].nome} tem ${clientes[i].idade} anos de idade)
// }    
// let frutas = ['banana', 'maçã', 'laranja']
// frutas.push('uva')
// console.log(frutas)

// let casa = ['mesa', 'cadeira', 'fogão', 'geladeira']
// casa.push('microondas')
// console.log(casa)