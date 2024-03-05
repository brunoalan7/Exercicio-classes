import { funcionario } from "./funcionario.js";

export class desenvolvedor extends funcionario{

    constructor (nome,idade,cargo,linguagem){
        super(nome,idade,cargo)
        this.linguagem = linguagem 

    }

    programar(){

        console.log(`${this.nome} está programando em ${this.linguagem}.`)
        
    }

}