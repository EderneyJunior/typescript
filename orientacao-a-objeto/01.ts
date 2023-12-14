class Carro2 {
    cor: string = 'preto'
    marca: string = 'volkswagen'
    modelo: string = 'fusca'
    ano: number = 1970
    potencia: number = 90
}

const carro = new Carro2()
carro.cor = 'cinza'

console.log(carro)