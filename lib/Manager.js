const Employee = require('./Employee');

class Manager extends Employee { // manager inherits from the employee class
    constructor(name, id, email, officeNumber) {
        super(name, id, email); // super is inheirted from the employee class
        this.officeNumber = officeNumber; // unnqiue value for the manager

    }
    getOfficeNumber() {
        return this.officeNumber; // function which calls the officenumber
    }
    getRole() {
        return 'Manager';

    }

}

module.exports = Manager; // exports manager to outer files