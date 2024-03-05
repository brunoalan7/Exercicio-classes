import { funcionario } from "./funcionario.js";

export class gerente extends funcionario{

    constructor(nome, idade,cargo, departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;

    }

    gerenciar(){

        console.log(`${this.nome}, o(a) gerente do departamento ${this.departamento}, está gerenciando sua equipe.`);

    }
}