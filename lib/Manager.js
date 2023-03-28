const Employee = require("./Employee");

const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name?"
    },
    {
        type: 'input',
        name: 'id', 
        message: "What is the Manager's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's Email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's Office Number?"
    }
];

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = {Manager, managerPrompts};