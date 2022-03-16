function parimpar(n) {
    if ( n % 2 == 0) {
        return "Par!"
    } else {
        return "Ímpar!"
    }
}

parimpar(4) // Não funciona pois não está dentro deu uma variável.

let res = parimpar(4) // Agora sim.

console.log(parimpar(4)) // Assim também dá pra mostrar.