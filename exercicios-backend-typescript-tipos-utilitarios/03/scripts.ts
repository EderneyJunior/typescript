type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

const conexao = (dados: Conn): Readonly<{ driver: string, url: string }> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

const dados: Conn = {
    username: 'Ederney',
    password: '123456',
    host: 'localhost',
    port: '5432',
    dbname: 'teste'
}

const dadosConexao = conexao(dados)