
let buttons = document.getElementsByClassName('button')
const audio = document.getElementsByClassName('audio')


function sound(pos) {
    if (audio[pos]) {
        audio[pos].play()
    }
}