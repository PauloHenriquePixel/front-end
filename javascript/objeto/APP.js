
let cliente2 = {
    nome: 'Ana',
    apelido: 'Castela',
    telefone: 1198472910,
    "tipo de cliente": 'Premium',

    nome_completo: function () {
        return this.nome + " " + this.apelido
    },
    alterar_nome: function (novo_nome) {
        this.nome = novo_nome
    },
    remove_cliente: function () {
        this.nome = ''
    }
}
console.log(cliente2.nome_completo())
console.log(cliente2["tipo de cliente"])

for( let chave in cliente2){
    console.log(chave + " = " + cliente2[chave])
}