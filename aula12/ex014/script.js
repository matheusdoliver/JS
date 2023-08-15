function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem') 
    
    let data = new Date()
    let hora = data.getHours()

    
    
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora < 17){
        //Boa tarde
       img.src = 'imagens/tarde.jpg'
       document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}
