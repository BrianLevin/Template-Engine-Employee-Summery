const Employee = require('./Employee');

class Intern extends Employee { // intern inherits from the employee class
    constructor(name, id, email, school) {
        super(name, id, email); // super is inherited from the employee class
        this.school = school; // school is unique to the intern

    }
    getSchool() {
        return this.school; // function will get school
    }
    getRole() {
        return 'Intern';

    }

}

module.exports = Intern; //exports to outer files