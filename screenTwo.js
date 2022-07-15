
// instructionInfo
// let instructionInfo

// main background audio
let introAudio

// sticker sound effect
let bloop

// moon
let moonX = []
let moonY = []
let moon
let moonMenu
let moonStickerBool = false

// butterfly
let butterflyX = []
let butterflyY = []
let butterfly
let butterflyMenu
let butterflyStickerBool = false

// heart
let heartX = []
let heartY = []
let heart
let heartMenu
let heartStickerBool = false

// flower
let flowerX = []
let flowerY = []
let flower
let flowerMenu
let flowerStickerBool = false

// rainbow
let rainbowX = []
let rainbowY = []
let rainbow
let rainbowMenu
let rainbowStickerBool = false

// saturn
let saturnX = []
let saturnY = []
let saturn
let saturnMenu
let saturnStickerBool = false

// plant
let plantX = []
let plantY = []
let plant
let plantMenu
let plantStickerBool = false

// helloKitty
let helloKittyX = []
let helloKittyY = []
let helloKitty
let helloKittyMenu
let helloKittyStickerBool = false

// swan
let swanX = []
let swanY = []
let swan
let swanMenu
let swanStickerBool = false

// clock
let clockX = []
let clockY = []
let clock
let clockMenu
let clockStickerBool = false

// book
let bookX = []
let bookY = []
let book
let bookMenu
let bookStickerBool = false

// turtle
let turtleX = []
let turtleY = []
let turtle
let turtleMenu
let turtleStickerBool = false

// phone
let phoneX = []
let phoneY = []
let phone
let phoneMenu
let phoneStickerBool = false

// lol
let lolX = []
let lolY = []
let lol
let lolMenu
let lolStickerBool = false

// legallyBlonde
let legallyBlondeX = []
let legallyBlondeY = []
let legallyBlonde
let legallyBlondeMenu
let legallyBlondeStickerBool = false

// dearDiary
let dearDiaryX = []
let dearDiaryY = []
let dearDiary
let dearDiaryMenu
let dearDiaryStickerBool = false

// smileyFace
let smileyFaceX = []
let smileyFaceY = []
let smileyFace
let smileyFaceMenu
let smileyFaceStickerBool = false

// threeHeart
let threeHeartX = []
let threeHeartY = []
let threeHeart
let threeHeartMenu
let threeHeartStickerBool = false

// xoxo
let xoxoX = []
let xoxoY = []
let xoxo
let xoxoMenu
let xoxoStickerBool = false

// wink
let winkX = []
let winkY = []
let wink
let winkMenu
let winkStickerBool = false

// XD
let xdX = []
let xdY = []
let xd
let xdMenu
let xdStickerBool = false

let canvas

// preload images, videos and sound effects
function preload () {
  moon = loadImage ('moon.png')
  butterfly = loadImage ('butterfly.png')
  heart = loadImage ('heart.png')
  flower = loadImage ('flower.png')
  rainbow = loadImage ('rainbow.PNG')
  saturn = loadImage ('saturn.PNG')
  plant = loadImage ('plant.PNG')
  helloKitty = loadImage ('helloKitty.PNG')
  swan = loadImage ('swan.PNG')
  clock = loadImage ('clock.PNG')
  book = loadImage ('book.PNG')
  turtle = loadImage ('turtle.PNG')
  phone = loadImage ('phone.PNG')
  lol = loadImage ('lol.PNG')
  legallyBlonde = loadImage ('legallyBlonde.PNG')
  dearDiary = loadImage ('dearDiary.PNG')
  smileyFace = loadImage ('smileyFace.PNG')
  threeHeart = loadImage ('threeHeart.PNG')
  xoxo = loadImage ('xoxo.PNG')
  wink = loadImage ('wink.PNG')
  xd = loadImage ('xd.PNG')
  instructionInfo = loadImage ('instructionInfo.JPEG')
  welcomeScreen = loadImage ('welcomeScreen2.jpg')
  bloop = loadSound ('Bloop.mp3')
  introAudio = loadSound ('introAudio.mp3')
}

