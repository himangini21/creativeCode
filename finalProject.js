
let welcomeScreen

function setup () {
  welcomeScreen = loadImage ('welcomeScreen.jpg')
  createCanvas (windowWidth, windowHeight)
}

function draw () {
  background (welcomeScreen)
  fill (0)
  textSize (60)
  text ("welcome!", 130, 170)
  textSize (15)
  text ("take what you need", 140, 200)
  textSize (60)
  fill (245, 164, 226)
  text ("happy", 250, 400)

}
