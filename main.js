const elTitle = document.querySelector('.title');
const elNum = document.querySelector('.num');
const elCardKey = document.querySelector('.key');
const elKeyLoc = document.querySelector('.key-loc');
const elKeyCode = document.querySelector('.key-code');

window.addEventListener('keydown', (e) => {

    if (e.keyCode) {
        elTitle.innerHTML = `JavaScript Key Code ${e.keyCode}`
    }

    if (e.keyCode) {
        elNum.innerHTML = `${e.keyCode}`
    }

    if (e.keyCode) {
        elCardKey.innerHTML = `${e.key}`
    }

    if (e.location === 0) elKeyLoc.innerHTML = 'General Keys';
    if (e.location === 1) elKeyLoc.innerHTML = 'Left Key';
    if (e.location === 2) elKeyLoc.innerHTML = 'Right Key';
    if (e.location === 3) elKeyLoc.innerHTML = 'Numpad';

    if (e.keyCode) {
        elKeyCode.innerHTML = `${e.code}`
    }
})