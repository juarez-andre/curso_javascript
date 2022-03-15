function contar() {
    var i = document.getElementById("com")
    var f = document.getElementById("fim")
    var p = document.getElementById("passo")
    var res = document.getElementById("res")
    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML += `Impossível contar!`
        window.alert('[ERRO] Faltam dados!')    
    } else {
        res.innerHTML = 'Contando: '
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} ` // Unicode Emoji List
            }
        } else {
            for (var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c}`
            }
        }
    }
}
    