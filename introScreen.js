let moon

function preload() {
  moon = loadImage('moon.png')
}

function draw() {
  image(moon, 0, 0)
}

function mousePressed() {
  moon.resize(50, 40)
}
