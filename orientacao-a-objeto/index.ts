import { Gerente } from "./Gerente";
import { Programador } from "./Programador";
import { Vendedor } from "./Vendedor";

const ederney = new Programador('Ederney', 2000000, ['javascript', 'php'])
const ana = new Gerente('Ana', 2500000, '123456')
const joao = new Vendedor('João', 800000, 500000)




// console.log(joao.calcularSalario())
console.log(ana.validarSenha('123456'));
