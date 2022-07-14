
// variables for the position and speed of game object
let xPos
let yPos

let xSpeed = 2
let ySpeed = 2

// game object
let darthVader

let titleFont

// calculate mouse distacne
let mouseDist

let score = 0

// bloop sound
let bloop

// game state booleans
let startGameBool = true
let winScreenBool = false

let rotation = 0



function preload () {
  darthVader = loadImage ('darthVader.png')
  titleFont = loadFont ('Starjedi.ttf')
}

function setup () {
  createCanvas (windowWidth, windowHeight)
  xPos = random (windowWidth)
  yPos = random (windowHeight)

  textAlign (CENTER)
  imageMode (CENTER)
}


function draw () {
  if (startGameBool == true){
  startGame ()
  }

  if (winScreenBool == true){
    winScreen ()
  }
}

// game screens
function startGame () {
  background (0)

  // score text
  fill (255)
  textFont ('Helvetica')
  noStroke ()
  textSize (25)
  text ("click on darth vader to freeze him",windowWidth/2, 150)
  fill (0)
  textFont (titleFont)
  fill(255, 204, 0)
  strokeWeight(4)
  textSize (80)
  text ("START",windowWidth/2, 100)
  mouseDist = dist (mouseX, mouseY, xPos, yPos)
  print (mouseDist)

  image (darthVader, xPos, yPos, 70, 120)
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
    bloop.play()

  if (score >=5){
    startGameBool = false
    winScreenBool = true
  }
  }

}

function winScreen() {
  background (200, 30, 100)
  fill (255)
  textSize (50)
  text ("You Won!!", windowWidth/2, 50)

}


function windowResized () {
  resizeCanvas (windowWidth, windowHeight)
}
