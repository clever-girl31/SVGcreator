const { shapeOptions } = require('./shapes.js')

describe('Shape Render Test', () => {
  describe ('Square', () => {
    it('should render a square containing specified colors and letters in it', () => {
      const Square = shapeOptions["Square"];
      const shape = new Square("grey", "blue", "JMS");
      expect(shape.svg).toEqual(`<svg width = "300" height = "200" viewBox = "0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="grey"></rect>
    <text x="150" y="135" text-anchor="middle" font-family="Comic Sans MS" font-size="90px" fill="blue">JMS</text>
    </svg>`)
      }
    )
  })
  describe('Triangle', () => {
    it('should render a triangle containing specified colors and letters in it', () => {
      const Triangle = shapeOptions["Triangle"];
      const shape = new Triangle("grey", "blue", "JMS");
      expect(shape.svg).toEqual(`<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="34.53 200, 150 0, 265.47 200" fill="grey"/>
    <text x="150" y="160" font-family="Comic Sans MS" font-size="55px" text-anchor="middle" fill="blue">JMS</text>
    </svg>`)
      }
    )
  })
  describe('Circle', () => {
    it('should render a circle containing specified colors and letters in it', () => {
      const Circle = shapeOptions["Circle"];
      const shape = new Circle("grey", "blue", "JMS");
      expect(shape.svg).toEqual(`<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="grey"></circle>
    <text x="150" y="130" font-size="70px" font-family="Comic Sans MS" text-anchor="middle" fill="blue">JMS</text>
  </svg>`)
    }
    )
  })
})