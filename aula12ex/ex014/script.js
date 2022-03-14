function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.innerHTML = "<img src='foto-manha.jpg'>"
        document.body.style.background='lightgreen';
    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = "<img src='foto-tarde.jpg'>"
        document.body.style.background='orange'
    } else {
        img.innerHTML = "<img src='foto-noite.jpg'>"
        document.body.style.background='darkblue'
    }
}