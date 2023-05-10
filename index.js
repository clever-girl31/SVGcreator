// TODO: Include a class for each -- Triangle, Circle, Square.
// Todo: Include test files for each class ^^^

const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')
const { shapeOptions } = require('./lib/shapes.js')

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
    fs.writeFile('./output/generatedlogo.svg', logo.svg, (err) => {
      if (err) throw (err);
      console.log ("Logo saved!")
    })
  })