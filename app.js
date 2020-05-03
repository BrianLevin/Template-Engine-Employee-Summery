const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

function createManager() {

    inquirer.prompt([
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




    ]).then(function (answers) {
        var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        createTeam();
    });
}

function createEngineer() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'EngineersName',
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




    ]).then(function (answers) {
        var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        teamMembers.push(engineer);
        createTeam();
    });

}

function createIntern() {
    inquirer.prompt([
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




    ]).then(function (answers) {
        var intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        createTeam();
    });
}