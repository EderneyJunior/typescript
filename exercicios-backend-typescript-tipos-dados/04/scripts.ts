const gerarEtiqueta = (
    objetoProduto: {
        produto: string,
        lote: number,
        ano: number,
        qtd: number
    }
): string[] => {
    let resultado: string[] = []

    for (let i = 1; i < objetoProduto.qtd + 1; i++) {
        resultado.push(`${objetoProduto.lote}-${objetoProduto.ano}-${String(i).padStart(3, '0')}`)
    }
    return resultado
}


const objeto: {
        produto: string,
        lote: number,
        ano: number,
        qtd: number
    } = {
        produto: 'CPU Dual Core 3.0GHZ',
        lote: 321,
        ano: 2022,
        qtd: 5
    }

console.log(gerarEtiqueta(objeto))