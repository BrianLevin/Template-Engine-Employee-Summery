const Employee = require('./Employee'); 

class Engineer extends Employee { // the enginneer class will inherit from the employee class
    constructor(name, id, email, gitHub) {
        super(name, id, email); // super gets inherited from the employee class
        this.gitHub = gitHub; // new constructor unique to engineer

    }
    getGithub() {
        return this.gitHub; // function returns github method
    }
    getRole() {
        return 'Engineer';

    }

}

module.exports = Engineer; // exports to  outer files