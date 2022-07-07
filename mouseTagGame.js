
// variables for the position and speed of game object
let xPos
let yPos

let xSpeed = 2
let ySpeed = 2

// game object
let furby

// calculate mouse distacne
let mouseDist

let score = 0

function preload () {
  furby = loadImage ('furby.png')
}

function setup () {
  createCanvas (windowWidth, windowHeight)
  xPos = random (windowWidth)
  yPos = random (windowHeight)

  textAlign (CENTER)
}


function draw () {
  background (0)
  fill (255)
  textSize (50)
  text ("Your score is " + score, windowWidth/2, 50)
  mouseDist = dist (mouseX, mouseY, xPos, yPos)
  print (mouseDist)

  image (furby, xPos, yPos, 50, 50)
  xPos = xPos + ySpeed
  yPos = yPos + ySpeed

  if (xPos >= windowWidth || xPos <= 15) {
    xSpeed = xSpeed * -1
  }

  if (yPos >= windowHeight || yPos <= 15) {
    ySpeed = ySpeed * -1
  }

  if (mouseDist <= 15 ) {
    xPos = random (15, windowWidth - 15)
    yPos = random (15, windowHeight - 15)
    score++
    xSpeed = xSpeed * 1.2
    ySpeed = ySpeed * 1.2
  }


}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight)
}