function setup () {
  canvas = createCanvas (windowWidth, windowHeight)
  canvas.style ('z-index', '-1')
  canvas.position (0,0)

  moonMenu = createImg ('moon.png')
  moonMenu.position (25, 80)
  moonMenu.mouseReleased (moonStickerDraw)
  moonMenu.style('width', '50px')
  moonMenu.style('height', '50px')

  butterflyMenu = createImg ('butterfly.png')
  butterflyMenu.position (30, 150)
  butterflyMenu.mouseReleased (butterflyStickerDraw)
  butterflyMenu.style('width', '50px')
  butterflyMenu.style('height', '50px')

  heartMenu = createImg ('heart.png')
  heartMenu.position (108, 85)
  heartMenu.mouseReleased (heartStickerDraw)
  heartMenu.style ('width', '50px')
  heartMenu.style ('height', '50px')

  flowerMenu = createImg ('flower.png')
  flowerMenu.position (108, 150)
  flowerMenu.mouseReleased (flowerStickerDraw)
  flowerMenu.style ('width', '50px')
  flowerMenu.style ('height', '50px')

  rainbowMenu = createImg ('rainbow.PNG')
  rainbowMenu.position (30, 220)
  rainbowMenu.mouseReleased (rainbowStickerDraw)
  rainbowMenu.style ('width', '50px')
  rainbowMenu.style ('height', '50px')

  saturnMenu = createImg ('saturn.PNG')
  saturnMenu.position (107, 220)
  saturnMenu.mouseReleased (saturnStickerDraw)
  saturnMenu.style ('width', '50px')
  saturnMenu.style ('height', '50px')

  plantMenu = createImg ('plant.PNG')
  plantMenu.position (30, 290)
  plantMenu.mouseReleased (plantStickerDraw)
  plantMenu.style ('width', '50px')
  plantMenu.style ('height', '50px')

  helloKittyMenu = createImg ('helloKitty.PNG')
  helloKittyMenu.position (30, 290)
  helloKittyMenu.mouseReleased (helloKittyStickerDraw)
  helloKittyMenu.style ('width', '50px')
  helloKittyMenu.style ('height', '50px')

  swanMenu = createImg ('swan.PNG')
  swanMenu.position (106, 290)
  swanMenu.mouseReleased (swanStickerDraw)
  swanMenu.style ('width', '50px')
  swanMenu.style ('height', '50px')

  clockMenu = createImg ('clock.PNG')
  clockMenu.position (30, 355)
  clockMenu.mouseReleased (clockStickerDraw)
  clockMenu.style ('width', '50px')
  clockMenu.style ('height', '60px')

  bookMenu = createImg ('book.PNG')
  bookMenu.position (107, 360)
  bookMenu.mouseReleased (bookStickerDraw)
  bookMenu.style ('width', '50px')
  bookMenu.style ('height', '50px')

  turtleMenu = createImg ('turtle.PNG')
  turtleMenu.position (30, 440)
  turtleMenu.mouseReleased (turtleStickerDraw)
  turtleMenu.style ('width', '50px')
  turtleMenu.style ('height', '50px')

  phoneMenu = createImg ('phone.PNG')
  phoneMenu.position (103, 435)
  phoneMenu.mouseReleased (phoneStickerDraw)
  phoneMenu.style ('width', '50px')
  phoneMenu.style ('height', '50px')

  lolMenu = createImg ('lol.PNG')
  lolMenu.position (20, 545)
  lolMenu.mouseReleased (lolStickerDraw)
  lolMenu.style ('width', '50px')
  lolMenu.style ('height', '50px')

  legallyBlondeMenu = createImg ('legallyBlonde.PNG')
  legallyBlondeMenu.position (90, 550)
  legallyBlondeMenu.mouseReleased (legallyBlondeStickerDraw)
  legallyBlondeMenu.style ('width', '200px')
  legallyBlondeMenu.style ('height', '40px')

  dearDiaryMenu = createImg ('dearDiary.PNG')
  dearDiaryMenu.position (300, 550)
  dearDiaryMenu.mouseReleased (dearDiaryStickerDraw)
  dearDiaryMenu.style ('width', '190px')
  dearDiaryMenu.style ('height', '40px')

  smileyFaceMenu = createImg ('smileyFace.PNG')
  smileyFaceMenu.position (500, 545)
  smileyFaceMenu.mouseReleased (smileyFaceStickerDraw)
  smileyFaceMenu.style ('width', '50px')
  smileyFaceMenu.style ('height', '50px')

  threeHeartMenu = createImg ('threeHeart.PNG')
  threeHeartMenu.position (560, 545)
  threeHeartMenu.mouseReleased (threeHeartStickerDraw)
  threeHeartMenu.style ('width', '50px')
  threeHeartMenu.style ('height', '50px')

  xoxoMenu = createImg ('xoxo.PNG')
  xoxoMenu.position (620, 545)
  xoxoMenu.mouseReleased (xoxoStickerDraw)
  xoxoMenu.style ('width', '50px')
  xoxoMenu.style ('height', '50px')

  winkMenu = createImg ('wink.PNG')
  winkMenu.position (680, 545)
  winkMenu.mouseReleased (winkStickerDraw)
  winkMenu.style ('width', '50px')
  winkMenu.style ('height', '50px')

  xdMenu = createImg ('xd.PNG')
  xdMenu.position (740, 545)
  xdMenu.mouseReleased (xdStickerDraw)
  xdMenu.style ('width', '50px')
  xdMenu.style ('height', '50px')
}

