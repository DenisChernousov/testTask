const button = document.getElementById('btn')


const blue = document.querySelector(".blue")
const pink = document.querySelector(".pink")
const green = document.querySelector(".green")
const yellow = document.querySelector(".yellow")
const colors = ["#cfe2ff", "#f8d7da", "#d1e7dd", "#fff3cd"]

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
function handleClick() {

    blue.style.backgroundColor = colors[getRandomNumber()]
    pink.style.backgroundColor = colors[getRandomNumber()]
    green.style.backgroundColor = colors[getRandomNumber()]
    yellow.style.backgroundColor = colors[getRandomNumber()]
}

button.addEventListener('click', handleClick)