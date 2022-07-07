
let lineBrushBool = false
let squareBrushBool = false

function setup () {
  createCanvas (windowWidth, windowHeight)
  rectMode (CENTER)
  background (255)
}

// draw is repetitive
function draw () {
  if (lineBrushBool == true) {
    lineBrush ()
  }

  if (squareBrushBool == true) {
    squareBrush ()
  }
}

//  if (mouseIsPressed) {
//    stroke (random (255), random (255), random (255))
//    fill (random (255), random (255), random (255))
//    rect (mouseX, mouseY, 50, 50)
//  }
//
//  if (mouseIsPressed){
//    strokeWeight (5)
//    fill (random (255), random (255), random (255))
//    line (pmouseX, pmouseY,mouseX, mouseY)
//  }
//}

// custom line brush function

function lineBrush (){
  if (mouseIsPressed){
    strokeWeight (5)
    stroke (random (255), random (255), random (255))
    line (pmouseX, pmouseY,mouseX, mouseY)
  }
}

function squareBrush (){
  if (mouseIsPressed) {
    stroke (random (255), random (255), random (255))
    fill (random (255), random (255), random (255))
    rect (mouseX, mouseY, 50, 50)
  }
}

// three equal signs mean EXACTLY

function keyTyped () {
  if (key === 'q') {
    lineBrushBool = true
    squareBrushBool = false
  }
  if (key === 'a') {
    squareBrushBool = true
    lineBrushBool = false
  }
  if (key === 's'){
    save ('drawing.jpg')
  }
}
