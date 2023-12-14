class Lampada {
    estado = false

    constructor(
        private whatts: number
    ){}

    ligar() {
        if (!this.estado) {
            this.estado = true
        }
    }

    desligar() {
        if (this.estado) {
            this.estado = false
        }
    }

    verificarEstado(): string {
        if (this.estado) {
            return 'Lampada ligada'
        }

        return 'Lampada Desligada'
    }

    getWhatts(): number {
        return this.whatts
    }
}

const lampada = new Lampada(30)

lampada.ligar()
console.log(lampada.verificarEstado());
console.log((lampada.getWhatts()));

