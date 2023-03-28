const Employee = require("./Employee");

const internPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's Email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the name of the Intern's School?",
    }
];

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = {Intern, internPrompts};