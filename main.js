const mainContainer = document.querySelector(".main-container")

// choices
const square = document.querySelector("#square")
const circle = document.querySelector("#circle")
const triangle = document.querySelector("#triangle")
const pentagon = document.querySelector("#pentagon")

const display = document.querySelector(".display")

const squareDisplay = document.querySelector(".squareDisplay")
const circleDisplay = document.querySelector(".circleDisplay")
const triangleDisplay = document.querySelector(".triangleDisplay")
const pentagonDisplay = document.querySelector(".pentagonDisplay")

const shapeImgUrls = ["/shapes/square.png", "/shapes/circle.png",
"/shapes/triangle.png", "/shapes/pentagon.png"]

function addSquare() {
    let newSquare = document.createElement("img")
    newSquare.src = shapeImgUrls[0]
    newSquare.style.width = "100px"
    newSquare.style.position = "relative"
    newSquare.style.animation = "move_square 2s infinite"

    display.appendChild(newSquare)
}

function addCircle() {
    let newCircle = document.createElement("img")
    newCircle.src = shapeImgUrls[1]
    newCircle.style.width = "100px"
    newCircle.style.position = "relative"
    newCircle.style.animation = "move_circle 2s infinite"

    display.appendChild(newCircle)
}

function addTriangle() {
    let newTriangle = document.createElement("img")
    newTriangle.src = shapeImgUrls[2]
    newTriangle.style.width = "100px"
    newTriangle.style.position = "relative"
    newTriangle.style.animation = "move_triangle 2s infinite"

    display.appendChild(newTriangle)
}

function addPentagon() {
    let newTriangle = document.createElement("img")
    newTriangle.src = shapeImgUrls[3]
    newTriangle.style.width = "100px"
    newTriangle.style.position = "relative"
    newTriangle.style.animation = "move_pentagon 2s infinite"

    display.appendChild(newTriangle)
}

square.addEventListener("click", addSquare)
circle.addEventListener("click", addCircle)
triangle.addEventListener("click", addTriangle)
pentagon.addEventListener("click", addPentagon)