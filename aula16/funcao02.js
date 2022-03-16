function soma(n1, n2) {
    return n1 + n2
}

/*
DÁ PRA ESCREVER ASSIM TAMBÉM

var x = function(n1, n2){
    return n1 + n2
}
*/


///

console.log(soma(2, 5)) // Se aqui eu passasse apenas um parâmetro, o segundo parâmetro fica como "Undefined" e essa linha retorna "NaN".

// PARA RESOLVER O PROBLEMA ACIMA, PODEMOS USAR PARÂMETROS OPCIONAIS

function soma(n1=0, n2=0) {
    return n1 + n2
}       