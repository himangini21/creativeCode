
let bloop

let furbyX = []
let furbyY = []

let furby
let furbyMenu
let furbyStickerBool = false

let vaderX = []
let vaderY = []

let vader
let vaderMenu
let vaderStickerBool = false

let appleX = []
let appleY = []

let apple
let appleMenu
let appleStickerBool = false

// let welcomeScreen

let canvas
function preload () {
  furby = loadImage ('furby.png')
  vader = loadImage ('darthVader.png')
  apple = loadImage ('apple.png')
  welcomeScreen = loadImage ('welcomeScreen.jpg')
  bloop = loadSound ('Bloop.mp3')

}

function setup () {

  canvas =createCanvas (windowWidth, windowHeight)
    canvas.style('z-index', '-1')
  canvas.position(0,0)


  furbyMenu = createImg('furby.png')
  furbyMenu.position(10, 20)
  furbyMenu.mouseReleased(furbyStickerDraw)

  vaderMenu = createImg('darthVader.png')
  vaderMenu.position(10,300)
  vaderMenu.mouseReleased(vaderStickerDraw)

  appleMenu = createImg('apple.png')
  appleMenu.position(500,300)
  appleMenu.mouseReleased(appleStickerDraw)
}

function draw () {
    imageMode (CORNERS)
background (welcomeScreen)
  imageMode (CENTER)
   //comments
  //furby sticker stuff
  if(furbyStickerBool==true){
    image(furby, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < furbyX.length; i++) {
    image (furby, furbyX[i], furbyY[i], 60, 60)
  }
    //  x[i]=x[i]+xSpeed[i]
    // if (dist (mouseX, mouseY, furbyX[i], furbyY[i]) < 30) {
    //   x.splice (i, 1)
    //   y.splice (i, 1)
    // }

    // vader sticker stuff
    if(vaderStickerBool==true){
      image(vader, mouseX, mouseY, 60, 60)
    }
    for (let i = 0; i < vaderX.length; i++) {
      image (vader, vaderX[i], vaderY[i], 60, 60)
    }

    if(appleStickerBool==true){
      image(apple, mouseX, mouseY, 60, 60)
    }
    for (let i = 0; i < appleX.length; i++) {
      image (apple, appleX[i], appleY[i], 60, 60)
    }

}


  //flipping the booleans
  function furbyStickerDraw(){
    furbyStickerBool = true
vaderStickerBool = false
appleStickerBool=false
bloop.play()
  }

  function vaderStickerDraw(){
    vaderStickerBool = true
furbyStickerBool = false
appleStickerBool=false
bloop.play()
  }

  function appleStickerDraw(){
    vaderStickerBool = false
furbyStickerBool = false
  appleStickerBool = true
  bloop.play()
}




  function mousePressed(){
    if(furbyStickerBool == true){
      furbyX.push (mouseX)
      furbyY.push (mouseY)
      bloop.play()

    }

    if (vaderStickerBool == true){
    vaderX.push (mouseX)
    vaderY.push (mouseY)
    bloop.play()

  }
  if (appleStickerBool == true){
  appleX.push (mouseX)
  appleY.push (mouseY)
  bloop.play()

}
  }

function keyPressed () {
  // to clear cursor
  if(key == 'Escape') {
  		// cursor()
    vaderStickerBool = false
      	furbyStickerBool= false
        appleStickerBool=false
      }

    if (key == 'x') {
      vaderStickerBool.splice (0, vaderStickerBool)
      furbyStickerBool.splice (0, furbyStickerBool)
    }
}
