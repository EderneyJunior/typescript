// Pick<type, keys>
// Omit<type, keys>

type Pessoa = {
    nome: string,
    idade: number,
    email: string
}

type NovoUsuario = Pick<Pessoa, 'nome' | 'idade'>
type NovoUsuario2 = Omit<Pessoa, 'email'>

const ederney: NovoUsuario = {
    nome: 'Ederney',
    idade: 20
}

const ederney2:NovoUsuario2 = {
    nome: 'Ederney',
    idade: 20
}