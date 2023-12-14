class Pessoa2 {
    constructor(
        public nome: string,
        public idade: number
    ) {}
}

const pessoa = new Pessoa2('Ederney', 20)
// pessoa.nome = 'Ana'

console.log(pessoa);
