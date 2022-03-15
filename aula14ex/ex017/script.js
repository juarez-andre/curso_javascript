function calcular() {
    var num = document.getElementById("num")
    var tab = document.getElementById("tabela")
    var cont = 1
    tab.innerHTML = ''
    if (num.value.length == 0 ) {
        alert('Por favor, digite um número!')
    } else {
        while (cont <= 10){
            var item = document.createElement('option')
            item.text = `${Number(num.value)} x ${cont} = ${Number(num.value * cont)}`
            tab.appendChild(item)
            cont++
        }
    }
}