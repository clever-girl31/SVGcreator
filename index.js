// TODO: Include a class for each -- Triangle, Circle, Square.
// Todo: Include test files for each class ^^^

const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')

class Square {
  constructor(shapeColor, txtColor, txt) {
  this.svg = `<svg width = "230" height = "230" viewBox = "0 0 230 230" >
  <rect x="0" y="0" width="230" height="230" fill="${shapeColor}"></rect>
  <text x="115" y="115" text-anchor="middle" fill="${txtColor}">${txt}</text>
</svg>`
}}

const shapeOptions = {
  'Square': Square
}

inquirer
  .prompt([ {
    type: 'input',
    name: 'txt',
    message: 'Enter your logo text: (up to three characters)'
  },
   {
    type: 'input',
    name: 'txtColor',
    message: 'Choose text color: (enter keyword or hexadecimal value',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Choose a fill color: (enter keyword or hexadecimal val',
  }
  ])
  .then((answers) => {
    const { shape, shapeColor, txtColor, txt } = answers;
    const InsertShapeClassHere = shapeOptions[shape]
    const logo = new InsertShapeClassHere(shapeColor, txtColor, txt)
    fs.writeFile('generatedlogo.svg', logo.svg, (err) => {
      if (err) throw (err);
      console.log ("Logo saved!")
    })
  })