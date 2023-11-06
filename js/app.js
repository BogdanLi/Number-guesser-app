const display = document.getElementById("displayNum")
const higherBtn = document.getElementById("higherBtn")
const lowerBtn = document.getElementById("lowerBtn")

const gameUi = document.querySelector("#game-ui")

const yesBtn = document.getElementById("yesBtn")

const startBtn = document.getElementById("startBtn")
const restartBtn = document.getElementById("restartBtn")

const totalCount = document.getElementById("totalCount")

let arr, low, high, mid;
let counter = 0

restartGame()


startBtn.addEventListener("click", startGame)
restartBtn.addEventListener("click", restartGame)

lowerBtn.addEventListener("click", lower)
higherBtn.addEventListener("click", higher)

yesBtn.addEventListener("click", win)

function startGame(){
    restartBtn.style.display = 'inline-block'
    startBtn.style.display = 'none'
    showUi()
    changeCounter()
    renderDisplay()
}

// ? Functions
// Restart
function restartGame(){
    restartBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
    gameUi.classList.add("opacity-0")
    arr = []

    for (let i = 1; i < 2049; i++){
        arr.push(i)
    }

    low = 0
    high = arr.length - 1
    mid = parseInt(arr.length / 2 - 1)

    display.textContent = "0"
    counter = 0
    totalCount.textContent = `Total counts: ${counter}`
}

// Show ui
function showUi(){
    gameUi.classList.remove("opacity-0")
}

// Render number
function renderDisplay() {
    console.log(arr[mid]);
    display.textContent = arr[mid]
}

// Number is lower
function lower() {
    arr = arr.slice(low, mid)
    mid = parseInt(arr.length / 2)
    renderDisplay()
    changeCounter()
}

// Number is higher
function higher(){
    arr = arr.slice(mid, high)
    mid = parseInt(arr.length / 2)
    renderDisplay()
    changeCounter()
}

// Counter changes
function changeCounter(){
    counter++
    totalCount.textContent = `Total counts: ${counter}`
}

// Guessed number
function win(){
    alert("I guessed in " + counter + " tries");
}