const cadastro2 = (info?: { nome: string, valor?: number }) => {
    console.log(`Você cadastrou ${info!.nome}`)
}

cadastro2({
    nome: 'gol'
})