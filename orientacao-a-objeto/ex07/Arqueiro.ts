import { Personagem } from "./Personagem"

export class Arqueiro extends Personagem {
    private qtdFlechas: number = 5

    constructor(
        public nome: string
    ) {
        super(nome)
    }

    lancarFlechas() {
        if (this.qtdFlechas <= 0) {
            return 'Falta de flechas'
        }

        this.qtdFlechas--
        return 'Flecha lançada'
    }

    contruirFlechas() {
        this.qtdFlechas++
    }
}