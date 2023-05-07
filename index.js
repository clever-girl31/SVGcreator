// TODO: Include a class for each -- Triangle, Circle, Square.
// Todo: Include test files for each class ^^^

const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')

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
      console.log(`${answers.txt}, ${answers.txtColor}, ${answers.shape}, ${answers.shapeColor}`)
  })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     console.log('no')
  //   } else {
  //     console.log('yes')
  //   }
  // });