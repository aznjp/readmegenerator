const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")


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
        name: 'Installationdetails'
    },
    {
        type: 'input',
        message: 'What is the code utilized to download these files?',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Explain how the application can be used.',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'What are the license(s) placed on this project?',
        name: 'License',
        choices: [{
                key: "MIT",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                key: "Apache-2.0",
                value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            },
            {
                key: "Creative Commons 1.0",
                value: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
            },
            {
                key: "GPLv3",
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            },
            {
                key: "WTFPL",
                value: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
            },
        ],
    },
    {
        type: 'input',
        message: 'What badges did you want to add to this project? (Copy them into the input)',
        name: 'Badges',
        default: '![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)'
    },
    {
        type: 'input',
        message: 'How can someone contribute to this?',
        name: 'Contributing',
        default: 'For anyone who wishes to contribute you can contact me with the information below'
    },
    {
        type: 'input',
        message: 'How do you test this application?',
        name: 'Test',
        default: 'Run the javascript file in node and check for lines in which the function is not currently running. Once this is finished run your code once again to verify if there are any other issues recurring. '
    },
    {
        type: 'input',
        message: 'What is your Github profile link?',
        name: 'Github',
        default: 'https://github.com/aznjp'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
        default: 'Jpark103193@gmail.com'
    },
];


// function to write README file
writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Congratulations, your README.md file is now ready for your new application!")
    });
}

// function to initialize program
async function init() {
    try {
        inquirer.prompt(questions).then((response) => {
            const responses = generateMarkdown(response);
            writeToFile('README.md', responses);
        });
    } catch (error) {
        console.log(error)
    }
}

// function call to initialize program
init();