function draw () {
  imageMode (CORNERS)
  background (welcomeScreen)
  imageMode (CENTER)
  // introAudio.play()

  // vertical menu bar rectangle
  fill (250, 212, 241)
  stroke (227, 159, 211)
  rect (20, 70, 80, 70)
  rect (20, 140, 80, 200)
  rect (20, 210, 80, 80)
  rect (20, 280, 80, 80)
  rect (20, 350, 80, 80)
  rect (20, 420, 80, 82)
  rect (90, 70, 80, 80)
  rect (90, 140, 80, 80)
  rect (90, 210, 80, 80)
  rect (90, 280, 80, 80)
  rect (90, 350, 80, 80)
  rect (90, 420, 80, 82)
  //introAudio.play ()

  // horizontal menu bar rectangle
  rect (10, 540, 800, 60)

  //image (instructionInfo, 900, 500)



  // moon sticker
  if (moonStickerBool == true){
    image (moon, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < moonX.length; i++) {
    image (moon, moonX[i], moonY[i], 60, 60)
  }
  // butterfly sticker
  if (butterflyStickerBool == true){
    image (butterfly, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < butterflyX.length; i++) {
    image (butterfly, butterflyX[i], butterflyY[i], 60, 60)
  }
  // heart sticker
  if (heartStickerBool == true){
    image (heart, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < heartX.length; i++) {
    image (heart, heartX[i], heartY[i], 60, 60)
  }
  // flower sticker
  if (flowerStickerBool == true){
    image (flower, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < flowerX.length; i++) {
    image (flower, flowerX[i], flowerY[i], 60, 60)
  }
  // rainbow sticker
  if (rainbowStickerBool == true){
    image (rainbow, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < rainbowX.length; i++) {
    image (rainbow, rainbowX[i], rainbowY[i], 80, 60)
  }
  // saturn sticker
  if (saturnStickerBool == true){
    image (saturn, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < saturnX.length; i++) {
    image (saturn, saturnX[i], saturnY[i], 60, 60)
  }
  // plant sticker
  if (plantStickerBool == true){
    image (plant, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < plantX.length; i++) {
    image (plant, plantX[i], plantY[i], 60, 60)
  }
  // helloKitty sticker
  if (helloKittyStickerBool == true){
    image (helloKitty, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < helloKittyX.length; i++) {
    image (helloKitty, helloKittyX[i], helloKittyY[i], 60, 60)
  }
  // swan sticker
  if (swanStickerBool == true){
    image (swan, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < swanX.length; i++) {
    image (swan, swanX[i], swanY[i], 60, 60)
  }
  // clock sticker
  if (clockStickerBool == true){
    image (clock, mouseX, mouseY, 60, 70)
  }
  for (let i = 0; i < clockX.length; i++) {
    image (clock, clockX[i], clockY[i], 60, 110)
  }
  // book sticker
  if (bookStickerBool == true){
    image (book, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < bookX.length; i++) {
    image (book, bookX[i], bookY[i], 60, 60)
  }
  // turtle sticker
  if (turtleStickerBool == true){
    image (turtle, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < turtleX.length; i++) {
    image (turtle, turtleX[i], turtleY[i], 60, 60)
  }
  // phone sticker
  if (phoneStickerBool == true){
    image (phone, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < phoneX.length; i++) {
    image (phone, phoneX[i], phoneY[i], 60, 60)
  }
  // lol sticker
  if (lolStickerBool == true){
    image (lol, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < lolX.length; i++) {
    image (lol, lolX[i], lolY[i], 60, 60)
  }
  // legallyBlonde sticker
  if (legallyBlondeStickerBool == true){
    image (legallyBlonde, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < legallyBlondeX.length; i++) {
    image (legallyBlonde, legallyBlondeX[i], legallyBlondeY[i], 160, 55)
  }
  // dearDiary sticker
  if (dearDiaryStickerBool == true){
    image (dearDiary, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < dearDiaryX.length; i++) {
    image (dearDiary, dearDiaryX[i], dearDiaryY[i], 150, 50)
  }
  // smileyFace sticker
  if (smileyFaceStickerBool == true){
    image (smileyFace, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < smileyFaceX.length; i++) {
    image (smileyFace, smileyFaceX[i], smileyFaceY[i], 60, 60)
  }
  // threeHeart sticker
  if (threeHeartStickerBool == true){
    image (threeHeart, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < threeHeartX.length; i++) {
    image (threeHeart, threeHeartX[i], threeHeartY[i], 60, 60)
  }
  // xoxo sticker
  if (xoxoStickerBool == true){
    image (xoxo, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < xoxoX.length; i++) {
    image (xoxo, xoxoX[i], xoxoY[i], 60, 60)
  }
  // wink sticker
  if (winkStickerBool == true){
    image (wink, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < winkX.length; i++) {
    image (wink, winkX[i], winkY[i], 60, 60)
  }
  // xd sticker
  if (xdStickerBool == true){
    image (xd, mouseX, mouseY, 60, 60)
  }
  for (let i = 0; i < xdX.length; i++) {
    image (xd, xdX[i], xdY[i], 60, 60)
  }
}

// flipping the booleans
// moon is on
function moonStickerDraw (){
  moonStickerBool = true
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// butterfly is on
function butterflyStickerDraw (){
  butterflyStickerBool = true
  moonStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// heart is on
function heartStickerDraw (){
  heartStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// flower is on
function flowerStickerDraw (){
  flowerStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// rainbow is on
function rainbowStickerDraw (){
  rainbowStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// saturn is on
function saturnStickerDraw (){
  saturnStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// plant is on
function plantStickerDraw (){
  plantStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// helloKitty is on
function helloKittyStickerDraw (){
  helloKittyStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// swan is on
function swanStickerDraw (){
  swanStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// clock is on
function clockStickerDraw (){
  clockStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// book is on
function bookStickerDraw (){
  bookStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// turtle is on
function turtleStickerDraw (){
  turtleStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// phone is on
function phoneStickerDraw (){
  phoneStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// lol is on
function lolStickerDraw (){
  lolStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// legallyBlonde is on
function legallyBlondeStickerDraw (){
  legallyBlondeStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// dearDiary is on
function dearDiaryStickerDraw (){
  dearDiaryStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// smileyFace is on
function smileyFaceStickerDraw (){
  smileyFaceStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// threeHeart is on
function threeHeartStickerDraw (){
  threeHeartStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// xoxo is on
function xoxoStickerDraw (){
  xoxoStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  winkStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// wink is on
function winkStickerDraw (){
  winkStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  xdStickerBool = false
  bloop.play()
}
// xd is on
function xdStickerDraw (){
  xdStickerBool = true
  moonStickerBool = false
  butterflyStickerBool = false
  heartStickerBool = false
  flowerStickerBool = false
  rainbowStickerBool = false
  saturnStickerBool = false
  plantStickerBool = false
  helloKittyStickerBool = false
  swanStickerBool = false
  clockStickerBool = false
  bookStickerBool = false
  turtleStickerBool = false
  phoneStickerBool = false
  lolStickerBool = false
  legallyBlondeStickerBool = false
  dearDiaryStickerBool = false
  smileyFaceStickerBool = false
  threeHeartStickerBool = false
  xoxoStickerBool = false
  winkStickerBool = false
  bloop.play()
}


// sticker is placed
function mousePressed () {
  moon.resize (50, 50)
  butterfly.resize (50, 50)
  heart.resize (50, 50)
  flower.resize (50, 50)
  rainbow.resize (100, 100)
  saturn.resize (50, 50)
  plant.resize (50, 50)
  helloKitty.resize (50, 50)
  swan.resize (50, 50)
  clock.resize (50, 70)
  book.resize (50, 50)
  turtle.resize (50, 50)
  phone.resize (50, 50)
  lol.resize (50, 50)
  legallyBlonde.resize (50, 50)
  dearDiary.resize (50, 50)
  smileyFace.resize (50, 50)
  threeHeart.resize (50, 50)
  xoxo.resize (50, 50)
  wink.resize (50, 50)
  xd.resize (50, 50)

  // moon is placed
  if (moonStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    moonX.push (mouseX)
    moonY.push (mouseY)
    bloop.play()
  }
  // butterfly is placed
  if (butterflyStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    butterflyX.push (mouseX)
    butterflyY.push (mouseY)
    bloop.play()
  }
  // heart is placed
  if (heartStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    heartX.push (mouseX)
    heartY.push (mouseY)
    bloop.play()
  }
  // flower is placed
  if (flowerStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    flowerX.push (mouseX)
    flowerY.push (mouseY)
    bloop.play()
  }
  // rainbow is placed
  if (rainbowStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    rainbowX.push (mouseX)
    rainbowY.push (mouseY)
    bloop.play()
  }
  // saturn is placed
  if (saturnStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    saturnX.push (mouseX)
    saturnY.push (mouseY)
    bloop.play()
  }
  // plant is placed
  if (plantStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    plantX.push (mouseX)
    plantY.push (mouseY)
    bloop.play()
  }
  // helloKitty is placed
  if (helloKittyStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    helloKittyX.push (mouseX)
    helloKittyY.push (mouseY)
    bloop.play()
  }
  // swan is placed
  if (swanStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    swanX.push (mouseX)
    swanY.push (mouseY)
    bloop.play()
  }
  // clock is placed
  if (clockStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    clockX.push (mouseX)
    clockY.push (mouseY)
    bloop.play()
  }
  // book is placed
  if (bookStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    bookX.push (mouseX)
    bookY.push (mouseY)
    bloop.play()
  }
  // turtle is placed
  if (turtleStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    turtleX.push (mouseX)
    turtleY.push (mouseY)
    bloop.play()
  }
  // phone is placed
  if (phoneStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    phoneX.push (mouseX)
    phoneY.push (mouseY)
    bloop.play()
  }
  // lol is placed
  if (lolStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    lolX.push (mouseX)
    lolY.push (mouseY)
    bloop.play()
  }
  // legallyBlonde is placed
  if (legallyBlondeStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    legallyBlondeX.push (mouseX)
    legallyBlondeY.push (mouseY)
    bloop.play()
  }
  // dearDiary is placed
  if (dearDiaryStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    dearDiaryX.push (mouseX)
    dearDiaryY.push (mouseY)
    bloop.play()
  }
  // smileyFace is placed
  if (smileyFaceStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    smileyFaceX.push (mouseX)
    smileyFaceY.push (mouseY)
    bloop.play()
  }
  // threeHeart is placed
  if (threeHeartStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    threeHeartX.push (mouseX)
    threeHeartY.push (mouseY)
    bloop.play()
  }
  // xoxo is placed
  if (xoxoStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    xoxoX.push (mouseX)
    xoxoY.push (mouseY)
    bloop.play()
  }
  // wink is placed
  if (winkStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    winkX.push (mouseX)
    winkY.push (mouseY)
    bloop.play()
  }
  // xd is placed
  if (xdStickerBool == true && mouseX > 200 && mouseY < windowHeight - 169 && mouseY > 100) {
    xdX.push (mouseX)
    xdY.push (mouseY)
    bloop.play()
  }
}

function keyPressed () {
  // clear cursor
  if (key == 'Escape') {
    moonStickerBool = false
    butterflyStickerBool = false
    heartStickerBool = false
    flowerStickerBool = false
    rainbowStickerBool = false
    saturnStickerBool = false
    plantStickerBool = false
    helloKittyStickerBool = false
    swanStickerBool = false
    clockStickerBool = false
    bookStickerBool = false
    turtleStickerBool = false
    phoneStickerBool = false
    lolStickerBool = false
    legallyBlondeStickerBool = false
    dearDiaryStickerBool = false
    smileyFaceStickerBool = false
    threeHeartStickerBool = false
    xoxoStickerBool = false
    winkStickerBool = false
    xdStickerBool = false
  }
  // clear entire board
  if (key == 'x') {
    moonX.splice (0, moonX.length)
    moonY.splice (0, moonY.length)

    butterflyX.splice (0, butterflyX.length)
    butterflyY.splice (0, butterflyY.length)

    heartX.splice (0, heartX.length)
    heartY.splice (0, heartY.length)

    flowerX.splice (0, flowerX.length)
    flowerY.splice (0, flowerY.length)

    rainbowX.splice (0, rainbowX.length)
    rainbowY.splice (0, rainbowY.length)

    saturnX.splice (0, saturnX.length)
    saturnY.splice (0, saturnY.length)

    plantX.splice (0, plantX.length)
    plantY.splice (0, plantY.length)

    helloKittyX.splice (0, helloKittyX.length)
    helloKittyY.splice (0, helloKittyY.length)

    swanX.splice (0, swanX.length)
    swanY.splice (0, swanY.length)

    clockX.splice (0, clockX.length)
    clockY.splice (0, clockY.length)

    bookX.splice (0, bookX.length)
    bookY.splice (0, bookY.length)

    turtleX.splice (0, turtleX.length)
    turtleY.splice (0, turtleY.length)

    phoneX.splice (0, phoneX.length)
    phoneY.splice (0, phoneY.length)

    lolX.splice (0, lolX.length)
    lolY.splice (0, lolY.length)

    legallyBlondeX.splice (0, legallyBlondeX.length)
    legallyBlondeY.splice (0, legallyBlondeY.length)

    dearDiaryX.splice (0, dearDiaryX.length)
    dearDiaryY.splice (0, dearDiaryY.length)

    smileyFaceX.splice (0, smileyFaceX.length)
    smileyFaceY.splice (0, smileyFaceY.length)

    threeHeartX.splice (0, threeHeartX.length)
    threeHeartY.splice (0, threeHeartY.length)

    threeHeartX.splice (0, threeHeartX.length)
    threeHeartY.splice (0, threeHeartY.length)

    xoxoX.splice (0, xoxoX.length)
    xoxoY.splice (0, xoxoY.length)

    winkX.splice (0, winkX.length)
    winkY.splice (0, winkY.length)

    xdX.splice (0, xdX.length)
    xdY.splice (0, xdY.length)
  }
}

// save user's drawn image
function keyTyped () {
  if (key === 's') {
    save ('drawing.jpg')
  }
}
