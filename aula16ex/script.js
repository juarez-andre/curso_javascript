var lista = []
function guardar() {
    var num = document.getElementById("num")
    var tab = document.getElementById("tabela")
    if (insights.length != 0){
        insights.innerHTML = ''
    }
    if (Number(num.value.length) == 0 || Number(num.value) > 100 || Number(num.value) < 0) {
        window.alert('Por favor, digite um valor válido!')
    } else {
        lista.push(Number(num.value))
        var item = document.createElement("option")
        item.text += `O valor ${Number(num.value)} foi adicionado.`
        tab.appendChild(item)
    }
}
function mostrar() {
    var num = document.getElementById("num")
    var insights = document.getElementById("insights")
    var maior = lista[0]
    var menor = lista[0]
    var soma = 0
    for (var c in lista) {
        if (lista[c] > maior) {
            maior = lista[c]
        }
        if (lista[c] < menor) {
            menor = lista[c]
        }
    }
    for (var c in lista) {
        soma += Number(lista[c])
    }
    var media = soma / lista.length

    insights.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p><p>O maior valor informado foi ${maior}.</p><p>O menor valor informado foi ${menor}.</p><p>O valor da soma dos valores digitados é ${soma}.</p><p>A média dos valores digitados é ${media}.</p>`
    
}