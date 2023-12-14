class Pessoa3 {
    private velocidade = 0

    constructor(
        private nome: string,
        private idade: number,
        private sobrenome: string
    ) {}

    private nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }

    andar() {
        this.velocidade += 1
    }

    public get getIdade(): number {
        return this.idade
    }

    public set setIdade(idade: number) {
        this.idade = idade
    }

    public get getNome(): string {
        return this.nomeCompleto()
    }
}

const ederney2 = new Pessoa3('Ederney', 20, 'Pedroso')

ederney2.setIdade = 40

console.log(ederney2.getNome)