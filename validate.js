function validateData(spokenNumber) {
    number = +spokenNumber


    if (Number.isNaN(number)) {
        if (spokenNumber === "desisto") {
            document.body.style.backgroundImage = "url('rickmortyshocked.PNG')"
            document.body.innerHTML = `
            <h2 class="desistente">Veja Morty, um desistente</h2>
            <h4 class="desistente">Rick, vamos dar outra chance?</h4>
            <button id="play-again" class="playagain">Play Again</button>`
        } else {
        elementHunch.innerHTML += '<div class="nan">Fale apenas Números</div>'
        return
        }
    }

    if (notPossible(number)) {
        elementHunch.innerHTML += `<div class="nan"> Fale apenas números que estão entre as possibilidades conforme opções
        ${menorNumero} e ${maiorNumero}</div>`
        return
    }

    if (number === numeroAleatorio) {
        document.body.style.backgroundImage = "url('rickmorty.PNG')"
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h4>o número Aleatório era ${numeroAleatorio} </h4> 
        <button id="play-again" class="playagain">Play Again </button>
        `
    } else if (number < numeroAleatorio) {
        elementHunch.innerHTML += '<div>o número Aleatório é Maior <i class="fa-solid fa-hand-point-up"></i></div>'
        return
    } else {
        elementHunch.innerHTML += '<div>o número Aleatório é Menor <i class="fa-solid fa-hand-point-down"></i></div>'
        return
    }
    

}

function notPossible(number) {
    return number < menorNumero || number > maiorNumero
}

document.body.addEventListener('click', (event)=>{
    if (event.target.id === 'play-again') {
        window.location.reload()
    }
})