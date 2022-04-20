const perguntas = document.querySelectorAll('.item-lista-faq')
const setas = document.querySelectorAll('.seta')

perguntas.forEach(function(item, seta){
    item.addEventListener('click', function (){
        const itemAtivoAtual = document.querySelector('.aberto')

        if(itemAtivoAtual) {
            itemAtivoAtual.classList.remove('aberto')
            setas.forEach(function(seta){
                seta.setAttribute('src', 'src/imagens/seta cinza.png')
            })
        }
        
        item.classList.add('aberto')
        setas[seta].setAttribute('src', 'src/imagens/seta vermelha.png')
    })
})