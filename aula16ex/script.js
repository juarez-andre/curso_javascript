function guardar() {
    var num = document.getElementById("num")
    var tab = document.getElementById("tabela")
    if (Number(num.value.length) == 0 || Number(num.value) > 100 || Number(num.value) < 0) {
        alert('Por favor, digite um valor válido!')
    } else {
        var lista = []
        lista.push(Number(num.value))
    }


}