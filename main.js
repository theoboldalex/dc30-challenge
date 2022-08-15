const keys = document.querySelectorAll('.key')
const hints = document.querySelectorAll('.hints')

function playNote(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`),
        key = document.querySelector(`.key[data-key='${e.keyCode}']`)

    if (!key) return

    const keyNote = key.getAttribute('data-note')

    key.classList.add('playing')
    key.classList.add('hit')
    audio.currentTime = 0
    audio.play()
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
    this.classList.remove('hit')
}

function hintsOn(e, index) {
    e.setAttribute('style', 'transition-delay:' + index * 50 + 'ms')
}

hints.forEach(hintsOn)

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playNote)
