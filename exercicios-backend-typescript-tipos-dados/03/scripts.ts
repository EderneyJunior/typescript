const tabuada = (numeros: number[]) => {
    for (const numero of numeros) {
        for (let index = 0; index <= 10; index++) {
            console.log(`${numero} x ${index} = ${numero * index}`)
        }
        console.log('------------------------------------------------------')
    }
}

tabuada([1, 5, 2])