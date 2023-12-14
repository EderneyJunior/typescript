import { Personagem } from "./Personagem"

export class Mago extends Personagem {
    private qtdMagia: number = 5

    constructor(
        public nome: string
    ) {
        super(nome)
    }

    usarMagia() {
        if (this.qtdMagia <= 0) {
            return 'Magia indisponivel'
        }

        this.qtdMagia--
        return 'Magia usada'
    }

    criarMagia() {
        this.qtdMagia++
    }
}