const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

// array of questions for user
const questions = [

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