/**
 * Simples simulador de um botao
 * @author Yvis Trindade
 */

const botao = document.getElementById('button')

// Som de efeito
let som = new Audio("sound/psycho-scream-soundbible.mp3");

// lanterna (pré carregamento)
let stream, track // variaveis de apoio
inicializarLanterna()


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
    Event.preventDefault()
    //console.log("tela pressionado")
    //se a lampada estiver intacta e o interruptor principal estiver ligado
    som.play()
    inicializarLanterna() 
    ligar()
})

//deixarf de preossionar a tela touch
botao.addEventListener('touchend', (Event) => {
    //console.log("a tela nao esta pressionada")
    //se a lampada estiver intacta e o interruptor principal estiver ligado
    som.pause()
    inicializarLanterna() 
    desligar()
})

//Lanterna (torch)
async function inicializarLanterna() {
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })

        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]

        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

// Função para ligar a lanterna (torch)
async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

// Função para desligar a lanterna sem parar o stream
async function desligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}


 
