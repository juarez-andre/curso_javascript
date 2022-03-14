function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebe-masc.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-masc.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-masc.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-masc.jpg')
            }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //crianca
            img.setAttribute('src', 'bebe-fem.jpg')
        } else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'jovem-fem.jpg')
        } else if (idade < 50) {
            // adulto
            img.setAttribute('src', 'adulto-fem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-fem.jpg')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).<br>`
    res.appendChild(img) // Faz a imagem aparecer
}   