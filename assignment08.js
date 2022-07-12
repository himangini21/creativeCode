
let space
function preload () {
  space = loadImage ('starwarsBg.jpg')
}

let lineBrushBool = false


function setup() {
  createCanvas (800, windowHeight)

}

function draw() {
  background(0, 0, 0)
  image (space, 5, 190)
  // stars
  // circle-shape #1
  fill (245, 252, 40)
  noStroke ()
  circle (30, 30, 7)
  fill (245, 252, 40)
  circle (200, 30, 7)
  fill (245, 252, 40)
  circle (300, 100, 7)
  fill (245, 252, 40)
  circle (80, 100, 7)
  fill (245, 252, 40)
  circle (170, 100, 7)
  fill (245, 252, 40)
  circle (130, 48, 7)
  fill (245, 252, 40)
  circle (340, 38, 7)
  fill (245, 252, 40)
  circle (270, 48, 7)
  fill (245, 252, 40)
  circle (220, 160, 7)

  // more stars
  // point-shape #2
  stroke (245, 252, 40)
  point(40, 320)
  point(270, 270)
  point(180, 380)
  point(280, 320)
  point(50, 220)

  // millennium falcon main body
  // ellipse-shape #3
  fill (255, 255, 255)
  stroke (255, 255, 255)
  ellipse (200, 250, 210, 75)

  // millennium falcon left-wing
  // triangle-shape #4
  fill (255, 255, 255)
  noStroke ()
  triangle (180, 320, 101, 250, 160, 250)

  // millennium falcon right-wing
  fill (255, 255, 255)
  noStroke ()
  triangle (220, 320, 299, 250, 240, 250)

  // millennium falcon inner body
  // rectangle-shape #5
  fill (135, 148, 136)
  rect(125, 230, 150, 40, 5)

  // millennium falcon left-travel lower
  // line-shape #6
  stroke (7, 78, 242)
  strokeWeight(7)
  line (30, 140, 110, 220)

  // millennium falcon left-travel upper
  stroke (7, 78, 242)
  strokeWeight(7)
  line (35, 100, 125, 190)

  // millennium falcon right-travel upper
  stroke (7, 78, 242)
  strokeWeight(7)
  line (270, 190, 360, 100)

  // millennium falcon right-travel lower
  stroke (7, 78, 242)
  strokeWeight(7)
  line(370, 140, 290, 220)

  


fill (246, 252, 245)
textSize (50)
text ('press q to enable the force!', 400, 60)
textAlign (CENTER)

// lightsaber
  if (lineBrushBool == true) {
    lineBrush ()
  }
  if (mouseIsPressed){
    strokeWeight (30)
    fill (111, 232, 90)
    line (pmouseX, pmouseY,mouseX, mouseY)
  }
}


function lineBrush (){
  if (mouseIsPressed){
    strokeWeight (30)
    stroke (111, 232, 90)
    line (pmouseX, pmouseY,mouseX, mouseY)
  }
}

function keyTyped () {
  if (key === 'q') {
    lineBrushBool = true
  }
}
