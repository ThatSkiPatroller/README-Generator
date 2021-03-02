// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genmarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of this project?",
            name: "title"
        }
        {
            type: "input",
            message: "Enter a short description of this project",
            name: "description"
        }
        {
            type: "input",
            message: "What is the installation needed for this project?",
            name: "installation"
        }
        {
            type: "input",
            message: "How would someone try to use this application?",
            name: "usage"
        }
        {
            type: "list",
            message: "What license was used for this application?"
            name: "license",
            choices: ["Apache license 2.0", "IBM", "MIT", "ISC"]
        }
        {
            type: "input",
            message: "Did you ahve any contributors?",
            name: "contributors"
        }
        {
            type: "input",
            message: "What are the test instructions for this application?",
            name: "tests"
        }
        {
            type: "input",
            message: "What is your github username for contact?",
            name: "githubinfo"
        }
        {
            type: "input",
            message: "What is your email for questions?",
            name: "email"
        }
    ])
    .then(({title, description, installation, usage, license, contributors, tests, githubinfo, email}) => {
        
    }
        genmarkdown
    )

// TODO: Create a function to write README file
function writeToFile('README.md', data) {
    fs.writeFile(`./$(fileName.toLowerCase().split('').join('')).md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README has been generated')
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
