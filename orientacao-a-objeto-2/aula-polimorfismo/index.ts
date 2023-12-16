import { Camaro } from "./Camaro";
import { Fusca } from "./Fusca";
import { Fusion } from "./Fusion";
import { TesteCarro } from "./TesteCarro";

const fusion = new Fusion(2020)
const camaro = new Camaro(2021)

fusion.acelerar()
fusion.acelerar()
fusion.acelerar()
fusion.ligarTurbo()

// console.log(fusion);

// camaro.acelerar()
// camaro.acelerar()
// camaro.acelerar()
// camaro.ligarTurbo()

// console.log(camaro);


// const teste = new TesteCarro(fusion)

// teste.testeTurbo()

// console.log(teste);

const fusca = new Fusca(1970)

fusca.acelerar()
fusca.ligarTurbo()

console.log(fusca)
