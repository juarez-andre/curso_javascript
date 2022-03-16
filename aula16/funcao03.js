// LOGICA DE UMA FUNÇÃO QUE CALCULA FATORIAL

function fatorial(n) {
    fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// UMA FUNÇÃO QUE CHAMA ELA MESMA DENTRO DE SI - RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))