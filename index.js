const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')

// imports shape classes from shapes.js
const { shapeOptions } = require('./lib/shapes.js')

// questions for the app
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
    // allows shape class to be grabbed from shapes.js
    const InsertShapeClassHere = shapeOptions[shape]
    // creates logo out of shape class template and the rest of answer input
    const logo = new InsertShapeClassHere(shapeColor, txtColor, txt)
    // use fs to create logo.svg
    fs.writeFile('./output/logo.svg', logo.svg, (err) => {
      if (err) throw (err);
      console.log ("Generated logo.svg")
    })
  })