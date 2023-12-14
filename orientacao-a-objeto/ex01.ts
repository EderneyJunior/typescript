class Calculadora {
    constructor(
        private numero1: number,
        private numero2: number
    ) {}
    
    public somar(): number {
        return this.numero1 + this.numero2
    }

    public subtrair(): number {
        return this.numero1 - this.numero2
    }

    public multiplicar(): number {
        return this.numero1 * this.numero2
    }

    public dividir(): number {
        return this.numero1 / this.numero2
    }
}

const calculadora = new Calculadora(2, 2)

console.log(calculadora.subtrair())