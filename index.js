const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

// array of questions for user
const questions = [{
        type: 'input',
        message: 'What is the title of the Repository/Project?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Denote a description for what your project is.',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What are the required files necessary to install for this project?',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Explain how the application can be used.',
        name: 'Usage'
    },
    {
        type: 'checkbox',
        message: 'What are the license(s) placed on this project?',
        name: 'License',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'Academic Free License v3.0',
            'Creative Commons license family',
            'Education Community License v2.0',
            'Do What the F*ck You Want to Public License'
        ]
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'Contributers',
        default: 'John Park'
    },
    {
        type: 'input',
        message: 'What is your Github UserName?',
        name: 'Github',
        default: 'aznjp'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
        default: 'Jpark103193@gmail.com'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Congratulations, your README.md file is now ready for your application!")
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();