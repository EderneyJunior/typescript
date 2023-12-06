const data = JSON.parse('{"name": "Ederney Pedroso"}') as unknown

if(data != null && typeof data == 'object' && 'name' in data && typeof data.name == 'string') {
    console.log(data.name + 'O data.name é uma string')
} else {
    console.log('JSON inválido')
}

try {
    // Gerada uma exeção 
} catch (error) {
    if (
        error !== null &&
        typeof error == 'object' &&
        'message' in error &&
        typeof error.message == 'string'
    ) {
        console.log(error.message)
    }
}