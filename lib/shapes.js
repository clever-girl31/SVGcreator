class Square {
  constructor(shapeColor, txtColor, txt) {
    this.svg = `<svg width = "230" height = "230" viewBox = "0 0 230 230" >
  <rect x="0" y="0" width="230" height="230" fill="${shapeColor}"></rect>
  <text x="115" y="145" text-anchor="middle" font-family="Comic Sans MS" font-size="90px" fill="${txtColor}">${txt}</text>
</svg>`
  }
}

class Triangle {
  constructor(shapeColor, txtColor, txt) {
    this.svg = `<svg width="230" height="230" viewBox="0 0 230 230">
  <polygon points="0 214.59, 115 15.41, 230 214.59" fill="${shapeColor}"/>
  <text x="115" y="160" font-family="Comic Sans MS" font-size="60px" text-anchor="middle" fill="${txtColor}">${txt}</text>
</svg>`
  }
}

class Circle {
  constructor(shapeColor, txtColor, txt) {
    this.svg = `<svg width="230" height="230" viewBox="0 0 230 230">
    <circle cx="115" cy="115" r="115" fill="${shapeColor}"></circle>
    <text x="115" y="140" font-size="70px" font-family="Comic Sans MS" text-anchor="middle" fill="${txtColor}">${txt}</text>
  </svg>`
  }
}
const shapeOptions = {
  'Square': Square,
  'Circle': Circle,
  'Triangle': Triangle
}

module.exports = { shapeOptions }