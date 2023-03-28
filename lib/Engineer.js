const Employee = require("./Employee");

const engineerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's Email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's GitHub Username?"
    }
];

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = {Engineer, engineerPrompts};