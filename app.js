/**
 * Simples simulador de um botao
 * @author Yvis Trindade
 */

const botao = document.getElementById('button')

// Som de efeito
let som = new Audio("sound/psycho-scream-soundbible.mp3");

botao.addEventListener('mousedown', (Event) => {
    Event.preventDefault() // ignorar o comportamento padrão
    //console.log("botao pressionado")
    //se a lampada estiver intacta e o interruptor principal estiver ligado
    som.play()
})

//soltar o botao do mouse
botao.addEventListener('mouseup', (Event) => {
    //console.log("botao solto")
    //se a lampada estiver intacta e o interruptor principal estiver ligado
    som.pause()
})

//pressionar a tela touch e manter
botao.addEventListener('touchstart', (Event) => {
    //console.log("tela pressionado")
    //se a lampada estiver intacta e o interruptor principal estiver ligado
    som.play()
})

//deixarf de preossionar a tela touch
botao.addEventListener('touchend', (Event) => {
    //console.log("a tela nao esta pressionada")
    //se a lampada estiver intacta e o interruptor principal estiver ligado
    som.pause()
})



 
