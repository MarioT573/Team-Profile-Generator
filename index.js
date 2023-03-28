const { prompt } = require('inquirer');

const {Manager, managerPrompts} = require('./lib/Manager');
const {Engineer, engineerPrompts} = require('./lib/Engineer');
const {Intern, internPrompts} = require('./lib/Intern');
const template  = require('./src/template.js');
const htmlCreate = require('./src/htmlCreate.js');

employees = [];

function init() {
    prompt(managerPrompts)
    .then((manager) => {
        manager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
        employees.push(manager);
        employeePrompt();
    })
}

function employeePrompt() {
    prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which employee would you like to add?',
            choices: [
                {
                    name: 'Engineer', 
                    value: "Engineer"
                },
                {
                    name: 'Intern', 
                    value: 'Intern'
                },
                {
                    name: 'Finish', 
                    value: 'Finish'
                }
            ]
        }
    ])
    .then(res => {
        let choice = res.employeeType;
        switch(choice) {
            case "Engineer":
                engineerData();
                break;
            case "Intern":
                internData();
                break;
            case "Finish":
                finish();
                break;
            default:
                console.log(employees);
                break;
        }
    })
}

function engineerData() {
    prompt(engineerPrompts)
    .then((engineer) => {
        engineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
        employees.push(engineer);
        employeePrompt();
    })
}

function internData() {
    prompt(internPrompts)
    .then((intern) => {
        intern = new Intern(intern.name, intern.id, intern.email, intern.school);
        employees.push(intern);
        employeePrompt();
    })
}

function finish() {
    let html = template(employees);
    htmlCreate(html);
}

init();