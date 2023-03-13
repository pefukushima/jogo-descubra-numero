const menorNumero = 1
const maiorNumero = 999
const numeroAleatorio = randomNumber()

function randomNumber(){
    return parseInt(Math.random() * maiorNumero + 1)
}

console.log(numeroAleatorio)

const elementoMenor = document.getElementById('menor-numero')
elementoMenor.innerHTML = menorNumero

const elementoMaior = document.getElementById('maior-numero')
elementoMaior.innerHTML = maiorNumero