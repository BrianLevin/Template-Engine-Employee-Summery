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