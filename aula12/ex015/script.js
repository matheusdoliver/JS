function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.querySelector('p#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO] verifique seus dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = window.document.getElementById('foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >=0 && idade <10) {
                //Criança
                img.src = 'imagens/bebemasculino.jpg'
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.src = 'imagens/jovemmasculino.jpg'
            } else if (idade >=21 && idade < 50) {
                //Adulto
                img.src = 'imagens/adultomasculino.jpg'
            } else if (idade >=50 && idade <150) {
                //Idoso
                img.src = 'imagens/idosomasculino.jpg'
            }

        
        
        
        
        
        } else if (fsex[1].checked){
            genero = 'Mulher'

            if (idade >=0 && idade <10) {
                //Criança
                img.src = 'imagens/bebefeminino.jpg'
            } else if (idade >=10 && idade < 21) {
                //Jovem
                img.src = 'imagens/jovemfeminino.jpg'
            } else if (idade >=21 && idade < 50) {
                //Adulto
                img.src = 'imagens/adultofeminino.jpg'
            } else if (idade >=50 && idade <150) {
                //Idoso
                img.src = 'imagens/idosafeminino.jpg'
            }

        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
        
    }
}