export abstract class Carro {
    ano: number
    velocidade: number
    cor: string

    constructor(ano: number) {
        this.ano = ano
        this.velocidade = 0
        this.cor = 'prata'
    }

    acelerar() {
        this.velocidade++
    }

    definirCaracteristica(cor: string): void {
        this.cor = cor
    }

    abstract ligarTurbo(): void
} 