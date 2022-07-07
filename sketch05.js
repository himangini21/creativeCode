function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0);
  // stars
  // circle-shape #1
  fill (245, 252, 40)
  circle (30, 30, 13)
  fill (245, 252, 40)
  circle (200, 30, 13)
  fill (245, 252, 40)
  circle (300, 100, 13)
  fill (245, 252, 40)
  circle (80, 100, 13)
  fill (245, 252, 40)
  circle (170, 100, 13)
  fill (245, 252, 40)
  circle (130, 48, 13)
  fill (245, 252, 40)
  circle (340, 38, 13)
  fill (245, 252, 40)
  circle (270, 48, 13)
  fill (245, 252, 40)
  circle (220, 160, 13)

  // more stars
  // point-shape #2
  stroke (245, 252, 40)
  point(40, 320)
  point(370, 350)
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

  // death star pointer-ray
  fill (117, 250, 142)
  stroke (5,5,5)
  circle (mouseX, mouseY, 20)
}
