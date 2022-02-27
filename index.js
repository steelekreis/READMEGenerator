// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log(`Please enter a valid title`);
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please give a description of the project:',
    },
    {
        type: 'checkbox',
        name: 'projectScripts',
        message: 'What frameworks or languages did you use to build this project?',
        choices: ['HTML', 'CSS', 'Bootstrap','JavaScript','React','Node', 'SQL', 'MongoDB', 'NoSQL', 'Other']
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license type would you like to assign to this project?',
        choices: ['apache-2.0', 'gpl-2.0','gpl-3.0','MIT','None'],        
        validate: licenseInput => {
            if (licenseInput) {
                console.log(`Please select one of the provided options. If you wish to use a less common license, please choose 'None' and add the correct license post generation.`);
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'What will this project be used for?',
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'What is needed for someone to contribute to this project?',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'What are the steps to install this project?',
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'What tests were included in this project?',
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username?:',
    },
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'What is the best contact email for this project?:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('README.md',dataPlaceHolder), err => {
    if(err) throw err;
    console.log('Your README has now been generated and can be found at README.md.');
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
