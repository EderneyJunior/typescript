// null, undefined, void, never

//null
//undefined

function example(callback: () => void) {
    callback()
}

example(() => 123)

function hello(param: string | number) {
    if (typeof param == 'string') {
        return param
    } else if (typeof param == 'number') {
        return param
    } else {
        return param
    }
}