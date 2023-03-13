elementHunch = document.getElementById('palpite')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener("result", (event) =>{
    spokenNumber = event.results[0][0].transcript
    receivedWord(spokenNumber)
    validateData(spokenNumber)
})

function receivedWord(spokenNumber){
    elementHunch.innerHTML = `
    <div>o número falado foi</div>
    <span class="box">${spokenNumber}</span>
    `
}

recognition.addEventListener("end", () => {
    recognition.start()
})