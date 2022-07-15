// intro sound effect
// let intro

// sticker sound effect
let bloop

// furby
let furbyX = []
let furbyY = []

let furby
let furbyMenu
let furbyStickerBool = false

// vader
let vaderX = []
let vaderY = []

let vader
let vaderMenu
let vaderStickerBool = false


// apple
let appleX = []
let appleY = []

let apple
let appleMenu
let appleStickerBool = false


//flower
let flowerX = []
let flowerY = []

let flower
let flowerMenu
let flowerStickerBool = false



let canvas

// preload images, videos and sound effects
function preload () {
  furby = loadImage ('furby.png')
  vader = loadImage ('darthVader.png')
  apple = loadImage ('apple.png')
  flower = loadImage ('flower.png')
  welcomeScreen = loadImage ('welcomeScreen.jpg')
  bloop = loadSound ('Bloop.mp3')
  // intro = loadImage ('introAudio.mp3')
}

function setup () {
  canvas =createCanvas (windowWidth, windowHeight)
  canvas.style ('z-index', '-1')
  canvas.position (0,0)

  furbyMenu = createImg ('furby.png')
  furbyMenu.position (10, 20)
  furbyMenu.mouseReleased (furbyStickerDraw)

  vaderMenu = createImg ('darthVader.png')
  vaderMenu.position (10,50)
  vaderMenu.mouseReleased (vaderStickerDraw)

  appleMenu = createImg ('apple.png')
  appleMenu.position (10,80)
  appleMenu.mouseReleased (appleStickerDraw)

  flowerMenu = createImg ('flower.png')
  flowerMenu.position (10,110)
  flowerMenu.mouseReleased (flowerStickerDraw)
}

function draw () {
  imageMode (CORNERS)
  background (welcomeScreen)
  imageMode (CENTER)
  // intro.play ()
  //furby sticker
  if (furbyStickerBool == true){
    image (furby, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < furbyX.length; i++) {
    image (furby, furbyX[i], furbyY[i], 60, 60)
  }
  // vader sticker
  if (vaderStickerBool == true){
    image (vader, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < vaderX.length; i++) {
    image (vader, vaderX[i], vaderY[i], 60, 60)
  }
  // apple sticker
  if (appleStickerBool==true){
    image (apple, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < appleX.length; i++) {
    image (apple, appleX[i], appleY[i], 60, 60)
  }
  // flower sticker
  if (flowerStickerBool==true){
    image (flower, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < flowerX.length; i++) {
    image (flower, flowerX[i], flowerY[i], 60, 60)
  }
}

// resizing images
function mousePressed () {
  furby.rezie (50, 50)
  vader.resize (50, 50)
  apple.resize (50, 50)
  flower.resize (50, 50)
}

// flipping the booleans
// furby is on
function furbyStickerDraw (){
  furbyStickerBool = true
  vaderStickerBool = false
  appleStickerBool = false
  flowerStickerBool = false
  bloop.play()
}

// vader is on
function vaderStickerDraw(){
  vaderStickerBool = true
  furbyStickerBool = false
  appleStickerBool = false
  flowerStickerBool = false
  bloop.play()
}

// apple is on
function appleStickerDraw(){
  appleStickerBool = true
  vaderStickerBool = false
  furbyStickerBool = false
  flowerStickerBool = false
  bloop.play()
}

// flower is on
function flowerStickerDraw () {
  flowerStickerBool = true
  furbyStickerBool = false
  vaderStickerBool = false
  appleStickerBool = false
  bloop.play()
}

// sticker is placed
function mousePressed () {
  // furby is placed
  if (furbyStickerBool == true) {
    furbyX.push (mouseX)
    furbyY.push (mouseY)
    bloop.play()
  }
  // vader is placed
  if (vaderStickerBool == true) {
    vaderX.push (mouseX)
    vaderY.push (mouseY)
    bloop.play()
  }
  // apple is placed
  if (appleStickerBool == true) {
    appleX.push (mouseX)
    appleY.push (mouseY)
    bloop.play()
  }
  // flower is placed
  if (flowerStickerBool == true) {
    flowerX.push (mouseX)
    flowerY.push (mouseY)
    bloop.play()
  }
}

function keyPressed () {
  // to clear cursor
  if(key == 'Escape') {
    vaderStickerBool = false
    furbyStickerBool = false
    appleStickerBool = false
    flowerStickerBool = false
  }
  // to clear entire board
  if (key == 'x') {
    furbyX.splice (0, furbyX.length)
    furbyY.splice (0, furbyY.length)

    vaderX.splice(0, vaderX.length)
    vaderY.splice(0, vaderY.length)

    appleX.splice(0, appleX.length)
    appleY.splice(0, appleY.length)

    flowerX.splice(0, flowerX.length)
    flowerY.splice(0, flowerY.length)
  }
}
