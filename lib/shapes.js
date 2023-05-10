class Square {
  constructor(shapeColor, txtColor, txt) {
    this.svg = `<svg width = "300" height = "200" viewBox = "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="0" width="200" height="200" fill="${shapeColor}"></rect>
  <text x="150" y="135" text-anchor="middle" font-family="Comic Sans MS" font-size="90px" fill="${txtColor}">${txt}</text>
</svg>`
  }
}

class Triangle {
  constructor(shapeColor, txtColor, txt) {
    this.svg = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="34.53 200, 150 0, 265.47 200" fill="${shapeColor}"/>
  <text x="150" y="160" font-family="Comic Sans MS" font-size="55px" text-anchor="middle" fill="${txtColor}">${txt}</text>
</svg>`
  }
}

class Circle {
  constructor(shapeColor, txtColor, txt) {
    this.svg = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${shapeColor}"></circle>
    <text x="150" y="130" font-size="70px" font-family="Comic Sans MS" text-anchor="middle" fill="${txtColor}">${txt}</text>
  </svg> `
  }
}
const shapeOptions = {
  'Square': Square,
  'Circle': Circle,
  'Triangle': Triangle
}

module.exports = { shapeOptions }