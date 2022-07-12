
let x = []
let y = []

let furby

function preload () {
  furby = loadImage ('furby.png')
}

function setup () {
  createCanvas (windowWidth, windowHeight)
  imageMode (CENTER)
for(i=0;i<50;i++){
  x.push (random(windowWidth))
  y.push (random(windowHeight))
}
}

function draw () { //comments
  background (0)
  for (let i = 0; i < x.length; i++) {
    image (furby, x [i], y [i], 60, 60)
  //  x[i]=x[i]+xSpeed[i]
    if (dist (mouseX, mouseY, x[i], y[i]) < 30) {
      x.splice (i, 1)
      y.splice (i, 1)
    }
  }
}

function keyPressed () {
  if (key === 'a') {
    x.push (random(windowWidth))
    y.push (random(windowHeight))
  }

}
