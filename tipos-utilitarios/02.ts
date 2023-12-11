// Record<keys, type>

type Carro = {
    ano: number,
    cor: string
}

type Propriedades = 'Gol' | 'Palio' | 'Fusca'

const carros: Record<Propriedades, Carro> = {
    Gol: {
        ano: 2021,
        cor: 'Branco'
    },
    Fusca: {
        ano: 2021,
        cor: 'Branco'
    },
    Palio: {
        ano: 2021,
        cor: 'Branco'
    }
}