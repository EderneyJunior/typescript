class Pessoa {
    constructor(
        private nome: string,
        private idade: number,
        private nomePai: string,
        private nomeMae: string
    ){}

    irmaos(pessoa: Pessoa): boolean {
        return this.nomePai === pessoa.nomePai || this.nomeMae === pessoa.nomeMae
    }

    maisVelha(pessoa: Pessoa): boolean {
        return this.idade > pessoa.idade
    }
}

const ederney = new Pessoa('Ederney', 20, 'Ederney Pedroso', 'Leda')
const nay = new Pessoa('Nayara', 16, 'Ederney Pedroso', 'Leandra')

console.log(ederney.maisVelha(nay));
