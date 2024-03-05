import { desenvolvedor } from "./desenvolvedor.js";
import { funcionario } from "./funcionario.js";
import { gerente } from "./gerente.js";

const funcionario1 = new funcionario('bruno',15,'atendente')
const gerente1= new gerente ('bruno',15,'atendente','atendimento')

gerente1.seApresentar()
gerente1.trabalhar()
gerente1.gerenciar()

const programador1 = new desenvolvedor('bruno' , 18,'UI','Java Script')

programador1.seApresentar()
programador1.trabalhar()
programador1.programar()

console.log(gerente1)
console.log(programador1)