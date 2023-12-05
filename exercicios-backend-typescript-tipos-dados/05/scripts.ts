const soletrar = (texto: string): string => {
    const arrayTexto = texto.split('')
    const textoSoletrado = arrayTexto.join('-')
    return textoSoletrado
}

console.log(soletrar('programador'))