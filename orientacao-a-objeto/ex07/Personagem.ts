export class Personagem {
    private velocidade: number = 0

    constructor(
        public nome: string
    ) {}

    andar() {
        this.velocidade ++
    }

    parar() {
        this.velocidade = 0
    }
}