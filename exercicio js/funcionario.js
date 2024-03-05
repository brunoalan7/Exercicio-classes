export class funcionario {

    constructor(nome,idade,cargo){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }

    seApresentar(){
        console.log (`Olá meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }

    trabalhar(){

        console.log(`No momento estou trabalhando volte mais tarde.`)

    }

}