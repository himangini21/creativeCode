// assign variables at the tope of the code
// global variables == available to the entire sketch and can be called anywhere
// local variables == available to only draw or setup; can only be called to where it was assigned
// = assigns values
// == equals something

let ballX = 300
let ballY = 300

let furby
let baby
// helps preload an image
function preload () {
  furby = loadImage ('furby.png')
  baby = loadImage ('dancingbaby2.gif')
}

function setup () {
  createCanvas (windowWidth, windowHeight)
  background (242, 250, 22)
  print (windowWidth)
}

function draw () {
// mouseX > windowWidth/2 OR mouseY > windowHeight/2
  if (mouseX > windowWidth/2 || mouseY > windowHeight/2) {
    background (200, 20, 200)
  } else {
    background (200, 180, 100)
  }

  text ('hola!', 400, 100)
  ellipse (ballX, ballY, 50, 50)

  image (furby, 25, 25)

  if (mouseIsPressed == true) {
    ballX = windowWidth/2
    ballY = windowHeight/2
      image (baby,400,40)
  } else {
    ballX = 500
    ballY = 500


  }
}

// check to see if window size was changed
function windowResized () {
  resizeCanvas (windowWidth, windowHeight)
}
