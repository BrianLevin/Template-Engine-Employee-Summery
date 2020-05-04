const Manager = require("./lib/Manager"); // variables which will be read and run through the node modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./lib/htmlRenderer"); // variable which will render the html

const teamMembers = []; // array which will hold all the values for the employee classes

function createManager() { // function which will run the creat manager

    inquirer.prompt([  // prompts for manager input
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter your manager\s name: ',


        },

        {
            type: 'input',
            name: 'managerId',
            message: 'what is your manager"s id?',



        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'what is your manager"s email?',



        },

        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'what is your manager"s office number?',



        },




    ]).then(function (answers) {  // the then fuction will push the user answers into the array
        var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        createTeam(); // user will then pick the next tema member from the list
    });
}

function createEngineer() { // function which will run the create engineer when called

    inquirer.prompt([ // inputs which hold the user values
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter your engineer\s name: ',


        },

        {
            type: 'input',
            name: 'engineerId',
            message: 'what is your engineer"s id?',



        },

        {
            type: 'input',
            name: 'engineerEmail',
            message: 'what is your engineer"s email?',



        },

        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'what is your engineer"s github?',



        },




    ]).then(function (answers) { // then function which pushes the answers into the array
        var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        teamMembers.push(engineer);
        createTeam(); // function which allows the user to selctect next team mate
    });

}

function createIntern() { // function which holds the inttern function
    inquirer.prompt([ // prompt which will holds the user choice for the intern
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter your intern\s name: ',


        },

        {
            type: 'input',
            name: 'internId',
            message: 'what is your interns"s id?',



        },

        {
            type: 'input',
            name: 'internEmail',
            message: 'what is your intern"s email?',



        },

        {
            type: 'input',
            name: 'internSchool',
            message: 'what is your interns"s school?',



        },




    ]).then(function (answers) { // the then function which pushes users  answers to the team members array
        var intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        createTeam(); //  gives the user a choice to choose the next team mate
    });
}

function createTeam() { // This function allows the user to pick a teammate
    inquirer.prompt([ // this prompt lists the teammates the user can choose from

        {
            type: 'list',
            name: 'memberChoice',
            message: ' which type of member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Manager',
                'Done',
            ]

        }

    ])
        .then(function (answers) { // after the user picks the choice, the user will then create the next employy or be done making employees
            if (answers.memberChoice == 'Engineer') {
                createEngineer();
            }
            if (answers.memberChoice === 'Intern') {
                createIntern();
            }
            if (answers.memberChoice === 'Manager') {
                createManager();
            }
            if (answers.memberChoice == 'Done') {
                writeToFile();
            }
        })

}

function writeToFile() { // after the user is done with the promps, their information will be written and rendered to an html file
    if (fs.existsSync('./Team.html')) {
        console.log('Team html alreadys exists')
    } else {
        fs.writeFileSync('./Team.html', render(teamMembers));
    }
}

createManager(); // the manager function will be called first in the command line.