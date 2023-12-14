export class Usuario {
    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        private senha: string,
    ){}

    autenticar(senha: string): string {
        if (senha === this.senha) {
            return 'Usuario logado'
        }

        return 'Senha inválida'
    }
}